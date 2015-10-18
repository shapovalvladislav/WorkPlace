package service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.jose4j.jwk.JsonWebKeySet;
import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.consumer.InvalidJwtException;
import org.jose4j.jwt.consumer.JwtConsumer;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;
import org.jose4j.lang.JoseException;

public class TokenService {
	
	// TODO: Make it relative to app
	private static String keyPath = "/vagrant/WorkPlace/src/main/resources/keys.json"; 

	private static RsaJsonWebKey getKey() {
		String json = null;
		try {
		    byte[] encoded = Files.readAllBytes(Paths.get(keyPath));
		    json = new String(encoded);
		} catch (IOException e3) {
		    e3.printStackTrace();
		}
		 
		//
	    // JSON Web Token is a compact URL-safe means of representing claims/attributes to be transferred between two parties.
	    // This example demonstrates producing and consuming a signed JWT
	    //

	    // Generate an RSA key pair, which will be used for signing and verification of the JWT, wrapped in a JWK
	    RsaJsonWebKey rsaJsonWebKey = null;
		try {
			JsonWebKeySet set = new JsonWebKeySet(json);
			rsaJsonWebKey = (RsaJsonWebKey) set.getJsonWebKeys().get(0);
		} catch (JoseException e2) {
			e2.printStackTrace();
		}

	    // Give the JWK a Key ID (kid), which is just the polite thing to do
	    rsaJsonWebKey.setKeyId("k1");
	    
	    return rsaJsonWebKey;
	}
	
	public static String getToken(HttpServletRequest req) {
		Cookie[] cookies = req.getCookies();
        
        if (cookies == null) {
            return null;
        }
        
        for (Cookie cookie : cookies)
        {
          if (cookie.getName().equals("token")) {
        	  return cookie.getValue();
          }
        }
        
        return null;
	}
	
	public static String generate(Map<String, Object> info) {
		RsaJsonWebKey rsaJsonWebKey = getKey();

	    // Create the Claims, which will be the content of the JWT
	    JwtClaims claims = new JwtClaims();
	    claims.setIssuer("WorkPlace");  // who creates the token and signs it
	    claims.setAudience("Audience"); // to whom the token is intended to be sent
	    claims.setExpirationTimeMinutesInTheFuture(60); // time when the token will expire (10 minutes from now)
	    claims.setGeneratedJwtId(); // a unique identifier for the token
	    claims.setIssuedAtToNow();  // when the token was issued/created (now)
	    //claims.setNotBeforeMinutesInThePast(2); // time before which the token is not yet valid (2 minutes ago)
	    claims.setSubject("Authorization"); // the subject/principal is whom the token is about
	    claims.setClaim("userId", info.get("userId")); // additional claims/attributes about the subject can be added
	    claims.setClaim("name", info.get("name"));
	    claims.setClaim("surname", info.get("surname"));
	    claims.setClaim("email", info.get("email"));
	    
	    // A JWT is a JWS and/or a JWE with JSON claims as the payload.
	    // In this example it is a JWS so we create a JsonWebSignature object.
	    JsonWebSignature jws = new JsonWebSignature();

	    // The payload of the JWS is JSON content of the JWT Claims
	    jws.setPayload(claims.toJson());

	    // The JWT is signed using the private key
	    jws.setKey(rsaJsonWebKey.getPrivateKey());

	    // Set the Key ID (kid) header because it's just the polite thing to do.
	    // We only have one key in this example but a using a Key ID helps
	    // facilitate a smooth key rollover process
	    jws.setKeyIdHeaderValue(rsaJsonWebKey.getKeyId());

	    // Set the signature algorithm on the JWT/JWS that will integrity protect the claims
	    jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);

	    // Sign the JWS and produce the compact serialization or the complete JWT/JWS
	    // representation, which is a string consisting of three dot ('.') separated
	    // base64url-encoded parts in the form Header.Payload.Signature
	    // If you wanted to encrypt it, you can simply set this jwt as the payload
	    // of a JsonWebEncryption object and set the cty (Content Type) header to "jwt".
	    String jwt = null;
		try {
			jwt = jws.getCompactSerialization();
		} catch (JoseException e1) {
			e1.printStackTrace();
		}


	    // Now you can do something with the JWT. Like send it to some other party
	    // over the clouds and through the interwebs.
	    System.out.println("JWT: " + jwt);
	    return jwt;
	}
	
	public static boolean validate(String token) {
		RsaJsonWebKey rsaJsonWebKey = getKey();
		
		// Use JwtConsumerBuilder to construct an appropriate JwtConsumer, which will
	    // be used to validate and process the JWT.
	    // The specific validation requirements for a JWT are context dependent, however,
	    // it typically advisable to require a expiration time, a trusted issuer, and
	    // and audience that identifies your system as the intended recipient.
	    // If the JWT is encrypted too, you need only provide a decryption key or
	    // decryption key resolver to the builder.
	    JwtConsumer jwtConsumer = new JwtConsumerBuilder()
	            .setRequireExpirationTime() // the JWT must have an expiration time
	            .setAllowedClockSkewInSeconds(30) // allow some leeway in validating time based claims to account for clock skew
	            .setRequireSubject() // the JWT must have a subject claim
	            .setExpectedIssuer("WorkPlace") // whom the JWT needs to have been issued by
	            .setExpectedAudience("Audience") // to whom the JWT is intended for
	            .setVerificationKey(rsaJsonWebKey.getKey()) // verify the signature with the public key
	            .build(); // create the JwtConsumer instance
	    try
	    {
	        //  Validate the JWT and process it to the Claims
	        JwtClaims jwtClaims = jwtConsumer.processToClaims(token);
	        System.out.println("JWT validation succeeded! " + jwtClaims);
	        return true;
	    }
	    catch (InvalidJwtException e)
	    {
	        // InvalidJwtException will be thrown, if the JWT failed processing or validation in anyway.
	        // Hopefully with meaningful explanations(s) about what went wrong.
	        System.out.println("Invalid JWT! " + e);
	    }
	    
	    return false;
	}
	
	public static Map<String, Object> getInfo(String token) {
		JwtConsumer jwt = new JwtConsumerBuilder()
	            .setSkipAllValidators()
	            .setDisableRequireSignature()
	            .setSkipSignatureVerification()
	            .build();
	    try
	    {
	        JwtClaims jwtClaims = jwt.processToClaims(token);
	        return jwtClaims.getClaimsMap();
	    }
	    catch (InvalidJwtException e)
	    {
	        System.out.println("Invalid JWT! " + e);
	    }
	    
	    return null;
	}
}

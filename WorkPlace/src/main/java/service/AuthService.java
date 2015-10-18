package service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

public class AuthService {

    public static String getMD5(String str) {
        MessageDigest digest;
        try {
            digest = MessageDigest.getInstance("MD5");
            digest.reset();
            digest.update(str.getBytes());
            return new BigInteger(1, digest.digest()).toString(16);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        return null;
    }

    public static String getNonce() {
        String currentTime = String.valueOf(System.currentTimeMillis());
        Random r = new Random();
        String nonce = currentTime + r.nextInt(10000000);

        return getMD5(nonce);
    }

}
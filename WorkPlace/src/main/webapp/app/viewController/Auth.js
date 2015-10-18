Ext.define('WorkPlace.viewController.Auth', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth',

    onLoginClick: function() {
        // Temporary code until LDAP authentication is ready
        Ext.Ajax.request({
            url: '/WorkPlace/rest/auth/request',
            jsonData: {},
            method: 'POST',
            success: this.handleNonce,
            scope: this
        });
    },

    handleNonce: function(response) {
        var responseObj = Ext.JSON.decode(response.responseText);
        var nonce = responseObj.info.nonce;
        var login = this.lookupReference('loginField').getValue();
        var password = this.lookupReference('passwordField').getValue();
        var digest = CryptoJS.MD5(login + nonce + password).toString();

        Ext.Ajax.request({
            url: '/WorkPlace/rest/auth/digest',
            jsonData: {
                digest: digest,
                nonce: nonce,
                login: login
            },
            method: 'POST',
            success: this.allow,
            failure: this.disallow,
            scope: this
        });
    },

    allow: function(response) {
        if (response.status == 200) {
            this.getView().destroy();
            Ext.widget('main');
        }
    },

    disallow: function(response) {
        if (response.status == 401) {
            Ext.Msg.show({
               title:'Authentication',
               msg: 'Incorrect login or password',
               buttons: Ext.Msg.OK
            });
        }
    }
});
Ext.define('WorkPlace.viewController.Auth', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth',

    onLoginClick: function() {
        // Temporary code until LDAP authentication is ready
        localStorage.setItem("loggedIn", true);
        this.getView().destroy();
        Ext.widget('main');

    }
});
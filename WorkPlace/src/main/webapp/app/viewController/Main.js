Ext.define('WorkPlace.viewController.Main', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickButton: function () {
        // Temporary code until LDAP authentication is ready
        Ext.util.Cookies.clear('token');
        this.getView().destroy();
        Ext.widget('auth');

    }
});
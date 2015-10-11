Ext.application({
    name: 'WorkPlace',

    stores: [
        'WorkPlace.store.Employees'
    ],
    views: [
        'WorkPlace.view.Auth',
        'WorkPlace.view.Main'
    ],
    launch: function () {
        // Temporary code until LDAP authentication is ready
        var loggedIn;

        loggedIn = localStorage.getItem("loggedIn");
        Ext.widget(loggedIn ? 'main' : 'auth');
    }
});
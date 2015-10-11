Ext.application({
    name: 'WorkPlace',

    stores: [
    ],
    views: [
        'WorkPlace.view.Auth',
        'WorkPlace.view.Main'
    ],

    launch: function () {
        // Temporary code until LDAP authentication is ready
        var loggedIn;
        localStorage.setItem('userId', 1); //TODO: remove

        loggedIn = localStorage.getItem("loggedIn");
        Ext.widget(loggedIn ? 'main' : 'auth');
    }
});

Ext.namespace('WorkPlace').config = {
    constants: {
        priorities: {
            0: 'LOW',
            1: 'HIGH'
        },
        statuses: {
            0: 'NEW',
            1: 'ASSIGNED',
            2: 'WAITING',
            3: 'RESOLVED'
        }
    }
};
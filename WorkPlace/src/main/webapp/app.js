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
        if (Ext.util.Cookies.get('token')) {
            Ext.Ajax.request({
                url: '/WorkPlace/rest/auth/validate',
                jsonData: {
                    token: Ext.util.Cookies.get('token')
                },
                method: 'POST',
                success: function(response) {
                    Ext.widget('main');
                },
                failure: function(response) {
                    if (response.status == 401) {
                        Ext.widget('auth');
                    }
                },
                scope: this
           });
        } else {
            Ext.widget('auth');
        }
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
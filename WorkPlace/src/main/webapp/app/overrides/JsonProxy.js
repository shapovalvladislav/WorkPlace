Ext.define('WorkPlace.overrides.JsonProxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.jsonProxy',

    doRequest: function(operation, callback, scope){
        var writer  = this.getWriter();
        var request = this.buildRequest(operation, callback, scope);

        if (operation.allowWrite()) {
            request = writer.write(request);
        }

        Ext.apply(request, {
            url           : this.getUrl(),
            headers       : this.headers,
            timeout       : this.timeout,
            scope         : this,
            callback      : this.createRequestCallback(request, operation, callback, scope),
            method        : this.getMethod(request),
            jsonData        : this.extraParams,
            disableCaching: false // explicitly set it to false, ServerProxy handles caching
        });

        Ext.Ajax.request(request);
        return request;
    },

    getMethod: function(request) {
        return 'POST';
    }
});
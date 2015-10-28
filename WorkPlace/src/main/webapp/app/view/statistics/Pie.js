Ext.define('WorkPlace.view.statistics.Pie', {
    extend: 'Ext.chart.PolarChart',
    alias: 'widget.pie',

    reference: 'pie',
    width: '80%',
    height: 500,
    hidden: true,
    insetPadding: 50,
    innerPadding: 20,
    legend: {
        docked: 'bottom'
    },

    interactions: ['itemhighlight'],
    series: [{
        type: 'pie',
        angleField: 'count',
        label: {
            field: 'fullname',
            display: 'outside',
            calloutLine: {
                length: 60,
                width: 3
            }
        },
        highlight: true,
        tooltip: {
            trackMouse: true,
            renderer: function(storeItem, item) {
                this.setHtml(storeItem.get('fullname') + ': ' + storeItem.get('count'));
            }
        }
    }]

});
Ext.define('WorkPlace.view.statistics.Bar', {
    extend: 'Ext.chart.Chart',
    xtype: 'bar',

    reference: 'yearChart',
    width: '85%',
    height: '60%',
    hidden: true,
    style: 'background: #fff',
    padding: '10 0 0 0',
    insetPadding: 40,
    animate: true,
    shadow: false,
    axes: [{
        type: 'numeric',
        position: 'left',
        fields: ['count'],
        label: {
            renderer: function(v) { return v.toFixed(0); }
        },
        grid: true
    }, {
        type: 'category',
        position: 'bottom',
        fields: ['month'],
        grid: true,
        label: {
            rotate: {
                degrees: -45
            }
        }
    }],
    series: [{
        type: 'bar',
        xField: 'month',
        yField: 'count',
        style: {
            opacity: 0.80
        },
        highlight: {
            fill: '#000',
            'stroke-width': 20,
            stroke: '#fff'
        },
        tips: {
            trackMouse: true,
            style: 'background: #FFF',
            height: 20,
            renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('month') + ': ' + storeItem.get('count'));
            }
        }
    }]

});
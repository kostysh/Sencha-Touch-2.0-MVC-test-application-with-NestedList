Ext.define('App.view.Sections', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'sectionslist',
    id: 'mainlist',
    
    requires: [
        'App.store.Sections',
        'App.view.Detail'
    ],
    
    config: {
        title: 'Nested Sections',
        useTitleAsBackText: false,
        onItemDisclosure: true,
        store: 'Sections',
        detailCard: {
            xtype: 'detailcard'
        },
        zIndex: 0
    },
    
    getTitleTextTpl: function() {
        return '<div>{name}</div>';
    },
    getItemTextTpl: function(node) {
        return '<div><strong>{name}:</strong> <em>{description}</em></div>';
    }
});
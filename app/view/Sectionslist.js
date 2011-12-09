Ext.define('Myapp.view.Sectionslist', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'sectionslist',
    
    config: {
        store: 'Sections'
    },
    
    getTitleTextTpl: function() {
        return '{name}';
    },
    getItemTextTpl: function(node) {
        return '<strong>{name}:</strong> <em>{description}</em>';
    }
});
Ext.define('Myapp.view.Sectionlist', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'sectionlist',
    
    config: {
        store: 'Sections',
        displayField: 'name',
        getTitleTextTpl: function() {
            return '{' + this.getDisplayField() + '}';
        },
        getItemTextTpl: function(node) {
            return '{' + this.getDisplayField() + '}';
        }
    }
});
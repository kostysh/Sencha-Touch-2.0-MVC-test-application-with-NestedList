Ext.define('Myapp.view.Productlist', {
    extend: 'Ext.dataview.List',
    xtype: 'productlist',
    
    config: {
        itemTpl: '<div>{name}</div>'
    }
});
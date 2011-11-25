Ext.define('Myapp.model.Sectionlist', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'items', 'products'],
    
    hasMany: {
        name: 'products',
        model: 'Productlist'
    }
});

Ext.define('Myapp.view.Catalog', {
    extend: 'Ext.Container',
    xtype: 'catalog',
    
    config: {
        title: 'My catalog',
        iconCls: 'bookmarks',
                
        items: [
            {
                xtype: 'toolbar',
                docked: 'top'
            },
            
            {
                xtype: 'nestedlist',
                store: 'Myapp.store.Section',
                displayField: 'name'
            }
                        
        ]
    }
});

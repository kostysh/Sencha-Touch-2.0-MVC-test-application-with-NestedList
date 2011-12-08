Ext.define('Myapp.view.Product', {
    extend: 'Ext.Panel',
    xtype: 'product',
    
    config: {
        modal: true,
        hideOnMaskTap: false,
        centered: true,
        height: '80%',
        width: '90%',
        
        items: [
            {
                dock : 'top',
                xtype: 'toolbar',
                title: 'Product'
            }
        ],

        html: 'BLABLABLA'
    }
});
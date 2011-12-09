Ext.define('Myapp.view.Product', {
    extend: 'Ext.form.Panel',
    id: 'productCard',
    
    config: {
        modal: true,
        hideOnMaskTap: false,
        centered: true,
        height: '95%',
        width: '98%',
        
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: '',
                id: 'productTitle'
            },
            {
                xtype: 'fieldset',
                title: '',
                id: 'productFieldset',
                
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Number',
                        value: 1,
                        minValue: 1,
                        maxValue: 100,
                        name: 'number'
                    },
                    {
                        xtype: 'togglefield',
                        name: 'selector',
                        label: 'Select It'
                    }
                ]
            },
            {
                xtype: 'spacer'
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
                
                items: [
                    {
                        text: 'Close',
                        ui: 'back',
                        id: 'closeProductCard'
                    }
                ]
            }
        ]
    }
});
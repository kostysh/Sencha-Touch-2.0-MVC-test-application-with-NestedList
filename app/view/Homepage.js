Ext.define('Myapp.view.Homepage', {
    extend: 'Ext.tab.Panel',
    
    config: {
        fullscreen: true,

        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        defaults: {
            scrollable: true
        },

        items: [
            {
                xtype : 'welcomescreen'                 
            },

            {
                xtype : 'catalog'
            }
        ]
    }
});

Ext.define("App.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'mainview',
    
    config: {
        tabBarPosition: 'bottom',
        
        defaults: {
            layout: 'fit'
        },
        
        items: [
            {
                id: 'home',
                title: 'Welcome',
                iconCls: 'home',
                
                items: [
                    {
                        xtype: 'homepage'
                    }
                ]
            },
            
            {
                id: 'sections',
                title: 'NestedList',
                iconCls: 'bookmarks',
                
                items: [
                    {
                        xtype: 'sectionslist'
                    }
                ]
            }
        ]
    }
});

/**
 * Fix for Bug TOUCH-2665 (Sencha Touch 2.0.1 RC)
 * must be removed in next release
 */
Ext.define('App.Tabfix', {
    override: 'Ext.tab.Panel',
    doTabChange: function(tabBar, newTab) {
        this.setActiveItem(tabBar.indexOf(newTab));
    }
});
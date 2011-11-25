Ext.define('Myapp.view.Viewport', {
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
                title: 'home',
                iconCls: 'home',
                xtype : 'welcomescreen'                 
            },

            {
                title: 'My catalog',
                iconCls: 'bookmarks',
                xtype: 'nestedlist',
                
                store: 'Sections',
                displayField: 'name',
                
                getTitleTextTpl: function() {
                    return '{' + this.getDisplayField() + '}';
                },
                getItemTextTpl: function(node) {
                    return '{' + this.getDisplayField() + '}';
                },
                
                listeners: {
                    leafitemtap: function(list, index, item, e) {
                        var self = list.getParent();
                        var store = list.getStore();
                        var record  = store.getAt(index);

                        if (record.raw.leaf & record.raw.products.length > 0) {
                            var productList = Ext.create('Ext.List', {
                                itemTpl: '<div>{name}</div>'
                            });
                            
                            productList.setStore(Ext.create('Ext.data.Store', {
                                model: 'Myapp.model.Productlist',
                                data : record.raw.products
                            }));
                            
                            self.setDetailCard(productList);
                        }

                    }
                }
            }
        ]
    }
});

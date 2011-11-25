/**
 * @filename app.js
 *
 * @name Sencha Touch 2.0 MVC application test
 * @fileOverview MVC App for testing Sencha Touch 2.0 NestedList component
 *
 * @author Constantine V. Smirnov kostysh(at)gmail.com
 * @date 20111124
 * @version 0.4
 *
 * @requires touch/sencha-touch-all-debug-w-comments.js (version 2.0 up)
 * @requires touch/resources/css/sencha-touch.css
 *
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Myapp',
    controllers: ['Main']
});

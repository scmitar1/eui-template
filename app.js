/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'template',
    requires: [
        'eui.Config',
        'template.view.main.Main'
    ],
    extend: 'template.Application',
    defaultToken: '#home',
    routes: {
        'devel/:id': {
            conditions: {
                ':id': '[0-9a-zA-Z\.=?\&\_]+',
            },
            action: 'devel'
        },
        'home': 'home'
    },

    home: function () {
        var mainView = this.getMainView && this.getMainView(),
            viewport;
        if (mainView) {
            mainView.destroy();
        }
        this.setMainView('Ext.container.Viewport');
        viewport = this.getMainView();
        viewport.setLayout('fit');
        eui.Config.initLocaleMessage(function () {
            viewport.add({
                xtype: 'app-main'
            });
        });
    },

    devel: function () {
        var clazz = location.hash.split('/')[1],
            mainView = this.getMainView && this.getMainView(),
            viewport;
        if (mainView) {
            mainView.destroy();
        }
        if (Ext.manifest.classes[clazz]) {
            this.setMainView('Ext.container.Viewport');
            viewport = this.getMainView();
            viewport.setLayout('fit');
            eui.Config.initLocaleMessage(function () {
                viewport.add(Ext.create(clazz));
            });
        }
    },
    //
    // init: function() {
    //     eui.Config.initLocaleMessage(function() {
    //         Ext.create('Ext.container.Viewport', {
    //             layout: 'fit',
    //             items: [{
    //                 xtype: 'app-main'
    //             }]
    //         })
    //     });
    // }
});

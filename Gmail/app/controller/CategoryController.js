/*
 * File: app/controller/CategoryController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.CategoryController', {
    extend: 'Ext.app.Controller',

    stores: [
        'CategoryStore',
        'MailStore'
    ],

    refs: [
        {
            ref: 'gridPanel',
            selector: '#gridPanel'
        },
        {
            ref: 'categoryTreePanel',
            selector: '#categoryTreePanel'
        }
    ],

    verCategoria: function(node, event) {
        //console.log(node.getSelection()[0].data);
        /*
        store = this.getMailStoreStore();

        store.each(function(record)
        {
          var idCategory = record.data.idCategory;
          if(idCategory == node.getSelection()[0].raw.idCategory){

          }
        }, this);

        */


        try{
            var idCategory = node.getSelection()[0].raw.idCategory;
            var isLeaf = node.getSelection()[0].raw.leaf;

            if(idCategory==1){ //general inbox
                //load user's mails
                var gridPanel = this.getGridPanel();

                gridPanel.getStore().load({params:{
                    idUsuario: localStorage.getItem("userId")
                    }
                });
            }else if(isLeaf==="false"){
                return;
            }else{
                //load user's mails
                var gridPanel = this.getGridPanel();

                gridPanel.getStore().load({params:{
                    idUsuario: localStorage.getItem("userId"),
                    idCategoria: idCategory
                    }
                });
            }

        }catch(ex){
            Ext.Msg.alert("Refresh Failure", 'Cannot refresh inbox. Please, try later');
        }
    },

    init: function(application) {
        this.control({
            "#categoryTreePanel": {
                select: this.verCategoria
            }
        });
    }

});

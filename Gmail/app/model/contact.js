/*
 * File: app/model/contact.js
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

Ext.define('MyApp.model.contact', {
    extend: 'Ext.data.Model',
    alias: 'model.contact',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'idContact',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'lastname',
            type: 'string'
        },
        {
            name: 'status',
            type: 'int'
        },
        {
            name: 'address',
            type: 'string'
        }
    ]
});
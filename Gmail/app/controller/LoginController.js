/*
 * File: app/controller/LoginController.js
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

Ext.define('MyApp.controller.LoginController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'appView',
            selector: '#appView'
        },
        {
            ref: 'txtPassword',
            selector: '#txtPassword'
        },
        {
            ref: 'txtUser',
            selector: '#txtUser'
        },
        {
            ref: 'loginPanel',
            selector: '#loginPanel'
        }
    ],

    login: function(target) {
        //Obtain value
        var txtUser = this.getTxtUser();
        var txtPassword = this.getTxtPassword();
        var viewport = this.getAppView();

        // Success
        var successCallback = function(response, ops) {

            try{
                //Received response from the server
                if(response.responseText!== undefined){
                     response = Ext.decode(response.responseText);
                     if(response.success){

                        localStorage.setItem("userName",response.nombre);
                        localStorage.setItem("userId",response.idUsuario);

                        //Clean values
                        txtUser.setValue("");
                        txtPassword.setValue("");

                        //Set active item un viewport
                        viewport.layout.setActiveItem(1);

                     }
                     else {
                        txtPassword.setValue("");
                        Ext.MessageBox.alert('Login failed', 'Username or Password are incorrect. Please try again.');
                     }
                }else{
                    txtPassword.setValue("");
                    Ext.MessageBox.alert('Login failed', 'Please, try again');
                }
            }catch(ex){
                txtPassword.setValue("");
                Ext.MessageBox.alert('Login failed', 'Please, try again');
            }


        };

        // Failure
        var failureCallback = function(resp, ops) {

            //Clean password
            txtPassword.setValue("");

            // Show login failure error
            Ext.Msg.alert("Login Failure", 'Unable to connect to the server.');

        };

        function successCallbackMock(){
             //Set active item un viewport
             viewport.layout.setActiveItem(1);

             localStorage.setItem("userName","Name");
             localStorage.setItem("userId","1");

             //Clean values
             txtUser.setValue("");
             txtPassword.setValue("");
        }

        function loginRequest(){
           var url =
             Ext.Ajax.request({
                    url: "http://10.50.24.157/user/validate",
                    method:'GET',
                    params : {
                        user: txtUser.getValue(),
                        password: txtPassword.getValue()
                    },
                    success: successCallback,
                    failure: failureCallback
             });

        }


        function login(){
            if(txtUser.getValue()!=='' && txtPassword.getValue()!==''){

                // Just run success for now
                //successCallbackMock();

                //Login using server-side authentication service
                loginRequest();
            }
        }


        login();
    },

    init: function(application) {
        this.control({
            "#btnLogin": {
                click: this.login
            }
        });
    }

});

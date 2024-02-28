/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "project1/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("project1.Component", {
            metadata: {
                manifest: "json"
            },

            metadata: {
                manifest: "json"
              },
              
              init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
              }
        });
    }
);
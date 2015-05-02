/*!
 * Backbone-Bootbox-View
 * Copyright 2015 Todd Dukart
 * @license BSD 3-Clause http://opensource.org/licenses/BSD-3-Clause
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'backbone', 'bootbox'], function($, Backbone, Bootbox) {
      // Also create a global in case some scripts that are loaded still are looking for a global even when an AMD loader is in use.
      return (Backbone.BootboxView = factory($, Backbone, Bootbox));
    });
  } else {
    // Browser globals
    root.Backbone.BootboxView = factory(root.$, root.Backbone, root.bootbox);
  }
}(this, function($, Backbone, Bootbox) {

  return Backbone.View.extend({

    name: 'BootboxView',

    defaultOptions: {
      buttons: {
        ok: {
          label: 'OK',
          callback: function() {
            this.trigger('buttonOk');
          }
        }
      }
    },

    initialize: function() {
      this.prepareDialog().render().show();
    },

    prepareDialog: function() {
      var dialogOptions = $.extend({}, this.defaultOptions, this.options || {}, {
        message: '<div class="bootbox-view-body" />',
        show: false
      });

      if (dialogOptions.buttons) {

        for (var buttonIdx in dialogOptions.buttons) {

          if (dialogOptions.buttons.hasOwnProperty(buttonIdx)) {

            if (dialogOptions.buttons[buttonIdx].callback) {

              //Bind the provided callback with the dialog as "this".
              dialogOptions.buttons[buttonIdx].callback = dialogOptions.buttons[buttonIdx].callback.bind(this);

            } else {

              //Trigger an event for the button

              //closure to prevent mutation
              (function(buttonIdx, dialog) {
                var buttonEvent = 'btn' + capitalize(buttonIdx);

                dialogOptions.buttons[buttonIdx].callback = function() {
                  return dialog.trigger(buttonEvent);
                }.bind(dialog);
                
              })(buttonIdx, this);

            }
          }
        }
      }

      var $dialogContainer = $('<div>');

      if (this.className) {
        $dialogContainer.addClass(this.className);
      }

      this._$dialog = Bootbox.dialog(dialogOptions);
      this.setElement($('.bootbox-view-body', this._$dialog));

      return this;
    },

    show: function() {
      this._$dialog.modal('show');
    }

  });

  function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

}));
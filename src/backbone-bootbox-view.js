/*!
 * Backbone-Bootbox-View
 * Copyright 2015 Todd Dukart
 * @license BSD 3-Clause http://opensource.org/licenses/BSD-3-Clause
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'backbone', 'bootbox'], function($, Backbone, Bootbox) {
      // Also create a global in case some scripts
      // that are loaded still are looking for
      // a global even when an AMD loader is in use.
      return (Backbone.BootboxView = factory($, Backbone, Bootbox));
    });
  } else {
    // Browser globals
    root.Backbone.BootboxView = factory(root.$, root.Backbone, root.bootbox);
  }
}(this, function($, Backbone, Bootbox) {
  //use b in some fashion.

  return Backbone.View.extend({
    name: 'BootboxView',
    defaultOptions: {
      buttons: {
        ok: {
          label: 'OK',
          callback: function() {
            this.trigger('buttonOk');
          }.bind(this)
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

      var dialogContainer = $('<div>');

      if (this.className) {
        dialogContainer.addClass(this.className);
      }

      this._$dialog = Bootbox.dialog(dialogOptions);
      this.setElement($('.bootbox-view-body', this._$dialog));

      return this;
    },
    show: function() {
      this._$dialog.modal('show');
    }
  });

}));
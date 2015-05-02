Backbone Bootbox View
=====================

This module extends Backbone's View to render a specially designed view in a [Bootbox](http://bootboxjs.com) dialog,
which it itself a [Bootstrap](http://getbootstrap.com) dialog.

This project is not affiliated in any way with Bootbox or Bootstrap.

Usage
=====

To render a view in a dialog, it needs to be designated as a BootboxView.

    var myDialog = Backbone.BootboxView.extend({
    
      options: {}, //Options to be passed to Bootbox, except message and show.
      
      className: '', //Class name that the contents of the dialog will be wrapped in
      
      initialize: function() {
      
        /*
         * prepareDialog() is necessary to put the view in a dialog. show() is necessary to show the dialog.
         */
         
        this.prepareDialog().render().show(); 
        
      },
      
      render: function() {
        //Rendering works just like a regular Bootstrap view.
      },
    
    });
    
Define your buttons in the `options` map:

    options: {
      title: 'Dialog Title',
      buttons: {
        cancel: {
          label: 'Cancel',
          className: 'btn-default'
        },
        save: {
          label: 'Save',
          className: 'btn-primary',
          callback: function() {
            this.trigger('btnSave');
            return false;
          }.bind(this)
        }
      }
    },
    
License
=======

Copyright (c) 2015, Todd Dukart
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of backbone-bootbox-view nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
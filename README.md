Bootbox View for Backbone
=========================

[![Build Status](https://travis-ci.org/tdukart/backbone-bootbox-view.svg?branch=master)](https://travis-ci.org/tdukart/backbone-bootbox-view)

This module extends Backbone's View to render a specially designed view in a [Bootbox](http://bootboxjs.com) dialog,
which it itself a [Bootstrap](http://getbootstrap.com) dialog.

This project is not affiliated in any way with Bootbox or Bootstrap.

Licensed under the [BSD 3-Clause license](http://opensource.org/licenses/BSD-3-Clause).

Installation
============

This is distributed as a Bower package, or you may download it yourself.

Requirements
------------

Note that these dependencies will automatically be downloaded if you use the Bower package.

- [Bootstrap](http://getbootstrap.com)
- [Bootbox](http://bootboxjs.com)
- [jQuery](http://jquery.com)
- [Backbone](http://backbonejs.org)

Bower
-----
````bash

bower install backbone-bootbox-view --save

````

If you don't already have them, Bower will automatically download the dependencies.

Self-Installation
-----------------
Download the latest at https://github.com/tdukart/backbone-bootbox-view/releases/latest.

Styles
------
Ensure that the Bootstrap styles are included in your <head>. See [Bootstrap's Getting Started page](http://getbootstrap.com/getting-started/) for installation instructions.


Usage
=====

To render a view in a dialog, it needs to be designated as a BootboxView.

````javascript

var myDialog = Backbone.BootboxView.extend({

  options: {}, //Options to be passed to Bootbox, except message and show.
  
  className: '', //Class name that the contents of the dialog will be wrapped in
  
  initialize: function() {
  
    /*
     * prepareDialog() is necessary to put the view in a dialog.
     * show() is necessary to show the dialog.
     */
     
    this.prepareDialog().render().show(); 
    
  },
  
  render: function() {
    //Rendering works just like a regular Bootstrap view.
  },

});

````
    
Define your buttons in the `options` map:

````javascript

options: {
  title: 'Dialog Title',
  buttons: {
    close: {
      label: 'Cancel',
      className: 'btn-default'
      //When clicked, this button will trigger the btnClose event. See "Button Events" below for more information.
    },
    save: {
      label: 'Save',
      className: 'btn-primary',
      callback: function() {
        //Note that "this" will automatically be bound to the View
        this.trigger('btnSave');
        return false;
      }
    }
  }
},

````

Button Events
-------------
Buttons that are not given a callback will automatically trigger an event that can be caught -- with a major caveat.
You must write the listener inside your `.render()` method with a `this.on` call. The event name will be `btn` followed
by the capitalized version of the key passed in the `buttons` map -- `btnClose` in the example above.

Example:

````javascript
render: function() {

  //...
  
  this.on('btnKeyName', handler.bind(this));

  //...

}

````

Binding button events to the dialog using Backbone's conventional `events: {}` map is not currently supported.


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

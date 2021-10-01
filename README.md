[![Build Status](https://travis-ci.org/AnnotationSro/ember-confirm-dialog.svg?branch=master)](https://travis-ci.org/AnnotationSro/ember-confirm-dialog)

DEMO: http://annotationsro.github.io/ember-confirm-dialog/

# Ember-confirm-dialog

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

Confirm user actions - just wrap your button/link/whatever with this addon. The target action will be called only when user confirms the dialog.

This addon relies on **ember-modal-dialog** to show the dialog itself.

## Install

Do not forget to add these SASS imports into your **app.scss** - sorry about that - if you know how to make this easier, let me know :(
```
@import "ember-modal-dialog/ember-modal-structure";
@import "ember-modal-dialog/ember-modal-appearance";
```

## Usage

### Simple confirm dialog (with default settings)

  Action _confirmedAction_ will be called only when user confirms the confirmation dialog.

  ```
  {{#confirm-dialog}}
      <button {{action 'confirmedAction'}}>Click me!</button>
  {{/confirm-dialog}}
  ```

 You can also use a property `disabled` to control whether the confirm dialog should be enabled or not.

### Confirm dialog with custom texts and all the callbacks

  _Custom callbacks for confirm and cancel buttons_

  ```
  {{#confirm-dialog
  text="Do you want to destry the world?"
  confirmButton="Yeah, do it!"
  cancelButton="Noooooo!!!!!"
  confirmAction=(action 'confirmDestroy')
  cancelAction=(action 'cancelDestroy')
  }}
      <button {{action 'destroyWorld'}}>DESTROY THE WORLD !</button>
  {{/confirm-dialog}}
  ```
### Confirm dialog with Bootstrap (CSS classes for confirm/cancel buttons) + FontAwesome icons in buttons

_Note: any font icon set is supported, not only FontAwesome_

  ```
  {{#confirm-dialog
  confirmButtonClass="btn btn-success"
  cancelButtonClass="btn btn-danger"
  okCssIcon="fa fa-check-circle-o"
  cancelCssIcon="fa fa-ban"
  }}
      <button {{action 'confirmedAction'}}>Click me!</button>
  {{/confirm-dialog}}
  ```

### Confirm dialog with title and custom CSS classes

```
  {{#confirm-dialog
  dialogClass="custom-confirm-dialog"
  title="This is a title"
  text="And this is a content"
  }}
```
In your SASS/CSS
```css
.custom-confirm-dialog {

  .dialog-title{
    background-color: aqua;
  }

  .dialog-text{
    color: red;
  }

  .dialog-footer{
    background-color: gray;
  }
}
```
# Addon Development

## Installation

* `git clone` this repository
* `npm install`

## Running

* `ember serve`
* Visit the dummy application at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

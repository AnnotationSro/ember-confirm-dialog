# Ember-confirm-dialog

Confirm user actions - just wrap your button/link/whatever with this addon. The target action will be called only when user confirms the dialog.

## Usage
 
### Simple confirm dialog (with default settings)

  Action _confirmedAction_ will be called only when user confirms the confirmation dialog.

  ```
  {{#confirm-dialog}}
      <button {{action 'confirmedAction'}}>Click me!</button>
  {{/confirm-dialog}}
  ```
  

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
### Confirm dialog with Bootstrap (CSS classes for confirm/cancel buttons)

  ```
  {{#confirm-dialog
  confirmButtonClass="btn btn-success"
  cancelButtonClass="btn btn-danger"
  }}
      <button {{action 'confirmedAction'}}>Click me!</button>
  {{/confirm-dialog}}
  ```

# Addon Development

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
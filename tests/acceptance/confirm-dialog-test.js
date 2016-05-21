import { test } from 'qunit';
import moduleForAcceptance from 'dummy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | confirm dialog');

test('clicking on default confirm dialog', function(assert) {
  visit('/');

  //initial assert
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
  });

  //show the confirm dialog
  click('#defaultConfirm');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 1);
  });

  //hide the confirm dialog
  click('.confirm-button');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
  });

});

test('clicking on default confirm dialog - disabled', function(assert) {
  visit('/');

  //initial assert
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
  });

  //disable confirm dialog
   click('#checkDisabled');

  //show the confirm dialog
  click('#defaultConfirm');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
  });
  
});

test('clicking on confirm dialog with callbacks - click on confirm button', function(assert) {
  visit('/');

  //initial assert
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
  });

  //show the confirm dialog
  click('#callbackConfirm');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 1);
  });

  //hide the confirm dialog - press confirm button
  click('.confirm-button');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
    assert.equal(find('#callbackResult').text(), 'confirm');

  });

});

test('clicking on confirm dialog with callbacks - click on cancel button', function(assert) {
  visit('/');

  //initial assert
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
  });

  //show the confirm dialog
  click('#callbackConfirm');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 1);
  });

  //hide the confirm dialog - press cancel button
  click('.cancel-button');
  andThen(function() {
    assert.equal(find('.dialog-text').length, 0);
    assert.equal(find('#callbackResult').text(), 'cancel');
  });

});

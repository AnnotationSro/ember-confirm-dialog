import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { click, visit } from '@ember/test-helpers';

module('Acceptance | confirm dialog', function(hooks) {
  setupApplicationTest(hooks);

  test('clicking on default confirm dialog', async function(assert) {
    await visit('/');

    //initial assert
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);

    //show the confirm dialog
    await click('#defaultConfirm');
    assert.equal(document.querySelectorAll('.dialog-text').length, 1);

    //hide the confirm dialog
    await click('.confirm-button');
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);
  });

  test('clicking on default non-active confirm dialog', async function(assert) {
    await visit('/');

    //initial assert
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);

    //set as in-active
    await click('#activeConfirm');
    //show the confirm dialog
    await click('#defaultConfirm');
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);
  });

  test('clicking on default confirm dialog - disabled', async function(assert) {
    await visit('/');

    //initial assert
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);

    //disable confirm dialog
    await click('#checkDisabled');

    //show the confirm dialog
    await click('#defaultConfirm');
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);
  });

  test('clicking on confirm dialog with callbacks - click on confirm button', async function(assert) {
    await visit('/');

    //initial assert
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);

    //show the confirm dialog
    await click('#callbackConfirm');
    assert.equal(document.querySelectorAll('.dialog-text').length, 1);

    //hide the confirm dialog - press confirm button
    await click('.confirm-button');
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);
    assert.equal(document.querySelector('#callbackResult').textContent.trim(), 'confirm');
  });

  test('clicking on confirm dialog with callbacks - click on cancel button', async function(assert) {
    await visit('/');

    //initial assert
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);

    //show the confirm dialog
    await click('#callbackConfirm');
    assert.equal(document.querySelectorAll('.dialog-text').length, 1);

    //hide the confirm dialog - press cancel button
    await click('.cancel-button');
    assert.equal(document.querySelectorAll('.dialog-text').length, 0);
    assert.equal(document.querySelector('#callbackResult').textContent.trim(), 'cancel');
  });
});

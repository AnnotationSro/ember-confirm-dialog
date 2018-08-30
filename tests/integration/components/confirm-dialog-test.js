import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';

module('Integration | Component | confirm dialog', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{confirm-dialog}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#confirm-dialog}}
        <button {{action 'clickAction'}}>Click me</button>
      {{/confirm-dialog}}
    `);

    assert.equal(this.element.textContent.trim(), 'Click me');
  });
});

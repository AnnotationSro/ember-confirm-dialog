import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

window.alert = function(msg){window.console.log('alert suppresed: ', msg)};

start();

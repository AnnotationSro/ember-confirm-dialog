import Ember from 'ember';

export default Ember.Controller.extend({

  disabled: false,
  callbackResult: null,

  actions: {

    confirmedAction(){
      alert('Hello world confirmed!');
    },


    destroyWorld(){
      alert('World has been destroyed, thanks for using our services.');
    },

    confirmDestroy(){
      this.set('callbackResult', 'confirm');
    },

    cancelDestroy(){
      this.set('callbackResult', 'cancel');
    }
  }
});

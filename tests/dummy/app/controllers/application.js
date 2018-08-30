import Controller from '@ember/controller';

export default Controller.extend({

  disabled: false,
  callbackResult: null,
  isActive: true,

  actions: {

    confirmedAction(){
      // alert('Hello world confirmed!');
    },


    destroyWorld(){
      // alert('World has been destroyed, thanks for using our services.');
    },

    confirmDestroy(){
      this.set('callbackResult', 'confirm');
    },

    cancelDestroy(){
      this.set('callbackResult', 'cancel');
    }
  }
});

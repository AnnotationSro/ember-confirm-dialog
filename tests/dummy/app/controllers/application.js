import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    confirmedAction(){
      alert('Hello world confirmed!');
    },


    destroyWorld(){
      alert('World has been destroyed, thanks for using our services.');
    },

    confirmDestroy(){
      alert('Preparing, please wait...');
    },

    cancelDestroy(){
      alert('Uff, that was close, man!');
    }
  }
});

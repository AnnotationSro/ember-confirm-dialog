import Ember from 'ember';
import layout from '../templates/components/confirm-dialog';

export default Ember.Component.extend({
  layout: layout,
  classNames:['confirm-dialog-button'],

  //---public
  confirmAction: Ember.K,//optional action executed when user confirms the dialog
  cancelAction: Ember.K,//optional action executed when user cancels confirmation dialog
  text: 'Do you want to proceed?',
  confirmButton: 'OK',
  cancelButton: 'Cancel',
  confirmButtonClass: '',
  cancelButtonClass: '',

  //---private
  isShowingModal: false,
  confirmed: false,
  event: null,


  initComponent(){
    Ember.$(this.element).find('.confirm-wrapper').on('click', (event) => {
      event.stopPropagation();

      Ember.run(()=> {
        this.set('event', event);
        this.toggleProperty('isShowingModal', true);
      });
    });
  },

  didInsertElement () {
    this.initComponent();
  },

  willDestroyElement(){
    Ember.$(this.element).find('.confirm-wrapper').off();
  },

  actions: {
    confirm(){
      this.set('confirmed', false);
      this.set('isShowingModal', false);

      Ember.$(this.element).find('.confirm-wrapper').off();

      this.get('confirmAction')();

      Ember.$(this.element).find('.confirm-wrapper').children().each((index, elem)=> {
        Ember.$(elem).trigger('click', this.get('event'));
      });

      this.initComponent();

    },

    cancel(){
      this.toggleProperty('isShowingModal', false);

      Ember.run.scheduleOnce('afterRender', this, () => {
        this.get('cancelAction')();
      });
    }
  }

});

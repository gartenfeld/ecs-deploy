// var HOST = '123.57.51.204';
var AUDIO_HOST = 'localhost:8081';

var Word = Backbone.Model.extend({

  defaults: {
    en: '',
    cn: '',
    f:  '',
    count: 0
  },

  initialize: function () {
    soundManager.createSound({
      id: this.get('f'),
      url: 'http://' + AUDIO_HOST + '/audio/EN2K/' + this.get('f') + ".mp3"
    }).load();
  },

  play: function () {
    soundManager.play(this.get('f'), {
      onfinish: function () {
        this.set('count', this.get('count') + 1);
        this.trigger('boundary');
      }.bind(this)
    });
  },

  reset: function () {
    this.set('count', 0);
  }

});

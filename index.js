var PrimoUi = require('./container')
var Rect = require('./rect')

module.exports = {
  init: function(game, options) {
    game.ui = new PrimoUi(game, options)
  },
  Rect: Rect
}

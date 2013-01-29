var PrimoUi = require('./container')
var Rect = require('./rect')
var Label = require('./label')

module.exports = {
  init: function(game, options) {
    game.ui = new PrimoUi(game, options)
  },
  Rect: Rect,
  Label: Label
}

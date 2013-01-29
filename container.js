var util = require('primo-utils')
var _ = require('underscore')

var PrimoUi = function(game, cfg) {
  this.game = game
  this.width = util.valueOrDefault(cfg.width, 100)
  this.height = util.valueOrDefault(cfg.height, 100)
  this.items = []
  this.show()
}

PrimoUi.prototype = {
  show: function() {
    this.game.on('render', this.render, this)
    this.game.on('tick', this.tick, this)
  },
  hide: function() {
    this.game.off('render', this.render, this)
    this.game.off('tick', this.tick, this)
  },
  clear: function() {
    this.items.length = 0
  },
  add: function(element) {
    this.items.push(element)
    return element
  },
  remove: function(element) {
    this.items = _.without(this.items, element)
  },
  tick: function(frameTime) {
    _.each(this.items, function(item) { if(item.tick) item.tick(frameTime) })
  },
  render: function(context) {
    context.save()
    context.setTransform(1,0,0,1,0,0)
    context.scale(context.canvas.width / this.width, context.canvas.height / this.height)
    _.each(this.items, function(item) { item.render(context) })
    context.restore()
  }
}

module.exports = PrimoUi

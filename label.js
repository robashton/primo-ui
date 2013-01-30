var util = require('primo-utils')

var Label = function(data) {
  this.x = data.x
  this.y = data.y
  this.height = data.height
  this.font = util.valueOrDefault(data.font, 'sans-serif')
  this.colour = util.valueOrDefault(data.colour, '#F00')
  this.text = util.valueOrDefault(data.text, "") 
  this.align = util.valueOrDefault(data.align, "left")
  this.hidden = false
}

Label.prototype = {
  render: function(context) {
    if(this.hidden) return
    context.fillStyle = this.colour
    context.textAlign = this.align
    context.font = this.height + 'px ' + this.font
    context.fillText(this.text, this.x, this.y + this.height)
  },
  hide: function() {
    this.hidden = true
  },
  show: function() {
    this.hidden = false
  }
}

module.exports = Label

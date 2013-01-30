var Rect = function(data) {
  this.x = data.x
  this.y = data.y
  this.width = data.width
  this.height = data.height
  this.colour = data.colour
  this.hidden = false
}

Rect.prototype = {
  render: function(context) {
    if(this.hidden) return
    context.fillStyle = this.colour
    context.fillRect(this.x, this.y, this.width, this.height)
  },
  hide: function() {
    this.hidden = true
  },
  show: function() {
    this.hidden = false
  }
}

module.exports = Rect

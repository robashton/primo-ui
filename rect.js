var Rect = function(data) {
  this.x = data.x
  this.y = data.y
  this.width = data.width
  this.height = data.height
  this.colour = data.colour
}

Rect.prototype = {
  render: function(context) {
    context.fillStyle = this.colour
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

module.exports = Rect

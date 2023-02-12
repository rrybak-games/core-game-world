class GameToSvg {
  constructor(svgId = 'game') {
    this.svgId = svgId;
    this.svgns = 'http://www.w3.org/2000/svg';
    this.container = document.getElementById(svgId);
  }
  gameObjectToSvgCircle(gObj) {
    let circle = document.createElementNS(this.svgns, 'circle');
    circle.setAttributeNS(null, 'cx', gObj.coord.x);
    circle.setAttributeNS(null, 'cy', gObj.coord.y);
    circle.setAttributeNS(null, 'r', 5);
    circle.setAttributeNS(null, 'style', `fill: none; stroke: ${gObj.color}; stroke-width: 1px;`);
    return circle;
  }
  drawObjectsToCanvas(objects) {
    objects.forEach((gObj) => {
      let svgObj = this.gameObjectToSvgCircle(gObj);
      this.container.appendChild(svgObj);
    });
  }
}

export { GameToSvg };

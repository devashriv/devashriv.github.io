import * as THREE from "../build/three.module.js";

class Triangle extends THREE.Mesh {
  constructor({ side, thk } = {}) {
    var length = 12,
      width = 8;

    var shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(side, 0);
    shape.lineTo(side / 2, side * Math.sin((60 * Math.PI) / 180));
    shape.lineTo(0, 0);

    var extrudeSettings = {
      steps: 1,
      depth: thk,
      bevelEnabled: false,
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshStandardMaterial({
      color: 0xffff66,
      flatShading: true,
    });
    super(geometry, material);
    this.mesh = new THREE.Mesh(geometry, material);
  }
}

export default Triangle;

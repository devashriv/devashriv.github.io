//three library
import * as THREE from "../build/three.module.js";
//GUI
import { GUI, gui } from "./jsm/libs/dat.gui.module.js";

//usnig cone geometry
class Pyramid extends THREE.Mesh {
  constructor({ sides, width, height, thk } = {}) {
    var r = width / (2 * Math.sin(Math.PI / sides));
    var geometry = new THREE.ConeGeometry(r, height, sides);
    //var material = new THREE.MeshStandardMaterial( { color: 0xffff66, flatShading: true } );
    var material = new THREE.MeshStandardMaterial({
      color: 0xffff66,
      flatShading: true,
      wireframe: false,
      vertexColors: THREE.FaceColors,
    });
    super(geometry, material);
    this.mesh = new THREE.Mesh(geometry, material);
    this.sides = sides;
    this.width = width;
    this.height = height;
    this.thk = thk || 3;
    this.r = r;
    this.type = "link";
    this.orientMode = 0;
    this.mateFlag = false;
    this.attached1 = new THREE.Mesh();
    this.attached2 = new THREE.Mesh();
  }
  //part edit GUI
  partGUI() {
    var gui = new GUI({ autoPlace: false });

    gui.add(this.sides, "sides").min(3).max(20).step(1);
  }
}

export default Pyramid;

//three library
import * as THREE from "../build/three.module.js";
//PLY file loader
import { PLYLoader } from "./jsm/loaders/PLYLoader.js";
//Transform handles
import { TransformControls } from "./jsm/controls/TransformControls.js";

class Connector extends THREE.Mesh {
  constructor(name, path) {
    var loader = new PLYLoader();
    loader.load(path, function (geometry) {
      geometry.computeVertexNormals();
      var material = new THREE.MeshStandardMaterial({
        color: 0xffff66,
        flatShading: true,
      });
      this.mesh = new THREE.Mesh(geometry, material);

      //default position
      //mesh.position.x = mouse.x;
      //mesh.position.y = mouse.y;

      //set up bounding box
      var bb = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      bb.setFromObject(mesh);
    });
    this._name = name;
    this._path = path;
    this.handlestate = 0;
  }

  localOrigin(orgX, orgY, orgZ) {
    this._orgX = orgX;
    this._orgY = orgY;
    this._orgZ = orgZ;
  }

  load() {}
  showHandles() {
    handleState++;
    control.showX = true;
    control.showY = true;
    control.showZ = true;

    //reset counter
    if (handleState > 1) handleState = 0;

    //for cardboard accessory toggle between translate, rotate and scale modes
    switch (handleState) {
      case 0:
        control.setMode("rotate");
        break;

      case 1:
        control.setMode("translate");
        break;
    }
    control.attach(Mesh);
    scene.add(control);
  }

  showEditMenu() {}
}

export default Connector;

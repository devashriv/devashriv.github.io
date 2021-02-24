import * as THREE from "../build/three.module.js";
//GUI
import { GUI } from "./jsm/libs/dat.gui.module.js";

//using cylinder geometry
class Prism extends THREE.Mesh {
  constructor({ sides, width, height, thk } = {}) {
    var r = width / (2 * Math.sin(Math.PI / sides));
    var geometry = new THREE.CylinderGeometry(r, r, height, sides, 0);
    //var material = new THREE.MeshStandardMaterial({color: 0xffff66,flatShading: true});
    var material = new THREE.MeshStandardMaterial({
      color: 0xffff66,
      flatShading: true,
      wireframe: false,
      vertexColors: THREE.FaceColors,
    });

    super(geometry, material);
    this.mesh = new THREE.Mesh(geometry, material);
    //var bb = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    //bb.setFromObject(this.mesh);
    //this.bb = bb;
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
  updateSides(newSides) {
    this.sides = newSides;
  }
  updateWidth(newSides) {
    this.width = newSides;
  }
  updateHeight(newSides) {
    this.height = newSides;
  }

  update() {
    var r = this.width / (2 * Math.sin(Math.PI / this.sides));
    var geometry = new THREE.CylinderGeometry(r, r, this.height, this.sides, 0);
    if (geometry.isGeometry) {
      geometry = new THREE.BufferGeometry().fromGeometry(geometry);

      console.warn(
        "THREE.GeometryBrowser: Converted Geometry to BufferGeometry."
      );
    }
    this.mesh.children[0].geometry.dispose();
    this.mesh.children[1].geometry.dispose();

    this.mesh.children[0].geometry = new THREE.WireframeGeometry(geometry);
    this.mesh.children[1].geometry = geometry;
  }
  update1() {
    var r = this.width / (2 * Math.sin(Math.PI / this.sides));
    var geometry = new THREE.CylinderGeometry(r, r, this.height, this.sides, 0);
    var material = new THREE.MeshStandardMaterial({
      color: 0xffff66,
      flatShading: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    console.log("updated");
    console.log(this.sides);
  }

  generateGeometry(mesh, geometry) {
    if (geometry.isGeometry) {
      geometry = new BufferGeometry().fromGeometry(geometry);

      console.warn(
        "THREE.GeometryBrowser: Converted Geometry to BufferGeometry."
      );
    }

    mesh.children[0].geometry.dispose();
    mesh.children[1].geometry.dispose();

    mesh.children[0].geometry = new WireframeGeometry(geometry);
    mesh.children[1].geometry = geometry;
  }
}

export default Prism;

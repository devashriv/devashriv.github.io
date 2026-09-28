//three library
import * as THREE from '../build/three.module.js';

//using polyhedron geometry
class Polyhedron extends THREE.Mesh {
    constructor(sides, width, height){
        var r = (width / (2 * Math.sin(Math.PI/sides)));
        var verticesOfPyr = [];
        var indicesOfPyr = [];
        for (var i = 0; i < sides ; i++)
        {
            verticesOfPyr.push(r * Math.cos(2 * Math.PI * i / sides), 0, r * Math.sin(2 * Math.PI * i / sides));
        }
        verticesOfPyr.push(0,height,0);
        verticesOfPyr.push(0,0,0);
        
        for (var i =0; i<sides-1 ; i++)
        {
            indicesOfPyr.push(i, i+1, sides);
            indicesOfPyr.push(i, i+1, sides+1);
        }
        indicesOfPyr.push(sides-1, 0, sides);
        indicesOfPyr.push(sides-1, 0, sides+1);

        var geometry = new THREE.PolyhedronGeometry( verticesOfPyr, indicesOfPyr, r, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0xffff66, flatShading: true } );
        super(geometry, material);
        this.mesh = new THREE.Mesh( geometry, material );

        this.sides = sides;
        this.width = width;
        this.height = height;
    }
}

export default Polyhedron;

const { Scene } = require("../build/three.module");

class Prism {
    constructor(sides, width, height){
        var geometry = new THREE.Geometry()
        this._sides = sides;
        this._width = width;
        this._height = height;
    }
    load(){
        var geometry = new THREE.Geometry();

        geometry.vertices.push(
            new THREE.Vector3( -10,  10, 0 ),
            new THREE.Vector3( -10, -10, 0 ),
            new THREE.Vector3(  10, -10, 0 )
        );
    }
}


class Pyramid {
    constructor(sides, width, height){
        var r = (width / (2 * Math.sin(Math.PI/sides)));
        var verticesOfPyr = [];
        var indicesOfPyr = [];
        for (var i = 0; i < sides ; i++)
        {
            verticesOfPyr.push(r * Math.cos(2 * Math.PI * i / sides), 0, r * Math.sin(2 * Math.PI * i / sides));
        }
        verticesOfPyr.push(0,height,0);
        
        for (var i =0; i<sides-1 ; o++)
        {
            indicesOfPyr.push(i);
            indicesOfPyr.push(i+1);
            indicesOfPyr.push(sides);
        }
        indicesOfPyr.push(sides-1);
        indicesOfPyr.push(0);
        indicesOfPyr.push(sides);
        
        var geometry = new THREE.PolyhedronGeometry( verticesOfPyr, indicesOfPyr, r, 2 );
        var material = new THREE.MeshStandardMaterial( { color: 0xffff66, flatShading: true } );
        super(geometry, material);
        this.mesh = new THREE.Mesh( geometry, material );
    }

    load(){
        Scene.add(this.mesh);
    }
}
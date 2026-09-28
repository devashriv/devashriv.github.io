//connector objects
//fixed

var sphericalM = {
    //properties
    loadFlag : true,
    type : 'connector',
    jointState : 0,
    handleState : 0,

    //methods
    load(){
        var loader = new PLYLoader();
        loader.load( './models/ply/makemate/joints/Socket Joint Male.ply', function ( geometry ) 
		{
			geometry.computeVertexNormals();
			var material = new THREE.MeshStandardMaterial( { color: 0xffff66, flatShading: true } );
            var mesh = new THREE.Mesh( geometry, material );
						
			//default position
            mesh.position.x = mouse.x;
            mesh.position.y = mouse.y;
						
			//set up bounding box
			mesh.bb = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
			mesh.bb.setFromObject(mesh);
			
			scene.add( mesh );
            parts.push( mesh );

		} );
    },

    showHandles(){
        handleState++;
		control.showX = true;
		control.showY = true;
		control.showZ = true;
	
		//reset counter
		if (handleState>1) handleState =0;
					
		//for cardboard accessory toggle between translate, rotate and scale modes
		switch (handleState)
		{
			case 0:
				control.setMode( "rotate" );
				break;
					
			case 1:
			    control.setMode( "translate" );
			    break;
		}
		control.attach( Mesh );
		scene.add( control );

    },

    showEditMenu(){

    }
}
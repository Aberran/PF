import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// loading model

const loader = new GLTFLoader();

loader.load( '/public/MiniModel.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

// raycast

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const onMouseMove = (event) => {
  // calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(pointer, test.camera);
  const intersects = raycaster.intersectObjects(test.scene.children);
}

const Hero = () => {
  return(
    <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3}/>
        {/* <TorusKnot args={[10, 3, 100, 10]} scale={0.13}>
            <meshNormalMaterial wireframe={true}/>
        </TorusKnot> */}
        <TorusKnot args={[10, 3, 100, 10]} scale={0.15}>
            <meshNormalMaterial wireframe={false} flatShading={true}/>
        </TorusKnot>
    </Canvas>
  );
};


// window.addEventListener("mousemove", onMouseMove)
export default Hero
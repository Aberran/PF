import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";
// import Model from './MiniModelMat';

// raycast

const Hero = () => {
  return(
    <Canvas>
        <TorusKnot args={[10, 3, 100, 10]} position={[0,0,1]}scale={0.15}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={8}/>
            <meshBasicMaterial wireframe={true} flatShading={true} color='#eab308'/>
        </TorusKnot>
    </Canvas>
  );
};


// window.addEventListener("mousemove", onMouseMove)
export default Hero
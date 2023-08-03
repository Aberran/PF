/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\MiniModel.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/MiniModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MiniModelKonti_v0.geometry} material={nodes.MiniModelKonti_v0.material} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005} />
    </group>
  )
}

useGLTF.preload('/MiniModel.glb')

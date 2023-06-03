/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import Retro from "./Retro";

// const Computer = () => {
// 	const { scene } = useGLTF("/retro-transformed.glb");

// 	return (
// 		<mesh>
// 			<hemisphereLight intensity={0.15} groundColor="black" />
// 			<pointLight intensity={1} />
// 			<primitive object={scene} />
// 		</mesh>
// 	);
// };

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{
				preserveDrawingBuffer: true,
			}}
		>
			<Stage environment="city" intensity={0.6}>
				<Suspense fallback={null}>
					<OrbitControls
						enableZoom={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
					/>
					<Retro />
				</Suspense>
			</Stage>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;

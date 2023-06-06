/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// import Retro from "./Retro";

const Retro = ({ isMobile }) => {
	const { scene } = useGLTF("/retro_computer/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={1.2} groundColor="green" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
			/>
			<primitive
				object={scene}
				position={[0, -3.25, -1.5]}
				scale={isMobile ? 2.0 : 4.5}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add event listener for when the screen size changes
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// Set the initial value of IsMobile
		setIsMobile(mediaQuery.matches);

		// Define callback funtion to handles changes to media query
		const handleMediaQueryChange = (e) => {
			setIsMobile(e.matches);
		};

		// Add callback function as listener for changes to media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// removes listener after the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{
				preserveDrawingBuffer: true,
			}}
		>
			{/* <Stage environment="city" intensity={0.6}> */}
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					// autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Retro isMobile={isMobile} />
			</Suspense>
			{/* </Stage> */}
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";

// Loading model
const Model = () => {
  const { scene } = useGLTF("/technical_difficulties.glb");
  return (
    // Position the model at the center (adjust scale, rotation, and position as needed)
    <primitive
      object={scene}
      scale={0.3}
      rotation={[0, Math.PI / 2, 0]}
      position={[0, -1, 0]}
    />
  );
};

const Profile = () => {
  return (
    <main className="h-screen w-full relative">
      <div className="-z-10 h-full top-0 absolute bg-gradient-to-b from-sky-600/10 to-neutral-950 blur-xl w-full"></div>
      <div id="canvas-container" className="h-screen w-full -z-20">
        <Canvas camera={{ position: [0, 0, -10], fov: 50 }}>
          {/* Add ambient light and directional light for better visibility */}
          <ambientLight intensity={0.3} />
          <directionalLight color="white" position={[0, 5, 5]} />

          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute h-screen w-full z-0 top-0 bg-gradient-to-b from-neutral-800/30 to-neutral-950">
        <div className="p-2">
         
        </div>
      </div>
    </main>
  );
};

export default Profile;

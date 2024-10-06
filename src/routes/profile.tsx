import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Navbar from "../components/shared/navbar";
import ModelFallback from "../components/fallback/model-fallback";

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
      <Navbar />
      <div className="-z-10 h-full top-0 fixed bg-gradient-to-b from-sky-600/10 to-neutral-950 blur-xl w-full"></div>
      <div id="canvas-container" className="h-screen w-full z-0">
        <Canvas camera={{ position: [0, 0, -10], fov: 50 }}>
          {/* Add ambient light and directional light for better visibility */}
          <ambientLight intensity={0.3} />
          <directionalLight color="white" position={[0, 5, 5]} />

          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute h-full w-full z-0 top-0 bg-gradient-to-b from-neutral-800/30 to-neutral-950 flex flex-col items-center justify-start">
        <div className="p-2 w-3/4 space-y-2">
          <div className="flex items-end space-x-4">
            <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight md:text-8xl">
              Hey,
            </h1>
          </div>
          <div className="space-y-1">
            <p className="leading-7  text-justify bg-neutral-800/40 hover:bg-neutral-900 transition-all duration-200 ease-linear p-2 opacity-50 hover:opacity-100 hover:border-l-4 border-sky-800 hover:shadow-lg group">
              I'm{" "}
              <span className="group-hover:text-2xl group-hover:font-semibold group-hover:underline transition-all group-hover:text-blue-700 duration-200 ease-linear">
                Kumar Bishwa Kalyan
              </span>
              , a passionate software engineer with a knack for turning complex
              problems into elegant solutions.
            </p>

            <p className="leading-7  text-justify bg-neutral-800/40 hover:bg-neutral-900 transition-all duration-200 ease-linear p-2 opacity-50 hover:opacity-100 hover:border-l-4 border-sky-800 hover:shadow-lg group">
              Armed with a Bachelor's in Technology from Veer Surendra Sai
              University of Technology (and an impressive 8.59 CGPA to boot),
              I've been on a mission to make the digital world a better place,
              one line of code at a time. My toolkit is as diverse as my
              interests - I juggle languages like Java, Go, JavaScript,
              TypeScript, C#, Python, C, and C++, and I'm always eager to add
              more to my repertoire. I've got a soft spot for frameworks and
              libraries that make life easier, like Node.js, React.js, Spring
              Boot, and Unity.
            </p>
            <p className="leading-7  text-justify bg-neutral-800/40 hover:bg-neutral-900 transition-all duration-200 ease-linear p-2 opacity-50 hover:opacity-100 hover:border-l-4 border-sky-800 hover:shadow-lg group">
              My journey through the tech world has been nothing short of an
              adventure. At Shuru, I boosted user interactions by over 200% with
              a snazzy new front-end. At Wayvy Labs, I helped decrease fraud
              transactions by 25% - take that, cybercriminals! And at Inion VR
              Technologies, I built a VR orthopaedic surgery simulator that's
              now used by over 300 students across India. Who says you can't
              learn and have fun at the same time?
            </p>

            <p className="leading-7  text-justify bg-neutral-800/40 hover:bg-neutral-900 transition-all duration-200 ease-linear p-2 opacity-50 hover:opacity-100 hover:border-l-4 border-sky-800 hover:shadow-lg group">
              When I'm not crafting code for clients, I'm working on passion
              projects like my AI Agent Playground or a Git Visualizer that
              makes tracking commits a breeze. I also lead the Game Development
              team at Engima, VSSUT's coding club, where we recently launched a
              PvP shooting game that had over 200 sign-ups. Turns out, students
              love a good digital showdown! I bring to the table not just
              technical skills, but also a positive attitude, a knack for
              problem-solving, and a commitment to continuous learning. I'm
              always up for a challenge and believe in creating technology that
              makes a real difference.
            </p>

            <p className="leading-7 text-justify bg-neutral-800/40 hover:bg-neutral-900 transition-all duration-200 ease-linear p-2 opacity-50 hover:opacity-100 hover:border-l-4 border-sky-800 hover:shadow-lg group">
              So, if you're looking for a dedicated, creative, and slightly
              coffee-addicted software engineer who can turn your digital dreams
              into reality, I'm your guy. Let's connect and create something
              awesome together!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;

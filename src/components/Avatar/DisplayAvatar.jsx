import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

function DisplayAvatar() {
  return (
    <>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color   />
      <Experience />
    </Canvas>
    </>
  );
}

export default DisplayAvatar;

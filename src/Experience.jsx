import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <>
      <Environment preset="city" />
      <color
        args={["#C0C0C0"]} // Space Gray MacBook: #7D7E80 | Silver MacBook: #C0C0C0
        attach="background"
        polar={[-1, 0.75]}
        azimuth={[-1, 0.75]}
        // config={{ mass: 2, tension: 400 }}
        // snap
      />

      <PresentationControls global rotation={[0.13, 0.1, 0]} damping={0.1}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ffffff"}
          rotation={[0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />
        <Float rotationIntensity={0.01}>
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://test-2ht.pages.dev/" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

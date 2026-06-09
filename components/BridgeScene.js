import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function BridgeScene() {

  useEffect(() => {

    const scene = new THREE.Scene();

    const camera =
      new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

    // camera.position.set(
    //   0,
    //   0,
    //   8
    // );
camera.position.set(
  0,
  1,
  25
);

    const renderer =
      new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.domElement.style.position =
      "absolute";

    renderer.domElement.style.inset =
      "0";

    renderer.domElement.style.pointerEvents =
      "none";

    document
      .getElementById("bridge-container")
      .appendChild(renderer.domElement);

    const ambient =
      new THREE.AmbientLight(
        0xffffff,
        3
      );

    scene.add(ambient);

    const directional =
      new THREE.DirectionalLight(
        0xffffff,
        4
      );

    directional.position.set(
      5,
      5,
      5
    );

    scene.add(directional);

    const loader =
      new GLTFLoader();

    let bridge = null;
loader.load(
  "/models/japanese_wood_bridge.glb",

  (gltf) => {

    bridge = gltf.scene;

 bridge.scale.set(
  6,
  6,
  6
);

 bridge.position.set(
  -4,
  1.5,
  0
);

    scene.add(bridge);

    console.log("bridge loaded");
  }
);

    function animate() {

      requestAnimationFrame(
        animate
      );

      if (bridge) {

       bridge.rotation.y = 0;

        bridge.position.y =
          -1 +
          Math.sin(
            performance.now() * 0.001
          ) * 0.05;
      }

      renderer.render(
        scene,
        camera
      );
    }

    animate();

    return () => {

      renderer.dispose();

    };

  }, []);

  return (
    <div
      id="bridge-container"
      className="bridge-container"
    />
  );
}
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function BridgeScene() {

  useEffect(() => {

    const mouse = {
    x: 0,
    y: 0
  };

  const handleMouseMove = (e) => {
    mouse.x =
      (e.clientX / window.innerWidth - 0.5) * 2;

    mouse.y =
      (e.clientY / window.innerHeight - 0.5) * 2;
  };

  window.addEventListener(
    "mousemove",
    handleMouseMove
  );

    const scene = new THREE.Scene();

const container =
  document.getElementById(
    "bridge-container"
  );

if (!container) return;

  const camera =
  new THREE.PerspectiveCamera(
    45,
    container.clientWidth /
      container.clientHeight,
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
  4,
  30
);

camera.lookAt(
  0,
  0,
  0
);

    const renderer =
      new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });

renderer.setSize(
  container.clientWidth,
  container.clientHeight
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

container.appendChild(
  renderer.domElement
);

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
  4,
  6
);

bridge.position.set(
  0,
  -5,
  0
);

    scene.add(bridge);

    console.log("bridge loaded");
  }
);

 function animate() {

  requestAnimationFrame(animate);

  if (bridge) {

  bridge.rotation.z = mouse.x * 0.03;
bridge.rotation.x = mouse.y * 0.02;
bridge
  }

  renderer.render(
    scene,
    camera
  );
}

    animate();

    return () => {

  window.removeEventListener(
    "mousemove",
    handleMouseMove
  );

  if (
    container &&
    renderer.domElement.parentNode
  ) {
    container.removeChild(
      renderer.domElement
    );
  }

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
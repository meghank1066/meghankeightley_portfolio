"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function MoonScene() {
  useEffect(() => {

    const scene = new THREE.Scene();

 const container = document.getElementById("moon-container");
 
 const camera = new THREE.PerspectiveCamera(
  60,
  container.clientWidth /
    container.clientHeight,
  0.1,
  1000
);

let isHovering = false;

 camera.position.set(
  0,
  0,
  90
);

camera.lookAt(0, 0, 0);
 

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setClearColor(0x000000, 0);



renderer.setSize(
  container.clientWidth,
  container.clientHeight
);

renderer.domElement.addEventListener(
  "mouseenter",
  () => {
    isHovering = true;
  }
);

renderer.domElement.addEventListener(
  "mouseleave",
  () => {
    isHovering = false;
  }
);

function handleResize() {
  const container =
    document.getElementById("moon-container");

  camera.aspect =
  container.clientWidth /
  container.clientHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    container.clientWidth,
    container.clientHeight
  );
}

    renderer.setPixelRatio(
      window.devicePixelRatio
    );

    document
      .getElementById("moon-container")
      .appendChild(renderer.domElement);

    /* ---------- Lights ---------- */

    const ambientLight =
      new THREE.AmbientLight(
        0xffffff,
        3
      );

    scene.add(ambientLight);

    const directionalLight =
      new THREE.DirectionalLight(
        0xffffff,
        4
      );

    directionalLight.position.set(
      10,
      10,
      10
    );

    scene.add(directionalLight);

    /* ---------- Moon ---------- */

    let moon = null;

    const loader = new GLTFLoader();

    loader.load(
      "./models/nasa_moon.glb",

     (gltf) => {
  moon = gltf.scene;

moon.scale.set(1.2, 1.2, 1.2);

camera.position.set(0, 0, 140);

moon.position.set(
  0,
  0,
  0
);

// moon.position.set(
//   0,
//   0,
//   0
// );

// moon.position.set(
//   0, // X
//   -10, // Y
//   0 // Z
// );

// camera.position.set(
//   0,
//   0,
//   180
// );

  const box =
    new THREE.Box3().setFromObject(moon);

  console.log(
    "Moon size:",
    box.getSize(
      new THREE.Vector3()
    )
  );

  scene.add(moon);
},

      undefined,

      

      (error) => {
        console.error(
          "Moon failed to load:",
          error
        );
      }

      
    );

    /* ---------- Drag Rotation ---------- */

    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    let targetRotationY = 0;
    let targetRotationX = 0;

    renderer.domElement.addEventListener(
      "mousedown",
      (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    );

    window.addEventListener(
      "mouseup",
      () => {
        isDragging = false;
      }
    );

    window.addEventListener(
      "mousemove",
      (e) => {
        if (!isDragging || !moon) return;

        const deltaX =
          e.clientX - previousMouseX;

        const deltaY =
          e.clientY - previousMouseY;

        targetRotationY +=
          deltaX * 0.01;

        targetRotationX +=
          deltaY * 0.005;

        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    );

    /* ---------- Animation ---------- */

    function animate() {
  requestAnimationFrame(animate);

  if (moon) {

  moon.rotation.y += 0.002;

  if (isHovering) {
    moon.rotation.y += 0.01;
  }

  moon.rotation.y +=
    (targetRotationY - moon.rotation.y) *
    0.05;

  moon.rotation.x +=
    (targetRotationX - moon.rotation.x) *
    0.05;

  const targetScale =
  isHovering ? 5.5 : 4.5;

  moon.scale.lerp(
    new THREE.Vector3(
      targetScale,
      targetScale,
      targetScale
    ),
    0.08
  );
}

  renderer.render(
    scene,
    camera
  );
}

 animate();

window.addEventListener(
  "resize",
  handleResize
);

return () => {
  window.removeEventListener(
    "resize",
    handleResize
  );

  renderer.dispose();
};

}, []);

return (
<div
  id="moon-container"
  style={{
    width: "100%",
    height: "100%"
  }}
/>
);
}
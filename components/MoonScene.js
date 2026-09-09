// "use client";

// import { useEffect } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// export default function MoonScene() {
//   useEffect(() => {
//     const container =
//       document.getElementById("moon-container");

//     if (!container) return;

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       60,
//       container.clientWidth /
//         container.clientHeight,
//       0.1,
//       1000
//     );

//     camera.position.set(0, 0, 140);
//     camera.lookAt(0, 0, 0);

//     const renderer =
//       new THREE.WebGLRenderer({
//         alpha: true,
//         antialias: true,
//       });

//     renderer.setClearColor(0x000000, 0);

//     renderer.setPixelRatio(
//       window.devicePixelRatio
//     );

//     renderer.setSize(
//       container.clientWidth,
//       container.clientHeight
//     );

//     // Prevent duplicate canvases
//     container.innerHTML = "";
//     container.appendChild(
//       renderer.domElement
//     );

//     let isHovering = false;

//     renderer.domElement.addEventListener(
//       "mouseenter",
//       () => {
//         isHovering = true;
//       }
//     );

//     renderer.domElement.addEventListener(
//       "mouseleave",
//       () => {
//         isHovering = false;
//       }
//     );

//     function handleResize() {
//       camera.aspect =
//         container.clientWidth /
//         container.clientHeight;

//       camera.updateProjectionMatrix();

//       renderer.setSize(
//         container.clientWidth,
//         container.clientHeight
//       );
//     }

//     /* ---------- Lights ---------- */

//     const ambientLight =
//       new THREE.AmbientLight(
//         0xffffff,
//         3
//       );

//     scene.add(ambientLight);

//     const directionalLight =
//       new THREE.DirectionalLight(
//         0xffffff,
//         4
//       );

//     directionalLight.position.set(
//       10,
//       10,
//       10
//     );

//     scene.add(directionalLight);

//     /* ---------- Moon ---------- */

//     let moon = null;

//     const loader = new GLTFLoader();

//     loader.load(
//       "/models/nasa_moon.glb",

//       (gltf) => {
//         moon = gltf.scene;

//         moon.position.set(
//           0,
//           0,
//           0
//         );

//         moon.scale.set(
//           4.5,
//           4.5,
//           4.5
//         );

//         console.log(
//           "Moon loaded"
//         );

//         scene.add(moon);
//       },

//       undefined,

//       (error) => {
//         console.error(
//           "Moon failed to load:",
//           error
//         );
//       }
//     );

//     /* ---------- Drag ---------- */

//     let isDragging = false;
//     let previousMouseX = 0;
//     let previousMouseY = 0;

//     let targetRotationY = 0;
//     let targetRotationX = 0;

//     renderer.domElement.addEventListener(
//       "mousedown",
//       (e) => {
//         isDragging = true;
//         previousMouseX = e.clientX;
//         previousMouseY = e.clientY;
//       }
//     );

//     window.addEventListener(
//       "mouseup",
//       () => {
//         isDragging = false;
//       }
//     );

//     window.addEventListener(
//       "mousemove",
//       (e) => {
//         if (!isDragging || !moon)
//           return;

//         const deltaX =
//           e.clientX -
//           previousMouseX;

//         const deltaY =
//           e.clientY -
//           previousMouseY;

//         targetRotationY +=
//           deltaX * 0.01;

//         targetRotationX +=
//           deltaY * 0.005;

//         previousMouseX =
//           e.clientX;

//         previousMouseY =
//           e.clientY;
//       }
//     );

//     /* ---------- Animation ---------- */

//     function animate() {
//       requestAnimationFrame(
//         animate
//       );

//       if (moon) {
//         moon.rotation.y +=
//           0.002;

//         if (isHovering) {
//           moon.rotation.y +=
//             0.01;
//         }

//         moon.rotation.y +=
//           (targetRotationY -
//             moon.rotation.y) *
//           0.05;

//         moon.rotation.x +=
//           (targetRotationX -
//             moon.rotation.x) *
//           0.05;

//         const targetScale =
//           isHovering
//             ? 5.5
//             : 4.5;

//         moon.scale.lerp(
//           new THREE.Vector3(
//             targetScale,
//             targetScale,
//             targetScale
//           ),
//           0.08
//         );
//       }

//       renderer.render(
//         scene,
//         camera
//       );
//     }

//     animate();

//     window.addEventListener(
//       "resize",
//       handleResize
//     );

//     return () => {
//       window.removeEventListener(
//         "resize",
//         handleResize
//       );

//       renderer.dispose();

//       if (
//         renderer.domElement.parentNode
//       ) {
//         renderer.domElement.parentNode.removeChild(
//           renderer.domElement
//         );
//       }
//     };
//   }, []);

//   return (
//     <div
//       id="moon-container"
//       style={{
//         width: "100%",
//         height: "100%",
//       }}
//     />
//   );
// }

"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function MoonScene() {
  useEffect(() => {
    const container = document.getElementById("moon-container");

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.set(0, 0, 140);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Prevent duplicate canvases
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    let isHovering = false;

    renderer.domElement.addEventListener("mouseenter", () => {
      isHovering = true;
    });

    renderer.domElement.addEventListener("mouseleave", () => {
      isHovering = false;
    });

    function handleResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    /* ---------- Lights ---------- */

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    /* ---------- Moon ---------- */

    let moon = null;
    const loader = new GLTFLoader();

    loader.load(
      "/models/nasa_moon.glb",
      (gltf) => {
        moon = gltf.scene;
        moon.position.set(0, 0, 0);
        moon.scale.set(4.5, 4.5, 4.5);
        
        // targetRotationY = moon.rotation.y;
        // targetRotationX = moon.rotation.x;

        console.log("Moon loaded");
        scene.add(moon);
      },
      undefined,
      (error) => {
        console.error("Moon failed to load:", error);
      }
    );

    /* ---------- Drag & Touch Interaction ---------- */

    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    let targetRotationY = 0;
    let targetRotationX = 0;

    // Mouse Events
    renderer.domElement.addEventListener("mousedown", (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging || !moon) return;

      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      targetRotationY += deltaX * 0.015; 
      targetRotationX += deltaY * 0.01;

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    });

    // Touch Events (For Mobile/Trackpad Emulation)
    renderer.domElement.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging || !moon || e.touches.length !== 1) return;

      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;

      targetRotationY += deltaX * 0.015;
      targetRotationX += deltaY * 0.01;

      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    });

    /* ---------- Animation ---------- */

    function animate() {
  requestAnimationFrame(animate);

  if (moon) {
    // Normal slow rotation
    const rotationSpeed = isHovering ? 0.025 : 0.002;

    // Automatically rotate the moon
    moon.rotation.y += rotationSpeed;

    // Smoothly return toward the drag rotation
    moon.rotation.x += (targetRotationX - moon.rotation.x) * 0.08;

    // Hover = slightly bigger
    const targetScale = isHovering ? 5.5 : 4.5;

    moon.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.08
    );
  }

  renderer.render(scene, camera);
}

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="moon-container"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: 10,           // Forces the container above hidden bounding boxes
        pointerEvents: "auto" // Explicitly registers clicks through parental layers
      }}
    />
  );
}
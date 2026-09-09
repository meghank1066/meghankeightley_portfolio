
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function UnlockPortfolio() {
  useEffect(() => {
    const lockContainer = document.getElementById("lock-container");
    const enterButton = document.getElementById("enter-btn");
    const intro = document.getElementById("intro-screen");

    // Make sure the required elements exist
    if (!lockContainer || !enterButton || !intro) {
      console.error("UnlockPortfolio: required DOM elements not found.");
      return;
    }

    /* ---------- Three.js Setup ---------- */

    const scene = new THREE.Scene();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isHoveringLock = false;
    let glowLight = null;
    let lockModel = null;
    let glowSprite = null;
    let introUnlocked = false;

    let animationFrameId = null;
    let dropAnimationId = null;

    /* ---------- Camera ---------- */

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    /* ---------- Lights ---------- */

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    glowLight = new THREE.PointLight(0xffb6d9, 0, 300);
    scene.add(glowLight);

    /* ---------- Renderer ---------- */

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "999999";

    // IMPORTANT:
    // The canvas needs to receive clicks while the intro is active.
    renderer.domElement.style.pointerEvents = "auto";

    lockContainer.appendChild(renderer.domElement);

    /* ---------- Lock Model ---------- */

    const loader = new GLTFLoader();

    loader.load(
      "/models/old_lock.glb",

      (gltf) => {
        console.log("LOCK LOADED");

        lockModel = gltf.scene;

        lockModel.scale.set(200, 200, 200);

        lockModel.position.set(0, 0, 0);

        lockModel.rotation.x = -Math.PI / 2;

        scene.add(lockModel);

        const box = new THREE.Box3().setFromObject(lockModel);

        console.log(
          "LOCK SIZE:",
          box.getSize(new THREE.Vector3())
        );

        animateLock(lockModel);
      },

      undefined,

      (error) => {
        console.error("FAILED TO LOAD LOCK:", error);
      }
    );

    /* ---------- Glow Texture ---------- */

    const texture = new THREE.TextureLoader().load(
      "/models/glow.png",
      undefined,
      undefined,
      (error) => {
        console.error("FAILED TO LOAD GLOW TEXTURE:", error);
      }
    );

    const material = new THREE.SpriteMaterial({
      map: texture,
      color: 0xffb6d9,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

    glowSprite = new THREE.Sprite(material);

    glowSprite.scale.set(15, 15, 1);

    glowSprite.position.z = -2;

    scene.add(glowSprite);

    /* ---------- Lock Drop Animation ---------- */

    function animateLock(lock) {
      const start = performance.now();

      function drop(now) {
        if (introUnlocked) return;

        let t = (now - start) / 1200;

        if (t > 1) {
          t = 1;
        }

        const ease = 1 - Math.pow(1 - t, 3);

        lock.position.y = 5 - ease * 5;

        lock.rotation.z = Math.sin(t * 10) * 0.15;

        if (t < 1) {
          dropAnimationId = requestAnimationFrame(drop);
        }
      }

      dropAnimationId = requestAnimationFrame(drop);
    }

    /* ---------- Render Loop ---------- */

    function render() {
      if (introUnlocked) {
        return;
      }

      animationFrameId = requestAnimationFrame(render);

      if (lockModel) {
        const time = performance.now() * 0.001;

        // Floating lock animation
        lockModel.rotation.x =
          -Math.PI / 2 +
          Math.sin(time * 1.2) * 0.05;

        lockModel.rotation.z =
          Math.sin(time * 0.8) * 0.08;

        lockModel.position.y =
          Math.sin(time * 1.3) * 0.25;

        // Glow light follows lock
        glowLight.position.set(
          lockModel.position.x,
          lockModel.position.y,
          10
        );

        // Hover scale
        const targetScale = isHoveringLock ? 215 : 200;

        lockModel.scale.lerp(
          new THREE.Vector3(
            targetScale,
            targetScale,
            targetScale
          ),
          0.08
        );

        // Hover glow
        const targetGlow = isHoveringLock ? 50 : 0;

        glowLight.intensity +=
          (targetGlow - glowLight.intensity) * 0.08;

        // Glow sprite
        glowSprite.position.copy(lockModel.position);

        const targetOpacity = isHoveringLock ? 0.6 : 0;

        glowSprite.material.opacity +=
          (targetOpacity - glowSprite.material.opacity) * 0.08;

        glowSprite.position.z = -2;
      }

      renderer.render(scene, camera);
    }

    render();

    /* ---------- Unlock Function ---------- */

    function unlockPortfolio() {
      // Prevent running twice
      if (introUnlocked) {
        return;
      }

      console.log("PORTFOLIO UNLOCKED");

      introUnlocked = true;
      isHoveringLock = false;

      // Restore normal cursor
      document.body.style.cursor = "auto";

      // Stop animations
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      if (dropAnimationId) {
        cancelAnimationFrame(dropAnimationId);
      }

      // IMPORTANT:
      // Stop the Three.js canvas from blocking the portfolio.
      renderer.domElement.style.pointerEvents = "none";

      // Fade the canvas out
      renderer.domElement.style.transition =
        "opacity 0.6s ease";

      renderer.domElement.style.opacity = "0";

      // Hide intro screen
      intro.classList.add("hidden");

      // Reveal navbar and hero after intro transition
      setTimeout(() => {
        const navbar = document.querySelector(".navbar");

        if (navbar) {
          navbar.style.opacity = "1";
        }

        const heroText = document.querySelector(".hero-text");

        if (heroText) {
          heroText.style.opacity = "1";
        }
      }, 700);

      // Clean up Three.js after the fade
      setTimeout(() => {
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(
            renderer.domElement
          );
        }

        renderer.dispose();

        if (glowSprite) {
          glowSprite.material.dispose();

          if (glowSprite.material.map) {
            glowSprite.material.map.dispose();
          }
        }

        scene.clear();
      }, 700);
    }

    /* ---------- Mouse Move / Hover ---------- */

    function handleMouseMove(event) {
      if (!lockModel || introUnlocked) {
        return;
      }

      mouse.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.y =
        -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(
        lockModel,
        true
      );

      isHoveringLock = intersects.length > 0;

      if (isHoveringLock) {
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "default";
      }
    }

    /* ---------- Lock Click ---------- */

    function handleCanvasClick(event) {
      if (!lockModel || introUnlocked) {
        return;
      }

      mouse.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.y =
        -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(
        lockModel,
        true
      );

      if (intersects.length > 0) {
        console.log("LOCK CLICKED");

        unlockPortfolio();
      }
    }

    /* ---------- Enter Button Click ---------- */

    function handleEnterClick() {
      unlockPortfolio();
    }

    /* ---------- Resize ---------- */

    function handleResize() {
      camera.aspect =
        window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
      );
    }

    /* ---------- Event Listeners ---------- */

    renderer.domElement.addEventListener(
      "mousemove",
      handleMouseMove
    );

    renderer.domElement.addEventListener(
      "click",
      handleCanvasClick
    );

    enterButton.addEventListener(
      "click",
      handleEnterClick
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    /* ---------- Cleanup ---------- */

    return () => {
      introUnlocked = true;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      if (dropAnimationId) {
        cancelAnimationFrame(dropAnimationId);
      }

      renderer.domElement.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      renderer.domElement.removeEventListener(
        "click",
        handleCanvasClick
      );

      enterButton.removeEventListener(
        "click",
        handleEnterClick
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      document.body.style.cursor = "auto";

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(
          renderer.domElement
        );
      }

      renderer.dispose();

      if (glowSprite) {
        glowSprite.material.dispose();

        if (glowSprite.material.map) {
          glowSprite.material.map.dispose();
        }
      }

      scene.clear();
    };
  }, []);

  return (
    <div id="intro-screen">
      <div id="lock-container"></div>

      <div id="enter-btn">
        Unlock Portfolio
      </div>
    </div>
  );
}
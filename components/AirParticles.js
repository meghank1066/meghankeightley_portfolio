"use client";

import { useEffect } from "react";
import * as THREE from "three";

export default function AirParticles() {

  useEffect(() => {

    const scene = new THREE.Scene();

    const camera =
      new THREE.PerspectiveCamera(
        50,
        window.innerWidth /
          window.innerHeight,
        0.1,
        1000
      );

    camera.position.z = 10;

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
      Math.min(
        window.devicePixelRatio,
        2
      )
    );

    renderer.domElement.style.position =
      "fixed";

    renderer.domElement.style.top =
      "0";

    renderer.domElement.style.left =
      "0";

    renderer.domElement.style.width =
      "100%";

    renderer.domElement.style.height =
      "100%";

    renderer.domElement.style.pointerEvents =
      "none";

    renderer.domElement.style.zIndex =
      "0";

    document.body.appendChild(
      renderer.domElement
    );

    const particles = [];

    const ambient =
      new THREE.AmbientLight(
        0xffffff,
        2
      );

    scene.add(
      ambient
    );

    const directional =
      new THREE.DirectionalLight(
        0xffffff,
        1
      );

    directional.position.set(
      5,
      5,
      5
    );

    scene.add(
      directional
    );

    const geometry =
      new THREE.SphereGeometry(
        0.12,
        24,
        24
      );

   for (let i = 0; i < 350; i++) {

 const material =
  new THREE.MeshPhysicalMaterial({
    color: 0xaee8ff,

    emissive: 0xaee8ff,
    emissiveIntensity: 0.15,

    transparent: true,

    opacity:
      0.55 +
      Math.random() * 0.25,

    transmission: 1,

    roughness: 0,

    thickness: 1,

    clearcoat: 1,

          clearcoatRoughness: 0,

          depthWrite: false
        });

      const particle =
        new THREE.Mesh(
          geometry,
          material
        );

      const scale =
        0.4 +
        Math.random() * 2.5;

      particle.scale.setScalar(
        scale
      );

      particle.position.set(
        (Math.random() - 0.5) * 60,
        Math.random() * 40,
        (Math.random() - 0.5) * 50
      );

      

    particle.userData.speed =
  0.008 +
  Math.random() * 0.02;

      particle.userData.offset =
        Math.random() *
        Math.PI *
        2;

      particles.push(
        particle
      );

      scene.add(
        particle
      );
    }

    const resize =
      () => {

        camera.aspect =
          window.innerWidth /
          window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
          window.innerWidth,
          window.innerHeight
        );
      };

    window.addEventListener(
      "resize",
      resize
    );

    function animate() {

      requestAnimationFrame(
        animate
      );

      const time =
        performance.now() *
        0.001;

      for (
        const particle of particles
      ) {

        particle.position.y -=
          particle.userData.speed;

        particle.position.x +=
          Math.sin(
            time +
            particle.userData.offset
          ) * 0.003;

        particle.position.z +=
          Math.cos(
            time +
            particle.userData.offset
          ) * 0.001;

        particle.rotation.x +=
          0.002;

        particle.rotation.y +=
          0.002;

        if (
          particle.position.y <
          -20
        ) {

          particle.position.y =
            20;

          particle.position.x =
            (Math.random() - 0.5) *
            60;
        }
      }

      renderer.render(
        scene,
        camera
      );
    }

    animate();

    return () => {

      window.removeEventListener(
        "resize",
        resize
      );

      geometry.dispose();

      particles.forEach(
        (particle) => {
          particle.material.dispose();
        }
      );

      renderer.dispose();

      if (
        renderer.domElement.parentNode
      ) {

        renderer.domElement.parentNode.removeChild(
          renderer.domElement
        );
      }
    };

  }, []);

  return null;
}
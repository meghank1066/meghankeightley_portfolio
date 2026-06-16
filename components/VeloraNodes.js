"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VeloraNodes() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    const NODE_COUNT = 120;
    const CONNECTION_DISTANCE = 2.5;

    const VIEW_HEIGHT =
      2 * Math.tan((camera.fov * Math.PI) / 180 / 2) * camera.position.z;

    const VIEW_WIDTH = VIEW_HEIGHT * camera.aspect;

    const nodes = [];
    const nodeGroup = new THREE.Group();

    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x79d8ce,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < NODE_COUNT; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());

      node.position.set(
        (Math.random() - 0.5) * VIEW_WIDTH,
        (Math.random() - 0.5) * VIEW_HEIGHT,
        (Math.random() - 0.5) * 4,
      );

      node.userData.speed = 0.005 + Math.random() * 0.015;

      nodes.push(node);
      nodeGroup.add(node);
    }

    scene.add(nodeGroup);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x79d8ce,
      transparent: true,
      opacity: 0.12,
    });

    let lines = [];

    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((line) => {
        scene.remove(line);
      });

      lines = [];

      nodes.forEach((node) => {
        node.position.y -= node.userData.speed;

        if (node.position.y < -VIEW_HEIGHT / 2) {
          node.position.y = VIEW_HEIGHT / 2;

          node.position.x = (Math.random() - 0.5) * VIEW_WIDTH;
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.25;

            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position,
            ]);

            const material = new THREE.LineBasicMaterial({
              color: 0x79d8ce,
              transparent: true,
              opacity,
            });

            const line = new THREE.Line(geometry, material);

            scene.add(line);
            lines.push(line);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      renderer.dispose();

      if (container && renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="veloraNodes" ref={mountRef} />;
}

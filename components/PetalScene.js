import { useEffect } from "react";
import * as THREE from "three";

export default function PetalScene() {

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

    const petals = [];

    const texture =
      new THREE.TextureLoader().load(
        "/models/sakura_petal.png"
      );

    const material =
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false
      });

    const geometry =
      new THREE.PlaneGeometry(
        0.12,
        0.12
      );
      
for (
  let i = 0;
  i < 200;
  i++
) {

      const petal =
        new THREE.Mesh(
          geometry,
          material
        );

      petal.position.set(
        (Math.random() - 0.5) * 60,
        Math.random() * 40,
        (Math.random() - 0.5) * 20
      );

      petal.rotation.z =
        Math.random() *
        Math.PI;

      petal.userData.speed =
        0.01 +
        Math.random() * 0.02;

      petal.userData.offset =
        Math.random() *
        Math.PI *
        2;

      petals.push(
        petal
      );

      scene.add(
        petal
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
        const petal of petals
      ) {

        petal.position.y -=
          petal.userData.speed;

        petal.position.x +=
          Math.sin(
            time +
            petal.userData.offset
          ) * 0.01;

        petal.rotation.z +=
          0.01;

        if (
          petal.position.y <
          -20
        ) {

          petal.position.y =
            20;

          petal.position.x =
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

      if (
        renderer.domElement
          .parentNode
      ) {
        renderer.domElement.parentNode.removeChild(
          renderer.domElement
        );
      }

      renderer.dispose();
    };

  }, []);

  return null;
}
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function UnlockPortfolio() {
  useEffect(() => {

const scene = new THREE.Scene();

const raycaster =
    new THREE.Raycaster();

const mouse =
    new THREE.Vector2();

let isHoveringLock = false;
let glowLight;
let lockModel = null;
let glowSprite;
let introUnlocked = false;



const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(
    0,
    0,
    50
);

camera.lookAt(0, 0, 0);

/* ---------- Lights ---------- */

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    3
);

scene.add(ambientLight);

const directionalLight =
    new THREE.DirectionalLight(
        0xffffff,
        5
    );

directionalLight.position.set(
    2,
    2,
    5
);

scene.add(directionalLight);

glowLight = new THREE.PointLight(
    0xffb6d9,
    0,
    300
);

scene.add(glowLight);

/* ---------- Renderer ---------- */

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.domElement.style.position =
    "fixed";

renderer.domElement.style.inset =
    "0";

renderer.domElement.style.zIndex =
    "999999";

    // renderer.domElement.style.pointerEvents =
    // "none";

document
    .getElementById("lock-container")
    .appendChild(renderer.domElement);

/* ---------- Lock ---------- */

const loader = new GLTFLoader();

loader.load(

    "./models/old_lock.glb",

    (gltf) => {

        console.log(
            "LOCK LOADED"
        );

        lockModel =
            gltf.scene;

         

        lockModel.scale.set(
            200,
            200,
            200
        );

        lockModel.position.set(
            0,
            0,
            0
        );

        lockModel.rotation.x =
            -Math.PI / 2;

        scene.add(
            lockModel
        );

        const box =
            new THREE.Box3()
                .setFromObject(
                    lockModel
                );

        console.log(
            "LOCK SIZE:",
            box.getSize(
                new THREE.Vector3()
            )
        );

        animateLock(
            lockModel
        );
    },

    undefined,

    (error) => {

        console.error(
            "FAILED TO LOAD LOCK:",
            error
        );
    }
);

const texture =
    new THREE.TextureLoader()
        .load(
            "./models/glow.png"
        );

const material =
    new THREE.SpriteMaterial({

        map: texture,

        color: 0xffb6d9,

        transparent: true,

        opacity: 0
    });

glowSprite =
    new THREE.Sprite(
        material
    );

glowSprite.scale.set(
    15,
    15,
    1
);

scene.add(
    glowSprite
);

/* ---------- Drop Animation ---------- */

function animateLock(lock) {

    const start =
        performance.now();

    function drop(now) {

        let t =
            (now - start) / 1200;

        if (t > 1) t = 1;

        const ease =
            1 -
            Math.pow(
                1 - t,
                3
            );

        lock.position.y =
            5 - ease * 5;

        lock.rotation.z =
            Math.sin(
                t * 10
            ) * 0.15;

        if (t < 1) {

            requestAnimationFrame(
                drop
            );
        }
    }

    requestAnimationFrame(
        drop
    );
}

/* ---------- Render ---------- */

function render() {

    requestAnimationFrame(
        render
    );

    if (lockModel) {

        const time =
            performance.now() * 0.001;

        lockModel.rotation.x =
            -Math.PI / 2 +
            Math.sin(time * 1.2) * 0.05;

        lockModel.rotation.z =
            Math.sin(time * 0.8) * 0.08;

            lockModel.position.y =
    Math.sin(
        time * 1.3
    ) * 0.25;

      glowLight.position.set(
    lockModel.position.x,
    lockModel.position.y,
    10
);

const targetScale =
    isHoveringLock
        ? 215
        : 200;

lockModel.scale.lerp(

    new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
    ),

    0.08
);

     const targetGlow =
    isHoveringLock
        ? 50
        : 0;

glowLight.intensity +=
    (targetGlow -
     glowLight.intensity)
    * 0.08;

     glowSprite.position.copy(
    lockModel.position
);

glowSprite.material.opacity +=
(
    isHoveringLock
        ? 0.6
        : 0
) -
glowSprite.material.opacity;

glowSprite.material.opacity *=
0.08;

glowSprite.position.z =
    -2;

    renderer.render(
        scene,
        camera
    );
} 
}
render();



/* ---------- Unlock ---------- */

function unlockPortfolio() {

introUnlocked = true;
isHoveringLock = false;

document.body.style.cursor =
    "auto";
 

    const intro =
        document.getElementById(
            "intro-screen"
        );

    intro.classList.add(
        "hidden"
    );

    setTimeout(() => {

        document
            .querySelector(
                ".navbar"
            )
            .style.opacity = "1";

       const heroText =
    document.querySelector(".hero-text");

if (heroText) {
    heroText.style.opacity = "1";
}

    }, 700);

//    document
//     .getElementById("intro-screen")
//     .style.cursor = "auto";
}

/* ---------- Events ---------- */
renderer.domElement.addEventListener(
    "mousemove",
    (event) => {

        if (!lockModel) return;

        mouse.x =
            (event.clientX /
             window.innerWidth) * 2 - 1;

        mouse.y =
            -(event.clientY /
              window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(
            mouse,
            camera
        );

        const intersects =
            raycaster.intersectObject(
                lockModel,
                true
            );

        isHoveringLock =
            intersects.length > 0;

    if (!introUnlocked) {

  
} else {

    document.body.style.cursor =
        "auto";
}

    }
); 

document
    .getElementById("enter-btn")
    .addEventListener(
        "click",
        unlockPortfolio
    );

    renderer.domElement.addEventListener(
    "click",
    (event) => {

        if (!lockModel) return;

        mouse.x =
            (event.clientX /
             window.innerWidth) * 2 - 1;

        mouse.y =
            -(event.clientY /
              window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(
            mouse,
            camera
        );

        const intersects =
            raycaster.intersectObject(
                lockModel,
                true
            );

        if (intersects.length > 0) {

            console.log(
                "LOCK CLICKED"
            );

            unlockPortfolio();
        }
    }
);

/* ---------- Resize ---------- */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);
const photo =
    document.querySelector(
        ".photo-wrapper"
    );

if (photo) {

    photo.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                photo.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) / 12;

            const rotateX =
                -(y - centerY) / 12;

            photo.style.transform =
                `
                perspective(1500px)
                scale(1.03)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;
        }
    );

    photo.addEventListener(
        "mouseleave",
        () => {

            photo.style.transform =
                `
                perspective(1500px)
                scale(1)
                rotateX(0deg)
                rotateY(0deg)
                `;
        }
    );
}
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

import {
  FaGithub,
  FaLinkedin,
  FaFileAlt
} from "react-icons/fa";

import {
  MdEmail
} from "react-icons/md";
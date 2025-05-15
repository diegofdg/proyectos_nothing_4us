console.clear();

import React, { useEffect, useRef, useState } from 'https://cdn.skypack.dev/react@17';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17';
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import { MotionPathPlugin } from "https://cdn.skypack.dev/gsap@3.6.1/MotionPathPlugin";
import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const FILES = {
  drum: "https://assets.codepen.io/557388/drums.glb",
  burger: "https://assets.codepen.io/557388/burger.glb",
  snare: "https://assets.codepen.io/557388/snare.mp3",
  bass: "https://assets.codepen.io/557388/bass.mp3",
  tom1: "https://assets.codepen.io/557388/tom-1.mp3",
  tom2: "https://assets.codepen.io/557388/tom-2.mp3",
  tom3: "https://assets.codepen.io/557388/tom-3.mp3",
  cymbal1: "https://assets.codepen.io/557388/cymbal-1.mp3",
  cymbal2: "https://assets.codepen.io/557388/cymbal-2.mp3" };


gsap.registerPlugin(MotionPathPlugin);

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement(BurgerDrum, null), /*#__PURE__*/
    React.createElement("a", { href: "https://youtu.be/VtmsuVT7BGI", target: "_blank", className: "component-carousel" }, /*#__PURE__*/
    React.createElement("span", null, "Watch us make this on"), /*#__PURE__*/
    React.createElement("img", { src: "https://assets.codepen.io/557388/component-carousel.png", alt: "Component Carousel" }))));



}

function BurgerDrum() {

  const mount = useRef();
  const [view, setView] = useState('loading');
  const [manager, setManager] = useState(null);

  const init = () => {
    if (mount.current)
    {
      const stage = new Stage(mount.current);
      const _manager = new Manager(stage, view, setView);

      setManager(_manager);

      return () => {
        stage.destroy();
        _manager.fire();
      };
    }
  };

  const toggleView = () => {setView(view === 'burger' ? 'drums' : 'burger');};

  useEffect(init, [mount]);
  useEffect(() => {if (manager) manager.updateView(view);}, [view, manager]);

  return /*#__PURE__*/(
    React.createElement("div", { className: `burger-drum ${view}` }, /*#__PURE__*/
    React.createElement("div", { className: "container", ref: mount }), /*#__PURE__*/
    React.createElement("div", { className: "info" }, /*#__PURE__*/
    React.createElement("p", { className: "presents" }, "Buns N' Roses presents:"), /*#__PURE__*/
    React.createElement("h1", null, "Beat Burger"), /*#__PURE__*/
    React.createElement("p", null, "Our signature burger, inspired by legendary drummer ", /*#__PURE__*/React.createElement("i", null, "[your favorite drummer here]"), ". Order online now ", /*#__PURE__*/React.createElement("i", null, "(or don't because this is all pretend)"), " or transform this burger into a drum kit and play some sweet beats!"), /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("button", { disabled: true }, "Order now"), /*#__PURE__*/
    React.createElement("button", { onClick: toggleView }, "Play"))), /*#__PURE__*/


    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement("button", { onClick: toggleView }, "Back"), /*#__PURE__*/
    React.createElement("div", null, "Tap the drums or use these keyboard keys: ", /*#__PURE__*/React.createElement("span", null, "Q"), /*#__PURE__*/React.createElement("span", null, "W"), /*#__PURE__*/React.createElement("span", null, "E"), /*#__PURE__*/React.createElement("span", null, "R"), /*#__PURE__*/React.createElement("span", null, "T"), /*#__PURE__*/React.createElement("span", null, "Y"), /*#__PURE__*/React.createElement("span", null, "U"))), /*#__PURE__*/
    React.createElement("div", { className: "loader" }, "\uD83E\uDD18 Loading \uD83E\uDD18")));


}

class Manager {

  constructor(stage, view, setView) {
    this.stage = stage;
    this.setView = setView;
    this.debug = false;
    this.sounds = {};
    this.raycaster = new THREE.Raycaster();
    this.view = view;

    this.models = {
      burger: {
        file: FILES.burger,
        items: {} },

      drumkit: {
        file: FILES.drum,
        items: {} } };



    this.setupSpotLights();
    this.loadModels();
  }

  setupSpotLights() {
    this.spotlights = {
      left: { light: new THREE.SpotLight('white', 0), target: new THREE.Object3D() },
      right: { light: new THREE.SpotLight('white', 0), target: new THREE.Object3D() } };


    const sides = ['left', 'right'];
    sides.forEach(side => {
      const spotLight = this.spotlights[side].light;
      const target = this.spotlights[side].target;

      spotLight.penumbra = 0.1;
      spotLight.angle = 0.6;

      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.near = 1;
      spotLight.shadow.camera.far = 10;
      spotLight.shadow.camera.fov = 50;

      spotLight.target = target;

      this.stage.add(spotLight);
      this.stage.add(target);
    });

    this.spotlights.left.light.position.set(-3, 5, 1);
    this.spotlights.right.light.position.set(3, 5, 1);

  }

  playSound(id) {
    const sound = this.sounds[id];
    if (this.view === 'drums' && sound)
    {
      sound.audio.currentTime = 0;
      sound.audio.play();
      gsap.fromTo(sound.object.position, { ...sound.from }, { ...sound.to, ease: 'elastic' });
    }
  }

  setupSounds() {

    const testObjects = [];

    for (const [name, drum] of Object.entries(drumSettings)) {
      if (drum.sound) {

        const sound = {
          audio: new Audio(drum.sound),
          object: this.models.burger.items[name],
          from: { [drum.direction]: drum.position[drum.direction] - 0.3 },
          to: { [drum.direction]: drum.position[drum.direction] } };


        // test doesn't work on groups, so need to add children and rename
        if (sound.object instanceof THREE.Mesh)
        {
          testObjects.push(sound.object);
        } else
        {
          sound.object.children.forEach(obj => {
            obj.name = sound.object.name;
            testObjects.push(obj);
          });
        }

        this.sounds[drum.key] = sound;
        this.sounds[name] = sound;
      }
    }

    document.addEventListener("keydown", event => {this.playSound(event.key);});

    this.stage.container.addEventListener('click', (event) =>
    {
      const mouse = {
        x: event.offsetX / this.stage.size.width * 2 - 1,
        y: -(event.offsetY / this.stage.size.height) * 2 + 1 };


      this.raycaster.setFromCamera(mouse, this.stage.camera);
      const intersects = this.raycaster.intersectObjects(testObjects);

      if (intersects.length) {
        this.playSound(intersects[0].object.name);
      }
    });

  }

  loadModels() {
    const loadingManager = new THREE.LoadingManager(() => {
      this.setupSounds();
      this.setView('burger');
    });

    const gltfLoader = new GLTFLoader(loadingManager);

    Object.keys(this.models).forEach(id => {
      const model = this.models[id];

      gltfLoader.load(
      model.file,
      (gltf) =>
      {
        gltf.scene.traverse(child => {

          if (child instanceof THREE.Mesh)
          {
            child.receiveShadow = true;
            child.castShadow = true;
          }
        });

        const children = [...gltf.scene.children];

        children.forEach(child => {

          model.items[child.name] = child;

          child.home = {
            position: { ...child.position },
            rotation: { x: child.rotation.x, y: child.rotation.y, z: child.rotation.z },
            scale: { ...child.scale } };

          child.position.y *= 2;
          child.visible = false;

          this.stage.add(child);
        });
      });

    });
  }

  moveToDrums() {


    gsap.to(this.stage.camera.position, { x: 0, y: 6, z: 6 });
    gsap.to(this.stage.lookAt, { x: 0, y: 1, z: -1 });
    gsap.to(this.stage, { light: 0 });

    gsap.to(this.spotlights.left.target.position, { x: -1, z: -1 });
    gsap.to(this.spotlights.right.target.position, { x: 1, z: -1 });
    gsap.to(this.spotlights.left.light, { intensity: 10, delay: 0.3 });
    gsap.to(this.spotlights.right.light, { intensity: 10, delay: 0.3 });

    Object.keys(this.models.burger.items).forEach(key => {
      const item = this.models.burger.items[key];
      const pos = drumSettings[item.name];
      const delay = 0.6 - item.home.position.y * 0.6;
      gsap.to(item.position, { motionPath: [{ x: pos.position.x, y: pos.position.y + 0.5, z: pos.position.z }, { ...pos.position }], delay, duration: 1, ease: 'power2.inOut' });
      gsap.to(item.rotation, { ...pos.rotation, duration: 3, delay: delay + 0.5, ease: 'elastic' });
      gsap.to(item.scale, { ...pos.scale, duration: 1, delay: delay, ease: 'power2.inOut' });
    });

    Object.keys(this.models.drumkit.items).forEach(key => {
      const item = this.models.drumkit.items[key];
      item.visible = true;
      gsap.to(item.position, { ...item.home.position, duration: 1, ease: 'power4.out' });
      gsap.to(item.rotation, { ...item.home.rotation, duration: 1, ease: 'power4.out' });
      gsap.to(item.scale, { ...item.home.scale, duration: 1, ease: 'power4.out' });
    });
  }

  moveToBurger() {

    gsap.to(this.stage.camera.position, { ...this.stage.camera.home.position, duration: 0.6 });
    gsap.to(this.stage.lookAt, { x: -1.5, y: 1, z: 0, duration: 0.6 });
    gsap.to(this.stage, { light: 2 });
    gsap.to(this.spotlights.left.target.position, { x: -10, y: 1 });
    gsap.to(this.spotlights.right.target.position, { x: 10, y: 1 });
    gsap.to(this.spotlights.left.light, { intensity: 0 });
    gsap.to(this.spotlights.right.light, { intensity: 0 });

    Object.keys(this.models.burger.items).forEach(key => {
      const item = this.models.burger.items[key];
      const delay = 0.2 + item.home.position.y * 0.4;

      item.visible = true;
      gsap.to(item.position, { motionPath: [{ x: item.home.position.x, y: item.home.position.y * 3, z: item.home.position.z }, { ...item.home.position }], delay, duration: 1.5, ease: 'bounce' });
      gsap.to(item.rotation, { ...item.home.rotation, duration: 1, delay, ease: 'power4.inOut' });
      gsap.to(item.scale, { ...item.home.scale, duration: 1, delay, ease: 'power4.inOut' });
    });

    Object.keys(this.models.drumkit.items).forEach(key => {
      const item = this.models.drumkit.items[key];
      gsap.to(item.position, { y: -3, duration: 0.5 });
      gsap.to(item.rotation, { z: Math.random() * 0.5 - 0.25, duration: 0.5 });
    });
  }

  updateView(newState) {
    this.view = newState;
    gsap.globalTimeline.clear();
    if (newState === 'burger') this.moveToBurger();
    if (newState === 'drums') this.moveToDrums();
  }

  fire() {
    this.gui.destroy();
  }}


const COLORS = {
  background: '#142522',
  floor: '#522142' };

class Stage {

  constructor(mount) {

    this.container = mount;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(COLORS.background);

    this.size = {
      width: 1,
      height: 1 };


    this.setupLights();
    this.setupCamera();
    this.setupFloor();
    this.setupFog();
    this.setupRenderer();

    this.onResize();
    window.addEventListener('resize', () => this.onResize());

    this.tick();
  }

  setupLights() {

    this.directionalLight = new THREE.DirectionalLight('#ffffff', 2);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.camera.far = 10;
    this.directionalLight.shadow.mapSize.set(1024, 1024);
    this.directionalLight.shadow.normalBias = 0.05;
    this.directionalLight.position.set(2, 4, 1);
    this.add(this.directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, COLORS.floor, 0.5);
    this.add(hemisphereLight);
  }

  setupCamera() {

    this.lookAt = new THREE.Vector3(2, 1, 0);
    this.camera = new THREE.PerspectiveCamera(40, this.size.width / this.size.height, 0.1, 100);
    this.camera.position.set(0, 3, 6);
    this.camera.home = {
      position: { ...this.camera.position } };


    this.add(this.camera);
  }

  setupFloor() {
    const plane = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: COLORS.floor });
    const floor = new THREE.Mesh(plane, floorMaterial);
    floor.receiveShadow = true;

    floor.rotateX(-Math.PI * 0.5);

    this.add(floor);
  }

  setupFog() {
    const fog = new THREE.Fog(COLORS.background, 6, 20);
    this.scene.fog = fog;
  }

  setupRenderer() {

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true });


    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.renderer.toneMappingExposure = 3;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);
  }

  onResize() {

    this.size.width = this.container.clientWidth;
    this.size.height = this.container.clientHeight;

    this.camera.aspect = this.size.width / this.size.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.size.width, this.size.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  tick() {
    this.camera.lookAt(this.lookAt);

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(() => this.tick());
  }

  add(element) {this.scene.add(element);}

  set light(value) {
    this.directionalLight.intensity = value;
  }

  get light() {
    return this.directionalLight.intensity;
  }

  destroy() {

    this.container.removeChild(this.renderer.domElement);
    window.removeEventListener('resize', this.onResize);
  }}


const drumSettings = {
  "bun-bottom": {
    "sound": FILES.snare,
    "key": "q",
    "direction": "y",
    "position": {
      "x": -1.6,
      "y": 1.55,
      "z": 0 },

    "rotation": {
      "x": 0,
      "y": 0.67,
      "z": 0 },

    "scale": {
      "x": 0.6000000000000001,
      "y": 0.6000000000000001,
      "z": 0.6000000000000001 } },


  "bun-top": {
    "sound": FILES.bass,
    "key": "w",
    "direction": "z",
    "position": {
      "x": 0,
      "y": 0.9,
      "z": -0.5 },

    "rotation": {
      "x": -1.9000000000000001,
      "y": 1.7000000000000002,
      "z": 0 },

    "scale": {
      "x": 0.8,
      "y": 0.8,
      "z": 0.8 } },


  "tomato-1": {
    "position": {
      "x": 1.6,
      "y": 1,
      "z": 0.2 },

    "rotation": {
      "x": -3.141592653589793,
      "y": -5,
      "z": 0 },

    "scale": {
      "x": 0.7000000000000001,
      "y": 0.7000000000000001,
      "z": 0.7000000000000001 } },


  "patty-1": {
    "sound": FILES.tom1,
    "key": "e",
    "direction": "y",
    "position": {
      "x": -0.5,
      "y": 2.1,
      "z": -0.1 },

    "rotation": {
      "x": 0,
      "y": 3.1,
      "z": 0 },

    "scale": {
      "x": 0.5,
      "y": 0.5,
      "z": 0.5 } },


  "lettuce": {
    "sound": FILES.tom3,
    "key": "r",
    "direction": "y",
    "position": {
      "x": 1.6,
      "y": 1.4000000000000001,
      "z": 0.2 },

    "rotation": {
      "x": 0,
      "y": 0,
      "z": 0 },

    "scale": {
      "x": 0.6000000000000001,
      "y": 0.6000000000000001,
      "z": 0.6000000000000001 } },


  "tomato-2": {
    "position": {
      "x": 1.5,
      "y": 1.2000000000000002,
      "z": 0.30000000000000004 },

    "rotation": {
      "x": -3.141592653589793,
      "y": 0.39626465267840905,
      "z": 0 },

    "scale": {
      "x": 0.7000000000000001,
      "y": 0.7000000000000001,
      "z": 0.7000000000000001 } },


  "cheese-2": {
    "sound": FILES.cymbal1,
    "key": "t",
    "direction": "y",
    "position": {
      "x": -0.98,
      "y": 2.43,
      "z": -0.5 },

    "rotation": {
      "x": 0.01,
      "y": -1.6500000000000001,
      "z": 0.01 },

    "scale": {
      "x": 0.7000000000000001,
      "y": 0.7000000000000001,
      "z": 0.7000000000000001 } },


  "patty-2": {
    "sound": FILES.tom2,
    "key": "y",
    "direction": "y",
    "position": {
      "x": 0.6000000000000001,
      "y": 2.1,
      "z": -0.1 },

    "rotation": {
      "x": 0,
      "y": -4.18,
      "z": 0 },

    "scale": {
      "x": 0.5,
      "y": 0.5,
      "z": 0.5 } },


  "cheese-1": {
    "sound": FILES.cymbal2,
    "key": "u",
    "direction": "y",
    "position": {
      "x": 1,
      "y": 2.85,
      "z": -0.4 },

    "rotation": {
      "x": -3.141592653589793,
      "y": -1.32,
      "z": -3.141592653589793 },

    "scale": {
      "x": 0.6,
      "y": 0.6,
      "z": 0.6 } } };




ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));
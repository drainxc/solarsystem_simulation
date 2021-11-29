/* eslint-disable no-useless-constructor */
import React from "react";
import { SetupCamera } from "./lib/function/Camera";
import { SetupLight } from "./lib/function/Light";
import * as THREE from "three";
import { SetupControls } from "./lib/function/Controls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GlovalStyle from "./styles";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const width = window.innerWidth - 1;
    const height = window.innerHeight - 1; // 창크기

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    this.element.appendChild(renderer.domElement);
    this.renderer = renderer; // 렌더링

    const scene = new THREE.Scene(); // Scene
    scene.background = new THREE.Color("black"); // Scene 색상
    this.scene = scene; // field로 정의

    const camera = SetupCamera(this.element); // 카메라 추가
    this.camera = camera;

    const light = SetupLight(); // 광원 추가
    this.light = light;

    SetupControls(this.camera, this.element); // 카메라 이동

    this.scene.add(light.light1);
    this.scene.add(light.light2);
    this.scene.add(light.light2.target); // 광원 scene에 추가

    this.GlftLoader(); // 모델 불러오기

    window.onresize = this.resize.bind(this); // bind인 이유는 이벤트 객체가 아닌 App클래스의 객체가 되기 위해서
    this.resize();

    this.animate(); // 애니메이션
  }

  GlftLoader() {
    const gltfLoader = new GLTFLoader();
    const url = "scene.gltf"; // gltf가 있는 장소
    gltfLoader.load(url, (gltf) => {
      const root = gltf.scene;
      this.root = root;
      console.log(gltf);
      // this.scene.add(root);
      console.log(this.dumpObject(root).join("\n")); // gltf의 자식
      const planet = root.getObjectByName("GLTF_SceneRootNode");
      this.planet = planet;

      this.setupModel(); // 모델 생성
    });
  }

  dumpObject(obj, lines = [], isLast = true, prefix = "") {
    const localPrefix = isLast ? "└─" : "├─";
    lines.push(
      `${prefix}${prefix ? localPrefix : ""}${obj.name || "*no-name*"} [${
        obj.type
      }]`
    );
    const newPrefix = prefix + (isLast ? "  " : "│ ");
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
      const isLast = ndx === lastNdx;
      this.dumpObject(child, lines, isLast, newPrefix);
    });
    return lines;
  }

  setupModel() {
    if (this.planet) {
      const backGround = this.planet.children[15];
      backGround.scale.set(5000, 5000, 5000);
      this.scene.add(backGround);

      const solarSystem = new THREE.Object3D(); // 태양계 생성
      const sunMesh = this.planet.children[8]; // 모델 추가
      this.sunMesh = sunMesh;
      sunMesh.position.set(0, 0, 0); // 위치
      sunMesh.scale.set(7, 7, 7);
      solarSystem.add(sunMesh); // 태양

      const mercuryOrbit = new THREE.Object3D(); // 공전
      this.mercuryOrbit = mercuryOrbit;
      solarSystem.add(mercuryOrbit); // 태양계에 소속
      const mercuryMesh = this.planet.children[2];
      this.mercuryMesh = mercuryMesh;
      mercuryMesh.position.set(657, 0, 0);
      mercuryMesh.scale.set(100, 100, 100); // 크기
      mercuryOrbit.add(mercuryMesh); // 수성

      const venusOrbit = new THREE.Object3D();
      this.venusOrbit = venusOrbit;
      solarSystem.add(venusOrbit);
      const venusMesh = this.planet.children[1];
      this.venusMesh = venusMesh;
      venusMesh.position.set(908, 0, 0);
      venusMesh.scale.set(88, 88, 88);
      venusOrbit.add(venusMesh); // 금성

      const earthOrbit = new THREE.Object3D();
      this.earthOrbit = earthOrbit;
      solarSystem.add(earthOrbit);
      const earth = new THREE.Object3D();
      this.earth = earth;
      earth.position.set(1149, 0, 0);
      earthOrbit.add(earth);
      const earthMesh = this.planet.children[0];
      this.earthMesh = earthMesh;
      earthMesh.scale.set(72, 72, 72);
      earthMesh.position.set(0, 0, 0);
      earth.add(earthMesh); // 지구

      const moonOrbit = new THREE.Object3D();
      this.moonOrbit = moonOrbit;
      earth.add(moonOrbit);
      const moonMesh = this.planet.children[8];
      this.moonMesh = moonMesh;
      moonMesh.position.set(60, 0, 0);
      moonMesh.scale.set(10, 10, 10);
      moonOrbit.add(moonMesh); // 달

      const marsOrbit = new THREE.Object3D();
      this.marsOrbit = marsOrbit;
      solarSystem.add(marsOrbit);
      const marsMesh = this.planet.children[0];
      this.marsMesh = marsMesh;
      marsMesh.position.set(1327, 0, 0);
      marsMesh.scale.set(64, 64, 64);
      marsOrbit.add(marsMesh); // 화성

      const jupiterOrbit = new THREE.Object3D();
      this.jupiterOrbit = jupiterOrbit;
      solarSystem.add(jupiterOrbit);
      const jupiterMesh = this.planet.children[0];
      this.jupiterMesh = jupiterMesh;
      jupiterMesh.position.set(1878, 0, 0);
      jupiterMesh.scale.set(18, 18, 18);
      jupiterOrbit.add(jupiterMesh); // 목성

      const saturnOrbit = new THREE.Object3D();
      this.saturnOrbit = saturnOrbit;
      solarSystem.add(saturnOrbit);
      const saturn = new THREE.Object3D(); // 토성 고리 + 토성
      this.saturn = saturn;
      saturn.position.set(2378, 0, 0);
      saturnOrbit.add(saturn);
      const saturnMesh = this.planet.children[0];
      saturnMesh.position.set(0, 0, 0);
      saturnMesh.scale.set(16, 16, 16);
      saturn.add(saturnMesh); // 토성
      const saturnRingMesh = this.planet.children[6];
      saturnRingMesh.position.set(0, 0, 0);
      saturnRingMesh.scale.set(16, 16, 16);
      saturnRingMesh.rotation.x = 10;
      saturn.add(saturnRingMesh); // 토성 고리

      const uranusOrbit = new THREE.Object3D();
      this.uranusOrbit = uranusOrbit;
      solarSystem.add(uranusOrbit);
      const uranusMesh = this.planet.children[0];
      this.uranusMesh = uranusMesh;
      uranusMesh.position.set(3078, 0, 0);
      uranusMesh.scale.set(16, 16, 16);
      uranusOrbit.add(uranusMesh); // 천왕성

      const neptuneOrbit = new THREE.Object3D();
      this.neptuneOrbit = neptuneOrbit;
      solarSystem.add(neptuneOrbit);
      const neptuneMesh = this.planet.children[0];
      this.neptuneMesh = neptuneMesh;
      neptuneMesh.position.set(3678, 0, 0);
      neptuneMesh.scale.set(16, 16, 16);
      neptuneOrbit.add(neptuneMesh); // 해왕성

      this.scene.add(solarSystem);
    }
  }

  resize() {
    const width = this.element.clientWidth;
    const height = this.element.clientHeight; // this._divContainer의 가로 세로 길이 구하기

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix(); // camera 속성 값 설정

    this.renderer.setSize(width, height); // renderer의 크기 설정
  }

  animate = (time) => {
    this.renderer.render(this.scene, this.camera);
    this.update(time);
    requestAnimationFrame(this.animate);
  };

  update(time) {
    time *= 0.001;
    if (this.planet) {
      this.sunMesh.rotation.y = time / 25.4;
      this.mercuryMesh.rotation.y = time / 58.8;
      this.venusMesh.rotation.y = -time / 243;
      this.earthMesh.rotation.y = time;
      this.moonMesh.rotation.y = time * 2;
      this.marsMesh.rotation.y = time / 1.02;
      this.jupiterMesh.rotation.y = time * 2.43;
      this.saturn.rotation.y = time * 2.33;
      this.uranusMesh.rotation.y = -time * 1.38;
      this.neptuneMesh.rotation.y = time * 1.48; // 자전

      this.mercuryOrbit.rotation.y = time * 4.14;
      this.venusOrbit.rotation.y = time * 1.62;
      this.earthOrbit.rotation.y = time;
      this.moonOrbit.rotation.y = time * 2;
      this.marsOrbit.rotation.y = time * 0.53;
      this.jupiterOrbit.rotation.y = time * 0.08;
      this.saturnOrbit.rotation.y = time * 0.03;
      this.uranusOrbit.rotation.y = time * 0.011;
      this.neptuneOrbit.rotation.y = time * 0.006; // 공전
    }
  }

  render() {
    return (
      <>
        <GlovalStyle/>
        <div
          ref={(el) => (this.element = el)}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </>
    );
  }
}

export default App;

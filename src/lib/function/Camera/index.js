import * as THREE from "three";

export function SetupCamera(element) {
  const width = element.clientWidth;
  const height = element.clientHeight;
  const camera = new THREE.PerspectiveCamera(75, width / height, 1, 8000); // camera 객체 생성
  camera.position.set(0,0,2400) 
  return camera;
}

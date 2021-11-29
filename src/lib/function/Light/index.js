import * as THREE from "three";

export function SetupLight() {
  const light1Color = 0xffffff;
  const light1GroundColor = 0xffffff;
  const intensity = 1
  const light1 = new THREE.HemisphereLight(light1Color, light1GroundColor, intensity);

  const light2Color = 0xffffff;
  const light2 = new THREE.DirectionalLight(light2Color, intensity);
  light2.position.set(0, 0, 0);

  const light = {
    light1: light1,
    light2: light2
  }
  
  return light;
}

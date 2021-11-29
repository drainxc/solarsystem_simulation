import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function SetupControls(camera, element) {
    new OrbitControls(camera, element);
}
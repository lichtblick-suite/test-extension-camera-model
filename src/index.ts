import { CylinderCameraModel } from "./CylinderCameraModel";
import { CameraInfo, ExtendedExtensionContext } from "./lichtblick-suite.types";

export function activate(extensionContext: ExtendedExtensionContext): void {
  extensionContext.registerCameraModel(
    "CylinderCameraModel",
    (cameraInfo: CameraInfo) => new CylinderCameraModel(cameraInfo),
  );
}

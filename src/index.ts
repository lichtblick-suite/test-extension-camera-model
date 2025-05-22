import { CylinderCameraModel } from "./CylinderCameraModel";
import { CameraInfo, ExtendedExtensionContext } from "./lichtblick-suite.types";

export function activate(extensionContext: ExtendedExtensionContext): void {
  extensionContext.registerCameraModel({
    name: "CylinderCameraModel",
    modelBuilder: (cameraInfo: CameraInfo) => new CylinderCameraModel(cameraInfo),
  });
}

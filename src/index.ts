import { ExtensionContext } from "@lichtblick/suite";
import { CylinderCameraModel } from "./CylinderCameraModel";
import { CameraInfo, ICameraModel } from "./lichtblick-suite.types";

type CameraModelBuilder = (CameraInfo: CameraInfo) => ICameraModel;

type ExtendedExtensionContext = ExtensionContext & {
  registerCameraModel(name: string, builder: CameraModelBuilder): void;
};

export function activate(extensionContext: ExtendedExtensionContext): void {
  extensionContext.registerCameraModel(
    "CylinderCameraModel",
    (cameraInfo: CameraInfo) => new CylinderCameraModel(cameraInfo),
  );
}

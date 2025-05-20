import { ExtensionContext } from "@lichtblick/suite";
import { CustomCameraInfo, ICameraModel } from "./types";
import { CylinderCameraModel } from "./CylinderCameraModel";
import { CameraCalibration } from "@foxglove/schemas";

type CameraModelBuilder = (customCameraInfo: CustomCameraInfo) => ICameraModel;

type ExtendedExtensionContext = ExtensionContext & {
  registerCameraModel(name: string, builder: CameraModelBuilder): void;
};

export function activate(extensionContext: ExtendedExtensionContext): void {
  extensionContext.registerCameraModel(
    "CylinderCameraModel",
    (customCameraInfo: CustomCameraInfo) => new CylinderCameraModel(customCameraInfo),
  );

  extensionContext.registerMessageConverter({
    fromSchemaName: "foxglove.CameraCalibration",
    toSchemaName: "lichtblick.CustomCameraCalibration",
    converter: (message: CameraCalibration): CustomCameraInfo => {
      const customCameraCalibrationMessage: CustomCameraInfo = {
        name: "CylinderCameraModel",
        params: message,
      };
      console.log("[EXTENSION] customCameraCalibrationMessage", customCameraCalibrationMessage);
      return customCameraCalibrationMessage;
    },
  });
}

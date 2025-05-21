// THESE TYPES SHOULD COME FROM THE @LICHTBLICK/SUITE INTERFACE

import { ExtensionContext } from "@lichtblick/suite";

export type Vector2 = { x: number; y: number };

export type Vector3 = { x: number; y: number; z: number };

type CameraModelBuilder = (CameraInfo: CameraInfo) => ICameraModel;

export type ExtendedExtensionContext = ExtensionContext & {
  registerCameraModel(name: string, builder: CameraModelBuilder): void;
};

export interface ICameraModel {
  width: number;
  height: number;
  fx: number;
  fy: number;
  cx: number;
  cy: number;
  projectPixelTo3dPlane(out: Vector3, pixel: Readonly<Vector2>): Vector3;
  projectPixelTo3dRay(out: Vector3, pixel: Readonly<Vector2>): Vector3;
}

type DistortionModel = "plumb_bob" | "rational_polynomial" | string;

type FloatArray = number[] | Float32Array | Float64Array;

export type CameraInfo = Readonly<{
  width: number;
  height: number;
  binning_x: number;
  binning_y: number;
  roi: {
    x_offset: number;
    y_offset: number;
    height: number;
    width: number;
    do_rectify: boolean;
  };
  distortion_model: DistortionModel; // Usually "plumb_bob" | "rational_polynomial" | ""
  D: FloatArray;
  K: FloatArray;
  P: FloatArray;
  R: FloatArray;
}>;

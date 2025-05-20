export type Vector2 = { x: number; y: number };

export type Vector3 = { x: number; y: number; z: number };

export type Matrix3 = [number, number, number, number, number, number, number, number, number];

export type Matrix3x4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type Vec8 = [number, number, number, number, number, number, number, number];

export type CustomCameraInfo = {
  name: string;
  params: unknown;
};

export interface ICameraModel {
  name: string;
  width: number;
  height: number;
  fx: number;
  fy: number;
  cx: number;
  cy: number;
  projectPixelTo3dPlane(out: Vector3, pixel: Readonly<Vector2>): Vector3;
  projectPixelTo3dRay(out: Vector3, pixel: Readonly<Vector2>): Vector3;
}

type DistortionModel =
  | "plumb_bob"
  | "rational_polynomial"
  | "cylindrical"
  | "deformed_cylinder"
  | (string & {});

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

// This Vector3 class is based on Alt:V
// https://github.com/altmp/altv-js-module/blob/dev/shared/bindings/Vector3.js

export interface IVector3 {
	readonly x: number;
	readonly y: number;
	readonly z: number;
}

enum Vector3MedthodType {
	NUMBERS,
	ARRAY,
	OBJECT,
	VALUE,
}

function assert(condition: any, msg?: string): asserts condition {
	if (!condition) {
		throw new Error(msg);
	}
}

function typeCheck(obj: any, types: string[]): boolean {
	return types.some((type) => typeof obj === type);
}

function getXYZFromArgs(args: any[]) {
	assert(args.length === 1 || args.length === 3, "1 or 3 arguments expected");

	const firstArg = args[0];
	let x = 0,
		y = 0,
		z = 0;
	if (args.length === 3) {
		x = parseFloat(firstArg);
		y = parseFloat(args[1]);
		z = parseFloat(args[2]);

		assert(!isNaN(x) && !isNaN(y) && !isNaN(z), "All arguments must be numbers");
	} else {
		const firstArgType = typeof firstArg;
		if (firstArgType === "number" || firstArgType === "string") {
			const number = parseFloat(firstArg);
			assert(!isNaN(number), "Argument must be a number");
			x = number;
			y = number;
			z = number;
		} else if (Array.isArray(firstArg)) {
			assert(typeCheck(firstArg[0], ["number", "string"]), "Expected an array of numbers of first argument");
			assert(typeCheck(firstArg[1], ["number", "string"]), "Expected an array of numbers of second argument");
			assert(typeCheck(firstArg[2], ["number", "string"]), "Expected an array of numbers of third argument");

			x = parseFloat(firstArg[0]);
			y = parseFloat(firstArg[1]);
			z = parseFloat(firstArg[2]);

			assert(!isNaN(x) && !isNaN(y) && !isNaN(z), "All arguments must be numbers");
		} else if (firstArg && typeof firstArg === "object") {
			assert(typeCheck(firstArg.x, ["number", "string"]), "Expected an object with x property");
			assert(typeCheck(firstArg.y, ["number", "string"]), "Expected an object with y property");
			assert(typeCheck(firstArg.z, ["number", "string"]), "Expected an object with z property");

			x = parseFloat(firstArg.x);
			y = parseFloat(firstArg.y);
			z = parseFloat(firstArg.z);

			assert(!isNaN(x) && !isNaN(y) && !isNaN(z), "All arguments must be numbers");
		} else {
			throw new Error("Argument must be a number, an array of 3 numbers or IVector3");
		}
	}
	return [x, y, z];
}

export type Vector = Vector3 | IVector3;

export class Vector3 implements IVector3 {
	public readonly type = "vec3";
	public readonly x: number;
	public readonly y: number;
	public readonly z: number;

	constructor(x: number, y: number, z: number);
	constructor(array: [number, number, number]);
	constructor(obj: IVector3);
	constructor(value: number);
	constructor(...args: any[]) {
		const [x, y, z] = getXYZFromArgs(args);
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public get length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	public toArray(): [number, number, number] {
		return [this.x, this.y, this.z];
	}

	public toFixed(precision: number): Vector3 {
		return new Vector3(parseFloat(this.x.toFixed(precision)), parseFloat(this.y.toFixed(precision)), parseFloat(this.z.toFixed(precision)));
	}

	public toString(): string {
		return `(${this.x}, ${this.y}, ${this.z})`;
	}

	public add(x: number, y: number, z: number): Vector3;
	public add(value: number): Vector3;
	public add(array: [number, number, number]): Vector3;
	public add(vector: IVector3): Vector3;
	public add(...args: any[]): Vector3 {
		const [x, y, z] = getXYZFromArgs(args);
		return new Vector3(this.x + x, this.y + y, this.z + z);
	}

	public sub(x: number, y: number, z: number): Vector3;
	public sub(value: number): Vector3;
	public sub(array: [number, number, number]): Vector3;
	public sub(vector: IVector3): Vector3;
	public sub(...args: any[]): Vector3 {
		const [x, y, z] = getXYZFromArgs(args);
		return new Vector3(this.x - x, this.y - y, this.z - z);
	}

	public div(x: number, y: number, z: number): Vector3;
	public div(value: number): Vector3;
	public div(array: [number, number, number]): Vector3;
	public div(vector: IVector3): Vector3;
	public div(...args: any[]): Vector3 {
		const [x, y, z] = getXYZFromArgs(args);
		return new Vector3(this.x / x, this.y / y, this.z / z);
	}

	public mul(x: number, y: number, z: number): Vector3;
	public mul(value: number): Vector3;
	public mul(array: [number, number, number]): Vector3;
	public mul(vector: IVector3): Vector3;
	public mul(...args: any[]): Vector3 {
		const [x, y, z] = getXYZFromArgs(args);
		return new Vector3(this.x * x, this.y * y, this.z * z);
	}

	public dot(x: number, y: number, z: number): number;
	public dot(value: number): number;
	public dot(array: [number, number, number]): number;
	public dot(vector: IVector3): number;
	public dot(...args: any[]): number {
		const [x, y, z] = getXYZFromArgs(args);
		return this.x * x + this.y * y + this.z * z;
	}

	public cross(x: number, y: number, z: number): Vector3;
	public cross(value: number): Vector3;
	public cross(array: [number, number, number]): Vector3;
	public cross(vector: IVector3): Vector3;
	public cross(...args: any[]): Vector3 {
		const [x, y, z] = getXYZFromArgs(args);
		return new Vector3(this.y * z - this.z * y, this.z * x - this.x * z, this.x * y - this.y * x);
	}

	public negative(): Vector3 {
		return new Vector3(-this.x, -this.y, -this.z);
	}

	public inverse(): Vector3 {
		return new Vector3(1 / this.x, 1 / this.y, 1 / this.z);
	}

	public normalize(): Vector3 {
		const length = this.length;
		return new Vector3(this.x == 0 ? 0 : this.x / length, this.y == 0 ? 0 : this.y / length, this.z == 0 ? 0 : this.z / length);
	}

	public distanceTo(vector: IVector3): number {
		return Math.sqrt(this.distanceToSquared(vector));
	}

	public distanceToSquared(vector: IVector3): number {
		assert(vector !== undefined, "Expected Vector3 as first argument");
		assert(vector.x !== undefined, "Expected Vector3 as first argument");
		assert(vector.y !== undefined, "Expected Vector3 as first argument");
		assert(vector.z !== undefined, "Expected Vector3 as first argument");
		const x = this.x - vector.x;
		const y = this.y - vector.y;
		const z = this.z - vector.z;
		return x * x + y * y + z * z;
	}

	public angleTo(vector: IVector3): number {
		assert(vector !== undefined, "Expected Vector3 as first argument");
		assert(vector.x !== undefined, "Expected Vector3 as first argument");
		assert(vector.y !== undefined, "Expected Vector3 as first argument");
		assert(vector.z !== undefined, "Expected Vector3 as first argument");
		const posALength = Math.hypot(this.x, this.y, this.z);
		const posBLength = Math.hypot(vector.x, vector.y, vector.z);
		if (posALength === 0 || posBLength === 0) throw new Error("Cannot calculate angle between zero length vectors");

		return Math.acos((this.x * vector.x + this.y * vector.y + this.z * vector.z) / (posALength * posBLength));
	}

	public angleToDegrees(vector: IVector3): number {
		return (this.angleTo(vector) * 180) / Math.PI;
	}

	public toDegrees(): Vector3 {
		return new Vector3((this.x * 180) / Math.PI, (this.y * 180) / Math.PI, (this.z * 180) / Math.PI);
	}

	public toRadians(): Vector3 {
		return new Vector3((this.x * Math.PI) / 180, (this.y * Math.PI) / 180, (this.z * Math.PI) / 180);
	}

	public isInRange(vector: IVector3, range: number): boolean {
		assert(vector !== undefined, "Expected Vector3 as first argument");
		assert(range !== undefined, "Expected range as second argument");
		assert(vector.x !== undefined, "Expected Vector3 as first argument");
		assert(vector.y !== undefined, "Expected Vector3 as first argument");
		assert(vector.z !== undefined, "Expected Vector3 as first argument");

		const x = this.x - vector.x;
		const y = this.y - vector.y;
		const z = this.z - vector.z;

		return x <= range && y <= range && z <= range && x * x + y * y + z * z <= range * range;
	}

	public lerp(vector: IVector3, t: number): Vector3 {
		assert(vector !== undefined, "Expected Vector3 as first argument");
		assert(t !== undefined, "Expected t as second argument");
		assert(vector.x !== undefined, "Expected Vector3 as first argument");
		assert(vector.y !== undefined, "Expected Vector3 as first argument");
		assert(vector.z !== undefined, "Expected Vector3 as first argument");

		const x = this.x + (vector.x - this.x) * t;
		const y = this.y + (vector.y - this.y) * t;
		const z = this.z + (vector.z - this.z) * t;
		return new Vector3(x, y, z);
	}

	// Statics
	public static readonly type = "vec3";
	public static readonly zero: Vector3 = new Vector3(0, 0, 0);
	public static readonly one: Vector3 = new Vector3(1, 1, 1);
	public static readonly forward: Vector3 = new Vector3(0, 1, 0);
	public static readonly back: Vector3 = new Vector3(0, -1, 0);
	public static readonly up: Vector3 = new Vector3(0, 0, 1);
	public static readonly down: Vector3 = new Vector3(0, 0, -1);
	public static readonly left: Vector3 = new Vector3(-1, 0, 0);
	public static readonly right: Vector3 = new Vector3(1, 0, 0);
	public static readonly negativeInfinity: Vector3 = new Vector3(-Infinity, -Infinity, -Infinity);
	public static readonly positiveInfinity: Vector3 = new Vector3(Infinity, Infinity, Infinity);
}

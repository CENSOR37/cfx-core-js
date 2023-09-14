// This Vector3 class is based on Alt:V
// https://github.com/altmp/altv-js-module/blob/dev/shared/bindings/Vector2.js

import { assert, assertType, assertNotNaN } from "./Assert";

function getXYFromArgs(args: any[]) {
	assert(args.length === 1 || args.length === 2, "1 or 2 arguments expected");

	const firstArg = args[0];
	let x = 0,
		y = 0;

	if (args.length === 2) {
		x = parseFloat(firstArg);
		y = parseFloat(args[1]);

		assertNotNaN(x, "All arguments must be numbers");
		assertNotNaN(y, "All arguments must be numbers");
	} else {
		const firstArgType = typeof firstArg;
		if (firstArgType === "number" || firstArgType === "string") {
			const number = parseFloat(firstArg);
			assert(!isNaN(number), "Argument must be a number");
			x = number;
			y = number;
		} else if (Array.isArray(firstArg)) {
			assertType(firstArg[0], ["number", "string"], "Expected an array of 2 numbers");
			assertType(firstArg[1], ["number", "string"], "Expected an array of 2 numbers");

			x = parseFloat(firstArg[0]);
			y = parseFloat(firstArg[1]);

			assert(!isNaN(x) && !isNaN(y), "All arguments must be numbers");
		} else if (firstArg && typeof firstArg === "object") {
			assertType(firstArg.x, ["number", "string"], "Expected an object with x property");
			assertType(firstArg.y, ["number", "string"], "Expected an object with y property");

			x = parseFloat(firstArg.x);
			y = parseFloat(firstArg.y);

			assertNotNaN(x, "All arguments must be numbers");
			assertNotNaN(y, "All arguments must be numbers");
		} else {
			throw new Error("Argument must be a number, an array of 2 numbers or IVector2");
		}
	}
	return [x, y];
}

export interface IVector2 {
	readonly x: number;
	readonly y: number;
}

export class Vector2 implements IVector2 {
	public readonly type = "vec2";
	public readonly x: number;
	public readonly y: number;

	constructor(x: number, y: number);
	constructor(array: [number, number]);
	constructor(obj: IVector2);
	constructor(value: number);
	constructor(...args: any[]) {
		const [x, y] = getXYFromArgs(args);
		this.x = x;
		this.y = y;
	}

	public get length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	public toArray(): [number, number] {
		return [this.x, this.y];
	}

	public toFixed(precision: number): Vector2 {
		return new Vector2(parseFloat(this.x.toFixed(precision)), parseFloat(this.y.toFixed(precision)));
	}

	public toString(): string {
		return `Vector2{ x: ${this.x.toFixed(4)}, y: ${this.y.toFixed(4)} }`;
	}

	public add(x: number, y: number): Vector2;
	public add(value: number): Vector2;
	public add(array: [number, number]): Vector2;
	public add(obj: IVector2): Vector2;
	public add(...args: any[]): Vector2 {
		const [x, y] = getXYFromArgs(args);
		return new Vector2(this.x + x, this.y + y);
	}

	public sub(x: number, y: number): Vector2;
	public sub(value: number): Vector2;
	public sub(array: [number, number]): Vector2;
	public sub(obj: IVector2): Vector2;
	public sub(...args: any[]): Vector2 {
		const [x, y] = getXYFromArgs(args);
		return new Vector2(this.x - x, this.y - y);
	}

	public div(x: number, y: number): Vector2;
	public div(value: number): Vector2;
	public div(array: [number, number]): Vector2;
	public div(obj: IVector2): Vector2;
	public div(...args: any[]): Vector2 {
		const [x, y] = getXYFromArgs(args);
		return new Vector2(this.x / x, this.y / y);
	}

	public mul(x: number, y: number): Vector2;
	public mul(value: number): Vector2;
	public mul(array: [number, number]): Vector2;
	public mul(obj: IVector2): Vector2;
	public mul(...args: any[]): Vector2 {
		const [x, y] = getXYFromArgs(args);
		return new Vector2(this.x * x, this.y * y);
	}

	public negative(): Vector2 {
		return new Vector2(-this.x, -this.y);
	}

	public inverse(): Vector2 {
		return new Vector2(1 / this.x, 1 / this.y);
	}

	public normalize(): Vector2 {
		const length = this.length;
		return new Vector2(this.x == 0 ? 0 : this.x / length, this.y == 0 ? 0 : this.y / length);
	}

	public distanceTo(vector: IVector2): number {
		return Math.sqrt(this.distanceToSquared(vector));
	}

	public distanceToSquared(vector: IVector2): number {
		assert(vector !== undefined, "Expected Vector2");
		assert(vector.x !== undefined, "Expected Vector2");
		assert(vector.y !== undefined, "Expected Vector2");

		const x = this.x - vector.x;
		const y = this.y - vector.y;
		return x * x + y * y;
	}

	public angleTo(vector: IVector2): number {
		assert(vector !== undefined, "Expected Vector2");
		assert(vector.x !== undefined, "Expected Vector2");
		assert(vector.y !== undefined, "Expected Vector2");

		const posALength = Math.hypot(this.x, this.y);
		const posBLength = Math.hypot(vector.x, vector.y);
		if (posALength === 0 || posBLength === 0) throw new Error("Cannot calculate angle between zero length vectors");

		return Math.acos((this.x * vector.x + this.y * vector.y) / (posALength * posBLength));
	}

	public angleToDegrees(vector: IVector2): number {
		return (this.angleTo(vector) * 180) / Math.PI;
	}

	public toDegrees(): Vector2 {
		return new Vector2((this.x * 180) / Math.PI, (this.y * 180) / Math.PI);
	}

	public toRadians(): Vector2 {
		return new Vector2((this.x * Math.PI) / 180, (this.y * Math.PI) / 180);
	}

	public isInRange(vector: IVector2, range: number): boolean {
		assert(vector !== undefined, "Expected Vector2");
		assert(vector.x !== undefined, "Expected Vector2");
		assert(vector.y !== undefined, "Expected Vector2");

		assert(range !== undefined, "Expected range as second argument");

		const x = Math.abs(this.x - vector.x);
		const y = Math.abs(this.y - vector.y);

		return x <= range && y <= range && x * x + y * y <= range * range;
	}

	public lerp(vector: IVector2, t: number): Vector2 {
		assert(vector !== undefined, "Expected Vector2");
		assert(vector.x !== undefined, "Expected Vector2");
		assert(vector.y !== undefined, "Expected Vector2");
		assert(t !== undefined, "Expected t as second argument");

		const x = this.x + (vector.x - this.x) * t;
		const y = this.y + (vector.y - this.y) * t;
		return new Vector2(x, y);
	}

	// Statics
	public static readonly type = "vec2";
	public static readonly zero = new Vector2(0, 0);
	public static readonly one = new Vector2(1, 1);
	public static readonly up = new Vector2(0, 1);
	public static readonly down = new Vector2(0, -1);
	public static readonly left = new Vector2(-1, 0);
	public static readonly right = new Vector2(1, 0);
	public static readonly negativeInfinity = new Vector2(-Infinity, -Infinity);
	public static readonly positiveInfinity = new Vector2(Infinity, Infinity);
}

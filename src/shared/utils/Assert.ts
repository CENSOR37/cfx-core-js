function assert(condition: boolean, message: string): asserts condition {
	if (!condition) throw new Error(message);
}

function assertType(obj: any, types: string[]): boolean {
	return types.some((type) => typeof obj === type);
}

function assertNotNaN(number: number): asserts number {
	assert(!isNaN(number), "Argument must be a number");
}

export { assert, assertType, assertNotNaN };

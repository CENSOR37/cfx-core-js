function assert(condition: boolean, message: string) {
	if (!condition) throw new Error(message);
}

function assertType(obj: any, types: string[], message?: string) {
	if (!types.some((type) => typeof obj === type)) throw new Error(message || "Invalid type");
}

function assertNotNaN(number: number, message?: string) {
	if (isNaN(number)) throw new Error(message || "Invalid number");
}

export { assert, assertType, assertNotNaN };

function modulo(a: number, b: number) {
	return a - Math.floor(a / b) * b;
}

function ToInteger(x: number) {
	x = Number(x);
	return x < 0 ? Math.ceil(x) : Math.floor(x);
}

export function joaat(string: string) {
	const k = string.toLowerCase();
	let h, i;

	for (h = i = 0; i < k.length; i++) {
		h += k.charCodeAt(i);
		h += h << 10;
		h ^= h >>> 6;
	}

	h += h << 3;
	h ^= h >>> 11;
	h += h << 15;

	const uintHash = h >>> 0;

	let int32 = modulo(ToInteger(uintHash), Math.pow(2, 32));

	if (int32 >= Math.pow(2, 31)) {
		int32 -= Math.pow(2, 32);
	}
	return int32;
}

export class ValidationsError extends Error {}

export function checkLengh(value: string) {
	if (value.length === 0) {
		throw new ValidationsError('一文字以上入力してください');
	}
}

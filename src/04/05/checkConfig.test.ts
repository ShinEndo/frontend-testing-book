import { checkConfig } from './checkConfig';

test('モック関数は実行時引数のオブジェクト検証ができる', () => {
	const mockFn = jest.fn();
	checkConfig(mockFn);
	expect(mockFn).toHaveBeenCalledWith({
		mock: true,
		feature: { spy: true },
	});
});

test('expect.objectContainning による部分検証', () => {
	const mockFn = jest.fn();
	checkConfig(mockFn);
	expect(mockFn).toHaveBeenCalledWith(
		expect.objectContaining({
			feature: { spy: true },
		})
	);
});

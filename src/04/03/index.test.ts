import { getGreet } from '.';
import * as Fetchers from '../fetchers';

jest.mock('../fetchers');

describe('getGreet', () => {
	test('データ取得成功時：ユーザー名がない場合', async () => {
		// getMyProfile が resolve した時の値を再現
		jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
			id: 'xxxxxx-123456',
			email: 'taroyamada@myapi.testing.com',
		});
		await expect(getGreet()).resolves.toBe('Hello, anonymous user!');
	});
	test('データ取得成功時：ユーザー名がある場合', async () => {
		// getMyProfile が resolveした時の値を再現
		jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
			id: 'XXXXXX-123456',
			email: 'taroyamada@myapi.testing.com',
			name: 'taroyamada',
		});
		await expect(getGreet()).resolves.toBe('Hello, taroyamada!');
	});
});

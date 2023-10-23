import { Profile } from './type';

export function getMyProfile(): Promise<Profile> {
	return fetch('https://myapi.testing.com/my/profile').then(async (res) => {
		const data = await res.json();
		if (!res.ok) {
			throw data;
		}
		return data;
	});
}

import { getMyProfile } from '../fetchers';

export async function getGreet() {
	const data = await getMyProfile();
	if (!data.name) {
		return `Hello, anonymous user!`;
	}

	return `Hello, ${data.name}!`;
}

import { render, screen } from '@testing-library/react';
import { Form } from './Form';

test('名前の表示', () => {
	render(<Form name="taro" />);
	expect(screen.getByText('taro')).toBeInTheDocument();
});

import {render, screen} from '@testing-library/react'
import { AvatarComponent } from './Avatar'

test('renders Avatar' , () => {
    render(
        <AvatarComponent name='BS' />
    );
    const linkElement = screen.getByTestId("Avatar");
    expect(linkElement).toBeInTheDocument();
})
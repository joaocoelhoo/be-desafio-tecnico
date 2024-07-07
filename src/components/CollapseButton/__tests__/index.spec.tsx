import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CollapseButton from '../CollapseButton';
import ChevDown from '../../../assets/charm_chevron-down.png';
import ChevUp from '../../../assets/charm_chevron-up.png';

describe('CollapseButton', () => {
  it('should display down icon when isOpen is false', () => {
    const { getByAltText } = render(<CollapseButton onClick={() => {}} isOpen={false} />);

    const iconImg = getByAltText('Icon');
    expect(iconImg).toBeInTheDocument();
    expect(iconImg).toHaveAttribute('src', ChevDown);
  });

  it('should display down icon when isOpen is true', () => {
    const { getByAltText } = render(<CollapseButton onClick={() => {}} isOpen={true}/>);

    const button = getByAltText('Icon');
    fireEvent.click(button);

    expect(button).toHaveAttribute('src', ChevUp);
  });

  it('should call onClick function when icon is clicked', () => {
    const onClickMock = jest.fn();
    const { getByAltText } = render(<CollapseButton onClick={onClickMock} isOpen={false}/>);

    const button = getByAltText('Icon');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

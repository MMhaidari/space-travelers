import React from 'react';
import renderer from 'react-test-renderer';
import Rocket from '../components/Rocket';

describe('Rocket component', () => {
  const rocket = {
    id: 'falcon1',
    name: 'Falcon 1',
    description: 'Small launch vehicle',
    flickr_images: ['https://www.example.com/falcon1.jpg'],
    reserved: true,
  };

  test('renders when rocket is reserved', () => {
    const tree = renderer
      .create(<Rocket rocket={rocket} handleReserveClick={() => {}} onCancelClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly when rocket is not reserved', () => {
    const newRocket = { ...rocket, reserved: false };
    const tree = renderer
      .create(<Rocket rocket={newRocket} handleReserveClick={() => {}} onCancelClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

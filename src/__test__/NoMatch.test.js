import React from 'react';
import renderer from 'react-test-renderer';
import NotMatch from '../routes/NotMatch';

describe('NotMatch', () => {
  it('should render the "Not Found" text', () => {
    const component = renderer.create(<NotMatch />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

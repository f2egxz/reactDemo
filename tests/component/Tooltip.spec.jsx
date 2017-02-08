import React from 'react';
import Tooltip from 'component/Tooltip.jsx';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Tooltip text="test">this is test content</Tooltip>
  );
  let Tooltips = component.toJSON();
  expect(Tooltips).toMatchSnapshot();

  // manually trigger the callback
  Tooltips.props.onMouseEnter();
  // re-rendering
  Tooltips = component.toJSON();
  expect(Tooltips).toMatchSnapshot();

  // manually trigger the callback
  Tooltips.props.onMouseLeave();
  // re-rendering
  Tooltips = component.toJSON();
  expect(Tooltips).toMatchSnapshot();
});

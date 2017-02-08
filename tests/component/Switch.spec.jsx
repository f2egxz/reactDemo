import React from 'react'
import Switch from 'component/Switch.jsx'
import render from 'react-test-renderer'

test('click chanage the Switch',()=>{
  const SwitchClick= jest.fn();

  const component = render.create(
    <Switch bool={true} handleClick={SwitchClick}/>
  );

  let SwitchString = component.toJSON();
  expect(SwitchString).toMatchSnapshot();

  // component.props.onClick()
  // SwitchString = component.toJSON();
  //
  // expect(SwitchString).toMatchSnapshot();
})

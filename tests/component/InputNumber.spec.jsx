import React from 'react';
import InputNumber from 'component/InputNumber.jsx'
import render from 'react-test-renderer'

test('InputNumber',() => {
  const inputchange = jest.fn();
  const component = render.create(
    <InputNumber value={2} step={1} max={6} min={-3} onChange = {inputchange}/>
  )
  let InputNumberString = component.toJSON();
  expect(InputNumberString).toMatchSnapshot();
})

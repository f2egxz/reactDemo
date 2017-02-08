import React from  'react';
import Button from 'component/Button.jsx';
import render from 'react-test-renderer'

test('buttom' ,()=>{
  const component = render.create(
    <Button>this is a test word</Button>
  );
  let Tooltip = component.toJSON();
})

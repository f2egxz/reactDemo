import React from 'react'
import Badge from 'component/Badge.jsx'
import render from 'react-test-renderer'

test('Badge',()=>{
  const component1 = render.create(
    <Badge count={100} overflowCount="10">
      <a href="##" style={{ display: 'block',backgroundColor: '#00b400', width: '60px',
        height: '60px'}}>test</a>
    </Badge>
  );
  const component2 = render.create(
    <Badge dot={true} status="Processing"></Badge>
  );
  let BadgeString = component1.toJSON();
  expect(BadgeString).toMatchSnapshot();

  BadgeString = component2.toJSON();
  expect(BadgeString).toMatchSnapshot();
})

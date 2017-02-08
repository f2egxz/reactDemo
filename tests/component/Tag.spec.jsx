import React from 'react'
import Tag from 'component/Tag.jsx'
import render from 'react-test-renderer'

test('Tag test',()=>{
  const component = render.create(
    <Tag color="#108ee9" closable={true}>test</Tag>
  )
  let TagString = component.toJSON();
  expect(TagString).toMatchSnapshot();
})

import React from 'react'
import Pagination from 'component/Pagination.jsx'
import render from 'react-test-renderer'

test('Pagination',()=>{
  const PagChange= jest.fn()
  const component = render.create(
    <Pagination total={322} current={5} onChange={PagChange}/>
  )
  let PagString = component.toJSON();
  expect(PagString).toMatchSnapshot();
})

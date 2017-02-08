import React from 'react'
import Cascader from 'component/Cascader/Cascader.jsx'
import render from 'react-test-renderer'

test('Cascader',()=>{
  const handleClick = jest.fn()
  const data = [ {
    "name": "北京",
    "sub": [
      {
        "name": "北京",
        "sub": [
          {
            "name": "东城区"
          },
          {
            "name": "西城区"
          },
          {
            "name": "崇文区"
          },
          {
            "name": "宣武区"
          },
          {
            "name": "朝阳区"
          },
          {
            "name": "丰台区"
          },
          {
            "name": "石景山区"
          },
          {
            "name": "海淀区"
          },
          {
            "name": "门头沟区"
          },
          {
            "name": "房山区"
          },
          {
            "name": "通州区"
          },
          {
            "name": "顺义区"
          },
          {
            "name": "昌平区"
          },
          {
            "name": "大兴区"
          },
          {
            "name": "怀柔区"
          },
          {
            "name": "平谷区"
          },
          {
            "name": "密云县"
          },
          {
            "name": "延庆县"
          }
        ]
      }
    ]
  }]
  const component = render.create(
    <Cascader options={data} onChange = {handleClick}/>
  )
  let CascaderString = component.toJSON;
  expect(CascaderString).toMatchSnapshot();
})

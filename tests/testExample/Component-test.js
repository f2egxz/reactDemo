import React from 'react'
import { shallow } from 'enzyme'
import Foo from './../../testExample/Component'
import ConnectBar, { Bar } from './../../testExample/Connector'

function setup() {
    const fooWrapper = shallow(<Foo bar="bar" />)
    const barWrapper = shallow(<Bar><Foo bar="bar" /></Bar>)
    return {
        fooWrapper,
        barWrapper
    }
}

describe('Foo', () => {
    it('component Foo should render', () => {
        const { fooWrapper } = setup()

        expect(fooWrapper.find('h1').text()).toBe('bar')
    })

    it('component Bar should render', () => {
        const { barWrapper } = setup()

        expect(barWrapper.contains(<Foo bar="bar" />)).toBe(true)
    })
})

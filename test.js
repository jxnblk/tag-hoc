import React from 'react'
import { create as render } from 'react-test-renderer'
import tag from './src/tag'

let Comp

test('returns a React component', () => {
  Comp = tag([])('div')
  expect(typeof Comp).toBe('function')
})

test('renders', () => {
  const json = render(<Comp />).toJSON()
  expect(json.type).toBe('div')
  expect(json).toMatchSnapshot()
})

test('is props changes tag', () => {
  const json = render(<Comp is='h1' />).toJSON()
  expect(json.type).toBe('h1')
  expect(json).toMatchSnapshot()
})

test('cleans props', () => {
  Comp = tag([ 'foo' ])('div')
  const json = render(<Comp foo='boop' pass='through' />).toJSON()
  expect(json.props.foo).toBeUndefined()
  expect(json.props.pass).toBe('through')
})

test('defaults to an empty array for propsToRemove argument', () => {
  Comp = tag()('div')
  const json = render(<Comp foo='boop' />).toJSON()
  expect(json.props.foo).toBe('boop')
})

test('accepts components', () => {
  Comp = tag()('h1')
  const Title = tag()(props => <Comp {...props} />)
  const a = render(<Title />).toJSON()
  const b = render(<Title is='h2' />).toJSON()
  expect(a).toMatchSnapshot()
  expect(b).toMatchSnapshot()
  expect(a.type).toBe('h1')
  expect(b.type).toBe('h2')
  expect(b.is).toBeFalsy()
})

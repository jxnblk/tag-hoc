
# tag-hoc

React HOC to set an element's tag and remove props

Useful for removing style props in libraries like styled-components

```sh
npm i tag-hoc
```

## Usage

```..jsx
// Example with styled-components
// import React from 'react'
// import { render } from 'react-dom'
// import styled from 'styled-components'
// import tag from 'tag-hoc'

const propsToRemove = [
  'color'
]

const Tag = tag(propsToRemove)
const Base = Tag('h2')
const Title = styled(Base)`
  color: ${props => props.color};
`

Title.defaultProps = {
  color: '#07c'
}

render(
  <Title
    is='h1'
    color='tomato'>
    Hello
  </Title>
)
```

This renders an `<h1>` element with the `is` and `color` props stripped from the HTML.

MIT License

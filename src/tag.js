import React from 'react'

const tag = (propsToRemove = []) => {
  const clean = cleanProps(propsToRemove)

  return type => {
    const Base = props => {
      const isEl = typeof type === 'string'
      const Comp = isEl ? (props.is || type) : type
      const next = isEl ? clean(props) : props

      if (isEl) next.is = null

      return <Comp {...next} />
    }

    return Base
  }
}

export const cleanProps = keys => {
  const dict = keys.reduce((a, key) => Object.assign(a, {
    [key]: true
  }), {})

  return props => {
    const next = {}
    for (let key in props) {
      if (dict[key]) continue
      next[key] = props[key]
    }
    return next
  }
}

export default tag

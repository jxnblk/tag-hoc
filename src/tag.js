import React from 'react'

const tag = (blacklist = []) => {
  const clean = cleanProps(blacklist)

  return type => {
    const Base = props => {
      const isEl = typeof type === 'string'
      const Comp = isEl ? (props.is || type) : type
      const next = clean(props)

      if (isEl) next.is = null

      return <Comp {...next} />
    }

    return Base
  }
}

export const cleanProps = blacklist => props => {
  const next = {}
  for (let key in props) {
    if (blacklist.includes(key)) continue
    next[key] = props[key]
  }
  return next
}

export default tag

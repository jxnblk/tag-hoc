import React from 'react'

const tag = (blacklist = []) => {
  const clean = cleanProps(blacklist)

  return type => typeof type !== 'string'
    ? type
    : props => {
      const Comp = (props.is || type)
      return <Comp {...clean(props)} />
    }
}

export const cleanProps = blacklist => {
  const blacklistSet = { is: true };
  blacklist.forEach(key => blacklistSet[key] = true);
  return props => {
    const next = {}
    for (let key in props) {
      if (blacklistSet[key]) continue
      next[key] = props[key]
    }
    return next
  }
}

export default tag

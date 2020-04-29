import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

type Props = {
  index: number
  itemWidth: number
  itemHeight: number
  path: string
}

export default (props: Props) => {
  const style = useMemo(
    () => ({
      width: `${props.itemWidth}px`,
      height: `${props.itemHeight}px`,
      position: 'absolute' as 'absolute',
      top: 0,
      left: `${props.itemWidth * props.index}px`,
      backgroundSize: 'cover',
      backgroundImage: `url(${props.path})`,
      backgroundPosition: `center`
    }),
    [props.itemWidth, props.itemHeight]
  )
  return useMemo(() => <p style={style} />, [style])
}
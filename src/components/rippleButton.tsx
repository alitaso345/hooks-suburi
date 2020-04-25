import * as React from 'react'
import { useRef, MouseEvent } from 'react'
import styled from 'styled-components'
import { useRippleEffect } from './useRippleEffect'

type Props = {
  width: string
  height: string
  borderRadius?: string
  backgroundColor?: string
  effectSize: number
  effectColor?: string
  effectDuration?: number
  className?: string
  textColor?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const View: React.FC<Props> = props => {
  const ref = useRef({} as HTMLButtonElement)
  const {
    handleMouseDown,
    handleMouseUp,
    effectStyle
  } = useRippleEffect({
    ref,
    effectDuration: props.effectDuration
  })

  return (
    <button
      ref={ref}
      className={props.className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={props.onClick}
    >
      <span className="effect" style={effectStyle} />
      {props.children}
    </button>
  )
}
export default styled(View)`
  position: relative;
  outline: none;
  overflow: hidden;
  line-height: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  color: ${props => props.textColor || '#fff'};
  background-color: ${props =>
    props.backgroundColor || '#000'};
  -webkit-tap-highlight-color: transparent;
  > .effect {
    display: block;
    position: absolute;
    pointer-events: none;
    width: ${props => `${props.effectSize * 2}px`};
    height: ${props => `${props.effectSize * 2}px`};
    left: ${props => `${props.effectSize * -1}px`};
    top: ${props => `${props.effectSize * -1}px`};
    border-radius: ${props => `${props.effectSize}px`};
    background-color: ${props =>
    props.effectColor || '#fff'};
  }
`
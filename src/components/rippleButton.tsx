import * as React from 'react'
type Props = {
  width: string
  height: string
  borderRadius?: string
  backgroundColor?: string
  effectSize: number
}

const View: React.FC<Props> = props => {
  return (
    <button>button</button>
  )
}
export default View
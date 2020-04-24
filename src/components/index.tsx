import * as React from 'react'
import RippleButton from './rippleButton'

type Props = { className?: string }

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <RippleButton
      width={'180px'}
      height={'64px'}
      borderRadius={'10px'}
      backgroundColor={'#7089b9'}
      effectSize={200}
    >
      <span className="children">
        UPLOAD
      </span>
    </RippleButton>
  </div>
)

export default View
import * as React from 'react'
import styled from 'styled-components'
import RippleButton from './rippleButton'

type Props = { className?: string }

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <RippleButton
      width={'180px'}
      height={'64px'}
      borderRadius={'10px'}
      backgroundColor={'#7089b9'}
      effectSize={280}
    >
      <span className="children">
        DOWNLOAD
      </span>
    </RippleButton>
  </div>
)

export default styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  > * {
    margin: 10px;
    > .children {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      > * {
        margin-right: 10px;
      }
    }
  }
`
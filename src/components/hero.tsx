import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Images from '../assets/index'
import PhotoCarousel from './photoCarousel/index'

type Props = { className?: string }

const View: React.FC<Props> = props => {
  const [consurrent, setCurrent] = useState(0)
  return (
    <div className={props.className}>
      <PhotoCarousel
        images={Images}
        imageRatio={0.66}
        transitionInterval={4000}
        transitionDuration={400}
        onChangeCurrent={setCurrent}
      />
    </div>
  )
}
export default styled(View)`
  position: relative;
`
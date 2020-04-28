import * as React from 'react'
import styled from 'styled-components'
import { records } from './records'

type Props = { className?: string }

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {records.map((record, index) => (
      <div key={index} className="item">
        <span>{record.title}</span>
      </div>
    ))}
  </div>
)

export default styled(View)`
  margin: 16px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  > .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
    &:last-child {
      border: none;
    }
  }
`
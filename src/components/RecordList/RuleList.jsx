import React from 'react'
import RuleIcon from './RuleIcon';

const RuleList = ({data}) => {
  const {
    order,
    penalty,
    mix,
    highlight
  } = data;

  return (
    <ul className='recordlist__rule-list'>
      <RuleIcon rule={`order-${order}`} />
      {penalty && <RuleIcon rule="penalty" />}
      {mix && <RuleIcon rule="mix" />}
      {highlight && <RuleIcon rule="light" />}
    </ul>
  )
}

export default RuleList
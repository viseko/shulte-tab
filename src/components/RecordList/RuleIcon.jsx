import React from 'react'
import Icon from '../UI/Icon'

const RuleIcon = ({rule}) => {
  return (
    <div className='recordlist__rule-icon'>
      <Icon width={22} name={rule} />
    </div>
  )
}

export default RuleIcon
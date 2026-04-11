import React from 'react'
import UserStore from '../store/UserStore'
import { useContext } from 'react'

const ComponentC = ({name}) => {
    const data = useContext(UserStore);
  return (
    <div>
        <div>
            ComponentC {data.name}
        </div>
      
    </div>
  )
}

export default ComponentC

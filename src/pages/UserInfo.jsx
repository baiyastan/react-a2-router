import React from 'react'
import { useParams } from 'react-router-dom'
import { user } from '../data'

function UserInfo() {
    const {id} = useParams()

    const findUser = user.find((x) => x.id == id)
  return (
    <div>
      user Info {id}

      {findUser.name}
    </div>
  )
}

export default UserInfo

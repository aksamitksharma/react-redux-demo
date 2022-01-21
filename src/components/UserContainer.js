import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'


const UserContainer = ({ fetchUsers, userData }) => {
  console.log(userData)
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      {
        userData.loading?
        (<h2>Loading...</h2>)
        :
        (
          userData.error?
          (<h2>{userData.error}</h2>)
          :
          (
          <div>
            <h2>Users Data</h2>
            {
              userData && userData.users && userData.users.map(user=><p>{user.name}</p>)
            }
          </div>
          )
        )
      }
      </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

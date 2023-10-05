
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)
  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, deleteUsers, updateUsers] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  },[])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }


  return (
    <>
        <div className='crud'>
    <h1 className='container__title'>Create Users</h1>
    <button onClick={handleOpenForm} className='btn__formuser'>+ Create New User</button>
    </div>
    <div className='father'>
      <FormUser
      createUsers={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      closeForm={closeForm}
      setCloseForm={setCloseForm}
      />
      <div>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setInfoUpdate={setInfoUpdate}
            handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App

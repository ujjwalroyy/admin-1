import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../features/userSlice';

const HomePage = () => {
    // const [num, setNum] = useState('')
    // const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    // const handleIncrement = () => {
    //     dispatch(increment())
    // }
    // const handleDecrement = () => {
    //     dispatch(decrement())
    // }
    // const handleReset = () => {
    //     dispatch(reset())
    // }
    // const handleIncByNum = () => {
    //     dispatch(incrementByNum(num))
    // }

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const un = useSelector((state) => state.users.username)
    const em = useSelector((state) => state.users.email)
    const ag = useSelector((state) => state.users.age)
    const ps = useSelector((state) => state.users.password)
    // const state = useSelector((state) => state);
    const handleSave = () => {
      const users = {
        username,
        age,
        email,
        password
      }
      dispatch(saveUser(users))
    }
  return (
    // <div>
    //   <div>
    //     <button
    //       aria-label="Increment value"
    //       onClick={handleIncrement}
    //     >
    //       Increment
    //     </button>
    //     <span>{count}</span>
    //     <button
    //       aria-label="Decrement value"
    //       onClick={handleDecrement}
    //     >
    //       Decrement
    //     </button>
    //     <br/>
    //     <button
    //       onClick={handleReset}
    //     >
    //       Reset
    //     </button>
    //     <input type='text' onChange={(e) => setNum(e.target.value)} />
    //     <button
    //       onClick={handleIncByNum}
    //     >
    //       Add
    //     </button>
        
    //   </div>
      
    // </div>

    <>
    <label>Username: {un}</label><br/>
    <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='username' /><br/>
    <label>Email: {em}</label><br/>
    <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='username'/><br/>
    <label>Password: {ps}</label><br/>
    <input type='text' onChange={(e) => setPassword(e.target.value)} placeholder='username'/><br/>
    <label>Age: {ag}</label><br/>
    <input type='text' onChange={(e) => setAge(e.target.value)} placeholder='username'/><br/>
    <button onClick={handleSave}>Save</button>



    {/* <div>
    <button onClick={(e) => dispatch(fetchUsers())}>Click</button>
    <br/>
    {state?.api?.isLoading && <b>Loading....</b>}
    {state?.api?.data?.map((i) => { return (
   <li>{i.name}</li>
    )})}
    </div> */}
    </>



  )
}

export default HomePage
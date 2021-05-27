import React from 'react'
import './App.css'
import NameChange from './components/NameChange'
import UserStaticArray from './components/UserStaticArray'
import UseStateObject from './components/UseStateObject'
import UserEmailPass from './components/forms/UserEmailPass'
import UseEffect1 from './components/useEffects/UseEffect1'
import UseEffect2 from './components/useEffects/UseEffect2'
import UseEffectApi from './components/useEffects/UseEffectApi'
import UnControled from './components/forms/UnControled'
import UseReducers from './components/UseReducers'
import ComA from './components/UseContext/ComA'
import Notification from './components/toastNotification/Notification'
import TodoList from './components/todoList/TodoList'
import TabList from './components/tabList/TabList'
// import UseLocation from './components/useLocation/UseLocation'


const App = () => {
  return(
    <>
      <div className="container">
          <NameChange />
          <hr></hr> 
          <UserStaticArray />
          <hr></hr>
          <UseStateObject />
          <hr></hr>
          <UserEmailPass />
          <hr></hr>
          <UseEffect1 />
          <hr></hr>
          <UseEffect2 />
          <hr></hr>
          <UseEffectApi />
          <hr></hr>
          <UnControled />
          <hr></hr>
          <UseReducers />
          <hr></hr>
          <ComA />
          <hr></hr>
          <Notification />
          <hr></hr>
          <TodoList />
          <hr></hr>
          <div className="imgCenter">
            <h6>Right way to call Image</h6>
            <img src="images/apple.png" alt="test image" />
          </div>
          <hr></hr>
          <TabList />
      </div>
    </>
  )
}

export default App
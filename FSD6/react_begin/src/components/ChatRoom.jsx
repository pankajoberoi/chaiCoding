import React, { useEffect, useState } from 'react'
import {createConnection} from './chat.js'
function ChatRoom({roomId}) {
    const [serverUrl,setServerUrl]=useState('http://localhost:1234')

    useEffect(()=>{
        console.log("hehe")
        const connection =createConnection(serverUrl,roomId);
        connection.connect();
        return () =>{
            console.log("byby")
            connection.disconnect();
        }
    },[])


  return (
    <div>
      <label>
        Server URL : {' '}
        <input value={serverUrl}/>
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </div>
  )
}

export default ChatRoom

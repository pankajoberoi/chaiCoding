import React, { useEffect, useState } from 'react'
import {createConnection} from './ChatServer.js'
function ChatRoom(props) {
    
    const [serverUrl,setserverUrl]=useState('https://localhost:420');

    useEffect(()=>{
      const connection=createConnection(serverUrl,props.roomId)
      connection.connect();

      return ()=>{
        connection.disconnect();
      }

    },[props.roomId])

  return (
    <div>
      <label>
        server Url {' '}
        <input value={serverUrl}/>
      </label>
      <h1>Welcome to {props.roomId} room!</h1>
    </div>
  )
}

export default ChatRoom

import type Children from '../types/Children'
import { createContext } from 'react'
import { io } from 'socket.io-client'

// TODO: Add error handling for sockets



// const socket = io('https://niniesocial.herokuapp.com//', {
//   withCredentials: true,
//   transports: ['websocket']
// })

const socket = io('https://niniesocial.herokuapp.com/', {
  withCredentials: true,
  transports: ['websocket']

})

const SocketContext = createContext(socket)

export const SocketProvider = ({ children }: Children) => {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketContext
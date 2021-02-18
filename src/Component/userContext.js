import React from 'react'

// Here we can add a default value 
// Default value is only used when there is no matching value  provider above it in componenet tree
// const UserContext = React.createContext('React js')

const UserContext = React.createContext()


const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
 export default UserContext
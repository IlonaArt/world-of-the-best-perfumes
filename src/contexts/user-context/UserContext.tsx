import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { User } from '../../interfaces'

interface UserContextType {
  user: User
  updateUser: (user: User | null) => void
  login: (user: User) => void
  logout: () => void
}

const UserContext = createContext<UserContextType>(null)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const user = window.localStorage.getItem('loggedIn')
    if (!user) return

    setCurrentUser(JSON.parse(user))
  }, [])

  const updateUser = useCallback((user: User | null) => {
    setCurrentUser(user)
    if (user) {
      window.localStorage.setItem('loggedIn', JSON.stringify(user))
    } else {
      window.localStorage.removeItem('loggedIn')
    }
  }, [])

  const login = useCallback((user: User) => {
    updateUser(user)
  }, [])

  const logout = useCallback(() => {
    updateUser(null)
  }, [])

  const value = { user: currentUser, updateUser, login, logout }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within a UserContextProvider')
  }

  return context
}

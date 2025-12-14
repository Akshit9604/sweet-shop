export const getToken = () => localStorage.getItem('token')
export const getUsername = () => localStorage.getItem('username')
export const getUserRole = () => localStorage.getItem('role')

export const setAuth = (token, username, role) => {
  localStorage.setItem('token', token)
  localStorage.setItem('username', username)
  localStorage.setItem('role', role)
}

export const clearAuth = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('role')
}



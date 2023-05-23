const user = ref('Pablo')

export const useUser = () => {
  const setUser = (userInfo) => {
    user.value = userInfo
  }
  return [user, setUser]
}
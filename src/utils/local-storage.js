const ACCESS_TOKEN = "ACCESS_TOKEN"
export const AddAccessToken = token => localStorage.setItem(ACCESS_TOKEN, token)
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN)
export const RemoveAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)

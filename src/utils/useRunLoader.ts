export const getLoaderState = () => {
  return sessionStorage.getItem('isrunloader')
}

export const setLoaderState = (val: string) => {
  sessionStorage.setItem('isrunloader', val)
}

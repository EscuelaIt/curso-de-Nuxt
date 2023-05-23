export const useName = (name = 'Pepe') => {

  return useState('name', () => name)
}
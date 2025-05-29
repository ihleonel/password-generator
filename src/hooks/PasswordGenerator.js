export default function usePasswordGenerator() {
  const password = Math.random().toString(36).slice(-8)
  return password
}

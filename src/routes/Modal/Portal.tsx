import reactDom from 'react-dom'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const Portal = ({ children }: Props) => {
  const el = document.getElementById('modal')
  if (!el) return null
  return reactDom.createPortal(children, el)
}

export default Portal

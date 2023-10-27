import React from 'react'
export const metadata = {
  title: 'Clothes',
  openGraph: {
    title: 'Acme',
    description: 'this is a list of clothes',
  },
}
const layout = ({children}) => {
  return (
    <div><h1>layout</h1>
        {children}
    </div>
  )
}

export default layout
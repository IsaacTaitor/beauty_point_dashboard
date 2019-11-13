import React from 'react'

export default function Place({ children }: any) {

  return (
    <div
      style={{
        borderLeft: "1px double black",
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}
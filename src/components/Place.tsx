import React from 'react'

export default function Place({ children }: any) {

  return (
    <div
      style={{
        border: "1px dashed #D7D9DC",
        height: '100%',
        width: '100%'
      }}
    >
      {children}
    </div>
  )
}
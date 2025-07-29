import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`w-full h-full max-w-[1200px]   mx-auto px-4 lg:px-0 ${className}`}>{children}</div>
  )
}

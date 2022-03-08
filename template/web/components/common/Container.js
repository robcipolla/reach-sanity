import React from 'react'

/**
 * Container component
 */
export default function Container({children}) {
  return (
    <div className="max-w-[1200px] mx-auto">{children}</div>
  )
}

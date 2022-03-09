import React from 'react'

/**
 * Container component
 */
export default function Container({children}) {
  return (
    <div className="max-w-[1200px] mx-auto px-4">{children}</div>
  )
}

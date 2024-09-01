import React from 'react'

export default function ButtonCta({children,...props}) {
  return (
    <button {...props} className="py-3 px-2 w-full bg-main-button text-white shadow font-medium rounded-full">{children}</button>
  )
}

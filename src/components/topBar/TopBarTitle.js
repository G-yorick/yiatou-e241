import React from 'react'
import TopBarLayout from '../../pages/layout/TopBarLayout'

export default function TopBarTitle({title}) {
  return (
    <TopBarLayout>
        <h2 className='text-lg font-medium'>{title}</h2>
    </TopBarLayout>
  )
}

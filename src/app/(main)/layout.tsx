
'use client'
import React, { useState } from 'react'
import MenuOptions from '@/components/sidebar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex overflow-hidden h-screen">
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'w-[250px]' : 'w-[60px]'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <MenuOptions isExpanded={isExpanded} />
      </div>
      <div className="flex-1 overflow-auto">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
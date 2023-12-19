import React from 'react'
import {TerminaIcon} from '@heroicons/react'

const Header = () => {

  return (
    <header>
        <div>
            <p className='flex items center space-x-1 text-blue-600'>
                   <TerminaIcon />
                   <span>Pays</span>
            </p>

        </div>
    </header>
    
  )
}

export default Header
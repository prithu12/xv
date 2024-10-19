import React from 'react'
import Topbar from '@/components/layout/Topbar'
import Convert from '@/components/models/secondfeature/pages/LearnSign'

export default function page() {
    return (
        <div>
            <Topbar />
            <div className='text-center my-12'>
                <h1 className='font-semibold'>Convert Your Text/Speech into SignLanguage with Ehsaas</h1>
                <p className='w-[40rem] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corrupti ipsum voluptatibus rerum amet accusamus beatae voluptatem commodi dolorum libero impedit at maxime minima veniam, alias, porro deserunt laborum culpa.</p>
            </div>
            <Convert />
        </div>
    )
}

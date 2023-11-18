import SearchInput from '@/components/search-input'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function RootPage() {
    return (
        <div className='h-full items-center  p-4'>

            <SearchInput/>
            RootPage (Protected)
        </div>

    )
}

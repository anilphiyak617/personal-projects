"use client"

import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'
import queryString from 'query-string'

function SearchInput() {

    const router = useRouter()
    const searchParams = useSearchParams();
    const name = searchParams.get('name')

    const [value, setValue] = useState<string>(name || '')
    const debouncedValue = useDebounce(value, 500);
    
    const categoryId = searchParams.get('categoryId')

    useEffect(() => {
        console.log('Database Query called.....: ' + debouncedValue)

        const query = {
            name: debouncedValue,
            catergoryId : categoryId,
        }

        // genrating url with  given query parameters
        const URL = queryString.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString:true ,skipNull:true} );
        router.push(URL)

    }, [debouncedValue])

    const changeHandler:ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
        console.log(value)
    }
  return (
      <div className='relative'>
          <Search className='absolute h-4 w-4 top-3 left-4' />
          <Input onChange={changeHandler} placeholder='Search...'
          className='pl-10 bg-primary/10'/>
      </div>
  )
}

export default SearchInput
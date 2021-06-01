import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = ()=>{
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState([])

  const fetchdata = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    
    setdata(paginate(data))
    setLoading(false)
    
  }
  useEffect(()=>{
    fetchdata()
  }, []);

  return { data, loading }
}


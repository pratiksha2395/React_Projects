import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading, data}= useFetch();
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  console.log(data)

  useEffect(()=>{
    if(loading) return
    setFollowers(data[page])
  }, [loading, page])

  const handleChange = (index)=>{
    setPage(index)
  }
  const nextPage =()=>{
    setPage((oldPage)=>{
      let nextPage = oldPage +1
      if(nextPage > data.length -1){
        nextPage =0
      }
      return nextPage
    })
  }
  const prevPage =()=>{
    setPage((oldPage)=>{
      let prevPage = oldPage - 1
      if(prevPage < 0){
        prevPage = data.length -1
      }
      return prevPage
    })
  }
  return <main>
    <div className="section-title">
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map((single)=>{
          return <Follower key={single.id} {...single}/>
        })}
      </div>
      {!loading && 
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {
          data.map((item, index)=>{
            return <button key={index} className={`page-btn ${index === page ? 'active-btn' : null}`} 
            onClick={()=> handleChange(index)}>
              {index+1}</button>
          })
        }
        <button className="prev-btn" onClick={nextPage}>
          next
        </button>
      </div>}
    </section>
  </main>
}

export default App
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({itemList, removeItem, editItem}) => {
  return <>
  <div className="grocery-list">
    {
      itemList.map((item)=>{
        const {id, title} =item
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn"> 
                  <FaEdit onClick={()=>{editItem(id)}} />
              </button>
              <button className="delete-btn"> 
                  <FaTrash onClick={()=>removeItem(id)}/>
              </button>
            </div>
          </article>
        )
      })
    }
  </div>
  </>
}

export default List

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let itemList2 = localStorage.getItem('itemList')
  if(itemList2){
    const data=localStorage.getItem('itemList')
    return (itemList2 = JSON.parse(data));
  }
  else{
    return [];
  }
}
function App() {
  const [name, setName] = useState('')
  const [itemList, setItemList] = useState(getLocalStorage())
  const [isEditing, setisEditing]= useState(false)
  const [editId, setEditId] =useState(null)
  const [alertmsg, setAlertmsg] = useState({show:false, msg:'', type:''}) //this fora alerting after adding or deleting

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!name){
      console.log("clicked")
      showAlert(true, "Please Enter the input", 'danger')
    }
    else if(name && isEditing ){
      setItemList(itemList.map((item)=>{
        if(item.id === editId){
          return { ...item, title:name};
        }
        return item;
      })
      );
      setName('')
      setEditId(null)
      setisEditing(false)
      showAlert(true, "value changed", "success")
    }
    else {
      showAlert(true, "Item added to the list", "success")
      const newItem = {id:new Date().getTime().toString(), title:name}
      setItemList(()=>{
        return [...itemList, newItem]
      })
      setName('')
    }
    
  }
  const showAlert =(show='false', msg='', type='')=>{
    console.log(show)
    setAlertmsg({show, msg, type});
    console.log(alertmsg)
  }
  const removeItem =(id)=>{
    showAlert(true, "item deleted", "danger")
    setItemList(itemList.filter((item)=> item.id !== id))
  }
  const editItem =(id)=>{
    const specificItem = itemList.find((item)=> item.id === id)
    setisEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }
  useEffect(()=>{
   localStorage.setItem('itemList', JSON.stringify(itemList)) ;
  }, [itemList]);

  return <>
  <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}> 
    {alertmsg.show && <Alert {...alertmsg} removeAlert={showAlert} list={itemList}/>}
    <h3>Grocery Bud</h3>
    <div className="form-control">
      <input type="text" className="grocery" placeholder="e.g eggs" value={name}
      onChange={(e)=> setName(e.target.value)}
      ></input>
      <button type="submit" className="submit-btn">
        {isEditing ? 'edit' : 'submit'}
      </button>
    </div>
    </form>
    {
      itemList.length >0 && (
        <div className="grocery-container">
      <List itemList={itemList} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={()=>{
        setItemList([]);
        showAlert(true, "Empty list", "danger")
      }}>
        Clear Items Value
      </button>
    </div>
      )
    }
    
  </section>
  </>
}

export default App

import React from 'react'
import {Link, Route,Routes,NavLink } from "react-router-dom"
import OKTodo from './OKTodo'
import NoTodo from './NoTodo'
import AllTodo from "./AllTodo"

import "./framework.css"
import {getFinishedList,checkTodo,getUnFinishedList,getAllList,deleteTodo,updateTodo,createTodo} from "./GLhandler"
import { useQuery,useMutation } from '@apollo/client';


function Getcheckbox(deleteTodoFunction){
  let Arr = document.querySelectorAll(".checkBox")
  Arr.forEach(e=>{
   if(e.checked===true){
    deleteTodoFunction({variables:{id:e.value}})
   }
  })
  }
  function CreateTodo(createTodoFunction){
    const AddData = document.getElementById("AddData")
    if(AddData.value.length>0){
      createTodoFunction({variables:{todo:AddData.value}})
    }
  }





export default function Framework() {

  const {  data:FinishedData,refetch:Frefetch } = useQuery(getFinishedList);
  const {  data:AllListData,refetch:Allrefetch } = useQuery(getAllList);
  const {  data :UnFinishedData ,refetch:UFrefetch} = useQuery(getUnFinishedList);
  const [mutateFunction] = useMutation(checkTodo);
  const [deleteTodoFunction] = useMutation(deleteTodo);
  const [updateTodoFunction] = useMutation(updateTodo);
  const [createTodoFunction] = useMutation(createTodo);
  return (
  <div>
  <div className='Navigation'>
    <li><NavLink  to={"AllTodo"}>AllTodo</NavLink></li>
    <li><Link to={"NoTodo"}>NoTodo</Link></li>
    <li><Link to={"OKTodo"}>OKTodo</Link></li>
    </div>
    <div className='Box'>
  <div className='head'>MyTodoList</div>

    <div className='InfoBox'>
      


<div className='todo'>
  <div className='BtnBox'>
    <i>要件追加 :</i>
    <input id ="AddData" placeholder='要件を入力してください'></input>
    <button  onClick={()=>{CreateTodo(createTodoFunction)}}>Add</button>
    <button  onClick={()=>{Getcheckbox(deleteTodoFunction)}}>delete</button>
    </div>
<Routes>
    <Route className="test" path='/AllTodo' element={<AllTodo data={AllListData} refetch={Allrefetch}  mutateFunction={mutateFunction} updateTodoFunction={updateTodoFunction}  />} />
    <Route path='/NoTodo' element={<NoTodo data={UnFinishedData} refetch={UFrefetch} refetch2={Frefetch}  mutateFunction={mutateFunction} />} />
    <Route path='/OKTodo' element={<OKTodo data={FinishedData} refetch={Frefetch}   refetch2={UFrefetch} mutateFunction={mutateFunction}/>} />
    </Routes>

</div>
    </div>
  </div></div>
)
}

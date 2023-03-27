import React from 'react'
import "./TodoElement.css"



export default function OKTodo(props) {
  const { data, refetch, mutateFunction, refetch2 } = props
  refetch()
  let index = 0
  return (
    <div>
      <div className='ListTitle'>FinishedList</div>
      {data && (data.getFinishedList.map(e => {
        index++
        return (<div className='todoElement' key={e._id}>
          <li><i><input type='checkbox' className='checkBox' value={e._id} /></i><i>{index}</i><i>{e.todo}</i><i><button onClick={() => {
            mutateFunction({ variables: { id: e._id, status: false } })
            refetch()
            refetch2()
          }}>ok</button></i></li>
        </div>)
      }))}
    </div>
  )
}

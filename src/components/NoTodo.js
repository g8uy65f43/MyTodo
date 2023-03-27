import React from 'react'
import "./TodoElement.css"
export default function NoTodo(props) {
  const { data, refetch, mutateFunction, refetch2 } = props
  let index = 0
  refetch()
  return (
    <div>
      <div className='ListTitle'>UnFinishedList</div>
      {data && (data.getUnFinishedList.map(e => {
        index++
        return (<div className='todoElement' key={e._id}>
          <li><i><input type='checkbox' className='checkBox' value={e._id} /></i><i>{index}</i><i>{e.todo}</i><i><button onClick={() => {
            mutateFunction({ variables: { id: e._id, status: true } })
            refetch()
            refetch2()
          }}>ok</button></i></li>
        </div>)
      }))}
    </div>
  )
}

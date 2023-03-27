import React from 'react'
import "./TodoElement.css"

//ダブルタップでアップデート
function domChange(e, refetch, updateTodoFunction) {
  let TextDom = document.getElementById(e._id)
  TextDom.innerHTML = `<input value=${e.todo}>`
  TextDom.childNodes[0].focus()
  TextDom.childNodes[0].addEventListener("blur", () => {
    updateTodoFunction({ variables: { id: e._id, todo: TextDom.childNodes[0].value } })
    if (TextDom.childNodes[0].value.length > 0) {
      TextDom.innerHTML = TextDom.childNodes[0].value
      refetch()
    } else {
      TextDom.innerHTML = `${e.todo}`
    }
  })

}

export default function AllTodo(props) {
  const { data, refetch, mutateFunction, updateTodoFunction } = props
  refetch()
  let OKindex = 0
  let NOindex = 0
  return (
    <>
      <div>
        <div className='ListTitle'>
          UnFinishedList
        </div>
        {data && (data.getAllList.map(e => {
          if (e.status === false) {
            NOindex++
            return (<div className='todoElement' key={e._id}>
              <li onDoubleClick={() => { domChange(e, refetch, updateTodoFunction) }}>
                <i>
                  <input type='checkbox' className='checkBox' value={e._id} />
                </i><i>{NOindex}
                </i>
                <i id={e._id}>{e.todo}</i>
                <i>
                  <button onClick={() => {
                    mutateFunction({ variables: { id: e._id, status: true } })
                  }}>ok</button>
                </i>
              </li>
            </div>)
          }
          return null

        }))}
      </div>
      <div>

        <div className='ListTitle'>FinishedList</div>
        {data && (data.getAllList.map(e => {
          if (e.status === true) {
            OKindex++
            return (<div className='todoElement' key={e._id}>
              <li onDoubleClick={() => { domChange(e, refetch, updateTodoFunction) }
              }>
                <i>
                  <input type='checkbox' className='checkBox' value={e._id} />
                </i>
                <i>{OKindex}</i>
                <i id={e._id}>{e.todo}</i>
                <i>
                  <button onClick={() => {
                    mutateFunction({ variables: { id: e._id, status: false } })
                  }}>ok
                  </button>
                </i>
              </li>
            </div>)
          }
          return null
        }))}
      </div>

    </>
  )
}

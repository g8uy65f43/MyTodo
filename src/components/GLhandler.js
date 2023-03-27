import { gql } from '@apollo/client';

const getUnFinishedList = gql`
query   {
  getUnFinishedList {
    todo
    status
    _id
  }
}
  `
const getAllList = gql`
  query   {
    getAllList {
      todo
      status
      _id
    }
  }
    `

const checkTodo = gql`
  mutation ($id:String!,$status:Boolean!)   {
    checkTodo(id:$id,status:$status) {
      todo
      status
      _id
    } 
  }
    `
const deleteTodo = gql`
    mutation ($id:String!)   {
      deleteTodo(id:$id) 
    }
      `

const updateTodo = gql`
    mutation ($id:String!,$todo:String!)   {
      updateTodo(id:$id,todo:$todo) {
          todo
          status
          _id
         
      }
    }
      `
const getFinishedList = gql`
query   {
  getFinishedList {
    todo
    status
    _id
  }
}
  `
const createTodo = gql`
  mutation ($todo:String!)   {
    createTodo(todo:$todo) {
      todo
      status
      _id
    }
  }
    `
export {
  getFinishedList,
  checkTodo,
  getUnFinishedList,
  getAllList,
  deleteTodo,
  updateTodo,
  createTodo
}
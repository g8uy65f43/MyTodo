const express = require("express")
const { buildSchema } = require("graphql")
const graphqlHttp = require("express-graphql")
var cors = require('cors')
//サーバーに繋がる
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/MyTodo", { useNewUrlParser: true, useUnifiedTopology: true })
let TodoModel = mongoose.model("TodoData", new mongoose.Schema({
    todo : String,
    status: Boolean,
}))

var Schema = buildSchema(
    `
type TodoData{
    todo : String,
    status: Boolean,
    _id:String
}
type Query{
    getAllList:[TodoData],
    getUnFinishedList:[TodoData],
    getFinishedList:[TodoData],
}
type Mutation{
   createTodo(todo:String!):[TodoData],
   updateTodo(id:String!,todo:String!):TodoData,
   checkTodo(id:String!,status:Boolean!):TodoData,
   deleteTodo(id:String!):Int
}
`)
const root = {
    //全データをゲット
    getAllList() {
        return TodoModel.find()
    },
    //完成してないデータをゲット
    getUnFinishedList() {
        return TodoModel.find({status:false}).exec()
    },
    //完成したデータをゲット
    getFinishedList() {
        return TodoModel.find({status:true}).exec()
    },

    //データ作り
    createTodo(todo) {

        return TodoModel.create({
            ...todo,status:false
        }).then(res=> TodoModel.find())
        //TodoModel.createが返したデータはちょうどPromiseです
    },
    //アップデート
    updateTodo({ id,todo }) {
        return TodoModel.updateOne({
            _id: id
        }, {
            todo
        }).then(res => TodoModel.find({ _id: id }).then(res => res[0]))
    },
    //削除データ
    deleteTodo({ id }) {
        return TodoModel.deleteOne({ _id: id }).then(res => 1)
    },
    checkTodo({ id,status }) {
        return TodoModel.updateOne({
            _id: id
        }, {
            status
        }).then(res => TodoModel.find({ _id: id }).then(res => res[0]))
    },
}
var app = express()
app.use(cors())
app.use("/graphql", graphqlHttp({
    schema: Schema,
    rootValue: root,
    graphiql: true
}))
app.use("/", (req,res)=>{
    res.send("test")
})
app.use(express.static("public"))

app.listen(3001, () => {
    console.log("localhost:3001")
})


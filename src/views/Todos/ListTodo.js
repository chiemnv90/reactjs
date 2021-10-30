import React from 'react';
import './ListTodos.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: "todo1", title: "Todo Something 01" },
            { id: "todo2", title: "Todo Something 02" },
            { id: "todo3", title: "Todo Something 03" }
        ],
        editTodo: {}
    }

    addNewTodo = (job) => {
        this.setState({
            listTodo: [...this.state.listTodo, job]
        })

        toast.success("Add success!")
    }

    handlEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) { // Save

            let listTodoCopy = [...listTodo]; // Copy array
            let objIndex = listTodoCopy.findIndex((item => item.id == todo.id));

            listTodoCopy[objIndex].title = editTodo.title

            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Save success!")
            return;
        }

        //Edit
        this.setState({
            editTodo: todo
        })
    }

    handlDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo
        });
        toast.success("Delete success!")
    }

    handlChangeEvent = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;

        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // console.log("check Obj Empty: ", isEmptyObj)
        return (
            <>
                <p>
                    Todo Apps &amp; list Todo
                </p>
                <div className="list-todo-contanier">
                    <AddTodo addNewTodo={this.addNewTodo} />

                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handlChangeEvent(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title} </span>
                                                }
                                            </>

                                        }
                                        <div className="button-action">
                                            <button className="edit"
                                                onClick={() => this.handlEditTodo(item)}
                                            >
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                    "Save" : "Edit"
                                                }
                                            </button>
                                            <button className="delete" onClick={() => this.handlDeleteTodo(item)}>Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;
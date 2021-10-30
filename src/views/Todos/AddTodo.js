import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handlChangTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handlAddNew = () => {
        if (!this.state.title) {
            toast.error("Missing required param")
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text" onChange={(event) => this.handlChangTitle(event)} value={this.state.title} />
                    <button type="button" className="add" onClick={() => this.handlAddNew()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo;
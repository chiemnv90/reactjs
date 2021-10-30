import React from 'react';

class AddConponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitlejob = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }


    handlSubmit = (event) => {
        event.preventDefault();
        console.log("value", this.state)
        if (!this.state.title || !this.state.salary) {
            alert("missing required param")
            return;
        }
        this.props.AddnewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary,
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's Title:</label><br />
                    <input type="text" onChange={(event) => this.handleChangeTitlejob(event)}
                        value={this.state.title} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" onChange={(event) => this.handleChangeSalary(event)}
                        value={this.state.salary} />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handlSubmit(event)}
                    />
                </form>
            </>
        );
    }
}

export default AddConponent;
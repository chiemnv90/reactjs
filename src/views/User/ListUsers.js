import React from "react";
import axios from "axios";
import './listUsers.scss';
import { withRouter } from "react-router-dom";

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handlEventDetail = (user) => {
        // console.log("User: ", this.props)
        this.props.history.push(`/user/${user.id}`) // redirect link
    }


    render() {
        let { listUsers } = this.state;
        return (
            <>
                <div className="fill-users">Fill List Users</div>
                <div className="list-users-container">
                    <div className="list-users-content">
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <div className="child" key={item.id}
                                        onClick={() => this.handlEventDetail(item)}
                                    >
                                        {index + 1} - {item.first_name} {item.last_name}
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

export default withRouter(ListUsers);
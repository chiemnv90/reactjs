import React from "react";
import { render } from "sass";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/logo_resize.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("todo") // redirect link
        // }, 3000);
    }

    hanldDeleteUser = (user) => {
        console.log("check delete: ", user)
        this.props.deleteUsersRedux(user);
    }

    hanldCreateUser = () => {
        this.props.createUsersRedux();
    }

    render() {
        console.log("check props: ", this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Wellcome!...</div>
                <div><img src={logo} /></div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} &nbsp;
                                    <span onClick={() => this.hanldDeleteUser(item)}>x</span>
                                    &nbsp;

                                </div>
                            )
                        })
                    }

                    <button onClick={() => this.hanldCreateUser()}>Add New</button>

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        deleteUsersRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUsersRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispathToProps)(Color(Home));
import React from "react";
import { render } from "sass";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";


class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("todo") // redirect link
        // }, 3000);
    }

    render() {
        console.log("check props: ", this.props)
        return (
            <>
                <div>Wellcome!...</div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);
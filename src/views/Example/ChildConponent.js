import React from "react";
import './Demo.scss'

class ChildConponent extends React.Component {
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnclickDelete = (job) => {
        console.log('handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrayJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false'
        return (
            <>
                {showJob === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrayJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} &nbsp;
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildConponent = (props) => {
//     let { arrayJobs } = props;
//     let a = '';
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     arrayJobs.map((item, index) => {
//                         if (item.salary >= 400) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }
//                     })
//                 }

//             </div>
//         </>
//     )
// }
export default ChildConponent;
import React from "react";
import ChildConponent from "./ChildConponent";
import AddConponent from "./AddConponent";

class Myconponent extends React.Component {

    state = {
        arrayJobs: [
            { id: "abcJob1", title: "Deverloper", salary: '500' },
            { id: "abcJob2", title: "Test", salary: '400' },
            { id: "abcJob3", title: "BH", salary: '100' },
        ]
    }

    AddnewJob = (job) => {
        console.log('check jon from Child:', job)
        // let currentJob = this.state.arrayJobs;
        // currentJob.push(job)
        this.setState({
            arrayJobs: [...this.state.arrayJobs, job]
            // arrayJobs: currentJob
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrayJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrayJobs: currentJob,
        })
    }

    render() {
        let name = 'Ronaldo';
        return (
            <>
                <AddConponent
                    AddnewJob={this.AddnewJob}
                />

                <ChildConponent
                    arrayJobs={this.state.arrayJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}
export default Myconponent;
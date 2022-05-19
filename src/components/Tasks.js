import React, {Component} from 'react';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {tasks} = this.props;

        return (
            <div className="tasks-container">
                {
                    Object.keys(tasks).map((key) => {
                        return (
                            <div key={tasks[key].id} className="task-container input-pair">
                                <label htmlFor={tasks[key].text}>Tasks</label>
                                <input type="text" name={tasks[key].text} placeholder="1 Sentence/Point"></input>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Tasks;
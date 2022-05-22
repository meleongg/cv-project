import React, {Component} from 'react';

class Wex extends Component {
    render() {
        const {id, company, position, city, from, to, tasks} = this.props;

        const replacedTasks = tasks.text.replace(/\n\r?/g, '\n');

        const replacedTasksArr = replacedTasks.split(/\n/);

        return (
            <div key={id} className="wex">
                <div className="wex-top">
                    <h1 className="company">{company.text}</h1>
                    <h1 className="city">{city.text}</h1>
                </div>
                <div className="wex-mid">
                    <h1 className="position">{position.text}</h1>
                    <h1 className="from-to">{`${from.text + " - " + to.text}`}</h1>
                </div>
                <div className="wex-btm">
                    <div className="tasks">
                        {
                        replacedTasksArr.map((task) => {
                            return <li key={task + id} className="task">{task}</li>
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Wex;
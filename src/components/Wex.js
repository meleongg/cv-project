import React, {Component} from 'react';

class Wex extends Component {
    render() {
        const {id, company, position, city, from, to, tasks} = this.props;

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
                    <h1 className="tasks">{`${tasks.text}`}</h1>
                </div>
            </div>
        );
    }
}

export default Wex;
import React, {Component} from 'react';

class Education extends Component {
    render() {
        const {id, institute, program, city, from, to, GPA} = this.props;

        return (
            <div key={id} className="education">
                <div className="education-top">
                    <h1 className="institute">{institute.text}</h1>
                    <h1 className="city">{city.text}</h1>
                </div>
                <div className="education-btm">
                    <h1 className="program-gpa">{`${program.text + ", " + GPA.text + " GPA"}`}</h1>
                    <h1 className="from-to">{`${from.text + " - " + to.text}`}</h1>
                </div>
            </div>
        );
    }
}

export default Education;
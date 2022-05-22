import React, {Component} from 'react';
import "../styles/Resume.css";
import GeneralInfo from './GeneralInfo';
import Education from './Educations';
import Wex from './Wex';

class Resume extends Component {
    render() {
        const {genInfo, edus, wexs} = this.props;

        return (
            <div id="resume">
                <GeneralInfo {...genInfo} />
                <h1 className="resume-heading">Education</h1>
                {
                    edus.map((edu) => {
                        return <Education key={edu.id} {...edu} />
                    })
                }
                <h1 className="resume-heading">Work Experience</h1>
                {
                    wexs.map((wex) => {
                        return <Wex key={wex.id} {...wex} />
                    })
                }
            </div>
        );
    }
}

export default Resume;
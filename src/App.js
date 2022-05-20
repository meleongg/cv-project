import "./styles/reset.css";
import "./styles/styles.css";
import React, { Component } from "react";
import uniqid from "uniqid";

import Header from "./components/Header";
import InfoCard from "./components/InfoCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: {
          text: "",
          id: uniqid()
        },
        email: {
          text: "",
          id: uniqid()
        },
        phone: {
          text: "",
          id: uniqid()
        },
        address: {
          text: "",
          id: uniqid()
        },
      },
      educations: [
        {
          id: uniqid(),
          institute: {
            text: "",
            id: uniqid()
          },
          program: {
            text: "",
            id: uniqid()
          },
          city: {
            text: "",
            id: uniqid()
          },
          from: {
            text: "",
            id: uniqid()
          },
          to: {
            text: "",
            id: uniqid()
          },
          GPA: {
            text: "",
            id: uniqid()
          },
        },
      ],
      wexs: [
        {
          id: uniqid(),
          company: {
            text: "",
            id: uniqid()
          },
          position: {
            text: "",
            id: uniqid()
          },
          city: {
            text: "",
            id: uniqid()
          },
          from: {
            text: "",
            id: uniqid()
          },
          to: {
            text: "",
            id: uniqid()
          },
          tasks: {
            tasks: [
              { 
                text: "",
                id: uniqid()
              },
            ], 
            id: uniqid()},
        },
      ],
    }

    this.addEducation = this.addEducation.bind(this);
    this.addWex = this.addWex.bind(this);
  }

  addEducation = (prevEdus) => {
    const newEdu = {
      id: uniqid(),
      institute: {
        text: "",
        id: uniqid()
      },
      program: {
        text: "",
        id: uniqid()
      },
      city: {
        text: "",
        id: uniqid()
      },
      from: {
        text: "",
        id: uniqid()
      },
      to: {
        text: "",
        id: uniqid()
      },
      GPA: {
        text: "",
        id: uniqid()
      },
    }

    this.setState({
      educations: [...prevEdus, newEdu], 
    });
  }

  addWex = (prevWexs) => {
    const newWex = {
      id: uniqid(),
      company: {
        text: "",
        id: uniqid()
      },
      position: {
        text: "",
        id: uniqid()
      },
      city: {
        text: "",
        id: uniqid()
      },
      from: {
        text: "",
        id: uniqid()
      },
      to: {
        text: "",
        id: uniqid()
      },
      tasks: {
        tasks: [
          { 
            text: "",
            id: uniqid()
          },
        ], 
        id: uniqid()},
    }

    this.setState({
      educations: [...prevWexs, newWex], 
    });
  }

  handleClick = (e) => {
    if (e.target.id === "add-edu-btn") {
      const prevEdus = this.state.educations;
      this.addEducation(prevEdus);
    }

    if (e.target.id === "add-wex-btn") {
      const prevWexs = this.state.wexs;
      this.addWex(prevWexs);
    }
  }

  render() {
    const {generalInfo, educations, wexs} = this.state; 

    return (
    <div id="main-container">
      <Header /> 
      <div id="inside-container">
        <InfoCard keyVal="gen-info-id" title="General Information" info={generalInfo} />
        {
          educations.map((edu) => {
            let eduCopy = Object.assign({}, edu);
            delete eduCopy["id"];
            return <InfoCard keyVal={edu.id} key={edu.id} title="Education" info={eduCopy} />
          })
        }
        <button onClick={this.handleClick} id="add-edu-btn">Add Education</button>
        {
          wexs.map((wex) => {
            let wexCopy = Object.assign({}, wex);
            delete wexCopy["id"];
            return <InfoCard keyVal={wex.id} key={wex.id} title="Work Experience" info={wexCopy} />
          })
        }
        <button onClick={this.handleClick} id="add-wex-btn">Add Work Experience</button>
      </div>
    </div>
  );
  }
}

export default App;

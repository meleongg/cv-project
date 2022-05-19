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
  }

  render() {
    const {generalInfo, educations, wexs} = this.state; 

    return (
    <div id="main-container">
      <Header /> 
      <div id="inside-container">
        <InfoCard title="General Information" info={generalInfo} />
        {
          educations.map((edu) => {
            let eduCopy = Object.assign({}, edu);
            delete eduCopy["id"];
            return <InfoCard key={edu.id} title="Education" info={eduCopy} />
          })
        }
        {
          wexs.map((wex) => {
            let wexCopy = Object.assign({}, wex);
            delete wexCopy["id"];
            return <InfoCard key={wex.id} title="Work Experience" info={wexCopy} />
          })
        }
      </div>
    </div>
  );
  }
}

export default App;

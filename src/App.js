import "./styles/reset.css";
import "./styles/styles.css";
import React, { Component } from "react";
import uniqid from "uniqid";

import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import Resume from "./components/Resume";

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
      showHideForm: true, 
      showHideResume: false, 
    }

    this.addEducation = this.addEducation.bind(this);
    this.addWex = this.addWex.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
    this.deleteWex = this.deleteWex.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    this.toggleResumeVisibility = this.toggleResumeVisibility.bind(this);
    this.updateGenInfo = this.updateGenInfo.bind(this);
    this.updateEdus = this.updateEdus.bind(this);
    this.updateWexs = this.updateWexs.bind(this);
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
        text: "",
        id: uniqid()
      },
    }

    this.setState({
      wexs: [...prevWexs, newWex], 
    });
  }

  deleteEdu = (eduId) => {
    const edus = this.state.educations;
    const filtered = edus.filter((edu) => {
      return (edu.id === eduId);
    });
    const filteredIndex = edus.findIndex((edu) => {
      return (edu.id === filtered.id);
    });
    edus.splice(filteredIndex, 1);
    this.setState({
      edus: edus,
    });
  }

  deleteWex = (wexId) => {
    const wexs = this.state.wexs;
    const filtered = wexs.filter((wex) => {
      return (wex.id === wexId);
    });
    const filteredIndex = wexs.findIndex((wex) => {
      return (wex.id === filtered.id);
    });
    wexs.splice(filteredIndex, 1);
    this.setState({
      wexs: wexs, 
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
    
    if (e.target.id === "submit-btn") {
      this.toggleFormVisibility(this.state.showHideForm);
      this.toggleResumeVisibility(this.state.showHideResume);
      this.updateInfo(e);
    }
    
    if (e.target.id === "edit-btn") {
      this.toggleFormVisibility(this.state.showHideForm);
      this.toggleResumeVisibility(this.state.showHideResume);
    }
  }

  updateGenInfo = (form, prevGenInfo) => {
    const name = form.name.value; 
    const nameId = prevGenInfo.name.id;
    const email = form.email.value; 
    const emailId = prevGenInfo.email.id;
    const phone = form.phone.value; 
    const phoneId = prevGenInfo.phone.id;
    const address = form.address.value; 
    const addressId = prevGenInfo.address.id;

    this.setState({
      generalInfo: {
        name: {
          text: name, 
          id: nameId
        },
        email: {
          text: email, 
          id: emailId
        },
        phone: {
          text: phone, 
          id: phoneId
        },
        address: {
          text: address, 
          id: addressId
        },
      }
    });
  }

  updateEdu = (form, id) => {
    const edus = this.state.educations; 
    const filteredArr = edus.filter((edu) => {
      return (id === edu.id);
    });
    const filtered = filteredArr[0];
    const institute = form.institute.value; 
    const instituteId = filtered.institute.id; 
    const program = form.program.value;
    const programId = filtered.program.id; 
    const city = form.city.value;
    const cityId = filtered.city.id; 
    const from = form.from.value;
    const fromId = filtered.from.id; 
    const to = form.to.value;
    const toId = filtered.to.id; 
    const gpa = form.GPA.value;
    const gpaId = filtered.GPA.id; 

    return {
      id: id, 
      institute: {
        text: institute,
        id: instituteId,
      },
      program: {
        text: program,
        id: programId, 
      },
      city: {
        text: city,
        id: cityId, 
      },
      from: {
        text: from,
        id: fromId, 
      },
      to: {
        text: to,
        id: toId, 
      },
      GPA: {
        text: gpa,
        id: gpaId, 
      }, 
    }
  }

  updateEdus = (edus) => {
    this.setState({
      educations: edus, 
    });
  }

  updateWex = (form, id) => {
    const wexs = this.state.wexs; 
    const filteredArr = wexs.filter((wex) => {
      return (id === wex.id);
    });
    const filtered = filteredArr[0];
    const company = form.company.value; 
    const companyId = filtered.company.id; 
    const position = form.position.value;
    const positionId = filtered.position.id; 
    const city = form.city.value;
    const cityId = filtered.city.id; 
    const from = form.from.value;
    const fromId = filtered.from.id; 
    const to = form.to.value;
    const toId = filtered.to.id; 
    const tasks = form.tasks.value;
    const tasksId = filtered.tasks.id; 

    return {
      id: id, 
      company: {
        text: company,
        id: companyId,
      },
      position: {
        text: position,
        id: positionId, 
      },
      city: {
        text: city,
        id: cityId, 
      },
      from: {
        text: from,
        id: fromId, 
      },
      to: {
        text: to,
        id: toId, 
      },
      tasks: {
        text: tasks,
        id: tasksId, 
      }, 
    }
  }

  updateWexs = (wexs) => {
    this.setState({
      wexs: wexs, 
    });
  }

  updateInfo = (e) => {
    const insideContainer = e.target.parentNode;

    const genInfo = insideContainer.children[0];

    const genInfoForm = genInfo.children[1];

    let edus = [];
    let wexs = [];

    for (let i=0; i<insideContainer.children.length; i++) {
      let ithElm = insideContainer.children[i];

      if (ithElm.nodeName !== "BUTTON" && ithElm.id !== "gen-info-id") {
        if (ithElm.classList.contains("Education")) {
          const eduId = ithElm.id;
          const eduForm = ithElm.children[1];

          const updatedEdu = this.updateEdu(eduForm, eduId);
          edus.push(updatedEdu);
        } else if (ithElm.classList.contains("Experience")) {
          const wexId = ithElm.id;
          const wexForm = ithElm.children[1];

          const updatedWex = this.updateWex(wexForm, wexId);
          wexs.push(updatedWex);
        }
      }
    }

    this.updateEdus(edus);
    this.updateWexs(wexs);

    const prevGenInfo = this.state.generalInfo; 
   
    this.updateGenInfo(genInfoForm, prevGenInfo);
  }

  toggleFormVisibility = (prevShowHideForm) => {
    this.setState({
      showHideForm: !prevShowHideForm, 
    });
  }

  toggleResumeVisibility = (prevShowHideResume) => {
    this.setState({
      showHideResume: !prevShowHideResume, 
    });
  }

  render() {
    const {generalInfo, educations, wexs, showHideForm, showHideResume} = this.state; 

    return (
    <div id="main-container">
      <Header /> 
      {showHideForm &&
      <div id="inside-container">
        <InfoCard keyVal="gen-info-id" title="General Information" info={generalInfo} />
        {
          educations.map((edu) => {
            let eduCopy = Object.assign({}, edu);
            delete eduCopy["id"];
            return <InfoCard keyVal={edu.id} key={edu.id} title="Education" info={eduCopy} deleteEdu={this.deleteEdu} />
          })
        }
        <button onClick={this.handleClick} id="add-edu-btn">Add Education</button>
        {
          wexs.map((wex) => {
            let wexCopy = Object.assign({}, wex);
            delete wexCopy["id"];
            return <InfoCard keyVal={wex.id} key={wex.id} title="Work Experience" info={wexCopy} deleteWex={this.deleteWex} />
          })
        }
        <button onClick={this.handleClick} id="add-wex-btn">Add Work Experience</button>
        <button onClick={this.handleClick} id="submit-btn">Preview</button>
      </div>
      }
      {showHideResume &&
        <div id="inside-container">  
          <button onClick={this.handleClick} id="edit-btn">Edit Information</button>
          <Resume genInfo={generalInfo} edus={educations} wexs={wexs} />
        </div>  
      }
    </div>
  );
  }
}

export default App;

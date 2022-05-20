import React, { Component } from 'react';
import "../styles/InfoCard.css";
import Tasks from "./Tasks";
import Title from "./Title";

class InfoCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { keyVal, title, info } = this.props; 

        return (
            <div className="card" key={keyVal} id={keyVal}>
                <Title title={title} />
                <form>
                    {
                        Object.keys(info).map((key) => {
                            if (key === "email") {
                                return (
                                    <div key={info[key].id} className="input-pair">
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</label>
                                        <input type="email" name={key} placeholder={key.charAt(0).toUpperCase() + key.substring(1) + "..."}></input>
                                    </div>
                                );
                            } else if (key === "tasks") {
                                return (
                                    <Tasks key={info[key]["id"]} tasks={info[key]["tasks"]} />
                                );
                            } else if (key === "program") {
                                return (
                                    <div key={info[key].id} className="input-pair">
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</label>
                                        <input type="text" name={key} placeholder="e.g. Bachelor's Degree in Biology"></input>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={info[key].id} className="input-pair">
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</label>
                                        <input type="text" name={key} placeholder={key.charAt(0).toUpperCase() + key.substring(1) + "..."}></input>
                                    </div>
                                );
                            }
                        })
                    }
                </form>
            </div>
        );
    }
}

export default InfoCard;
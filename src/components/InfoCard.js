import React, { Component } from 'react';
import "../styles/InfoCard.css";
import Tasks from "./Tasks";

class InfoCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, info } = this.props; 

        return (
            <div className="card">
                <h1 className="card-title">{title}</h1>
                <form>
                    {
                        Object.keys(info).map((key) => {
                            if (key === "email") {
                                return (
                                    <div key={info[key].id} className="input-pair">
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</label>
                                        <input type="email" name={key} placeholder={key + "..."}></input>
                                    </div>
                                );
                            } else if (key === "tasks") {
                                return (
                                    <Tasks key={info[key]["id"]} tasks={info[key]["tasks"]} />
                                );
                            } else {
                                return (
                                    <div key={info[key].id} className="input-pair">
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</label>
                                        <input type="text" name={key} placeholder={key + "..."}></input>
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
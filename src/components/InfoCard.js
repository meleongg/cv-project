import React, { Component } from 'react';
import "../styles/InfoCard.css";
import Title from "./Title";

class InfoCard extends Component {
    constructor(props) {
        super(props);

        this.detectDelete = this.detectDelete.bind(this);
    }

    detectDelete = (e) => {
        const card = e.target.parentNode.parentNode;
        const id = card.id; 

        if (card.classList.contains("Education")) {
            this.props.deleteEdu(id);
        }
        
        if (card.classList.contains("Experience")) {
            this.props.deleteWex(id);
        }
    }

    detectEduId = (e) => {
        const wexId = e.target.parentNode.parentNode.parentNode.id; 
        this.props.addTask(wexId);
    }

    render() {
        const { keyVal, title, info } = this.props; 

        return (
            <div className={`card ${title}`} key={keyVal} id={keyVal}>
                <Title title={title} detectDelete={this.detectDelete}/>
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
                                    <div key={info[key].id} className="input-pair">
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</label>
                                        <textarea type="textarea" name={key} placeholder="Write a few sentences..." rows="6"></textarea>
                                    </div>
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
import React, {Component} from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        const card = e.target.parentNode.parentNode;
        const id = card.id; 
        console.log(id)
    }

    render() {
        const {title} = this.props; 

        if (title === "General Information") {
            return (
                <h1 className="card-title">{title}</h1>
            );
        } else {
            return (
                <div className="card-title-w-trash">
                    <h1 className="card-title">{title}</h1>
                    <i onClick={this.handleClick} className="fa-solid fa-trash"></i>
                </div>
            );
        }
    }
}

export default Title
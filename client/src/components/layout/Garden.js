import React, { Component } from "react";

class Garden extends Component {
    addPlant () {
        // Add method for add plants to garden
    }
    render() {
    return (
        <div>
            <button onClick={this.addPlant()}>
                CLICK ME
            </button>
        </div>
        
    )
    }
}

export default Garden;


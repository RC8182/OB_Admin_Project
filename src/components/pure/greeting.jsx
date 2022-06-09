import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state={
            technology :"React"
        }
    }

    render() {
        return (
            <div>
                OB_Proyecto Admin con {this.state.technology}!
            </div>
        );
    }
}


Greeting.propTypes = {

};


export default Greeting;


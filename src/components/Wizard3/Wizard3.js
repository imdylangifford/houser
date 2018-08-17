import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard3 } from "../../ducks/reducers"
import axios from 'axios'

class Wizard3 extends Component {
    constructor(){
        super()

        this.state = {
            mortage: "",
            rent: ""  
        }
        this.addHouse = this.addHouse.bind(this)
        this.submitButton = this.submitButton.bind(this)
    }
    addHouse(){
        axios.post('http://localhost:4500/api/addhouse', {
            "name": this.props.name,
            "address": this.props.address,
            "state": this.props.state,
            "zip": this.props.zip,
            "image": this.props.image,
            "mortage": this.props.mortage,
            "rent": this.props.rent 
        }).then((response) => {
            console.log("yo")
        })
    }

    submitButton(){
        this.props.wizard3(this.state);
        this.addHouse();
    }
    render(){
        return(
            <div>Wizard3
                <input placeholder="Monthly Mortage Price" value={this.state.mortage}
                onChange={(e) => this.setState({mortage: e.target.value, rent: this.state.rent})}
                type="text"/>
                 <input placeholder="Desired Monthly Rent "  value={this.state.rent}
                onChange={(e) => this.setState({mortage: this.state.mortage, rent: e.target.value})}
                type="text"/>
                <Link to = './Wizard2'><button>Go Back</button></Link>
                <Link to ="/"><button onClick={this.submitButton}> Submit</button></Link>
                <Link to ="/"><button>Cancel</button></Link>

            </div>
        )
    }
}

function mapStateToProps( state ) {
    const {name, address, st, zip, image, mortage, rent} = state;

    return {
        name,
        address,
        st,
        zip,
        image,
        mortage,
        rent
    }
}


export default connect(mapStateToProps, {wizard3})(Wizard3)

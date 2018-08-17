import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import  { wizard1 } from "../../ducks/reducers"

class Wizard1 extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            address: "",
            state: "",
            zip: 0

        }
        this.clearValues = this.clearValues.bind(this);
    }
    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            state: this.props.st,
            zip: this.props.zip
        })
    }
 
    clearValues(){
        this.setState({
            name: "",
            address: "",
            state: "",
            zip: 0
        })
    }

    render(){
        return(
            <div>Wizard
                <input placeholder="name" 
                onChange={(e) => {this.setState({name: e.target.value})}} 
                type="text"
                value={this.state.name}/>

                <input placeholder="address" 
                onChange={(e) => {this.setState({address: e.target.value})}} 
                type="text"
                value={this.state.address}/>

                <input placeholder="state" 
                onChange={(e) => {this.setState({state: e.target.value})}}
                type="text"
                value={this.state.state}/>

                <input placeholder="zip" 
                onChange={(e) => {this.setState({zip: e.target.value})}} 
                type="text"
                value={this.state.zip}/>

                <Link to = './Wizard2'><button onClick={()=>{
                    this.props.wizard1(this.state)
                }}>Next Step</button></Link>
                <Link to ="/"><button>Cancel</button></Link>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { name, address, st, zip} = state;

    return {
        name,
        address,
        st,
        zip
    }
}


export default connect(mapStateToProps, {wizard1} )(Wizard1)
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { wizard2 } from "../../ducks/reducers"
class Wizard2 extends Component {
    constructor(){
        super()

        this.state = {
            img: ""
        }
    }
    render(){
        return(
            <div>
                <h1>Add Image</h1>
                <input onChange={(e)=> this.setState({img: e.target.value})} placeholder="image" type="text"/>
                <Link to="./Wizard1"><button >Go Back</button></Link>
                <Link to = './Wizard3'><button onClick={()=> 
                {    this.props.wizard2(this.state) }}
                >Next Step</button></Link>
                 <Link to ="/"><button>Cancel</button></Link>
            </div>
        )
    }
}

export default connect(null, {wizard2})(Wizard2)
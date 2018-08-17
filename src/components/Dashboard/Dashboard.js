import React, {Component} from 'react';
import House from "../House/House"
import axios from 'axios'
import { Link } from 'react-router-dom';

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
            getHouses(){
                axios.get('http://localhost:4500/api/houses/')
                .then((response) => {
                    this.setState({houses: response.data})
                })
            }

    componentDidMount(){
        this.getHouses();
        console.log("yosds")
    }


    render(){
        let displayHouses = this.state.houses.map((el, i) =>{
            return (
                <House key={i}  house={el} gethouses={this.getHouses}/>
            )
        })
        return (
            <div>
                Dashboard
                {displayHouses}
                <Link to='/wizard/Wizard1'><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard
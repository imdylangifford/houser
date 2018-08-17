import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Wizard1 from '../Wizard1/Wizard1'
import Wizard2 from '../Wizard2/Wizard2'
import Wizard3 from '../Wizard3/Wizard3'

class Wizard extends Component {
    render(){
        return(
            <div>
                <Route path='/wizard/wizard1' component = {Wizard1} />
                <Route path='/wizard/wizard2' component = {Wizard2} />
                <Route path='/wizard/wizard3' component = {Wizard3} />
            </div>
        )
    }
}

export default Wizard
import React, { Component } from 'react';
import Cards from '../../components/Card/Cards'      
import Navbar  from '../../components/Navbar/Navbar';
import axios from 'axios'

import './Home.css';

class home extends Component{

constructor(props) {
    super(props)

    this.state = {
        engineer : null
    }
}

async componentDidMount()  {
    const engineer = await axios.get(`http://localhost:3014/engineer`)
    this.setState({
        engineer: engineer.data.result
    })
    console.log(this.state.engineer)
}

    render(){
        return  (
            <div>
                <Navbar />                              
                <Cards
                    dataEngineer={this.state.engineer}
                    />
                </div>
        )
    }
}

export default home
import React, { Component } from 'react';
import Cards from '../../components/Card/Cards'      
import NavbarE  from '../../components/Navbar/Navbar-eng';
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
    const engineer = await axios.get(`http://54.173.46.17:5000/engineer`)
    this.setState({
        engineer: engineer.data.result
    })
    console.log(this.state.engineer)
}

    render(){
        return  (
            <div>
                <NavbarE />                              
                <Cards
                    dataEngineer={this.state.engineer}
                    />
                </div>
        )
    }
}

export default home
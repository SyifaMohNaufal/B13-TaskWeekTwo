import React, { Component } from 'react';
// import Card from '../components/Card/Card' 
import Cards from '../components/Card/Cards'      
import Navbar  from '../components/Navbar/Navbar';
import axios from 'axios'

import './css/Home.css';

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

// import ebi from './img/sample1.jpg';
// import eba from './img/sample2.jpg';
// import ebo from './img/sample3.jpg';
// import ebe from './img/sample4.jpg';
// import ebu from './img/sample5.jpg';
// import ebie from './img/sample6.jpg';
// import ebai from './img/sample7.jpg';
// import eboi from './img/sample8.jpg';
// import ebei from './img/sample10.jpg';
// import ebao from './img/sample11.jpg';
// import ebae from './img/sample12.jpg';
// import ebii from './img/sample13.png';

 // eslint-disable-next-line no-lone-blocks
 {/* <div className='Parent'> */}
        // eslint-disable-next-line no-lone-blocks
        {/* <Card username='Ebi' email='test@gmail.com' src={ebi}/> 
                  <Card username='Eb' email='test@gmail.com' src={eba}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebai}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebao}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebe}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebei}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebae}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebie}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebo}/> 
                  <Card username='Ebi' email='test@gmail.com' src={eboi}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebu}/> 
                  <Card username='Ebi' email='test@gmail.com' src={ebii}/>  */}
                  //  </div>  
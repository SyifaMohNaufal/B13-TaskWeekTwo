import React, { Component } from 'react';
import './Card.css'
import axios from 'axios';


class Cards extends Component {
  constructor() {
    super();
    this.state = {
      items : []
    };
    
  }
  componentDidMount(){
    axios.get(`http://localhost:3014/engineer`)
    .then(res => {
      console.log(res)
    this.setState({ items : res.data.result})
    })
}
    render() {
      const {items} = this.state
        return(
          <section id="cardEng">
           <div className="container my-3 py-5 text-center">
             
            <div className="row">
              {items.map((item, index) =>             
               
              <div key={index}>
              {/* <br></br>            */}
        <div className="card ml-4 mt-3" style={{width: '15rem'}}>
        <img className="card-img-top w-100" src={item.eng_image} alt="profile"></img>
                <div className="card-body">
        <h5 className="card-title">{item.eng_name}</h5>
        <p className="card-text">{item.eng_desc}</p>
        <p className="card-text">Project done :{item.project} </p>
        <p className="card-text">Success rate: {item.success}%</p>
        <p className="card-text">Skill: {item.skill_name}</p>
          {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>  
      </div>
      
              )}
              </div> 
               </div>
               </section>
    
            
        );
    }
}

export default Cards;
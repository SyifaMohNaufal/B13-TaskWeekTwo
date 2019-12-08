import React, {Component} from 'react'
import axios from 'axios'

class Project extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            proj_name: "",
            proj_desc: "",
            proj_deadline: "",
            proj_fee: "",
            redirect: false
        }
        this.submitProject = this.submitProject.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    async submitProject() {
        try {
          const response = await axios.post("http://54.173.46.17:5000/project/", {
            proj_name: this.state.proj_name,
            proj_desc: this.state.proj_desc,
            proj_deadline: this.state.proj_deadline,
            proj_fee: this.state.proj_fee
          });
          console.log("Returned data:", response.data);
          if (response.data.result.affectedRows === 1) {
            alert("Submit form successful!");
            this.setState({ redirect: true });
          } else {
            alert("Submit form failed!");
          }
        } catch (e) {
          alert("Submit form error!")
          console.log(`Axios request failed: ${e}`);
        }
      }
    
      onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
      }
    render(){

        return(
            <div className= "main">
                <div className= "container w-75 h-75 border pb-1 mt-5 bg-white">
                    <div className="project-content">
                        <from className="project-form">
                            <h2 className="project-from-title text-center">
                               Company Projects
                            </h2>
                            <div className="project-form-group">
                                <label htmlFor="name">Project Name</label>
                                <input  type="text" name= "proj_name" className="form-control" placeholder="Project Name" autoComplete="off" onChange={this.onChange} />
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="name">Project Description</label>
                                <textarea type="text" name= "proj_desc" className="form-control" rows="3" placeholder="Project Description" autoComplete="off" onChange={this.onChange}/>
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="name">Required Role</label>
                                <input type="text" name= "role" className="form-control mt-0" placeholder="Required Role"/>
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="name">Project Deadline</label>
                                <input  type="date" name="proj_deadline" max="3000-12-31" min="1000-01-01" class="form-control" className="form-control" placeholder="Project Deadline" autoComplete="off" onChange={this.onChange}/>
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="name">Project Fee</label>
                                <input type="number" name="proj_fee" className="form-control" placeholder="Project Fee" autoComplete="off" onChange={this.onChange}/>
                            </div>

                            <div className ="button-group d-flex justify-content-between">
                            <button className="btn btn-lg btn-primary  btn-sm text-uppercase mt-2 border-dark" type="button" onClick={this.submitProject}> Add Project </button>
                            <a href = "/profileC"><button className="btn btn-lg btn-danger  btn-sm text-uppercase mt-2 border-dark" type="submit"> back to profile </button></a>
                            </div>

                        </from>                
                        </div>
                    </div>
                </div>
        )
    }
}

export default Project
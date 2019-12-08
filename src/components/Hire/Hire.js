import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'

class Hire extends Component{
    constructor(props) {
        super(props);
        let id_eng = this.props.match.params.id_eng;
        this.state = {
          arr_project: [""],
          id_project: 1,
          id_eng: id_eng,
          fee: "",
          project_job: "",
          redirect: false,
          selectedOptions: [],
          backDtl: "/details/" + id_eng,
    
        };
        this.hire = this.hire.bind(this);
        this.onChange = this.onChange.bind(this);
      }
        
      async componentDidMount() {
        const response = await axios.get("54.173.46.17:3014/project");
        const res = response.data.result;
        if (response.data) {
          const arr_pro = res.map(i => ({
            value: i.id_project,
            label: i.project_name
          }));
          this.setState({ arr_project: arr_pro });
        }
      }
    
      async hire() {
        try {
          const response = await axios.post("http://54.173.46.17:3014/hire", {
            id_project: this.state.selectedOptions.value,
            id_eng: this.state.id_eng,
            fee: this.state.fee,
            project_job: this.state.project_job
          });
          console.log("Returned data:", response.data);
          if (response.data.result.affectedRows === 1) {
            alert("Submit form successful!");
            this.setState({ redirect: true });
          } else {
            alert("Submit form failed!");
          }
        } catch (e) {
          alert("Submit form error!");
          console.log(`Axios request failed: ${e}`);
        }
      }
    
      onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
      }
    
      handleChange = selectedOptions => {
        this.setState({ selectedOptions });
      };
    
      async handleSubmit(event) {
        event.preventDefault();
      }
render(){
    const { selectedOption } = this.state;

    if (this.state.redirect) {
      return <Redirect to={"/homeC"} />;
    }

    return (
        <div>
        <section className="bg-light">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <article className="card w-50 mx-auto">
                  <div className="card-body">
                    <h1 className="card-title display-4 text-center">Hire Form </h1>
                    <ul>
                      <li>Field this form to get software engineer</li>
                    </ul>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <p>Project Name:</p>
                        <Select
                          isClearable={this.state.arr_project.some(
                            v => !v.isFixed
                          )}
                          options={this.state.arr_project}
                          value={selectedOption}
                          isSearchable="true"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <p>Project Job:</p>
                        <textarea
                          className="form-control"
                          name="project_job"
                          autoComplete="off"
                          onChange={this.onChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <p>Fee:</p>
                        <input
                          className="form-control"
                          type="text"
                          name="fee"
                          autoComplete="off"
                          onChange={this.onChange}
                          required
                        />
                      </div>

                      <div className="form-group text-right">
                        <Link to={this.state.backDtl}>
                          <button className="btn btn-md btn-light  mt-4 mr-3">
                            Cancel
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-md btn-primary mt-4"
                          onClick={this.hire}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hire
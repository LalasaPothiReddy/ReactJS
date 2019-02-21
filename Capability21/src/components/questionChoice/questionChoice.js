import React, { Component } from "react";

import questionChoiceData from "../../services/questionsType.json";

class QuestionChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m: false,
      choiceData: questionChoiceData,
      editElement: -1,
      requiredItem: 0,
      name: '',
      acronym: '',
      RecordsData:{
          name:'',
          acronym:''
        }
      
    };
  }

  handleChoice = () => {
    if (this.state.m == false) {
      this.setState({
        m: true
      });
    }
  };
  handleEdit(data,id) {
    this.setState({
      name:data.name,
      acronym:data.acronym,
      editElement: id
    });
  }

  handleSave(index) {
     const dummyRecord = this.state.RecordsData;
     dummyRecord.name=this.state.name;
     dummyRecord.acronym=this.state.acronym;
    const dummychoiceData = this.state.choiceData;
    dummychoiceData[index] = dummyRecord;
    this.setState({
           RecordsData:dummyRecord,
           editElement:-1,
           choiceData:dummychoiceData,
     
      name:'',
     acronym:'',
      RecordsData:{
        name:'',
        acronym:''
      }
    });
  }

  handleName(e){
    this.setState({
      name: e.target.value
    });
  };
  handleAcronym(e){
    this.setState({
      acronym:e.target.value
    })
  }
  render() {
    
    const choiceData =this.state.choiceData.map((item, index) => {
      return (
      <tr>
            <td>
              {this.state.editElement === index ? <input type="text" className="form-control"  onChange={(e) => {this.handleName(e)}} defaultValue={item.name} />:item.name}</td>

            <td>
              {this.state.editElement === index ? 
            <input type="text" className="form-control"   onChange={e =>{this.handleAcronym(e)}} defaultValue={item.acronym}/>: item.acronym}
            </td>
            <td>
              <label className="switch" id="status">
                <input type="checkbox" />
                <span class="slider round" />
              </label>
            </td>
            <td>
              <div>
                {this.state.editElement === index ? <button type="button" className="btn btn-primary"   onClick={() =>{this.handleSave(index)}}>save</button>
                : <button type="button" className="btn btn-primary"  onClick={() =>{this.handleEdit(choiceData,index)}}>edit</button>
                }
              </div>
            </td>
          </tr>
        
    );
    });

    return (
      <div>
        <div>
          <br />
          <button
            type="button"
            id="add-row"
            value="add question choice"
            className="btn btn-primary"
            onClick={this.handleChoice}
          >
            Add Question Choice
          </button>
        </div>
        <br />

        <table className="table table-striped">
          <thead className="thead-light">
            <th>Name</th>
            <th>Acronym</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr style={{ display: this.state.m == true ? "contents" : "none" }}>
              <td>
                <input type="text" id="name" className="form-control" />
              </td>
              <td>
                <input type="text" id="acronym" className="form-control" />
              </td>
              <td>
                <label className="switch" id="status">
                  <input type="checkbox" />
                  <span class="slider round" />
                </label>
              </td>
              <td>
                <button
                  type="button"
                  id="qtopicbutton"
                  className="btn btn-primary"
                  value="edit"
                  onClick={e => this.handleSaveData(e)}
                >
                  Save
                </button>
              </td>
            </tr>
            {choiceData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionChoice;

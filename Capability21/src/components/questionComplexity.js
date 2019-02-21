import React, { Component } from "react";

import questionComplexData from "../services/questionsComplexity.json";

class QuestionComplexity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addComplex: false,
      complexData: questionComplexData,
      editElement: -1,
      name: '',
      acronym: '',
      RecordsData:{
          name:'',
          acronym:''
        }
      
    };
  }

  handleChoice = () => {
    if (this.state.addComplex == false) {
      this.setState({
        addComplex: true
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
    const dummycomplexData = this.state.complexData;
    dummycomplexData[index] = dummyRecord;
    this.setState({
           RecordsData:dummyRecord,
           editElement:-1,
           complexData:dummycomplexData,
     
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
  handleSaveData(){
      const dummyRecordsData=this.state.RecordsData;
      dummyRecordsData.name=this.state.name;
      dummyRecordsData.acronym=this.state.acronym;
      const dummycomplexData=this.state.complexData;
      dummycomplexData[this.state.complexData.length+1]=dummyRecordsData;
      this.setState({
          RecordsData:dummyRecordsData,
          editElement:-1,
          complexData:dummycomplexData,
          addComplex:false,
          name:'',
          acronym:'',
          RecordsData:{
              name:'',
              acronym:''
          }
      })
  }
  render() {
    
    const complexData =this.state.complexData.map((item, index) => {
      return (
      <tr>
            <td>
              {this.state.editElement === index ? <input type="text" className="form-control"  onChange={(e) => {this.handleName(e)}} defaultValue={item.name} />:item.name}</td>

            <td>
              {this.state.editElement === index ? 
            <input type="text" className="form-control"   onChange={e =>{this.handleAcronym(e)}} defaultValue={item.acronym}/>: item.acronym}
            </td>
            <td><label class="switch" id="status"><input type="checkbox" /><span class="slider round"></span></label></td>
            <td>
              <div>
              {this.state.editElement===index ?<svg onClick={()=>{this.handleSave(index)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" /></svg>   :
          <svg onClick={(e)=>{this.handleEdit(item,index)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
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
            Add Question Complex
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
            <tr style={{ display: this.state.addComplex == true ? "contents" : "none" }}>
              <td>
                <input type="text" id="name" className="form-control" value={this.state.name} onChange={(e)=>{this.handleName(e)}}/>
              </td>
              <td>
                <input type="text" id="acronym" className="form-control" value={this.state.acronym} onChange={(e)=>{this.handleAcronym(e)}} />
              </td>
              <td><label class="switch" id="status"><input type="checkbox" /><span class="slider round"></span></label></td>
              <td>
                <button
                  type="button"
                  id="qtopicbutton"
                  className="btn btn-primary"
                  value="edit"
                  onClick={(e) => this.handleSaveData(e)}
                >
                  Save
                </button>
              </td>
            </tr>
            {complexData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionComplexity;

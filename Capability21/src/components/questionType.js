import React, { Component } from "react";

import questionTypeData from "../services/questionsType.json";

class QuestionType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addType: false,
      typeData: questionTypeData,
      editElement: -1,
      name: '',
      acronym: '',
      status:true,
      RecordsData:{
          name:'',
          acronym:'',
          status:''
        }
      
    };
  }

  handleChoice = () => {
    if (this.state.addType == false) {
      this.setState({
        addType: true
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
    const dummytypeData = this.state.typeData;
    dummytypeData[index] = dummyRecord;
    this.setState({
           RecordsData:dummyRecord,
           editElement:-1,
           typeData:dummytypeData,
     
    
      RecordsData:{
        name:'',
        acronym:'',
        status:''
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
      const dummytypeData=this.state.typeData;
      dummytypeData[this.state.typeData.length+1]=dummyRecordsData;
      this.setState({
          RecordsData:dummyRecordsData,
          editElement:-1,
          typeData:dummytypeData,
          addType:false,
          name:'',
          acronym:'',
          status:'',
          RecordsData:{
              name:'',
              acronym:'',
              status:'',
          }
      })
  }
  handleStatus(data,status,index){
    const dummyRecord=this.state.RecordsData;
    dummyRecord.name=data.name;
    dummyRecord.acronym=data.acronym;
    dummyRecord.status=status===true ? false:true;
    const dummytypeData = this.state.typeData;
    dummytypeData[index] = dummyRecord;
this.setState({
  RecordsData:dummyRecord,
  typeData:dummytypeData,
  RecordsData:{
    name:'',
    acronym:'',
    status:''
  }
 })
alert(JSON.stringify(this.state.RecordsData));
  }
  render() {
    
    const typeData =this.state.typeData.map((item, index) => {
      console.log(this.state.typeData.status);
      return (
      
      <tr style={{visibility:this.state.typeData.status=== false ? 'hidden':'visible'}}>
            <td>
              {this.state.editElement === index ? <input type="text" className="form-control"  onChange={(e) => {this.handleName(e)}} defaultValue={item.name} />:item.name}</td>

            <td>
              {this.state.editElement === index ? 
            <input type="text" className="form-control"   onChange={e =>{this.handleAcronym(e)}} defaultValue={item.acronym}/>: item.acronym}
            </td>
            <td><label class="switch" id="status">
            <input type="checkbox" checked={item.activeStatus} onChange={() => this.handleStatus(item, item.activeStatus, index)}/><span class="slider round">
            </span>
            </label></td>
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
            Add Question Type
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
            <tr style={{ display: this.state.addType == true ? "contents" : "none" }}>
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
            {typeData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionType;

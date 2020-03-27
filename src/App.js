import React from 'react';
import './App.css';
import { Component } from 'react';
import Card from './components/Card/Card.component';
import data from './assets/data';
import Header from './components/Header/Header.component';
import Controlls from './components/Controlls/Controlls.component';
import EditCard from './components/Editcard/Editcard.component';
import update from 'react-addons-update';

class App extends Component{
  constructor(){
    super()

    this.state={
      dataSet: data,
      current: [],
      index: 0,
      editMode: false
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.updateCardItem = this.updateCardItem.bind(this)
  }

  componentDidMount(){
    this.setState({
      current: this.state.dataSet.filter((data, i) => i === 0)
    })
  }

  handleNext(){
    let nextData = this.state.dataSet.filter((data,i) => i === this.state.index+1)
    this.setState({
      current: nextData,
      index: this.state.index + 1,
      editMode: false

    })
  }

  handlePrev(){
    let prevData = this.state.dataSet.filter((data,i) => i === this.state.index-1)
    this.setState({
      current: prevData,
      index: this.state.index - 1,
      editMode: false
    })
  }

  handleDelete(i){
    this.state.dataSet.splice(i,1)
    let newIndex = this.state.index
    let newCurrentData = () => {
      if(i === this.state.dataSet.length){
        newIndex--
        return [this.state.dataSet[i-1]]
      } else{
        return [this.state.dataSet[i]]
      }
    }
    this.setState({
      current: newCurrentData(),
      index: newIndex
    })
  }

  handleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }

  updateCardItem(obj){
    console.log("objjjj", obj)
    console.log("indexx we switching: ", this.state.index)
    let newdata = update(this.state.dataSet, 
      { $splice: [[this.state.index, 1, obj]] }
    )
    console.log("NEW DATATAAAAAAAA: ", newdata)
    this.setState({
      dataSet: newdata
    });
    // this.forceUpdate();
    // this.setState(prevState => ({
    //   dataSet: prevState.dataSet.map((data, i) => i === prevState.index ? obj : data)
    // }))
  }

  render(){
    console.log(this.state.dataSet)
    let currentDisplayCard
    this.state.editMode?
    currentDisplayCard = this.state.current.map((data,i) => <EditCard key={i}
                                                                      index={this.state.index}
                                                                      cardData={data}   
                                                                      total={this.state.dataSet.length}
                                                                      updateCardItem={this.updateCardItem}/>):
    currentDisplayCard = this.state.current.map((data,i) => <Card key={i}
                                                                      index={this.state.index}
                                                                      cardData={data}   
                                                                      total={this.state.dataSet.length}/>)
                                                                                                              
    console.log(this.state.dataSet.length)
    return(
      <div>
        <Header/>
        {currentDisplayCard}
        
        <Controlls 
          next={this.handleNext} 
          prev={this.handlePrev} 
          index={this.state.index} 
          total={this.state.dataSet.length}
          delete={this.handleDelete}
          edit={this.handleEdit}/>
      </div>
    )
  }
}

export default App;

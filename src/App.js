import React from 'react';
import './App.css';
import { Component } from 'react';
import Card from './components/Card/Card.component';
import data from './assets/data';
import Header from './components/Header/Header.component';
import Controlls from './components/Controlls/Controlls.component';

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
      index: this.state.index + 1
    })
  }

  handlePrev(){
    let prevData = this.state.dataSet.filter((data,i) => i === this.state.index-1)
    this.setState({
      current: prevData,
      index: this.state.index - 1
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

  render(){
    let currentDisplayCard = this.state.current.map((data,i) => <Card key={i}
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
          delete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;

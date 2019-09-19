import ReactDOM from 'react-dom';
import React from 'react';
import Nav from './pages/nav/nav'
import Header from './pages/nav/header'
class App extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        name: '我是App'
      }
  }
  handleVal = (data) => {
      this.setState({
        name: data.name
      })
      console.log(this.props);
  }
  render(){
    return (
      <div>
          <h1>第一个react{this.state.name}</h1>
          <Nav handleVal={this.handleVal} list={this.props.list}/>
          <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <App list="list"/>,
  document.getElementById('root')
)

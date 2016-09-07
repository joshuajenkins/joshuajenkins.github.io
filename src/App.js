import React, { Component } from 'react'
import mePhoto from './me.jpg'
import './App.css'

class App extends Component {
  render() {
    var groupStyle = {
      minHeight: "100vh"
    }
    var textStyle = {
      color: "#333",
      maxWidth: "26em"
    }
    return (
      <div className="p3 border-box md-flex items-center" style={groupStyle}>
          <img className="md-col-6 border-box px2" style={{maxWidth: "100%"}} src={mePhoto} role="presentation" />
          <div className="text-block md-col-6 border-box h4 line-height-4 px2" style={textStyle}>
            <p>Hey,</p>
            <p>I’m designing and building <a href="//numeracy.co">Numeracy</a>. Numeracy is a new tool for working with open data. In that spirit I’m also writing + editing <a href="//46point87.com">46.87</a>, a data-based exploration of the San Francisco Bay&nbsp;Area.</p>
            <p>Follow me on <a href="//twitter.com/joshuajenkins">Twitter</a> for more.</p>
            <p>Take it easy 😶</p>
          </div>
      </div>
    )
  }
}

export default App

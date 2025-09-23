import {Component} from 'react'

import Header from '../Header'
import Calender from '../Calender'
import MiniReport from '../MiniReport'
import EmojiComponent from '../EmojiComponent'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-container-home">
        <Header />
        <h1 className="heading">Moods in a Month</h1>
        <div className="calender-selection-container">
          <Calender />
          <div className="selection-container">
            <EmojiComponent />
            <MiniReport />
          </div>
        </div>
      </div>
    )
  }
}

export default Home

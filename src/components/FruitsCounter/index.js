import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({mangoCount: prevState.bananaCount + 1}))
  }
  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="counter">{mangoCount}</span> mangos
            <span className="counter"> {bananaCount}</span> bananas
          </h1>
          <div className="image-bg-con">
            <div className="image-con">
              <img
                className="image"
                alt="Mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.onClickMango} className="button">
                Eat Mango
              </button>
            </div>
            <div className="image-con">
              <img
                className="image"
                alt="Banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.onClickBanana} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

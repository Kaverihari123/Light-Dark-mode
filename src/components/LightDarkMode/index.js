// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkmode: true,
  }

  onBtn = () => {
    this.setState(prevState => ({isDarkmode: !prevState.isDarkmode}))
  }

  render() {
    const {isDarkmode} = this.state
    const mode = isDarkmode ? 'dark-mode' : 'light-mode'
    const buttonMode = isDarkmode ? null : 'border'
    const buttonText = isDarkmode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container1">
        <div className={`container2 ${mode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div className="btncontainer">
            <button
              className={`button ${buttonMode}`}
              type="button"
              onClick={this.onBtn}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

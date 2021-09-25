import { Component } from 'react'

class About extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <>
        <div className="bg-gray-100 h-screen p-6">
          Your Current About Page.
          <div className="p-4">
            <a href="/" rel="noreferrer">
              Home Page.
            </a>
            &nbsp; &nbsp;
            <a href="/about" rel="noreferrer">
              About Page.
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default About

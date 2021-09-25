import { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <>
        <div className="bg-gray-100 h-screen p-6">
          Your Current Home Page.
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  // const { main } = state
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

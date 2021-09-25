import { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick={false}
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          style={{ width: "500px" }}
        />
        {this.pageState()}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

function mapStateToProps(state) {
  //   const {} = state
  return {};
}

export default connect(mapDispatchToProps, mapStateToProps)(AuthLayout);

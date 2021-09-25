import { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import "./../App.css";

class Layout extends Component {
  render() {
    return (
      <>
        {this.props.loading ? (
          <Loading opacity={this.props.loadingOpacity} />
        ) : null}
        <div className="p-1">{this.props.children}</div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

function mapStateToProps(state) {
  const { main } = state;
  return {
    loading: main.loading,
    loadingOpacity: main.loadingOpacity,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

import { connect } from "react-redux";
import Details from "../Components/Details";

const mapStateToProps = (state) => {
  return {
    bizzes: state.bizzes,
  };
};

export default connect(mapStateToProps)(Details);

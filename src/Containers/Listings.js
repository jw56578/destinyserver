import { connect } from "react-redux";
import Listings from "../Components/Listings";
import { removeBizz } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    bizzes: state.bizzes,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBizz: (idx) => dispatch(removeBizz(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);

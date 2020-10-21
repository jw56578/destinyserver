import { connect } from "react-redux";
import AddListing from "../Components/AddListing";
import { addBizz } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    bizzes: state.bizzes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBizz: (listing) => dispatch(addBizz(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);

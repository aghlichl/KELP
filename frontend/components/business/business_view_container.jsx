import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessView from './business_view';

const mapStateToProps = (state, ownProps) => {
    const business = state.entities.businesses[ownProps.match.params.id];
    return ({ business });
};

const mapDispatchToProps = dispatch => ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessView);
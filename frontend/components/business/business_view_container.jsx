import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import {selectBusiness, selectReviewsForBusiness} from '../../reducers/selectors'
import BusinessView from './business_view';


const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    return { business };
};

const mapDispatchToProps = dispatch => ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessView);
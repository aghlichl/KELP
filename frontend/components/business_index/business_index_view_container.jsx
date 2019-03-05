import { connect } from 'react-redux';
import BusinessIndex from './business_index_view';
import { fetchAll } from '../../actions/business_actions';
import { selectAllBusinesses } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    businesses: selectAllBusinesses(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAll: () => dispatch(fetchAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);

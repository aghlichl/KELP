import { connect } from 'react-redux';
import SearchResults from './search_results';
import { searchBusinesses, fetchAll } from '../../actions/business_actions';
import { selectAllBusinesses } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
    businesses: selectAllBusinesses(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAll: () => dispatch(fetchAll()),
    searchBusinesses: (name) => dispatch(searchBusinesses(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
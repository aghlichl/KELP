import { connect } from 'react-redux';
import SearchNav from './search_nav';
import { searchBusinesses } from '../../actions/business_actions';
import { selectAllBusinesses } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    businesses: selectAllBusinesses(state)
});

const mapDispatchToProps = dispatch => ({
    searchBusinesses: (name) => dispatch(searchBusinesses(name))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchNav));
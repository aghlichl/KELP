import { connect } from 'react-redux';
import { selectAllBusinesses } from '../../reducers/selectors';
import BusinessMap from './map';

const mapStateToProps = (state) => ({
    businesses: selectAllBusinesses(state),
});

export default connect(mapStateToProps)(BusinessMap);
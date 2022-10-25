import { connect } from 'react-redux';

import { VIEW_PAGE_ADD_TO_CART,
  VIEW_PAGE_ADD_TO_FAVOURITE } from '../../actions';
import { getOrderInfo } from './store/api';
import OrdersPage from './ordersPage';
// import submitMessage from './saga';

const mapStateToProps = ({ orders }) => ({
  ordersData: orders.ordersData,
  loading: orders.loading
});

const mapDispatchToProps = () => ({
  getOrderInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);

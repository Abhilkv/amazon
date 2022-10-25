/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Box,
  Dialog,
  DialogContent, DialogContentText, DialogActions, Button,
  DialogTitle } from '@material-ui/core';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { CheckoutCard } from 'app/components';

import styles from './styles.scss';

const Checkout = (props) => {
  const { cart,
    favourite, addToCart, removeFromFav, placeOrder, orderId, clearOrder } = props;
  const details = useSelector((state) => state.details);
  const history = useHistory();
  const [showBlocks, setShowBlocks] = useState('cart');
  const [addressData, setAddress] = useState({ name: '', phone: '', address: '', city: '', state: '', landMark: '', email: '' });
  const [dirtyFields, setDirtyFields] = useState({ name: false, phone: false, address: false, city: false, state: false, email: false });
  const [showPopup, setPopUp] = useState(false);

  useEffect(() => {
    if ((Object.keys(cart)).length === 0) {
      history.push('/home');
    }
  }, [cart]);

  const openNextBlock = (field) => {
    setShowBlocks(field);
    document.getElementById(field).scrollIntoView({ behavior: 'smooth' });
  };

  const setBlocks = (block) => {
    if (showBlocks === block) {
      setShowBlocks('');
    } else {
      setShowBlocks(block);
    }
  };


  const sum = () => ((totalSum() - discount()) - 55 + 29).toFixed(2);

  const totalSum = () => {
    const prices = (Object.keys(cart)).reduce((acc, keys) => (
      acc + (Number(cart[keys].data.price) * Number(cart[keys].count))
    ), 0);
    return prices;
  };

  const discount = () => {
    const prices = (Object.keys(cart)).reduce((acc, keys) => (
      acc + (Number(cart[keys].data.price) * Number(cart[keys].count) * (Number((cart[keys].data.discount) / 100)))
    ), 0);
    return prices.toFixed(2);
  };


  const updateData = (event, field) => {
    const { value } = event.target;
    let shouldUpdate = true;
    if (field === 'phone') {
      shouldUpdate = /^\d{10}$/.test(value);
    } else if (field === 'email') {
      shouldUpdate = (/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(value);
    }
    if (shouldUpdate) {
      setAddress((prev) => ({ ...prev, [field]: value }));
    }
  };

  const updateDirty = (field) => {
    setDirtyFields((prev) => ({ ...prev, [field]: true }));
  };

  const handlePopUp = () => {
    placeOrder(JSON.stringify({ items: cart, userData: addressData, payment: 'Cash on delivery', amount: (sum()) }));
  };

  useEffect(() => {
    if (orderId !== '') {
      setPopUp((prev) => !prev);
    }
  }, [orderId]);

  const redirectToHome = () => {
    props.clearCart();
    clearOrder();
    history.push('/home');
  };

  const orderDetails = () => {
    history.push(`/orders?id=${orderId}`);
  };

  return (
    <div className={styles.productContainer}>
      <>
        <Dialog
          open={showPopup}
          onClose={handlePopUp}
          // PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move', 'font-weight': 500, color: '#2874f0' }} id="draggable-dialog-title" className={styles.cartAccordian} className={styles.boxTitle}>
            Greetings...
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            Thanks for purchasing with us. For tracking your order, use the order-id send to your Email
              <br />
            For any help feel free to contact us at (1800 1154 2365)
              <br />
            Track your order
              {' '}
              <span onClick={orderDetails} role="presentation" className={styles.here}>here</span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className={styles.continue} onClick={redirectToHome}>Continue</Button>
          </DialogActions>
        </Dialog>
      </>
      <div className={styles.priceData}>
        <span className={styles.heading}>
          PRICE DETAILS
        </span>
        <span className={styles.fields}>
          <span style={{ 'font-weight': '700' }}>
            Price (
            {((Object.keys(cart)).length)}
            {' '}
            item
            {((Object.keys(cart)).length) > 1 ? 's' : ''}
            )
          </span>
          <span style={{ 'font-weight': '700' }}>
            ₹
            {totalSum()}
          </span>
        </span>
        <span className={styles.fields}>
          <span>
            Discount
          </span>
          <span className={styles.green}>
            -₹
            {discount()}
          </span>
        </span>
        <span className={styles.fields}>
          <span>
            Buy more & save more
          </span>
          <span className={styles.green}>
            -₹55
          </span>
        </span>
        <span className={styles.fields}>
          <span>
            Delivery Charges
          </span>
          <span className={styles.green}>
            FREE
          </span>
        </span>
        <span className={styles.fields}>
          <span>
            Secured Packing Fee
          </span>
          <span>
            ₹29
          </span>
        </span>
        <span className={styles.total}>
          <span>Total Amount</span>
          <span>
          ₹
            {(sum())}
            {' '}
          </span>

        </span>
        <span className={styles.footer}>
          You will save ₹
          {((discount()) - 55 + 29).toFixed(2)}
          {' '}
          on this order
        </span>
      </div>
      <Accordion defaultExpanded={true} expanded={showBlocks === 'cart'} className={styles.Accordion}>
        <AccordionSummary
          expandIcon={<img src="../../../../assets/down.svg" alt="arrow" />}
          aria-controls="panel1a-content"
          id="cart"
          onClick={() => { setBlocks('cart'); }}
          className={`${showBlocks === 'cart' ? styles.activeBlock : styles.inactive}`}
        >
          <span className={styles.cartAccordian}>
            <span className={`${styles.boxCount} ${showBlocks === 'cart' && styles.activeCountBlock}`}>1</span>
              ORDER SUMMARY
          </span>
        </AccordionSummary>
        <AccordionDetails>
          {(Object.keys(cart)).length > 0 && (
          <div className={styles.productBlock}>
            {(Object.keys(cart)).map((keys) => (
              <CheckoutCard openCart={() => openNextBlock('cart')} removeFromFav={removeFromFav} addToCart={addToCart} favourite={false} data={cart[keys].data} id={keys} qty={cart[keys].count} changeQty={props.changeQty} remove={props.removeItem} save={props.addToFavourite} />
            ))}
          </div>)}
        </AccordionDetails>
        <div className={styles.buttonBlock}>
          <button className={styles.address} onClick={() => openNextBlock('address')}>
             ADDRESS
          </button>
        </div>
      </Accordion>
      <div className={styles.divider} />
      <Accordion expanded={showBlocks === 'address'} className={styles.Accordion}>
        <AccordionSummary
          expandIcon={<img src="../../../../assets/down.svg" alt="arrow" />}
          aria-controls="panel1a-content"
          className={`${showBlocks === 'address' ? styles.activeBlock : styles.inactive}`}
          onClick={() => { setBlocks('address'); }}
          id="address"
        >
          <span className={styles.cartAccordian}>
            <span className={`${styles.boxCount} ${showBlocks === 'cart' && styles.activeCountBlock}`}>2</span>
          DELIVERY ADDRESS
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ width: '100%' }}>
            <Box className={styles.box}>
              <TextField error={dirtyFields.name && addressData.name === ''} onBlur={() => updateDirty('name')} onChange={(e) => updateData(e, 'name')} id="name" label="Name" variant="outlined" className={styles.inputField} />
              <TextField error={dirtyFields.phone && addressData.phone === ''} onBlur={() => updateDirty('phone')} onChange={(e) => updateData(e, 'phone')} id="number" label="Number" variant="outlined" type="tel" className={styles.inputField} />
            </Box>
            <Box className={`${styles.box} ${styles.contentWrap}`}>
              <TextField error={dirtyFields.address && addressData.address === ''} onBlur={() => updateDirty('address')} onChange={(e) => updateData(e, 'address')} id="address" label="Address" variant="outlined" multiline={true} minRows={5} className={styles.inputField} />
            </Box>
            <Box className={styles.box}>
              <TextField error={dirtyFields.city && addressData.city === ''} onBlur={() => updateDirty('city')} onChange={(e) => updateData(e, 'city')} id="city" label="City/District/Town" variant="outlined" className={styles.inputField} />
              <TextField error={dirtyFields.state && addressData.state === ''} onBlur={() => updateDirty('state')} onChange={(e) => updateData(e, 'state')} id="state" label="State" variant="outlined" className={styles.inputField} />
            </Box>
            <Box className={styles.box}>
              <TextField id="landMark" label="Landmark" variant="outlined" onBlur={() => updateDirty('landMark')} onChange={(e) => updateData(e, 'landMark')} className={styles.inputField} />
              <TextField error={dirtyFields.email && addressData.email === ''} onBlur={() => updateDirty('email')} onChange={(e) => updateData(e, 'email')} id="email" label="Email" variant="outlined" className={styles.inputField} />
            </Box>
          </div>
        </AccordionDetails>
        <div className={styles.buttonBlock}>
          <button
            disabled={!(dirtyFields.state || dirtyFields.city || dirtyFields.name || dirtyFields.phone || dirtyFields.address) || (addressData.state === '' || addressData.city === '' || addressData.name === '' || addressData.phone === '' || addressData.address === '' || addressData.email === '')}
            className={!(dirtyFields.state || dirtyFields.city || dirtyFields.name || dirtyFields.phone || dirtyFields.address) || (addressData.state === '' || addressData.city === '' || addressData.name === '' || addressData.phone === '' || addressData.address === '' || addressData.email === '') ? styles.disabled : styles.address}
            onClick={handlePopUp}
          >
            Place Order
          </button>
        </div>
      </Accordion>

      <div className={styles.divider} />
      {(Object.keys(favourite)).length > 0 && (
      <Accordion defaultExpanded={true} expanded={showBlocks === 'fav'} className={styles.Accordion}>
        <AccordionSummary
          expandIcon={<img src="../../../../assets/down.svg" alt="arrow" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => { setBlocks('fav'); }}
          className={`${showBlocks === 'fav' ? styles.activeBlock : styles.inactive}`}
        >
          <span className={styles.cartAccordian}>WISH LIST</span>
        </AccordionSummary>
        <AccordionDetails>
          {(Object.keys(favourite)).length > 0 && (
          <div className={styles.productBlock}>
            {(Object.keys(favourite)).map((keys) => (
              <CheckoutCard openCart={() => openNextBlock('cart')} removeFromFav={removeFromFav} addToCart={addToCart} favourite={true} data={favourite[keys].data} id={keys} qty={favourite[keys].count} changeQty={props.changeQty} remove={props.removeItem} save={props.addToFavourite} />
            ))}
          </div>)}
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
};


Checkout.propTypes = {
  cart: PropTypes.shape().isRequired,
  favourite: PropTypes.shape().isRequired
};

Checkout.defaultProps = {
};

export default Checkout;

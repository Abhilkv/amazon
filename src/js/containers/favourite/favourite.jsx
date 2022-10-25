/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';

import PropTypes from 'prop-types';

import { CheckoutCard } from 'app/components';

import styles from './styles.scss';

const Checkout = (props) => {
  const { favourite, addToCart, removeFromFav } = props;
  const history = useHistory();

  useEffect(() => {
    if ((Object.keys(favourite)).length === 0) {
      history.push('/checkout');
    }
  }, [favourite]);

  return (
    <div className={styles.productContainer}>
      {(Object.keys(favourite)).length > 0 && (
      <Accordion defaultExpanded={true} expanded={true} className={styles.Accordion}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.activeBlock}
        >
          <span className={styles.cartAccordian}>WISH LIST</span>
        </AccordionSummary>
        <AccordionDetails>
          {(Object.keys(favourite)).length > 0 && (
          <div className={styles.productBlock}>
            {(Object.keys(favourite)).map((keys) => (
              <CheckoutCard openCart={() => {}} removeFromFav={removeFromFav} addToCart={addToCart} favourite={true} data={favourite[keys].data} id={keys} qty={favourite[keys].count} changeQty={props.changeQty} remove={props.removeItem} save={props.addToFavourite} />
            ))}
          </div>)}
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
};


Checkout.propTypes = {
  favourite: PropTypes.shape().isRequired
};

Checkout.defaultProps = {
};

export default Checkout;

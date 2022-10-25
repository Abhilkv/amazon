/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Button = (props) => {
  const { data, qty, changeQty, remove, save, id, favourite, addToCart, removeFromFav, openCart } = props;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageBlock}>
        <div style={{ 'min-width': '200px' }}>
          <img className={styles.image} alt={data.name} src={data.avatar} height={180} width={200} />
        </div>
        <div className={styles.details}>
          <span className={styles.name}>{data.name}</span>
          <>
            <span className={styles.price}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAEQCAMAAADbFyX8AAAAflBMVEX///8BAQEAAAAODg7FxcVvb2/y8vJNTU3Ozs75+fnv7+/g4OC+vr7q6ur09PS7u7t2dnZ7e3uFhYXj4+NdXV3Z2dlmZmaenp60tLSpqamXl5fR0dE8PDwZGRmQkJCoqKgjIyMyMjJCQkJXV1cXFxcqKio/Pz81NTVISEhRUVGLy983AAAHCklEQVR4nO2diUIiSRBEIUE55BK5YTh0dPD/f3A5XFbIGicSujsjx40P0JiairY781VlqfTXaF2JIHlUxvsSQ8r4UKTML5Gq3isRjJflThlfxjAujUvjTyH2Sllaask3MYwPlPFxDOPSuTTeDrJXJmrJn2MYf1fGpzGMy/2l8fsge2Wqlvw9hvFnZXwSw7i0L413guyVsVryQQzjG2W8FcO4PF0abwTZK0u15KMYxtfKeDWGcRkq50H2Sl8Z78UwXlHG5zGMy1w5r8RwnlGZIhszt5UpSs37r9Tcqd1uPwzn82p3spr1e4PnjP4BIq3Gl7/7TOqb+Tp1Hqqr/kvlRvuJV+2i1BhOe+sbzCdeQ4pUp9W/2n0idgWrPV5c5V2k7m19Z352jffUI8NB1a3du/9+OWr4bvUu8uBt+kPzjdG7bL0tnzS1WtelcC91aibvzg/1c41t1nkWff/ibLAub952P8tUFk58pTmq8QO3Lj1vt2dq/IStk/whPclQG07U8l31AFuXF2+vF+qi1hNdQmfB5ZBEm9BZaFmB7OmyUx3cL4kqkLfAUqtI09vppdBHI9W7y1EgAiEzb6NKYE8hgX24C1t0WWTwqx7vMhXWOhPp2X7sSG+v6TUF0q+EGLdWRyVwX3SllvwlhnEdi24M43qvROmL6ngG6YvqOkeUvqgu6AXZK7qHfhfD+A9lvB7D+N/UQ3+MYVx/PUXBt3VjyVBNc1TiU7sfw7iu4+H1KFclPldfYxgfKeOzGMbjov5dteS/YhjXFd+wqH8zyF7R7YFtDOM1ZTzzMkVCiLM/SddMq7kLqUXvXki+/iE+nUfEOVMP/T8hzvWfRwYhzvnK0CWs4kdY+i/tX0T/aLysq1YMAso4bA30D63CBhSo4yROZjEIOKGsD60wCOgsEnZy9wJq8iy85YWQbU6A5yYEbBbOZyLyNOfcLEAfJHFshUDAS4v89DaZFNA9Txz6ZBCSTzaK6yCgIsKZT6DBmjiuyiCgEZK4pYJAQHGb57jCmYC7STjfzIHidgI+IBDSNEs0Cf2FgBuc71rIpSps/PZBCEWQKND6C2lTEkKtIKbI+MWPGWdD/UsgMs/4XIGu30mBKs5qY/AD3yafgPQz2wGFxgA0zvYkRw/iyKu303M9oQehpUL16dnp4ci22+UKCd33sY5tmeyP/kMP9k1lvPuM+y7LWjETTqoblruc0VmQ29Vo9UAg4bRTCD6YG9Xlm8323rjmmAtVs7463ttivgrC6TRlpz1sTZd3CxxauTC+zqdCMXyr/Ubb7WLzWrGBNqkFz+sdq54FGfSV8dx2Sq7gvMhLfm8qOTrf/X9pSDKC8/x2eL7ORRY5f3Dm4zznjZKb851vfagwgPOd70L6hVk7F6kUsN6ZO98t96Kwd5TsnO//3vYKLGBl5Xy/3MXW87Nwvl/t9azontXNzve2NzOH7uZNzg/vkqOJz0f9tc6Pb8CDsV9N2ez839f2bX/iyxygzj99atQex1WCFjLofLedR/3lqjUnsPwheM3p2CV8t7BB7nBC6fAI/NmSOLfuKsOdFmwtWMO5XO/y4KXAfmCZMKX4kX+6lOITitgofUtK9YAjV1lSSsaO4cN+3Mr4v5MlpWRA7du3SCkZMGG4D4Utpfj4tgIKtTbhI2joUrowWKciVSw3/hHddn/QN0kpGc+MX4hGd1ICv9Qlckr1mEZXGcYMsB3DAk67n6wHTikZ2IxPWWZLqWXKAAcTd5IlpWRYtuHGKzYUHr+Ili6l+GV6ibu+XGW4aEx+eZs9FzogYW+d7Op4S0oLAkNQBU4pcHfMyXrclJJdZhY4pYabRtlSig9GT83idRV+iTHXcSHTIDa2s2VVg3WCcyCfBc69OVgnAzLwMR0UY2Q/yzL9jueI2V7fJKVkN8pYUkp2NSh0Iv7onC2l6PQ7vpQaLkuXtbfZc7XiptQwh4EtpTXDVifDpsphsSlLSsngRsOkMTa40ZJSMrgRnw7AllILwEOWUgtmR4ZN4TAsHdxomH/FllIchmWb+GxKKRc2ZUlp2dvsuXAYlg5utKSUDJsywLBkcKMppVzYlAWzIwMycMyODm7EYVi6lFpgWC5syoLZ/Z/SrGRJKRncaJgOzAY3GiYcRk4pF5BhwezIUmqBYcngRktKyeBGHIZlgxstMGzklHJhUxbMjgxuxDE7OmzKMFmaDJuyYHZkKbVgdoFTSgY34pgdXUpxGDZ0SrngRlNKueBGCwxLhk1ZUkoGN1pSygU3WjA7MmzKgtmRYVMWzG7tbfZcOAxLh03hyDobNvVdUsoFZAROKQ7D0qUUh2HZUmrB7MiwKQsMS5ZSC2ZHBjfiMCwd3IjDsGzYVOCUWmDYwCklgxtxGJYObjQMrCEDMiyYHRncaMHsyOBGS0qR8vQ/GHeDlzFf4NEAAAAASUVORK5CYII="
                height={15}
                width={10}
                alt="temp"
              />
              {(Number(data.price) * ((100 - data.discount) / 100).toFixed(2)).toFixed(2)}
              <span>
                <img
                  src="data:image/png;base64,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"
                  height={10}
                  alt="temp"
                  width={8}
                />
                {Number(data.price)}
              </span>
              <span style={{ 'text-decoration': 'none', 'font-wight': '600', 'font-size': '20px', color: 'green' }}>
                (
                {data.discount}
                % off)
              </span>
            </span>
            <span style={{ 'text-decoration': 'none', 'font-wight': '600', 'font-size': '16px', color: 'green' }}>+6 offers applied</span>
            <span style={{ 'text-decoration': 'none', 'font-wight': '600', 'font-size': '16px' }}>Seller:MTAILMODEECOM</span>
          </>
          <span style={{ 'text-decoration': 'none', 'font-wight': '600', 'font-size': '12px' }}>+ ₹29 Secured Packaging Fee</span>
        </div>
      </div>
      <div className={styles.check}>
        {!favourite && (
        <div className={styles.qtyBlock}>
          <button className={`${styles.add} ${props.qty === 1 && styles.reduce}`} onClick={qty > 1 ? () => { changeQty(id, (qty - 1)); } : () => {}}>
          -
          </button>
          <span className={styles.qty}>
            {props.qty}
          </span>

          <button className={styles.add} onClick={() => { changeQty(id, (qty + 1)); }}>
          +
          </button>

        </div>)}
        {!favourite ? (
          <>
            <button className={styles.save} onClick={() => { save(data); remove(id); }}>SAVE FOR LATER</button>
            <button className={styles.remove} onClick={() => { remove(id); }}>REMOVE</button>
          </>
        ) : (
          <>
            <button className={styles.save} onClick={() => { addToCart(data); removeFromFav(id); openCart(); }}>MOVE TO CART</button>
            <button className={styles.remove} onClick={() => { removeFromFav(id); }}>REMOVE</button>
          </>
        )}
      </div>
    </div>
  );
};

Button.propTypes = {
  data: PropTypes.shape()
};

Button.defaultProps = {
  data: {
    name: '',
    price: '',
    avatar: ''
  }
};

export default Button;

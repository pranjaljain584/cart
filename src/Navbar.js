import React from 'react' ;

const Navbar = (props) => {
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://img.icons8.com/dusk/64/000000/shopping-cart.png" alt="cart-icon" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}



const styles = {
    cartIcon: {
        height: 36,
        marginRight: 50,
        marginTop:10
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'white',
      borderRadius: '100%',
      padding: '2px 8px',
      position: 'absolute',
      right: 32,
      top: 0
    }
  };
  

export default Navbar ;
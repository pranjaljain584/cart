import React from 'react' ;

const CartItem = (props)=> {

    const {price, title, qty } = props.product;
    const {product , onDecreaseQuantity , onIncreaseQuantity , onDeleteProduct} = props ;

    return(
        <div style={styles.CartItem} className="cart-item">

            <div className="left-block">
                <img style={styles.image} />
            </div>

            <div className="right-block">

                <div style={{fontSize: 25}} >{title}</div>
                <div style={{color: '#777'}} >Rs {price}</div>
                <div style={{color: '#777'}} >Qty: {qty}</div>

                <div className="cart-item-actions">
                    {/* buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://img.icons8.com/ultraviolet/64/000000/plus.png"
                        onClick={()=> onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://img.icons8.com/ultraviolet/40/000000/minus.png"
                        onClick={()=> onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://img.icons8.com/cute-clipart/64/000000/delete-forever.png"
                        onClick={()=> onDeleteProduct(product.id)} 
                    />
                </div>

            </div>

        </div>
    );
}


const styles = {
    image: {
        height: 140 ,
        width: 140,
        borderRadius: 4,
        backgroundColor: '#ccc'
    },

    CartItem: {
        marginLeft: 50 ,
        marginTop:40,
        marginBottom:0
    }
}

export default CartItem ;
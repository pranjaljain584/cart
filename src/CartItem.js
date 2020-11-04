import React from 'react' ;

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999 ,
            title: 'Mobile Phone' ,
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this) ;
        // or use arrow fns
    } 

    increaseQuantity = ()=> {
        console.log(this) ;
    }

    render(){
        const {price, title, qty } = this.state;
        return(
            <div className="cart-item">

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
                            src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                        />
                    </div>

                </div>

            </div>
        );
    }
}

const styles = {
    image: {
        height: 110 ,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem ;
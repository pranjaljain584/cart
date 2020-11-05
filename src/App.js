import React from 'react' ;
import Cart from './Cart' ;
import Navbar from './Navbar' ;

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 999 ,
                title: 'Mobile Phone' ,
                qty: 1,
                img: '',
                id: 1
            } ,
            {
                price: 1999 ,
                title: 'Watch' ,
                qty: 20,
                img: '',
                id: 2
            },
            {
                price: 26999 ,
                title: 'Laptop' ,
                qty: 1,
                img: '',
                id: 3
            }
        ]
    }

    // this.increaseQuantity = this.increaseQuantity.bind(this) ;
    // or use arrow fns
  } 

  handleIncreaseQuantity = (product) => {
      const {products} = this.state ;
      const index = products.indexOf(product) ;

      products[index].qty += 1 ;

      this.setState({
          // products: products
          // or
          products
      });
  }

  handleDecreaseQuantity = (product) => {
      const {products} = this.state ;
      const index = products.indexOf(product) ;

      if(products[index].qty == 0){
          return ;
      }

      products[index].qty -= 1 ;

      this.setState({
          // products: products
          // or
          products
      });
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state ;

      const items = products.filter((item) => item.id !== id) ;
      
      this.setState({
          products: items
      });
  }

  getCartCount = () => {
    const {products} = this.state ;

    let count = 0 ;

    products.forEach((product) => {
      count += product.qty ;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state ;

    let cartTotal = 0 ;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price ;
    })

    return cartTotal ;
  }

  render(){
    const {products} = this.state;

    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div> Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

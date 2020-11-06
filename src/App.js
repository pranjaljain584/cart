import React, { Profiler } from 'react' ;
import Cart from './Cart' ;
import Navbar from './Navbar' ;
import firebase from 'firebase' ;
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [],
        loading:true
    }

    this.db = firebase.firestore() ;

    // this.increaseQuantity = this.increaseQuantity.bind(this) ;
    // or use arrow fns
  } 

  componentDidMount () {

    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then( (snapshot) => {
    //     console.log(snapshot) ;

    //     snapshot.docs.map( (doc) => {
    //       console.log(doc.data()) ;
    //     })

    //     const products = snapshot.docs.map( (doc) => {
    //       const data = doc.data() ;
    //       data['id'] = doc.id ;
    //       return data;
    //     });

    //     this.setState({
    //       products ,
    //       loading:false
    //     }); 

    //   })

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot) ;

        snapshot.docs.map( (doc) => {
          console.log(doc.data()) ;
        })

        const products = snapshot.docs.map( (doc) => {
          const data = doc.data() ;
          data['id'] = doc.id ;
          return data;
        });

        this.setState({
          products ,
          loading:false
        }); 

      })

  }

  handleIncreaseQuantity = (product) => {
      const {products} = this.state ;
      const index = products.indexOf(product) ;
      // products[index].qty += 1 ;

      // this.setState({
      //     // products: products
      //     // or
      //     products
      // });

      const docRef = this.db.collection('products').doc(products[index].id) ;

      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then( () => {
          console.log('updated successfully') ;
        })
        .catch( (err) => {
          console.log('Error : ' , err) ;
        }) ;

  }

  handleDecreaseQuantity = (product) => {
      const {products} = this.state ;
      const index = products.indexOf(product) ;

      // if(products[index].qty == 0){
      //     return ;
      // }

      // products[index].qty -= 1 ;

      // this.setState({
      //     // products: products
      //     // or
      //     products
      // });

      const docRef = this.db.collection('products').doc(products[index].id) ;

      if(products[index].qty == 0){
        return ;
      }
      
      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then( () => {
          console.log('updated successfully') ;
        })
        .catch( (err) => {
          console.log('Error : ' , err) ;
        }) ;

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
      if(product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price ;
      }
      return '' ;
    })

    return cartTotal ;
  }

  addProduct = () => {

    this.db
      .collection('products')
      .add({
        img: 'https://images-na.ssl-images-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg' ,
        title: "washing machine" ,
        qty: 3,
        price: 799 
      })
      .then( (docRef) => {
        console.log('docRef', docRef ) ;
      })
      .catch( (err) => {
        console.log('err: ' , err) ;
      });

  }

  render(){
    const {products , loading} = this.state;

    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        {/* <button onClick={this.addProduct}> ADD PRODUCT</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />

        {loading && <h1> Loading Products.. </h1>}

        <div style={ {fontSize:30 , marginLeft:70, marginTop:20 , fontWeight:700} }> Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

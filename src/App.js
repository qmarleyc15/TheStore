import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToyObj from './components/ToyObj';
import StoreData from "./assets/store-data.json";
import StoreDataSorted from "./assets/store-data-sorted.json";


StoreData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
function App() {
  const [wishlistItems, setWishlistItems ] = useState([])
  function addToWishlist(item){
    setWishlistItems([...wishlistItems, item])

  }
  function removeFromWishlist(item){

    setWishlistItems( wishlistItems.filter((x) => x !== item));


  }
  

  
  function calculateWishlistTotal(){
    let total= 0
    for (let i=0; i<wishlistItems.length; i++){
      total += wishlistItems[i].price
      

    }
    return total;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to THE Toy Store</h1>
        <h3>Wishlist Total : {calculateWishlistTotal()}</h3>
        <button >Sort Prices Low to High</button>
        <p>
        {StoreDataSorted.map((item, index) => ( 
        <ToyObj item = {item} addToWishlist = {addToWishlist} removeFromWishlist = {removeFromWishlist}></ToyObj>
      ))}
        </p>
        
      </header>
    </div>
  );
        }
               


export default App;

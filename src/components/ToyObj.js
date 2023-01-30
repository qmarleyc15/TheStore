import "./ToyObj.css"

function ToyObj(props){

    return (<div className="ToyObj">

    <img src = {props.item.image}/>
    <h1>{props.item.name}</h1>
    <h4>Price: {props.item.price}$</h4>
    <h4>Requires Batteries: {props.item.battreq}</h4>
    <h4>Indoor or Outdoor Toy: {props.item.playspace}</h4>
    <p>{props.item.description}</p>
    <button onClick = {() =>{props.addToWishlist(props.item)}}>Add to Wishlist</button>
    <button onClick={() => {props.removeFromWishlist(props.item)}}> Remove From Cart</button>



    </div>)
}
export default ToyObj;
import { useState } from "react";
import Product from "./product";
import {v4 as uuid} from 'uuid';


function Products() {
 const [title, setTitle]=useState("")
 const [price, setPrice]=useState("")
 const[Message, setMessage]=useState("");

  let showList = true;

const [products, setProducts]= useState([
    {
      id: 1,
      label: "Iphone",
      price: 2900,
    },
    {
      id: 2,
      label: "Samsung",
      price: 1900,
    },
    {
      id: 3,
      label: "OPPO",
      price: 1100,
    },
  ])

  const titleInput = (e) =>{
    if (e.target.value===""){
      setMessage("Please enter a valid product name.")
    }else if (e.target.value.trim().length < 3){
      setMessage("Product name should be at least three characters long.")
    } else {
      setMessage(null)
    setTitle(e.target.value);
    }
  }
  const priceInput = (e) => {
    setPrice(e.target.value)
  }
  const submitForm =  (e) => { 
    e.preventDefault();
    let myProduct = {
      
      id : uuid(),
      label: title,
      price: price,
    
  }
  setProducts([myProduct, ...products])
  setTitle("")
  setPrice(0)
  };
  
  
const deleteProduct = (id) => {
let myList = products.filter(product => product.id !== id)
    setProducts((prev) => {
      console.log(prev)
      return myList
    })

}

  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore et quae
        nesciunt adipisci, temporibus corrupti deserunt placeat libero assumenda
      
      </p>
      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label  htmlFor="" className="form-label">Title</label>
        <input defaultValue={title} onChange={titleInput} type="text" className="form-control"/>
        {Message && (  <div className="alert alert-danger">{Message}</div>)}
      
        </div>
        <div className="form-group my-2">
          <label htmlFor="" className="form-label">Price</label>
        <input defaultValue={price} onChange={priceInput}  type="text" className="form-control"/>
        </div>
        <button className="btn btn-warning">Save</button>
        
      </form>

      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>

              <Product id={product.id} onDeleteProduct={deleteProduct}>
              <div className="card-body">
                 <h4 className="card-title">{product.label}</h4>
                 <p className="card-text">
                  <button className="btn btn-danger">{product.price}</button>
                </p>
              </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
import PropTypes from "prop-types";


const Product = ({ children, onDeleteProduct, id }) => {
  return (
    <div className="my-4">
    <div className="card text-white bg-primary mb-3" >

  {children}
</div>
<button onClick={ () => onDeleteProduct(id)} className="btn btn-light">Delete</button>
    </div>
  )

};

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired
};





export default Product;
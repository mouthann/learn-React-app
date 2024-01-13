import Product from "./product";



function Products() {
  let title = "Our Products in the store";
  let showList = true;
  let products = [
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
  ];

  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore et quae
        nesciunt adipisci, temporibus corrupti deserunt placeat libero assumenda
        nostrum tempora fuga vitae sapiente modi laboriosam, explicabo in
        perspiciatis facere.
      </p>

      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product label={product.label} price={product.price} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
import ProductItem from './ProductItem.js';
import classes from './Products.module.css';
const DUMMY_PRODUCTS =[
  {
    id:'p1',
    price:6,
    title: 'my First puppet',
    description: 'The first puppet I have played with'
  },
  {
    id:'p2',
    price:12,
    title: 'my First pencil',
    description: 'The first pencil I have written with'
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return(
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)
        })}
      </ul>
    </section>
  );
};

export default Products;

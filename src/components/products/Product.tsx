interface ProductProps {
  product: {
    id: number;
    title: string;
    url: string;
  }
}
const Product = ({product}:ProductProps) => {
  return (
    <div className="product">
      <img src={product.url} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
  )
}

export default Product
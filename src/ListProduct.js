export default function ListProduct({ i, p, addToCart }) {
  return (
    <p key={i}>
      name:{p.name}, price:{p.price}
      <button
        key={i}
        onClick={() => {
          addToCart(p);
        }}
      >
        Add to cart
      </button>
    </p>
  );
}

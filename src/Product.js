export default function Product({ i, p }) {
  return (
    <>
      <p key={i}>
        name:{p.name} price:{p.price}
      </p>
    </>
  );
}

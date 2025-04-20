import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="uppercase bg-stone-800 text-stone-200 p-4">
      <p className="text-stone-300 space-x-4 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

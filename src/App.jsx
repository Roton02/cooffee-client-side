import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./component/CoffeeCard";
import Header from "./component/Header";

const App = () => {
  const loadData = useLoaderData()
  const [coffeeCard, setCoffeeCard] = useState(loadData)
 
    return (
        <div>
          <Header></Header>
          <div className="my-10">
          <p className="text-center">--- Sip & Savor ---</p>
        <h1 className="text-3xl mb-5 text-center font-bold underline">Our Popular Products</h1>
        <div className='flex justify-center gap-10 items-center'>
        <Link  to='/addCoffee'><button className="btn btn-secondary "> Add Coffee</button></Link>
        <Link to='/login'><button className="btn btn-secondary "> Sign in</button></Link>
        <Link to='/users'><button className="btn btn-secondary "> Users</button></Link>
        </div>
        <div className="grid grid-cols-2 gap-5 px-20">
        {
          coffeeCard.map(i => <CoffeeCard key={i._id} coffeeCard={coffeeCard} setCoffeeCard={setCoffeeCard} card={i}></CoffeeCard>)
        }
        </div>
      </div>
        </div>
    );
};

export default App;
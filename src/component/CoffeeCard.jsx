import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ card ,setCoffeeCard,coffeeCard}) => {
  const {_id, name, chef, supplier, taste, details, category, photo } = card;



  const handleDelete = id =>{
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-teal-two.vercel.app/coffee/${id}`,{
          method:'DELETE',
  
      }).then(res => res.json())
      .then(data => {
        if (data.deletedCount >0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
       const remaining = coffeeCard.filter(cof => cof._id !== _id)
       setCoffeeCard(remaining)
          console.log(data );
      })
       
      }
    });
   
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between items-center pr-5 w-full">
          <div className="text-xl">
            <p>
              <span className="font-bold">name:</span>
              {name}
            </p>
            <p>
              <span className="font-bold">chef:</span>
              {chef}
            </p>
            <p>
              <span className="font-bold">category:</span>
              {category}
            </p>
          </div>
          <div>
            <div className="join join-vertical space-y-1 ">
              <button className=" bg-orange-300  btn join-item">View</button>
              <Link to={`/updateCoffee/${_id}`}><button className=" bg-orange-300  btn join-item">Edit</button></Link>
              <button onClick={()=>handleDelete(_id)} className=" bg-orange-300  btn join-item">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

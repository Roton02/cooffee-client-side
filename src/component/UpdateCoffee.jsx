import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loaderData = useLoaderData()
    const {_id, name, chef, supplier, taste, details, category, photo } = loaderData;
    const handleSubmit =e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef= form.chef.value;
        const details = form.details.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value
        const updatedCoffee = {name,chef,supplier,taste,details,category,photo}
        console.log(updatedCoffee);
        fetch(`https://coffee-server-teal-two.vercel.app/coffee/${_id}`, {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedCoffee)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
			if (data.modifiedCount >0) {
				Swal.fire({
				title: 'succesfull!',
				text: 'Do you want to continue',
				icon: 'success',
				confirmButtonText: 'Added'
				})
			}
        })
    }
    return (
       <div className="px-10 mx-auto">
        <Header></Header>
		<Link className='ml-5 p-5  ' to='/'><button className=' my-5 bg-orange-900 text-white hover:text-black p-3 transform  hover:bg-slate-300  '> Back to Home </button></Link>
        <div className="max-w-screen-lg mx-auto px-24 py-7 my-10 bg-[#F4F3F0]">
            <div className="flex flex-col justify-center items-center space-y-4 mb-10  "> 
                <h1 className="text-3xl text-center font-bold">Add New Coffee</h1>
                <p className="text-center w-2/3">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<div className="md:flex gap-5" >
            <label className="block md:w-1/2">
				<span className="mb-1"> name</span>
				<input type="text" defaultValue={name} name="name" placeholder="enter your name" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block md:w-1/2">
				<span className="mb-1">chef</span>
				<input type="text" defaultValue={chef} name="chef" placeholder="Enter coffee chef" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
            </div>
			<div className="md:flex gap-5" >
            <label className="block md:w-1/2">
				<span className="mb-1">supplier</span>
				<input name="supplier" defaultValue={supplier} type="text" placeholder="Enter coffee supplier" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block md:w-1/2">
				<span className="mb-1">taste</span>
				<input type="text"defaultValue={taste} name="taste" placeholder="Enter coffee taste" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
            </div>
			<div className="md:flex gap-5" >
            <label className="block md:w-1/2">
				<span className="mb-1">category</span>
				<input type="text"defaultValue={category} name="category" placeholder="Enter coffee category" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block md:w-1/2">
				<span className="mb-1">details</span>
				<input type="text"defaultValue={details} name="details" placeholder="Enter coffee details" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
            </div>
            <label className="block ">
				<span className="mb-1">Photo</span>
				<input type="text"defaultValue={photo} name="photo" placeholder="Enter photo URL" className="block w-full rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			
			<button type="submit" className="self-center btn w-full  px-8 py-3 text-lg rounded bg-[#D2B48C] text-black ">Submit</button>
		</form>
        </div>
        <section className="py-10 dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@business.com</span>
				</p>
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
		</form>
	</div>
       </section>
       </div>
    );
};

export default UpdateCoffee;
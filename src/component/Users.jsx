import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loaderData = useLoaderData([])
    const [info, setInfo] =useState(loaderData)
    console.log(loaderData);
    const handleDelete=id =>{
        console.log(id);
        fetch(`https://coffee-server-teal-two.vercel.app/coffee/users/${id}`,{
            method:'DELETE',
        }).then(res => res.json())
        .then(data=> {
            console.log(data);
            const remaining = info.filter(i=> i._id !== id)
            setInfo(remaining)
        })
    }
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <Link className='ml-5 p-5  ' to='/'><button className=' my-5 bg-orange-900 text-white hover:text-black p-3 transform  hover:bg-slate-300  '> Back to Home </button></Link>
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Email</th>
					<th className="p-3">UID</th>
					<th className="p-3">createdAt</th>
					<th className="p-3">lastSignIn</th>
					
				</tr>
			</thead>
				{
                    info.map(ld=> <tbody key={ld._id}>
                        <tr  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                            <td className="p-3">
                                <p>{ld.email}</p>
                            </td>
                            <td className="p-3">
                                <p>{ld.uid}</p>
                            </td>
                            <td className="p-3">
                                <p>{ld.createdAt}</p>
                                
                            </td>
                            <td className="p-3">
                                <p>{ld.lastSignIn}</p>
                                
                            </td>
                            <td className="p-3  text-right">
                               <button className="btn btn-sm btn-primary">Update</button>
                            </td>
                            <td className=" text-right">
                               <button onClick={()=>handleDelete(ld._id)} className="btn btn-sm btn-warning"> delete</button>
                            </td>
                        </tr>
                    </tbody> )
                }
			
		</table>
	</div>
</div>
    );
};

export default Users;
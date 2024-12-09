import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Update() {
  const user = useLoaderData();
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.radio10.value;
    const status = form.radio11.value;
    const data = { name, email, gender, status };

    // console.log(data);

    fetch(
      `https://user-management-system-server-iota.vercel.app/users/${user._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "User Updated",
            text: "User Updated Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              defaultValue={user.name}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={user.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label cursor-pointer w-fit">
              <span className="label-text mr-2">Gender:</span>
              <input
                type="radio"
                name="radio10"
                value="Male"
                defaultChecked={user.gender === "Male"}
                className="radio mr-2 checked:bg-red-500"
                required
              />
              <span className="label-text mr-2">Male</span>
              <input
                type="radio"
                name="radio10"
                value="Female"
                defaultChecked={user.gender === "Female"}
                className="radio mr-2 checked:bg-red-500"
                required
              />
              <span className="label-text mr-2">Female</span>
            </label>
          </div>

          <div className="form-control ">
            <label className="label cursor-pointer w-fit">
              <span className="label-text mr-2">Status:</span>
              <input
                type="radio"
                name="radio11"
                value="Active"
                defaultChecked={user.status === "Active"}
                className="radio mr-2 checked:bg-red-500"
                required
              />
              <span className="label-text mr-2">Active</span>
              <input
                type="radio"
                name="radio11"
                value="Inactive"
                defaultChecked={user.status === "Inactive"}
                className="radio mr-2 checked:bg-red-500"
                required
              />
              <span className="label-text mr-2">Inactive</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

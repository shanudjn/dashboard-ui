import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between p-4 bg-slate-800 text-gray-300">
      <h1 className="w-2/6 flex justify-center">Navbar</h1>
      <div className="flex justify-between items-center w-4/6 ">
        <h3>Dashboard</h3>
        <h3>Projects</h3>
        <h3>Team</h3>
        <h3>Clients</h3>
        <h3>Time</h3>
        <h3>Reports</h3>
      </div>
      <div className="w-2/6 flex justify-evenly">
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
    </div>
  );
}

export default Navbar;

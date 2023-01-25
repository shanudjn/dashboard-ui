import React from "react";

const teamMoods = [
  { name: "Andrea", designation: "UX Junior" },
  { name: "Alvaro", designation: "Backend Developer" },
  { name: "Juan", designation: "UX Senior" },
  { name: "Jose", designation: "Marketing" },
  { name: "Maria", designation: "UX Junior" },
];
function TeamMood() {
  return (
    <div className="w-1/4 bg-white p-4">
      <p className="text-xl pl-8">Team mood</p>
          {teamMoods.map((teamMood) => (
            <div className="flex border-bottom-stone-300 p-8">
              <img
                class="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/150?img=3"
                alt="Rounded avatar"
              ></img>
              <div className="flex flex-col pl-4 text-stone-500">
              <p >{teamMood.name}</p>
              <p className="text-xs text-stone-400">UX Junior</p>
              <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer"></input>
              </div>
            </div>
          ))}
      </div>
    
  );
}

export default TeamMood;

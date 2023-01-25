import React from "react";

function ProjectDetailCard({ details }) {
  return (
    <div className="flex justify-between p-8 " >
      {details.map((detail) => {
        return (
          <div className="flex bg-white border m-4 p-4 rounded-md" key={detail.id}>
            <span className="material-symbols-outlined">{detail.icon}</span>
            <div className="flex flex-col items-center my-4 mx-4">
              <p className="text-3xl font-extrabold">{detail.count}</p>
              <p>{detail.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectDetailCard;

import React from "react";

function BudgetStatus() {
  return (
    <div className="flex items-center p-12 w-9/12">
      <div className="text-2xl font-bold pr-8">Budget Status</div>
      <button
        type="button"
        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 flex items-end"
      >
        {" "}
        <span class="material-symbols-outlined">add</span>Add new project
      </button>
      <button
        type="button"
        class="flex item-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        <span class="material-symbols-outlined">download</span>
        Download report
      </button>
      <button
        type="button"
        class=" flex flex-end text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        <span class="material-symbols-outlined">calendar_today</span>
        Month{" "}
      </button>
      <button
        type="button"
        class="flex items-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        <span class="material-symbols-outlined">tune</span>Green
      </button>
    </div>
  );
}

export default BudgetStatus;

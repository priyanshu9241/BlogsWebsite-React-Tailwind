import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 w-full p-1 bg-white border-t-2 ">
      <div className="flex max-w-[670px] mx-auto justify-between   ">
        <div className="space-x-3 ">
          {page > 1 && (
            <button
              className="px-4 py-1 border-2 rounded-md"
              onClick={() => {
                handlePageChange(page - 1);
              }}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="px-4 py-1 border-2 rounded-md"
              onClick={() => {
                handlePageChange(page + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
        <div className="my-auto text-sm font-bold">{`
      Page ${page} of ${totalPages}`}</div>
      </div>
    </div>
  );
};

export default Pagination;

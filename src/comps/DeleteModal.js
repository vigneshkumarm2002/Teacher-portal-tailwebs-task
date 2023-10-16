import React from 'react'

const DeleteModal = ({setShowDeleteModal,deleteId,onDeleteItem}) => {

    const handleConfirmDelete = () => {
        onDeleteItem(deleteId);
        setShowDeleteModal(false);
      };
      const handleCancelModal = () => {
        setShowDeleteModal(false);
      };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
    <div className="w-[90%] sm:w-[300px] bg-white px-4 rounded py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
      <p className="font-medium">
        Are you sure you want delete this Expense?
      </p>
      <div className="flex justify-end gap-2 mt-3">
        <button
          className="w-[fit-content]   py-1 px-2 rounded bg-[#e2e2e2] border text-black"
          onClick={handleCancelModal}
        >
          Cancel
        </button>
        <button
          className="w-[fit-content]  text-white  py-1 px-2 rounded bg-[#F40005] "
          onClick={handleConfirmDelete}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteModal
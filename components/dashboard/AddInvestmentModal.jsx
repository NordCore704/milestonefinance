import React from 'react'

const AddInvestmentModal = ({userData, setShowModal, handleChooseNewPlan }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">
              You're on the {userData?.plan} Plan
            </h2>
            <p className="mb-6">
              Would you like to create a new investment plan? Your existing plan
              will remain active.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                onClick={handleChooseNewPlan}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
  )
}

export default AddInvestmentModal
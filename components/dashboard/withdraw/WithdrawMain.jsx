import React from "react";

const WithdrawMain = () => {
  return (
    <form className="flex flex-col gap-5 p-2 sm:p-5 justify-center sm:items-items-center w-full">
      <h3 className="text-2xl font-semibold">Withdraw Funds</h3>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-5 sm:w-[40%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="withdrawal_account" className="text-lg ">
              Withdrawal Account
            </label>
            <select
              name="withdrawal_account"
              id=""
              className="bg-transparent border rounded-lg px-2 py-1  w-full"
            >
              <option value="basic" className="">
                Select Account
              </option>
              <option value="basic" className="">
                Basic
              </option>
              <option value="standard" className="">
                Standard
              </option>
              <option value="premium" className="">
                Premium
              </option>
              <option value="deluxe" className="">
                Deluxe
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2 sm:w-full">
            <label htmlFor="amount" className="">
              Amount (in USD)
            </label>
            <input
              type="text"
              className="bg-transparent border rounded-lg px-2 py-1 outline-none  w-full"
              name="amount"
            />
          </div>
        </div>
        {/* ===== */}
        <div className="flex flex-col gap-5 sm:w-[40%]">
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="">
            Address
          </label>
          <input
            type="text"
            className="bg-transparent border rounded-lg px-2 py-1 outline-none  w-full"
            name="address"
          />
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="payment_methods" className="">
            Payment Methods
          </label>
          <div className="flex gap-3 flex-wrap">
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Litecoin</p>
            <input type="radio" name="payment_methods" id="" value={'Litecoin'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Ripple</p>
            <input type="radio" name="payment_methods" id="" value={'Ripple'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Toncoin</p>
            <input type="radio" name="payment_methods" id="" value={'Toncoin'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Bitcoin</p>
            <input type="radio" name="payment_methods" id="" value={'Bitcoin'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">BNB</p>
            <input type="radio" name="payment_methods" id="" value={'Binance'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Tether</p>
            <input type="radio" name="payment_methods" id="" value={'Tether'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Solana</p>
            <input type="radio" name="payment_methods" id="" value={'Solana'} />
            </span>
            <span className="flex gap-1">
              <p className="text-sm text-gray-500">Ethereum</p>
            <input type="radio" name="payment_methods" id="" value={'Ethereum'} />
            </span>
           
          </div>
        </div>
      </div>
      </div>
 
      <button className="text-white rounded-md hover:bg-scheme-purpleOne transition-colors duration-300 bg-scheme-purple px-4 p-2 self-start">
        Withdraw Now
      </button>
    </form>
  );
};

export default WithdrawMain;

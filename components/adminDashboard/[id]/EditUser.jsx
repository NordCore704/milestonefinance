"use client";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/lib/fetcher";
import { useRouter } from "next/navigation";
import { Spinner } from "@/exports";

const UserPage = ({ params }) => {
  const { _id } = params;
  const { data: user, error } = useSWR(`/api/users/getUsers/${_id}`, fetcher);
  const router = useRouter();
  const [withdrawableBalance, setWithdrawableBalance] = useState("");
  const [totalProfit, setTotalProfit] = useState("");
  const [hasUserPaid, sethasUserPaid] = useState("");
  const [ plan, setPlan ] = useState('')

  useEffect(() => {
    if (user) {
      setWithdrawableBalance(user.withdrawableBalance || "");
      setTotalProfit(user.totalProfit || "");
    }
  }, [user]);

  const handleWithdrawableBalanceChange = (e) =>
    setWithdrawableBalance(e.target.value);
  const handleTotalProfitChange = (e) => setTotalProfit(e.target.value);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/users/updateUser/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          withdrawableBalance,
          totalProfit,
          hasUserPaid,
          plan,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update user");
      }

      // Revalidate SWR cache
      mutate(`/api/users/getUsers/${_id}`);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const startSubscription = async () => {
    try {
      const response = await fetch(`/api/users/startSubscription/${_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
        }),
      });

      if (!response.ok) throw new Error("Failed to start subscription");

      mutate(`/api/users/getUsers/${_id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to start subscription");
    }
  };

  const stopSubscription = async () => {
    try {
      const response = await fetch(`/api/users/stopSubscription/${_id}`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Failed to stop subscription");

      mutate(`/api/users/getUsers/${_id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to stop subscription");
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (!user) return <Spinner />;
  console.log(user);
  

  return (
    <div className="min-h-screen flex flex-col gap-5 p-2 sm:p-4 lg:p-5 w-full">
      <div className="flex flex-col gap-3 p-2 sm:p-3 shadow-md rounded-lg border-b-2 border-scheme-purple">
        <h1 className="text-xl sm:text-2xl font-semibold">User Details</h1>
        <p>
          Name: {user.firstName} {user.secondName}
        </p>
        <p className="">Email: {user.email}</p>
        <p className="">Selected Plan: {user.plan || "None Selected"}</p>
        <p className="">Mobile Number: {user.mobileNumber}</p>
        <p className="">Amount Paid: ${user.amountPaid || "0.00"}</p>
        <p className="">
          Withdrawable Balance: ${user.withdrawableBalance || "0.00"}
        </p>
        <p className="">Total Profit: ${Number(user.totalProfit).toFixed(2) || "0.00"}</p>
        <p className="">
          Total Withdrawals: ${user.totalWithdrawals || "0.00"}
        </p>
        <p className="capitalize">
          Plan Status: {user.planStatus || "No Plans Active"}
        </p>
        <p className="">
          Payment Status:
          <span
            className={`${
              user.hasUserPaid === "paid" ? "text-green-500" : ""
            } ${
              user.hasUserPaid === "not paid" ? " text-red-500" : ""
            } capitalize`}
          >
            {" "}
            {user.hasUserPaid || "No Payment"}
          </span>
        </p>
        {/* <p className="">Payment Status: {user.hasUserActivatedPlan ? 'Paid': 'No Payment'}</p> */}
      </div>
      {/* === Edit user details === */}
      <div className="flex flex-col gap-3 p-2 sm:p-3 shadow-md rounded-lg border-b-2 border-scheme-purpleOne">
        <h1 className="text-xl sm:text-2xl font-semibold">Edit User Details</h1>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          {/* ==== withdrawable balance ==== */}
          <div className="flex flex-col gap-2">
            <label htmlFor="withdrawableBalance" className="">
              Withdrawable Balance:
            </label>
            <input
              id="withdrawableBalance"
              value={withdrawableBalance}
              onChange={handleWithdrawableBalanceChange}
              type="number"
              className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
            />
          </div>
          {/* === total profit === */}
          <div className="flex flex-col gap-2">
            <label htmlFor="totalProfit" className="">
              Total Profit:
            </label>
            <input
              id="totalProfit"
              value={Number(totalProfit).toFixed(2)}
              onChange={handleTotalProfitChange}
              type="number"
              className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
            />
          </div>
          {/* ==== payment update ==== */}
          <div className="flex flex-col gap-2">
            <label htmlFor="hasUserPaid" className="">
              Payment Status:
            </label>
            <div className="flex gap-10 w-full ">
              <div className="flex gap-2">
                <p className="">Paid</p>
                <input
                  name="hasUserPaid"
                  value={"paid"}
                  onChange={(e) => sethasUserPaid(e.target.value)}
                  type="radio"
                  className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
                />
              </div>
              <div className="flex gap-2">
                <p className="">Not Paid</p>
                <input
                  name="hasUserPaid"
                  value={"not paid"}
                  onChange={(e) => sethasUserPaid(e.target.value)}
                  type="radio"
                  className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
                />
              </div>
            </div>
          </div>
          {/* ==== plan status update ==== */}
          <div className="flex flex-col gap-2">
            <label htmlFor="plan" className="">
              Set Plan Status:
            </label>
            <div className="flex gap-10 w-full ">
              <div className="flex gap-2">
                <p className="">Basic</p>
                <input
                  name="plan"
                  value={"Basic"}
                  onChange={(e) => setPlan(e.target.value)}
                  type="radio"
                  className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
                />
              </div>
              <div className="flex gap-2">
                <p className="">Standard</p>
                <input
                  name="plan"
                  value={"Standard"}
                  onChange={(e) => setPlan(e.target.value)}
                  type="radio"
                  className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
                />
              </div>
              <div className="flex gap-2">
                <p className="">Premium</p>
                <input
                  name="plan"
                  value={"Premium"}
                  onChange={(e) => setPlan(e.target.value)}
                  type="radio"
                  className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
                />
              </div>
              <div className="flex gap-2">
                <p className="">Deluxe</p>
                <input
                  name="plan"
                  value={"Deluxe"}
                  onChange={(e) => setPlan(e.target.value)}
                  type="radio"
                  className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="p-2 bg-scheme-purple hover:bg-scheme-purpleOne duration-300 transition-colors self-start max-w-24 text-white rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
      {user.hasUserPaid === "paid" && (
        <div className=" flex flex-col gap-3 ">
          <p className="font-semibold text-center lg:text-left">
            You just validated this user's payment, you can now start and stop
            their subscription as you wish! Have fun
          </p>
          <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
            <button className="p-2 bg-green-500 hover:bg-green-600 duration-300 transition-colors self-start text-white rounded-lg" onClick={startSubscription}>
              Start Subscription
            </button>
            <button className="p-2 bg-red-500 hover:bg-red-600 duration-300 transition-colors self-start text-white rounded-lg" onClick={stopSubscription}>
              Cancel Subscription
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;

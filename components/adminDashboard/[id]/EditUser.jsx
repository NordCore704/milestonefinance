"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useRouter } from "next/navigation";
import { Spinner } from "@/exports";

const UserPage = ({ params }) => {
  const { _id } = params;

  const { data: user, error } = useSWR(`/api/users/getUsers/${_id}`, fetcher);
  const router = useRouter();

  if (error) return <p>Error: {error.message}</p>;
  if (!user) return <Spinner />;
  console.log(user);

  return (
    <div className="h-screen flex flex-col gap-5 p-2 sm:p-4 lg:p-5 w-full">
      <div className="flex flex-col gap-3 p-2 sm:p-3 shadow-md rounded-lg">
        <h1 className="text-xl sm:text-2xl font-semibold">User Details</h1>
        <p>
          Name: {user.firstName} {user.secondName}
        </p>
        <p className="">Email: {user.email}</p>
        <p className="">Selected Plan: {user.plan}</p>
        <p className="">Mobile Number: {user.mobileNumber}</p>
        <p className="">Amount Paid: ${user.amountPaid}</p>
        <p className="">Withdrawable Balance: {user.withdrawableBalance || '0.00'}</p>
        <p className="">Total Profit: {user.totalProfit || '0.00'}</p>
      </div>
      {/* === Edit user details === */}
      <div className="flex flex-col gap-3 p-2 sm:p-3 shadow-md rounded-lg">
      <h1 className="text-xl sm:text-2xl font-semibold">Edit User Details</h1>
        <form action="" className="flex flex-col gap-4">
            {/* ==== withdrawable balance ==== */}
            <div className="flex flex-col gap-2">
                <label htmlFor="withdrawableBalance" className="">Withdrawable Balance:</label>
                <input type="number" className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border" />
            </div>
            {/* === total profit === */}
            <div className="flex flex-col gap-2">
                <label htmlFor="totalProfit" className="">Total Profit:</label>
                <input type="number" className="outline-none focus:border-scheme-purple rounded-md p-2 border-gray-300 border" />
            </div>

            <button type="submit" className="p-2 bg-scheme-purple hover:bg-scheme-purpleOne duration-300 transition-colors self-start max-w-24 text-white rounded-lg">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
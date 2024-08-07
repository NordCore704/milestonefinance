"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/exports";
import { motion, } from "framer-motion";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import Link from "next/link";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";


// Function to delete a user
const deleteUser = async (id) => {
  const response = await fetch(`/api/users/deleteUser/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting user');
  }
  return id;
};

const AdminDashboardMain = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Fetch users data
  const { data: users, error, isLoading, mutate } = useSWR(
     '/api/users',
    fetcher
  );

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Refetch the user list after deletion
      mutate();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (status === 'loading') return <Spinner />;
  if (!session || session.user.role !== 'admin') {
    if (typeof window !== 'undefined') {
      router.push('/auth/login');
    }
    return <div className="flex justify-center items-center min-h-screen">
    <p className="text-2xl text-scheme-purple">Redirecting...</p>
  </div>
  }

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  // Ensure users is an array and handle if users is undefined
  const userList = users || [];


  const mainVariant = {
    init: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="p-2 sm:p-5 flex flex-col gap-5 min-h-screen">
      <div className="flex flex-col gap-2">
        <p className="text-gray-400">Welcome Admin!</p>
        <p className="text-2xl font-semibold">{session?.user?.firstName}</p>
        {/* <p className="text-2xl font-semibold">{session?.user?.email}</p> */}
        <p className="">
          Here's a summary of the available user accounts. Enjoy your time!
        </p>

        <ul className="flex flex-col gap-3 w-full">
        {userList.length > 0 ? (
          userList.map((user, index) => (
            <motion.li
              transition={{
                ease: "easeInOut",
                duration: 1,
                type: "spring",
                delay: index * 0.2,
              }}
              variants={mainVariant}
              animate="animate"
              initial="init"
              key={user._id}
              className="p-2 sm:p-3 rounded-md shadow-md w-full justify-between flex "
            >
              <div className="flex flex-col p-2 gap-2 w-full">
              <p>
                {user.firstName} {user.secondName}
              </p>
              <p>Email: {user.email}</p>
              <p>Plan: {user.plan || 'None Selected'}</p>
              <p>Amount Paid: ${user.amountPaid || '0.00'}</p>
              <p>Withdrawable Balance: ${user.withdrawableBalance || '0.00'}</p>
              </div>
              <div className=" p-2 flex flex-col gap-2">
                <Link href={`/adminDashboard/${user._id}`} className="hover:text-purple-600">
                  <FaPenToSquare />
                </Link>
                <button onClick={() => handleDelete(user._id)} className="hover:text-purple-600">
                  <FaTrash />
                </button>
              </div>
             
            </motion.li>
          ))
        ) : (
          <p className="text-2xl text-scheme-purple">No users available</p>
        )}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardMain;

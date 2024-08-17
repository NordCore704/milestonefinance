"use client";
import React from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AdminDashboardMain, EditUser, EditProfile, } from "@/exports";

export default function EditUserPassword() {


  return <main className="flex flex-col gap-5 bg-scheme-white p-4">
    <EditProfile />
  </main>;
}

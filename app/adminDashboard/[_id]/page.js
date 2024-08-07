"use client";
import React from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AdminDashboardMain, EditUser } from "@/exports";

export default function EditOneUser({ params }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  return <main className="flex flex-col gap-5 bg-scheme-white p-4">
    <EditUser params={params}/>
  </main>;
}

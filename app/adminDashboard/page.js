"use client";
import React from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.role === "admin") {
      router.push("/adminDashboard");
    } else {
      router.push("/dashboard");
    }
  }, [session]);
  return <main className="flex flex-col gap-5 bg-scheme-white p-4"></main>;
}

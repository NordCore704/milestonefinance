'use client'
import { DashboardMain } from '@/exports';
import React from 'react'
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.role === "admin") {
      router.push("/adminDashboard");
    } else if (session?.user?.role === "user") {
      router.push("/dashboard");
    } else {
      return;
    }
  }, [session, status]);
  
    return (
      <main className="flex flex-col gap-5 bg-scheme-white p-4">
  <DashboardMain />
      </main>
    );
  }
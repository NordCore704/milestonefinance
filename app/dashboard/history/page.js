'use client'
import { WithdrawalHistoryMain } from "@/exports";
import React from "react";

export default function History() {
  return (
    <main className="flex flex-col gap-5 bg-scheme-white p-4">
      <WithdrawalHistoryMain />
    </main>
  );
}

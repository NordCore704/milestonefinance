'use client'
import React from 'react'
import { ContactMain, LogInMain, ResetPasswordMain, ResetAdminPassword } from '@/exports';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default function ChangeAdminPassword() {

    return (
      <main className="flex flex-col gap-5 bg-scheme-white p-4">
       <ResetAdminPassword />
      </main>
    );
  }
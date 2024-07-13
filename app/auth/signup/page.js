
import React from 'react'
import { ContactMain, SignUpMain } from '@/exports';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export default async function SignUp() {
  const session = await getServerSession(authOptions)

  if (session) redirect('/dashboard')
    return (
      <main className="flex flex-col gap-5 bg-scheme-white p-4">
       <SignUpMain />
      </main>
    );
  }
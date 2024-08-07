"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/exports";

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
      return <Spinner />;
    }

    if (!session) {
      if (typeof window !== "undefined") {
        router.push("/auth/login");
      }
      return (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-blue-500">Redirecting...</p>
        </div>
      );
    }

    return <WrappedComponent session={session} {...props} />;
  };

  // Set the display name for better debugging
  AuthWrapper.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

  return AuthWrapper;
};

// Helper function to get the display name of the wrapped component
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withAuth;
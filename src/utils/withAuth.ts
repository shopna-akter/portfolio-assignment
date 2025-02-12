// src/utils/withAuth.tsx
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.replace("/api/auth/signin"); // Redirect to social login page
      }
    }, [status, router]);

    if (status === "loading") return <p className="text-white">Loading...</p>;
    if (!session) return null; // Prevents flicker

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

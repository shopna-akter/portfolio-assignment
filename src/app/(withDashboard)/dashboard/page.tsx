"use client"
import withAuth from "@/utils/withAuth"

const DashboardPage = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-center text-white mt-10">Welcome To Dashboard Page</h1>
    </div>
  );
};

export default withAuth(DashboardPage);

import React from "react";
import { redirect } from "next/navigation";

const page = () => {
  // Lakukan redirect ke /dashboard
  redirect("/dashboard");
  return null;

  // return <div className="space-y-6">Page</div>;
};

export default page;

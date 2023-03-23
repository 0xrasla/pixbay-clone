import Head from "next/head";
import React, { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Pixbay - Admin Dashbo</title>
        <meta name="description" content="Storing the memories!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card flex justify-content-center">
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;

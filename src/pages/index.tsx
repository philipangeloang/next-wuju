import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Modal from "~/components/modal";
import Topbar from "~/components/topbar";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [modal, showModal] = useState(false);
  const { user } = useUser();

  const createAction = api.action.action.useMutation({});

  // createAction.mutate({
  //   title: "Fees",
  //   userId: "Test",
  //   actionType: "Expense",
  //   source: "Budget",
  //   category: "Food",
  //   amount: 5000,
  // });

  if (!user) return <div>Log in first...</div>;
  return (
    <>
      {modal && <Modal modality={showModal} />}
      <div className="relative w-screen">
        <div className="absolute right-0 flex w-[calc(100%-250px)] flex-col bg-[#f4f4f7] p-12">
          {/* Top bar */}
          <Topbar title="Dashboard" modality={showModal} />
          {/* Grid */}
          <div className="mt-7 grid grid-cols-12 gap-4">
            <div className="col-span-3 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">
                Average Daily Earning
              </h1>
              <p className="f text-2xl font-bold">9999</p>
            </div>
            <div className="col-span-3 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">
                Average Daily Expense
              </h1>
              <p className="f text-2xl font-bold">9999</p>
            </div>
            <div className="col-span-3 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">
                Average Monthly Earning
              </h1>
              <p className="f text-2xl font-bold">9999</p>
            </div>
            <div className="col-span-3 row-span-2 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">Budget</h1>
              <p className="f text-2xl font-bold">9999</p>
            </div>
            <div className="col-span-3 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">
                Average Monthly Expense
              </h1>
              <p className="f text-2xl font-bold">9999</p>
            </div>

            <div className="col-span-6 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">Expenses Analytics</h1>
              <p className="f text-2xl font-bold">
                Pie chart ng food/transpo/healthcare...
              </p>
            </div>
            <div className="col-span-9 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">
                Monthly Earning and Expenses
              </h1>
              <p className="f text-2xl font-bold">Naka bar chart</p>
            </div>

            <div className="col-span-3 row-span-2 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">Savings</h1>
              <p className="f text-2xl font-bold">Naka bar chart</p>
            </div>

            <div className="col-span-9 rounded-xl border px-4 py-7">
              <h1 className="mb-4 text-lg font-semibold">Activity</h1>
              <p className="f text-2xl font-bold">Naka table</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

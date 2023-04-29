import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { type NextPage } from "next";
import Modal from "~/components/modal";
import Topbar from "~/components/topbar";
import { api } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Activity: NextPage = () => {
  const [modal, showModal] = useState(false);

  const { user } = useUser();
  const { data, isLoading } = api.action.getAction.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Something went wrong fetching data...</div>;

  if (!user) return <div>Log in first...</div>;

  return (
    <>
      {modal && <Modal modality={showModal} />}

      <div className="absolute right-0 flex w-[calc(100%-250px)] flex-col bg-[#f4f4f7] p-12">
        {/* Top bar */}
        <Topbar title="Activity" modality={showModal} />

        {/* Grid */}
        <div className="mt-7 grid grid-cols-12 gap-4">
          <div className="col-span-2 font-bold">Title</div>
          <div className="col-span-2 font-bold">Category</div>
          <div className="col-span-2 font-bold">Type</div>
          <div className="col-span-2 font-bold">Source</div>
          <div className="col-span-2 font-bold">Date</div>
          <div className="col-span-2 font-bold">Amount</div>

          {data.map((post) => {
            return (
              <>
                <div className="col-span-2 flex items-center font-semibold">
                  <input
                    type="checkbox"
                    className="mr-5 h-5 w-5 bg-off-white"
                  />
                  <span>{post.title}</span>
                </div>
                <div className="col-span-2 font-semibold">{post.category}</div>
                <div className="col-span-2 font-semibold">
                  <span
                    className={
                      post.actionType === "Expense"
                        ? "rounded-lg bg-red-500 px-2 py-1 text-xs text-white"
                        : "rounded-lg bg-emerald-500 px-2 py-1 text-xs text-white"
                    }
                  >
                    {post.actionType}
                  </span>
                </div>
                <div className="col-span-2 font-semibold">
                  <span
                    className={
                      post.source === "Budget"
                        ? "col-span-2 rounded-lg bg-main-black px-2 py-1 text-xs font-semibold text-white"
                        : "col-span-2 rounded-lg bg-emerald-500 px-2 py-1 text-xs font-semibold text-white"
                    }
                  >
                    {post.source}
                  </span>
                </div>
                <div className="col-span-2 font-semibold">April 28, 2023</div>
                <div className="col-span-2 font-semibold">
                  <span className="text-red-500">{post.amount}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Activity;

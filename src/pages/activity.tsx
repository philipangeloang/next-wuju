import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Modal from "~/components/modal";
import Topbar from "~/components/topbar";
import { api } from "~/utils/api";

const Activity = () => {
  const { user } = useUser();

  if (!user) return <div>Log in first...</div>;

  const [modal, showModal] = useState(false);
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

          {/* Sample design */}

          <div className="col-span-2 flex items-center font-semibold">
            <input type="checkbox" className="mr-5 h-5 w-5 bg-off-white" />
            <span>Tuition Fee</span>
          </div>
          <div className="col-span-2 font-semibold">🍔</div>
          <div className="col-span-2 font-semibold">
            <span className="rounded-lg bg-red-500 px-2 py-1 text-xs text-white">
              Expense
            </span>
          </div>
          <div className="col-span-2 font-semibold">Budget</div>
          <div className="col-span-2 font-semibold">April 26, 2023</div>
          <div className="col-span-2 font-semibold">
            <span className="text-red-500">4000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;

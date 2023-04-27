import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Modal from "~/components/modal";
import Topbar from "~/components/topbar";

const Setting = () => {
  const [modal, showModal] = useState(false);
  const { user } = useUser();

  if (!user) return <div>Log in first...</div>;
  return (
    <>
      {modal && <Modal modality={showModal} />}
      <div className="absolute right-0 flex w-[calc(100%-250px)] flex-col bg-[#f4f4f7] p-12">
        {/* Top bar */}
        <Topbar title="Panel" modality={showModal} />

        {/* Grid */}
        <div className="mt-7 grid grid-cols-12 gap-4">
          <div className="col-span-3 rounded-xl border-2 border-dashed px-4 py-7">
            <h1 className="mb-4 text-lg font-semibold">Budget</h1>
          </div>
          <div className="col-span-3 rounded-xl border-2 border-dashed px-4 py-7">
            <h1 className="mb-4 text-lg font-semibold">Savings</h1>
          </div>
          <div className="col-span-3 rounded-xl border-2 border-dashed px-4 py-7">
            <h1 className="mb-4 text-lg font-semibold">Reminders</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;

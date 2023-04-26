import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="fixed h-screen w-[250px] border-r bg-white p-12">
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-3">
          <Image src="/wuju-logo.png" alt="wuju-logo" width={40} height={40} />
          <p className="font-dmsans text-3xl">Wuju</p>
        </div>
        <div className="mt-10">
          <Link href="/">
            <p className="my-4 flex cursor-pointer gap-2 rounded-xl p-3 hover:bg-gray-200">
              <Image
                src="/dashboard.png"
                alt="dashboard"
                width={25}
                height={25}
                className="h-5 w-5"
              />

              <span className="font-semibold">Dashboard</span>
            </p>
          </Link>
          <Link href="/activity">
            <p className="my-4 flex cursor-pointer gap-2 rounded-xl p-3 hover:bg-gray-200">
              <Image
                src="/history.png"
                alt="activity"
                width={25}
                height={25}
                className="h-5 w-5"
              />

              <span className="font-semibold">Activity</span>
            </p>
          </Link>
          <Link href="/settings">
            <p className="my-4 flex cursor-pointer gap-2 rounded-xl p-3 hover:bg-gray-200">
              <Image
                src="/setting.png"
                alt="setting"
                width={25}
                height={25}
                className="h-5 w-5"
              />
              <span className="font-semibold">Settings</span>
            </p>
          </Link>
        </div>
        <p className="absolute bottom-0 my-4 flex w-full cursor-pointer gap-2 rounded-xl p-3 hover:bg-gray-200">
          <Image
            src="/logout.png"
            alt="logout"
            width={25}
            height={25}
            className="h-5 w-5"
          />
          <span className="font-semibold">
            <SignOutButton />
          </span>
        </p>
      </div>
    </nav>
  );
};

export default Sidebar;

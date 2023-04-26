import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center md:bg-off-white">
      <div className="flex h-[40rem] w-full max-w-sm flex-col items-center justify-center rounded-2xl bg-white text-center md:shadow-lg">
        <Image
          src="/wuju-logo.png"
          alt="main-logo"
          width={75}
          height={75}
          className="mx-auto"
        />
        <h1 className="mb-6 font-dmsans text-6xl">Wuju</h1>
        <p className="mb-20 text-sm">Track all your expenses easily.</p>
        <button className="w-64 rounded-full bg-main-black p-3 font-semibold text-white">
          <SignInButton />
        </button>
      </div>
    </main>
  );
};

export default SignInPage;

import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-slate-800 w-full h-[840px]">
      <section className="text-white flex flex-col items-center justify-center pt-20 space-y-4">
        <h1 className="text-4xl">Saas platform for music management</h1>
        <p className="text-2xl ">Manage your music collection with ease</p>
        <div className="flex justify-center items-center space-x-2">
          <Link
            className="py-2 px-4 bg-green-500 outline-none text-white"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="py-2 px-4 bg-green-500 outline-none text-white"
            href="/register"
          >
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}

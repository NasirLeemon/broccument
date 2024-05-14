import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <!-- Green Top Overlay --> */}
      <div class="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
        </div>
      </div>
      {/* <!-- Green Top Overlay End--> */}
      <Landing />
    </main>
  );
}

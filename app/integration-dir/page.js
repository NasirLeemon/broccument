import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntegretionDirPage = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-10 p-7 lg:max-w-5xl">
      <h1 class="text-lg font-bold text-zinc-900 dark:text-white">
        Integretion Directory
      </h1>
      <p class="mt-7 text-sm text-zinc-600 dark:text-zinc-400">
        Understand how to work with Integretion Directory.
      </p>
      <p class="mt-4">
        <Link class="readMore" href="/authentication">
          <span>Read more</span>
          <Image
            height={20}
            width={20}
            alt=""
            src="/icons/rightArrow.svg"
            class="relative top-px -mr-1 mt-0.5 h-5 w-5"
          />
        </Link>
      </p>
    </div>
  );
};

export default IntegretionDirPage;

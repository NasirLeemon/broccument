/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const GetApiKeyPage = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-10 p-7 lg:max-w-5xl">
      <h1 class="text-lg font-bold text-zinc-900 dark:text-white">
        Get Your API Key
      </h1>
      <p class="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
        Understand how to work with API's.
      </p>
      <p class="mt-4">
        <a class="readMore" href="/authentication">
          <span>Read more</span>
          <Image
            height={20}
            width={20}
            alt=""
            src="/icons/rightArrow.svg"
            class="relative top-px -mr-1 mt-0.5 h-5 w-5"
          />
        </a>
      </p>
    </div>
  );
};

export default GetApiKeyPage;

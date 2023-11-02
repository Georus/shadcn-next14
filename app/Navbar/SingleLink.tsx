"use client";

import React from "react";
import useMediaQuery from "@/lib/useMediaQuery";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

const SingleLink = ({ label, href }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Link href={href} className="hover:text-slate-400">
        {label}
      </Link>
    );
  else
    return (
      <div className="w-[350] px-4">
        <Link
          href={href}
          className="hover:text-slate-400 text-sm font-semibold"
        >
          {label}
        </Link>
      </div>
    );
};

export default SingleLink;

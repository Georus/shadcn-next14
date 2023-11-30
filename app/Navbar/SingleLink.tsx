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
      <Link
        href={href}
        className="block py-1 text-sm font-semibold hover:text-slate-400"
      >
        {label}
      </Link>
    );
};

export default SingleLink;

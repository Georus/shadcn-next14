"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import logo from "@/public/credit-card.svg";
import Image from "next/image";
import NavLink from "./NavLinks";
import SingleLink from "./SingleLink";
import { MagnifyingGlassIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import useMediaQuery from "@/lib/useMediaQuery";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";

const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-phone"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
    </svg>
  );
};

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const [sessionBypass, setSessionBypass] = useState(false);
  const { status } = useSession();
  let logLink = "Login";
  let logRef = "/api/auth/signin";

  if (status === "authenticated") {
    logLink = "Logout";
    logRef = "/api/auth/signout";
  }

  const menu = [
    { label: "Home", href: "/", multilink: false },
    { label: "About", href: "/", multilink: true },
    { label: "Automation", href: "/", multilink: true },
    { label: "Industries", href: "/", multilink: true },
    { label: "Blog", href: "/", multilink: true },
    { label: logLink, href: logRef, multilink: false },
    { label: "Contact", href: "/contact", multilink: false },
  ];

  if (status === "authenticated")
    menu.push({
      label: "Dashboard",
      href: "/dashboard",
      multilink: false,
    });

  return (
    <nav>
      <Collapsible
        open={isOpen || isDesktop}
        onOpenChange={setIsOpen}
        className="container relative flex flex-wrap items-end justify-between pt-2"
      >
        <div>
          <Image src={logo} alt="logo of page" width={100}></Image>
          <p>Kasa automation</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <HamburgerMenuIcon
              className={clsx("h-6 w-6 transition-all md:hidden", {
                "rotate-90": isOpen,
              })}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="w-full md:flex md:w-auto md:items-center md:space-x-4">
          {menu.map((link, i) =>
            link.multilink ? (
              <NavLink
                key={i}
                trigger={link.label}
                href={link.href}
                content={["Link 1", "Link 2"]}
              />
            ) : (
              <SingleLink key={i} {...link} />
            ),
          )}
          {sessionBypass ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Button size="sm" onClick={() => setSessionBypass(true)}>
              BypassLogin
            </Button>
          )}
        </CollapsibleContent>

        <div className="absolute right-1 top-1 flex items-center space-x-8">
          <div className="flex space-x-1">
            <PhoneIcon /> <p>6622001122</p>
          </div>
          <div className="hidden space-x-2 md:flex">
            <span className="relative ">
              <span className="pointer-events-none absolute left-1 top-[5px]">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </span>
              <Input
                type="text"
                placeholder="  search..."
                className="w-[200px] border-gray-500 pl-6"
              />
            </span>
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700">
              Go!
            </Button>
          </div>
          <ModeToggle />
        </div>
      </Collapsible>
    </nav>
  );
};

export default Navbar;

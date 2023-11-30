"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useMediaQuery from "@/lib/useMediaQuery";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface Props {
  trigger: string;
  href: string;
  content: string[];
}

const NavLink = ({ trigger, href, content }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  if (isDesktop)
    return (
      <HoverCard openDelay={400}>
        <HoverCardTrigger asChild>
          <Link
            href={href}
            className="flex items-center space-x-1 hover:text-slate-400"
          >
            <span>{trigger}</span> <ChevronDownIcon />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent>
          {content.map((link, i) => (
            <Link key={i} href="/" className="mx-2 hover:underline">
              {link}
            </Link>
          ))}
        </HoverCardContent>
      </HoverCard>
    );
  else
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between space-x-4">
          <Link
            href={href}
            className="text-sm font-semibold hover:text-slate-400"
          >
            {trigger}
          </Link>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDownIcon
                className={clsx(
                  "h-4 w-4 transition-all",
                  isOpen && "rotate-180",
                )}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        {content.map((link, i) => (
          <CollapsibleContent
            key={i}
            className="space-y-2 rounded-md border px-4 py-1 text-sm"
          >
            <Link className="hover:underline" href={href}>
              {link}
            </Link>
          </CollapsibleContent>
        ))}
      </Collapsible>
    );
};

export default NavLink;

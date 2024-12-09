"use client";
import Link from "next/link";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ComboboxDemo } from "./searchCourses";
import Image from "next/image";
const Header = () => {
  const [selected, setSelected] = useState("home");

  return (
    <>
      <header className="">
        <Link
          href="/"
          className="ml-4 flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image
            src="/alger-poste.png"
            alt="logo"
            width={38}
            height={25}
            className="mr-12 ml-2"
          />
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:!items-center md:gap-4 md:text-sm lg:gap-6">
          <Link
            href="/"
            className={cn(
              ` ${
                selected === "home"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }transition-colors hover:text-foreground`
            )}
            onClick={() => setSelected("home")}
          >
            Home
          </Link>
          <Link
            href={"/docs"}
            className={cn(
              `flex items-center ${
                selected === "docs"
                  ? "!text-foreground"
                  : "!text-muted-foreground"
              } hover:text-foreground`
            )}
            onClick={() => setSelected("docs")}
          >
            Docs
          </Link>
          <Link
            href="/courses"
            className={` ${
              selected === "courses"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
            onClick={() => setSelected("courses")}
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className={` ${
              selected === "contact"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
            onClick={() => setSelected("contact")}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={` ${
              selected === "blog" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
            onClick={() => setSelected("blog")}
          >
            Blog
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

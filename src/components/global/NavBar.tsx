"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComboboxDemo } from "./Header/searchCourses";
import ThemeToggler from "./Header/ThemeToggler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Nav() {
  const user: boolean = true;
  return (
    <div className="z-[999] top-0 left-0 sticky rounded-md mx-auto">
      <header className="backdrop-blur-md">
        <div className="w-full px-4 flex h-20 justify-center z-50 sticky top-0  items-center gap-4 bg-background/60 dark:bg-muted/40 md:px-6">
          <Link href="/" className="ml-6 xl:ml[8%] flex items-center space-x-2">
            <Image src="/alger-poste.svg" width={50} height={35} alt="Logo" />
          </Link>

          <NavigationMenu className="hidden lg:flex md:ml-7 xl:ml-[15%]">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit">
                  <Link href="/services" legacyBehavior passHref>
                    Services
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="#"
                        className="group grid gap-1 p-3  rounded-lg"
                      >
                        <div className="font-medium">Services Monétiques</div>
                        <div className="text-sm text-muted-foreground">
                          <ul className="text-sm list-disc pl-6">
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Paiements électroniques
                              </Link>
                            </li>
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Retraits d&apos;argent
                              </Link>
                            </li>
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Paiement de factures
                              </Link>
                            </li>
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                E-paiement
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="group grid gap-1 p-3  rounded-lg"
                      >
                        <div className="font-medium">Services Financiers</div>
                        <div className="text-sm text-muted-foreground">
                          <ul className="text-sm list-disc pl-6">
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Consultation Solde
                              </Link>
                            </li>
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Releve de compte
                              </Link>
                            </li>
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Virements et transfers
                              </Link>
                            </li>
                            <li>
                              <Link className="hover:bg-muted" href={"#"}>
                                Carnet de cheque
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="group grid gap-1 p-3  rounded-lg"
                      >
                        <div className="font-medium">Services Postaux</div>
                        <div className="text-sm text-muted-foreground">
                          <ul className="text-sm list-disc pl-6">
                            <li>
                              <Link
                                className="hover:bg-primary-foreground"
                                href={"#"}
                              >
                                Envoie Courriers
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="hover:bg-primary-foreground"
                                href={"#"}
                              >
                                Suivre un courier
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="group grid gap-1 p-3 rounded-lg"
                      >
                        <div className="font-medium">Services Corporate</div>
                        <div className="text-sm text-muted-foreground">
                          Measure and improve your digital performance
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "hidden md:block group h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    )}
                  >
                    Avis
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit">
                  <Link href="/support" legacyBehavior passHref>
                    Support
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-inherit">
                    <div className="font-medium">Contact Us</div>
                    <div className="font-medium">Ask our AI Support</div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <Link href="/actualites" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}
                >
                  Actualites
                </NavigationMenuLink>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <div className="flex w-full items-center justify-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="ml-auto flex-1 sm:flex-initial z-[1009]">
                <ComboboxDemo />
              </form>
              <ThemeToggler />
              <div className="h-full m-0 p-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full h-10 w-10 flex items-center justify-center"
                    >
                      {user ? (
                        <>
                          {/* Uncomment and use the Image component if needed */}
                          {/* <Image
                        src={user?.photoURL}
                        className="rounded-full h-full w-full"
                        fill
                        alt="user photo"
                      /> */}
                          <Menu className="h-full w-full" />
                        </>
                      ) : (
                        <Menu className="h-5 w-5" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <div className="second-zindex">
                    <DropdownMenuContent align="end" className="z-[1009]">
                      <DropdownMenuLabel>
                        <p>Pages</p>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {user && (
                        <>
                          <DropdownMenuItem>
                            <Link href="/dashboard">Dashboard</Link>
                          </DropdownMenuItem>
                        </>
                      )}

                      <DropdownMenuItem>
                        <Link href="/services" className="h-full w-full">
                          Services
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/avis" className="h-full w-full">
                          Avis
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/support" className="h-full w-full">
                          Support
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/actualites" className="h-full w-full">
                          Actualités
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Langage</DropdownMenuItem>
                      {user ? (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <button
                              onClick={() => {
                                console.log("clicked");
                              }}
                            >
                              Déconnecter
                            </button>
                          </DropdownMenuItem>
                        </>
                      ) : (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href="/signin">S&apos;inscrire</Link>
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

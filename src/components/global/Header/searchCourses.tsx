"use client";

import * as React from "react";

import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const servicesArray = [
  {
    value: "AP Tracking",
    path: "https://aptracking.poste.dz",
    label: "Services Monétiques",
  },
  {
    value: "CCP Net",
    path: "https://ccpnet.poste.dz",
    label: "Services Financiers (CCP)",
  },
  {
    value: "E-Philatelie",
    path: "https://ephilatelie.poste.dz",
    label: "Services Postaux",
  },
  {
    value: "Baridi Net",
    path: "https://baridinet.poste.dz",
    label: "Services Coopérate",
  },
  {
    value: "Post DZ",
    path: "https://post.dz",
    label: "Appels d'offres",
  },
  {
    value: "Baridi Web",
    path: "https://baridweb.poste.dz",
    label: "E-Learning",
  },
  {
    value: "Store ANEP",
    path: "https://store-anep.poste.dz",
    label: "Services Monétiques",
  },
  {
    value: "ECCP",
    path: "https://eccp.poste.dz",
    label: "Services Financiers (CCP)",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <div className="hidden sm:block">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            role="combobox"
            aria-expanded={open}
            className="w-fit justify-between px-2"
          >
            {value
              ? servicesArray.find((service) => service.value === value)?.label
              : "Selectionnez un service en ligne"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" w-fit p-0 z-[1009]">
          <Command>
            <CommandInput placeholder="Recherchez un service" className="h-9" />
            <CommandList>
              <CommandEmpty>
                Aucun service trouvé, avez-vous des retours détaillés ?
                <Button variant={"link"}>
                  <Link href={"/contact-us"} className="self-center text-wrap">
                    Envoyez des commentaires.
                  </Link>
                </Button>
              </CommandEmpty>
              <CommandGroup>
                {servicesArray.map((service) => (
                  <CommandItem
                    key={service.value}
                    value={service.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      router.replace(service.path ?? "/coming-soon");
                    }}
                  >
                    {service.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

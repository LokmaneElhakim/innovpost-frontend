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
import { ChevronsUpDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const courses = [
  {
    value: "File and folder structure",
    path: "/courses/sfsd/learn",
    label: "File and folder structure",
  },

  {
    value: "Databases",
    path: "/courses/bdd/learn",
    label: "Databases",
  },
  {
    value: "Algebra 3",
    path: "/courses/algebra/learn",
    label: "Algebra 3",
  },

  {
    value: "Graph theory ",
    // path: "/courses/thg/learn",
    label: "Graph theory",
  },
  {
    value: "Data architecture ",
    label: "Data architecture",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size={"icon"}
          role="combobox"
          aria-expanded={open}
          className="rounded-full h-10 w-10 flex items-center justify-center"
        >
          <Search className="ml-2 h-8 w-8 self-center" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-[1009]">
        <Command>
          <CommandInput placeholder="Search course..." className="h-9" />
          <CommandList>
            <CommandEmpty>
              No functionalities found, do you have any extended feedback?
              <Button variant={"link"}>
                <Link href={"/contact-us"}>Send feedback</Link>
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {courses.map((course) => (
                <CommandItem
                  key={course.value}
                  value={course.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    router.replace(course.path ?? "/coming-soon");
                  }}
                >
                  {course.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

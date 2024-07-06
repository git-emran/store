import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import { UserIcon } from "lucide-react";
import { SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
        <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <Button className="w-full text-left">Login</Button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <Button className="w-full text-left">Register</Button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="capitalize w-full">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default LinksDropdown;

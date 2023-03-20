import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Index() {
  return (
    <div>
      <SignedIn>
        <Nav />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-up">Sign up</Link>
      </SignedOut>
    </div>
  );
}

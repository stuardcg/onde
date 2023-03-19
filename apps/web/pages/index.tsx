import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <SignedIn>
        Welcome <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-up">Sign up</Link>
      </SignedOut>
    </div>
  );
}

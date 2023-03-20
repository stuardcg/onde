import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Nav from "../components/Nav";

export default function Services() {
  return (
    <>
      <SignedIn>
        <Nav />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

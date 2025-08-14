import { Suspense } from "react";
import SignIn from "./signin-content";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignIn />
    </Suspense>
  );
}

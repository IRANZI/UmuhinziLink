"use client";

import { Suspense } from "react";
import BusinessSignUpForm from "./BusinessSignUpForm";
export default function BusinessSignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BusinessSignUpForm />
    </Suspense>
  );
}

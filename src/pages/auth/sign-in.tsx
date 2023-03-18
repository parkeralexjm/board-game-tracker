import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAuthProvider } from "firebase/auth";

import { useSignInWithProvider } from "@/lib/hooks/useSignInWithProvider";
import EmailPasswordSignInForm from "../../components/EmailPasswordSignInForm";

const SignIn = () => {
  const [signInWithProvider, signInWithProviderState] = useSignInWithProvider();

  const router = useRouter();

  const AuthProviderButton = () => {
    return (
      <button
        className="rounded-lg p-2 font-bold bg-red-400 text-white"
        onClick={() => {
          signInWithProvider(new GoogleAuthProvider());
        }}
      >
        Login with Google
      </button>
    );
  };

  const onSignIn = useCallback(async () => {
    router.push("/collection");
  }, [router]);

  useEffect(() => {
    if (signInWithProviderState.success) {
      onSignIn();
    }
  }, [signInWithProviderState.success, onSignIn]);

  return (
    <div className="flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12">
      <div>
        <h1 className="Hero">Sign In</h1>
      </div>

      <div className="flex flex-col space-y-8">
        <AuthProviderButton />

        <EmailPasswordSignInForm onSignIn={onSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
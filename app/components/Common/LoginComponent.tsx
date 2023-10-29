'use client'

import { useEffect, useState } from "react";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const LoginComponent = () => {
  const [providers, setProviders] = useState<
    Record<string, ClientSafeProvider>
  >({});

  useEffect(() => {
    async function getProvidersValue() {
      const p = await getProviders();
      setProviders(p as Record<string, ClientSafeProvider>);
    }
    getProvidersValue();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {providers &&
        !!Object.keys(providers).length &&
        Object.values(providers!).map((provider) => (
          <div key={provider.name}>
            <button
              className="flex items-center justify-center w-full border 
                    font-medium rounded-lg text-xs px-2 md:px-5 py-2 5"
              onClick={(e) => {
                e.preventDefault();
                signIn(provider.id, {callbackUrl: '/'} );
              }}
            >
              {provider.name === "Google" && (
                <FcGoogle className="h-6 w-6 mr-3 " />
              )}
              {provider.name === "Facebook" && (
                <BsFacebook className="h-6 w-6 mr-3 text-blue-600" />
              )}
              Continue with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default LoginComponent;

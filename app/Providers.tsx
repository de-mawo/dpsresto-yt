"use client"

import AuthModal from "./components/Common/AuthModal";

type ProviderProps = {
    children: React.ReactNode;
}

const Providers = ({children}: ProviderProps) => {
  return (
    <div>
        <AuthModal/>
        {children}
    </div>
  )
}

export default Providers
"use client"

import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from '@urql/next';
import { useMemo } from "react";
import AuthModal from "./components/Common/AuthModal";


type ProviderProps = {
    children: React.ReactNode;
}

const Providers = ({children}: ProviderProps) => {
  const [client, ssr] = useMemo(() => {
    const graphql_api = process.env.NEXT_PUBLIC_GRAPHQL_API as string;
    const ssr = ssrExchange()
    const client = createClient({
      url: graphql_api,
      exchanges: [cacheExchange, ssr, fetchExchange],
    })
    return [client, ssr]
  }, [])
  return (
    <UrqlProvider client={client} ssr={ssr}>
        <AuthModal/>
        {children}
    </UrqlProvider>
  )
}

export default Providers
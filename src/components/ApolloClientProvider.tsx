'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/ApolloClient';

export default function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

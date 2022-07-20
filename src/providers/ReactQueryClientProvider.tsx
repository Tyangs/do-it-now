import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

interface IReactQueryClientProviderProps {
  children: React.ReactNode;
}

const ReactQueryClientProvider = ({
  children,
}: IReactQueryClientProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryClientProvider;

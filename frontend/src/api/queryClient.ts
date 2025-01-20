import { QueryClient } from "@tanstack/react-query";

// Create and configure the QueryClient
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      // Automatically retry failed queries up to 3 times
      retry: 3,
      // Stale data remains available for 5 minutes
      staleTime: 1000 * 60 * 5,
      // Refetch data on focus if stale
      refetchOnWindowFocus: true,
    },
    mutations: {
      // Show errors in the console
      onError: (error) => {
        console.error("Mutation error:", error);
      },
    },
  },
});

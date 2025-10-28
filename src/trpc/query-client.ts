import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
/**
 * Create a QueryClient configured with the application's React Query defaults.
 *
 * @returns A QueryClient with `queries.staleTime` set to 30 seconds and `dehydrate.shouldDehydrateQuery` that dehydrates when the default logic allows or when a query's state status is `"pending"`. Commented hooks for custom serialize/deserialize are present as placeholders.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}
// import type {
//   GetRecomendedOffersQuery,
//   GetRecomendedOffersQueryVariables,
// } from "@/generated/graphql";
// import { GetRecomendedOffersDocument } from "@/generated/graphql";
// import { client } from "@/lib/apollo";

import { GetRecomendedOffersDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  first: number;
  skip: number;
  currentSlug: string;
};
export const getRecomendedOffers = async ({
  currentSlug,
  first,
  skip,
}: Args) => {
  const result = await fetcher({
    query: GetRecomendedOffersDocument,
    variables: { currentSlug, first, skip },
  });

  return result.offers;
};

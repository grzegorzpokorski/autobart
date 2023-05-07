import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import { getOfferBySlug } from "@/queries/getOfferBySlug";
import { getOffersSlugs } from "@/queries/getOffersSlugs";
import { getRecomendedOffers } from "@/queries/getRecomendedOffers";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getOffersSlugs();

  return slugs.data.offers.map((offer) => ({ slug: offer.slug }));
}

export default async function Offer({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const offer = await getOfferBySlug({ slug });
  const recommendedOffers = await getRecomendedOffers({
    first: 3,
    skip: 0,
    currentSlug: slug,
  });

  if (offer.data.offer)
    return (
      <SinglePage
        offer={offer.data.offer}
        recommendedOffers={recommendedOffers.data.offers}
      />
    );
  return null;
}

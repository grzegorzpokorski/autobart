import Link from "next/link";
import { Main } from "@/components/molecules/Main/Main";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import { Heading } from "@/components/atoms/Heading/Heading";
import { GridList } from "@/components/atoms/GridList/GridList";
import { Offer } from "@/components/molecules/Offer/Offer";
import offers from "@/data/offers.json";
import { Section } from "@/components/atoms/Section/Section";
import { Container } from "@/components/atoms/Container/Container";

export const OfferPage = () => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby="title"
        overlayColor="secondary"
      >
        <header className="text-center">
          <Heading as="h1" size="lg" id="title">
            Oferta
          </Heading>
        </header>
      </SectionWithOverlay>
      <Main>
        <Section ariaLabelledby="offers">
          <Container>
            <Heading as="h2" size="base" hidden>
              Aktualnie dostępne modele
            </Heading>
            <GridList>
              {offers.length > 0 &&
                offers.map((offer) => (
                  <Offer key={offer.title}>
                    {offer.invoice && <Offer.Invoice />}
                    <Link href={offer.link}>
                      <Offer.Image image={offer.image} />
                    </Link>
                    <Offer.Header href="/" title={offer.title} />
                    {offer.features.length > 0 && (
                      <Offer.FeaturesList>
                        {offer.features.map((feature) => (
                          <Offer.FeaturesList.Item key={feature}>
                            {feature}
                          </Offer.FeaturesList.Item>
                        ))}
                      </Offer.FeaturesList>
                    )}
                    <Offer.Footer>
                      <Offer.Footer.PriceTag
                        price={offer.price}
                        type="brutto"
                      />
                      <Offer.Footer.Link href={offer.link} />
                    </Offer.Footer>
                  </Offer>
                ))}
            </GridList>
          </Container>
        </Section>
      </Main>
    </>
  );
};

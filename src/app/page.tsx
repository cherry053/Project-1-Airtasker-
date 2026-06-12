import { SiteHeader } from "@/components/marketing/site-header";
import { Hero } from "@/components/marketing/hero";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { CategoryChips } from "@/components/marketing/category-chips";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { FeaturedTrades } from "@/components/marketing/featured-trades";
import { Testimonials } from "@/components/marketing/testimonials";
import { VendorCta } from "@/components/marketing/vendor-cta";
import { FinalCta } from "@/components/marketing/final-cta";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <TrustStrip />
        <CategoryChips />
        <HowItWorks />
        <FeaturedTrades />
        <Testimonials />
        <VendorCta />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

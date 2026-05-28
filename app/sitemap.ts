import type { MetadataRoute } from "next";
import { cloneScriptPages, editorialProfile, guides, programs, rankings, siteConfig, whiteLabelPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const editorialDate = new Date(editorialProfile.lastUpdated);
  const staticRoutes = [
    "",
    "/programas",
    "/reviews",
    "/clone-script",
    "/guias",
    "/white-label",
    "/ferramentas",
    "/metodologia",
    "/sobre",
    "/divulgacao",
    "/privacidade",
    "/contato"
  ];

  const dynamicRoutes = [
    ...rankings.map((item) => `/programas/${item.slug}`),
    ...programs.map((item) => `/reviews/${item.slug}`),
    ...cloneScriptPages.map((item) => `/clone-script/${item.slug}`),
    ...guides.map((item) => `/guias/${item.slug}`),
    ...whiteLabelPages.map((item) => `/white-label/${item.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => {
    const isHome = route === "";
    const isMoneyPage = route.startsWith("/programas/");
    const isReview = route.startsWith("/reviews/");
    const isCloneScript = route.startsWith("/clone-script/");
    const isGuide = route.startsWith("/guias/");
    const isWhiteLabel = route.startsWith("/white-label/");

    const review = route.startsWith("/reviews/")
      ? programs.find((program) => route === `/reviews/${program.slug}`)
      : undefined;

    return {
      url: `${siteConfig.domain}${route}`,
      lastModified: review ? new Date(review.lastChecked) : editorialDate,
      changeFrequency: isHome || isMoneyPage ? "daily" : "weekly",
      priority: isHome ? 1 : isMoneyPage ? 0.95 : isCloneScript ? 0.9 : isReview ? 0.85 : isGuide || isWhiteLabel ? 0.75 : 0.7
    };
  });
}

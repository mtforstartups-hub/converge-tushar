import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function PlasmicPage() {
  const [location] = useLocation();
  const [loading, setLoading] = useState(true);
  const [hasPage, setHasPage] = useState(false);

  useEffect(() => {
    async function checkPage() {
      // Check if Plasmic has a page for this current URL path
      const data = await PLASMIC.maybeFetchComponentData(location);
      setHasPage(!!data);
      setLoading(false);
    }
    checkPage();
  }, [location]);

  if (loading) return null; // Or a spinner

  if (!hasPage) {
    return <div>404 - Page not found in Plasmic</div>;
  }

  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component={location} />
    </PlasmicRootProvider>
  );
}

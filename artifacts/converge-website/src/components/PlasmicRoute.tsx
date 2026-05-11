import { Route, useLocation } from "wouter";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";
import { useEffect, useState } from "react";

interface PlasmicRouteProps {
  path: string;
  component: React.ComponentType;
}

export function PlasmicRoute({ path, component: DefaultComponent }: PlasmicRouteProps) {
  const [location] = useLocation();
  const [hasPlasmicPage, setHasPlasmicPage] = useState<boolean | null>(null);

  useEffect(() => {
    async function check() {
      // Check if a page exists in Plasmic for this path
      const data = await PLASMIC.maybeFetchComponentData(path);
      setHasPlasmicPage(!!data);
    }
    check();
  }, [path]);

  return (
    <Route path={path}>
      {hasPlasmicPage === true ? (
        <PlasmicRootProvider loader={PLASMIC}>
          <PlasmicComponent component={path} />
        </PlasmicRootProvider>
      ) : (
        <DefaultComponent />
      )}
    </Route>
  );
}

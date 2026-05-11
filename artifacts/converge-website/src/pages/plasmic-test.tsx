import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";

export default function PlasmicTestPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <div className="min-h-screen bg-background p-8">
        <h1 className="text-3xl font-bold mb-8">Plasmic Integration Test</h1>
        
        {/* This will render the "Homepage" component from Plasmic if it exists */}
        <PlasmicComponent component="Homepage" />
        
        <div className="mt-12 p-6 border border-dashed border-primary/20 rounded-lg">
          <p className="text-muted-foreground text-sm italic">
            Note: If you haven't created a "Homepage" component in your Plasmic project yet, 
            the section above will show an error or be empty. 
            Update the "component" prop to match a component name in your Plasmic Studio.
          </p>
        </div>
      </div>
    </PlasmicRootProvider>
  );
}

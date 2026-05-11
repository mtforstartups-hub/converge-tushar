import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: import.meta.env.VITE_PLASMIC_ID || "YOUR_PROJECT_ID",
      token: import.meta.env.VITE_PLASMIC_TOKEN || "YOUR_TOKEN",
    },
  ],
  preview: true,
});


// Register Button
PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    children: "slot",
    variant: {
      type: "choice",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      type: "choice",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: "boolean",
  },
});

// Register Badge
PLASMIC.registerComponent(Badge, {
  name: "Badge",
  props: {
    children: "slot",
    variant: {
      type: "choice",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
});

// Register Card
PLASMIC.registerComponent(Card, {
  name: "Card",
  props: {
    children: "slot",
  },
});
PLASMIC.registerComponent(CardHeader, {
  name: "CardHeader",
  props: { children: "slot" },
  parentFieldName: "children",
});
PLASMIC.registerComponent(CardTitle, {
  name: "CardTitle",
  props: { children: "slot" },
  parentFieldName: "children",
});
PLASMIC.registerComponent(CardDescription, {
  name: "CardDescription",
  props: { children: "slot" },
  parentFieldName: "children",
});
PLASMIC.registerComponent(CardContent, {
  name: "CardContent",
  props: { children: "slot" },
  parentFieldName: "children",
});
PLASMIC.registerComponent(CardFooter, {
  name: "CardFooter",
  props: { children: "slot" },
  parentFieldName: "children",
});

// Register Input
PLASMIC.registerComponent(Input, {
  name: "Input",
  props: {
    placeholder: "string",
    type: "string",
    disabled: "boolean",
  },
});

// Register Label
PLASMIC.registerComponent(Label, {
  name: "Label",
  props: {
    children: "slot",
  },
});

// Register Separator
PLASMIC.registerComponent(Separator, {
  name: "Separator",
  props: {
    orientation: {
      type: "choice",
      options: ["horizontal", "vertical"],
    },
  },
});

// Register Skeleton
PLASMIC.registerComponent(Skeleton, {
  name: "Skeleton",
  props: {},
});

// Register Checkbox
PLASMIC.registerComponent(Checkbox, {
  name: "Checkbox",
  props: {
    checked: "boolean",
    disabled: "boolean",
  },
});

// Register Switch
PLASMIC.registerComponent(Switch, {
  name: "Switch",
  props: {
    checked: "boolean",
    disabled: "boolean",
  },
});

// Register Tabs
PLASMIC.registerComponent(Tabs, {
  name: "Tabs",
  props: {
    children: "slot",
    defaultValue: "string",
  },
});
PLASMIC.registerComponent(TabsList, {
  name: "TabsList",
  props: { children: "slot" },
  parentFieldName: "children",
});
PLASMIC.registerComponent(TabsTrigger, {
  name: "TabsTrigger",
  props: {
    children: "slot",
    value: "string",
  },
  parentFieldName: "children",
});
PLASMIC.registerComponent(TabsContent, {
  name: "TabsContent",
  props: {
    children: "slot",
    value: "string",
  },
  parentFieldName: "children",
});

// Register Accordion
PLASMIC.registerComponent(Accordion, {
  name: "Accordion",
  props: {
    children: "slot",
    type: {
      type: "choice",
      options: ["single", "multiple"],
    },
    collapsible: "boolean",
  },
});
PLASMIC.registerComponent(AccordionItem, {
  name: "AccordionItem",
  props: {
    children: "slot",
    value: "string",
  },
  parentFieldName: "children",
});
PLASMIC.registerComponent(AccordionTrigger, {
  name: "AccordionTrigger",
  props: { children: "slot" },
  parentFieldName: "children",
});
PLASMIC.registerComponent(AccordionContent, {
  name: "AccordionContent",
  props: { children: "slot" },
  parentFieldName: "children",
});

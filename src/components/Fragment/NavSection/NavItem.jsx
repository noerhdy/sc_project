import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/Elements/ListItem"; // Sesuaikan path jika perlu

const components = [
  {
    title: "Alert Dialog",
    link: "/",
    description: "A modal dialog that .",
  },
  {
    title: "Hover Card",
    link: "/",
    description: "For sighted users tk.",
  },
  {
    title: "Progress",
    link: "/",
    description: "Displays an.",
  },
  {
    title: "Scroll-area",
    link: "/",
    description: "Visually ",
  },
  {
    title: "Tabs",
    link: "/",
    description: "A set of laye",
  },
  {
    title: "Tooltip",
    link: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavItem = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="md:gap-6 gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    link={component.link}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    link={component.link}
                  ></ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItem;

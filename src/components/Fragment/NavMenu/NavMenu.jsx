import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/Elements/ListItem"; // Sesuaikan path jika perlu

const components = [
  {
    title: "Alert Dialog",
    link: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    link: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    link: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    link: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    link: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    link: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
        <div className=" flex space-x-8 px-4 cursor-pointer">
          <NavigationMenuItem>Item Two</NavigationMenuItem>
          <NavigationMenuItem>Item Two</NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;

import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Syrinx Studio", href: "/work/amazonclone" },
      { title: "Syrinx Studio", href: "/work/bazar" },
      { title: "Syrinx Studio", href: "/work/blog101" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];

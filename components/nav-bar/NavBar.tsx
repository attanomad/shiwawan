import Link from "next/link";
import { ReactNode, SVGProps } from "react";
import { HomeOutline } from "../icons/HomeOutline";
import BackButton from "./BackButton";

interface NavMenu {
  title: string;
  path: string;
  icon?: (props: SVGProps<SVGSVGElement>) => ReactNode;
  show?: "title" | "icon" | "both";
}

const menuList: NavMenu[] = [
  { title: "Home", path: "/", icon: HomeOutline },
  { title: "Works", path: "/#works" },
  { title: "Testimonials", path: "/#testimonials" },
  { title: "Why Us?", path: "/#why" },
  { title: "Process", path: "/#process" },
];

export default function NavBar() {
  return (
    <div className="fixed left-0 bottom-0 w-full flex justify-center items-center z-[9999]">
      <nav className="absolute bottom-4 flex items-center py-2 md:py-4 px-3 md:px-[1.125rem] lg:px-8 rounded-[2rem] bg-[#C7C7C7]/80 text-white">
        <ul className="flex justify-center items-center gap-2 md:gap-4 text-xs md:text-base leading-normal">
          <BackButton />
          {menuList.map((m) => {
            let title: ReactNode;

            switch (m.show) {
              case "both":
                title = m.icon ? (
                  <>
                    {m.icon}
                    {m.title}
                  </>
                ) : (
                  m.title
                );
                break;

              case "title":
                title = m.title;

              case "icon":
              default:
                title = m.icon ? (
                  <m.icon className="size-6 md:size-8 drop-shadow-[0_0_5px_rgba(0,0,0,.5)]" />
                ) : (
                  m.title
                );
                break;
            }

            return (
              <li
                key={m.path}
                className="flex items-center justify-center"
              >
                <Link
                  href={m.path}
                  className="leading-none"
                  style={{ textShadow: `0 0 5px rgba(0,0,0,0.5)` }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

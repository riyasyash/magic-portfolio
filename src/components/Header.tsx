"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, gallery, achievements, certifications } from "@/resources";

import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "about", "work", "certifications", "achievements", "blog"];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    if (e) e.preventDefault();
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    try {
      window.history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
    } catch {}
    setActiveSection(id);
  };

  useEffect(() => {
    if (pathname !== "/") return;
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.includes(hash)) setActiveSection(hash);
      else if (window.scrollY < 80) setActiveSection("home");
    };
    updateFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection("home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/#home" selected={activeSection === "home"} onClick={(e: any) => scrollToSection(e, "home")} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/#about"
                    label={about.label}
                    selected={activeSection === "about"}
                    onClick={(e: any) => scrollToSection(e, "about")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/#about"
                    selected={activeSection === "about"}
                    onClick={(e: any) => scrollToSection(e, "about")}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/#work"
                    label={work.label}
                    selected={activeSection === "work"}
                    onClick={(e: any) => scrollToSection(e, "work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/#work"
                    selected={activeSection === "work"}
                    onClick={(e: any) => scrollToSection(e, "work")}
                  />
                </>
              )}
              {routes["/certifications"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="document"
                    href="/#certifications"
                    label={certifications.label}
                    selected={activeSection === "certifications"}
                    onClick={(e: any) => scrollToSection(e, "certifications")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="document"
                    href="/#certifications"
                    selected={activeSection === "certifications"}
                    onClick={(e: any) => scrollToSection(e, "certifications")}
                  />
                </>
              )}
              {routes["/achievements"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="rocket"
                    href="/#achievements"
                    label={achievements.label}
                    selected={activeSection === "achievements"}
                    onClick={(e: any) => scrollToSection(e, "achievements")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="rocket"
                    href="/#achievements"
                    selected={activeSection === "achievements"}
                    onClick={(e: any) => scrollToSection(e, "achievements")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/#blog"
                    label={blog.label}
                    selected={activeSection === "blog"}
                    onClick={(e: any) => scrollToSection(e, "blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/#blog"
                    selected={activeSection === "blog"}
                    onClick={(e: any) => scrollToSection(e, "blog")}
                  />
                </>
              )}
              {/* {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                  />
                </>
              )} */}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL, routes, work, blog, achievements, certifications } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { AboutContent } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}
import AchievementCards from "@/components/achievements/AchievementCards";
import CertificationCards from "@/components/certifications/CertificationCards";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <section id="home" style={{ width: "100%" }}>
        <Column fillWidth paddingY="24" gap="m">
          <Column maxWidth="s">
            {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
            )}
            <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
              <Button
                data-border="rounded"
                href="#about"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Flex gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </RevealFx>
          </Column>
        </Column>
      </section>

      {routes["/about"] && (
        <section id="about" style={{ width: "100%" }}>
          <AboutContent />
        </section>
      )}

      {routes["/work"] && (
        <section id="work" style={{ width: "100%" }}>
          <Column maxWidth="m" gap="m">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              {work.title}
            </Heading>
            <Text onBackground="neutral-weak" marginBottom="l">{work.description}</Text>
            <Projects />
          </Column>
        </section>
      )}

      {routes["/certifications"] && (
        <section id="certifications" style={{ width: "100%" }}>
          <Column maxWidth="l" gap="m">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              {certifications.title}
            </Heading>
            <Text onBackground="neutral-weak" marginBottom="l">{certifications.description}</Text>
            <CertificationCards />
          </Column>
        </section>
      )}

      {routes["/achievements"] && (
        <section id="achievements" style={{ width: "100%" }}>
          <Column maxWidth="l" gap="m">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              {achievements.title}
            </Heading>
            <Text onBackground="neutral-weak" marginBottom="l">{achievements.description}</Text>
            <AchievementCards />
          </Column>
        </section>
      )}

      {routes["/blog"] && (
        <section id="blog" style={{ width: "100%" }}>
          <Column maxWidth="s" gap="m">
            <Heading marginBottom="l" variant="display-strong-s">
              {blog.title}
            </Heading>
            <Column fillWidth flex={1}>
              <Posts range={[1, 1]} thumbnail direction="column" />
              <Posts range={[2, 3]} thumbnail />
              <Posts range={[4]} columns="2" />
            </Column>
          </Column>
        </section>
      )}
    </Column>
  );
}

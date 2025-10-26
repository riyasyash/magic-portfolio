import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid from "@/components/achievements/MasonryGrid";
import { baseURL, achievements, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: achievements.title,
    description: achievements.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(achievements.title)}`,
    path: achievements.path,
  });
}

export default function Achievements() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={achievements.title}
        description={achievements.description}
        path={achievements.path}
        image={`/api/og/generate?title=${encodeURIComponent(achievements.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${achievements.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}

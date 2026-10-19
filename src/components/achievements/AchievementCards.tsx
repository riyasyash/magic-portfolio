import { Column, Flex, Grid, Heading, Icon, Text } from "@once-ui-system/core";
import { achievements } from "@/resources";

export default function AchievementCards() {
  return (
    <Grid columns="2" mobileColumns="1" fillWidth gap="16">
      {achievements.items.map((item, index) => (
        <Column
          key={`${item.title}-${index}`}
          fillWidth
          padding="l"
          gap="m"
          border="neutral-alpha-weak"
          radius="l"
          background="surface"
        >
          <Flex
            vertical="center"
            horizontal="center"
            width="48"
            height="48"
            radius="full"
            background="brand-alpha-weak"
          >
            <Icon name={item.icon} size="m" onBackground="brand-weak" />
          </Flex>
          <Heading as="h3" variant="heading-strong-l">
            {item.title}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {item.description}
          </Text>
        </Column>
      ))}
    </Grid>
  );
}

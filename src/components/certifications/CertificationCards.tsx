import { Column, Flex, Grid, Heading, Icon, Text } from "@once-ui-system/core";
import { certifications } from "@/resources";

export default function CertificationCards() {
  if (!certifications.items || certifications.items.length === 0) {
    return (
      <Text variant="body-default-s" onBackground="neutral-weak">
        No certifications added yet.
      </Text>
    );
  }

  return (
    <Grid columns="2" mobileColumns="1" fillWidth gap="16">
      {certifications.items.map((item: any, index: number) => (
        <Column
          key={`${item.title}-${index}`}
          fillWidth
          padding="l"
          gap="m"
          border="neutral-alpha-weak"
          radius="l"
          background="surface"
        >
          <Flex vertical="center" gap="12">
            <Flex
              vertical="center"
              horizontal="center"
              width="40"
              height="40"
              radius="full"
              background="brand-alpha-weak"
            >
              <Icon name={item.icon || "document"} size="s" onBackground="brand-weak" />
            </Flex>
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-m">
                {item.title}
              </Heading>
              {item.issuer && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.issuer}
                </Text>
              )}
            </Column>
          </Flex>
          {item.date && (
            <Text variant="label-default-s" onBackground="neutral-weak">
              {item.date}
            </Text>
          )}
          {item.credential && (
            <Text variant="body-default-s">
              <a href={item.credential} target="_blank" rel="noreferrer">
                View credential
              </a>
            </Text>
          )}
        </Column>
      ))}
    </Grid>
  );
}

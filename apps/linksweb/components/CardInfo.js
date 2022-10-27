import {
  Card,
  Spacer,
  Divider,
  Col,
  Row,
  Button,
  Link as UILink,
  Text,
} from "@nextui-org/react";

export function CardInfo({
  title,
  subtitle,
  image,
  url,
  bottomText,
  bottomCTA,
}) {
  return (
    <>
      <Spacer y={1} />
      <a href={url} target="_blank" rel="noreferrer">
        <Card
          bordered
          hoverable
          shadow
          css={{ my: 15, mw: "360px", bg: "#222" }}
        >
          <Card.Header>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#9E9E9E"
                align="left"
              >
                {title}
              </Text>
              <Text h3 align="left" color="white">
                {subtitle}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              objectFit="cover"
              width="100%"
              height={320}
              src={image}
            />
          </Card.Body>
          <Divider />
          {(bottomText || bottomCTA) && (
            <Card.Footer
              blur
              css={{
                position: "absolute",
                bgBlur: "#000001",
                bottom: 0,
                zIndex: 1,
                borderTop: "$borderWeights$light solid $gray700",
              }}
            >
              <Row justify="center">
                <Text size="xs" color="white" align="left">
                  {bottomText}
                </Text>
                <Button flat auto rounded css={{ bg: "#111" }}>
                  <Text
                    color="primary"
                    size={12}
                    transform="uppercase"
                    weight="bold"
                  >
                    {bottomCTA}
                  </Text>
                </Button>
              </Row>
            </Card.Footer>
          )}
        </Card>
      </a>
    </>
  );
}

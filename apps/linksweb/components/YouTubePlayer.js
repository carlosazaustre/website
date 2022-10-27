import {
  Button,
  Spacer,
  Card,
  Text,
  Col,
  Divider,
  Row,
  Link as UILink,
} from "@nextui-org/react";

export function YouTubePlayer({ videoID, title }) {
  return (
    <>
      <Spacer y={1} />

      <Card bordered hoverable shadow css={{ mw: "360px" }}>
        <Card.Header css={{ bg: "#222" }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#9E9E9E"
              align="left"
            >
              Video más reciente en YouTube
            </Text>
            <Text h3 align="left" color="white">
              {title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoID}`}
            frameBorder="0"
            allowFullScreen="false"
            scrolling="no"
            height="200"
            width="356"
          ></iframe>
        </Card.Body>
        <Divider />
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="flex-end">
            <Button flat auto rounded css={{ bg: "#111" }}>
              <UILink href="//carlosazaustre.es/libros/aprendiendo-javascript">
                <Text
                  color="primary"
                  size={12}
                  transform="uppercase"
                  weight="bold"
                >
                  Suscríbete al canal
                </Text>
              </UILink>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
}

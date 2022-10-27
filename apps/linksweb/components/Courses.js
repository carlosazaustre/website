import {
  Collapse,
  Spacer,
  Text,
  Avatar,
  Col,
  Button,
  Link as UILink,
} from "@nextui-org/react";

export function Courses({ courses }) {
  return (
    <>
      <Spacer y={1} />
      <Collapse.Group shadow css={{ mw: "350px", bg: "#222" }}>
        <Text h3 color="white" css={{ py: 10 }}>
          Aprende con mis cursos GRATIS
        </Text>
        {courses.map((course, index) => (
          <Collapse
            key={course.title}
            title={
              <Text h4 color="white">
                {course.title}
              </Text>
            }
            subtitle={course.subtitle}
            contentLeft={
              <Avatar
                size="lg"
                src={course.image}
                color={course.accent}
                bordered
                squared
              />
            }
          >
            <Col>
              <Text color="white" align="left">
                {course.summary}
              </Text>
              <Spacer y={1} />
              <Button auto rounded bg="primary">
                <UILink href={course.link}>
                  <Text
                    color="black"
                    size={12}
                    transform="uppercase"
                    weight="bold"
                  >
                    Ir al curso
                  </Text>
                </UILink>
              </Button>
              <Spacer y={1} />
            </Col>
          </Collapse>
        ))}
      </Collapse.Group>
    </>
  );
}

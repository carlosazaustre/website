import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../public/assets/poppins.woff", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req) {
  try {
    const fontData = await font;
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")
      : "Aprende JavaScript y Programación Web";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "url(https://carlosazaustre.es/assets/default-image.png)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              marginTop: 170,
              marginLeft: 525,
              fontSize: 70,
              fontFamily: "Poppins",
              color: "white",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
        fonts: [
          {
            name: "Poppins",
            data: fontData,
            format: "woff",
          },
        ],
      }
    );
  } catch (err) {
    console.log(`${err.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

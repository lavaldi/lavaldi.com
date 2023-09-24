import { ImageResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(
    new URL("../../public/fonts/FiraCode-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://lavaldi.com/og-bg.png)",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "inline",
            fontSize: 130,
            fontFamily: "Fira Code",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            whiteSpace: "pre-wrap",
            padding: ".25em 0",
            background: "#FAD000",
            boxShadow: ".5em 0 0 #FAD000, -.5em 0 0 #FAD000",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Fira Code",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}

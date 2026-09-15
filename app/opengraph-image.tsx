import { ImageResponse } from "next/og";

export const alt = "Akash Kute — Software Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0b0b",
          color: "white",
          padding: "70px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            right: -180,
            top: -180,
            background:
              "radial-gradient(circle, rgba(255,90,0,0.22), rgba(255,90,0,0))",
          }}
        />

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 350,
            height: 8,
            background: "#ff5a00",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 24,
                letterSpacing: 9,
                color: "#777777",
                textTransform: "uppercase",
                marginBottom: 42,
              }}
            >
              AKASH KUTE
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 112,
                fontWeight: 800,
                letterSpacing: -7,
                lineHeight: 0.82,
              }}
            >
              <span>SOFTWARE</span>

              <span
                style={{
                  color: "#ff5a00",
                }}
              >
                ENGINEER
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 18,
                fontSize: 22,
                color: "#999999",
              }}
            >
              <span>Backend</span>
              <span>·</span>
              <span>Distributed Systems</span>
              <span>·</span>
              <span>Full Stack</span>
            </div>

            <div
              style={{
                fontSize: 22,
                color: "#ff5a00",
              }}
            >
              akashkute.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
import { ImageResponse } from "next/og";

export const alt = "Akash Kute — Software Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0b0b0b",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 310,
            height: 7,
            background: "#ff5a00",
          }}
        />

        {/* subtle orange glow */}
        <div
          style={{
            position: "absolute",
            right: -170,
            top: -180,
            width: 520,
            height: 520,
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(255,90,0,0.18) 0%, rgba(255,90,0,0) 70%)",
          }}
        />

        {/* LEFT */}
        <div
          style={{
            width: 385,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 55,
          }}
        >
          <div
            style={{
              width: 300,
              height: 430,
              display: "flex",
              flexDirection: "column",
              padding: 18,
              borderRadius: 30,
              border: "2px solid #292929",
              background: "#111111",
            }}
          >
            {/* portrait */}
            <div
              style={{
                width: "100%",
                height: 280,
                display: "flex",
                overflow: "hidden",
                borderRadius: 22,
                background: "#000000",
                position: "relative",
              }}
            >
              <img
                src="https://akashkute.com/akash-profile.png"
                alt=""
                width="264"
                height="280"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  right: 14,
                  bottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.72)",
                  border: "1px solid #333333",
                  fontSize: 12,
                  letterSpacing: 2,
                  color: "#aaaaaa",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    display: "flex",
                    borderRadius: 999,
                    background: "#ff5a00",
                  }}
                />

                NYC
              </div>
            </div>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  letterSpacing: -1.5,
                }}
              >
                Akash Kute
              </div>

              <div
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  color: "#777777",
                }}
              >
                Software Engineer
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 45,
            paddingRight: 65,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 15,
              letterSpacing: 7,
              color: "#777777",
              textTransform: "uppercase",
              marginBottom: 30,
            }}
          >
            AKASH KUTE · PORTFOLIO
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 94,
              fontWeight: 800,
              letterSpacing: -6,
              lineHeight: 0.82,
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              SOFTWARE
            </div>

            <div
              style={{
                display: "flex",
                color: "#ff5a00",
              }}
            >
              ENGINEER
            </div>
          </div>

          <div
            style={{
              width: 610,
              height: 1,
              display: "flex",
              background: "#292929",
              marginTop: 38,
              marginBottom: 25,
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 20,
              lineHeight: 1.5,
              color: "#a1a1aa",
              maxWidth: 620,
            }}
          >
            Building scalable backend systems, distributed infrastructure,
            and modern product experiences.
          </div>

          <div
            style={{
              marginTop: 27,
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            {["BACKEND", "SYSTEMS", "FULL STACK"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "9px 15px",
                  borderRadius: 999,
                  border: "1px solid #343434",
                  color: "#8b8b93",
                  fontSize: 11,
                  letterSpacing: 1.5,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              fontSize: 15,
              letterSpacing: 1,
              color: "#ff5a00",
            }}
          >
            akashkute.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
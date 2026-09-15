import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          borderRadius: "38px",
          color: "white",
          fontSize: 68,
          fontWeight: 700,
          letterSpacing: "-6px",
        }}
      >
        <span>A</span>
        <span style={{ color: "#ff5a00" }}>K</span>
      </div>
    ),
    {
      ...size,
    },
  );
}
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "14px",
          border: "2px solid #ff5a00",
          color: "white",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-2px",
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
import { ImageResponse } from "next/og";

export const alt =
  "Internet Rural México - Internet para donde las opciones tradicionales no llegan.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#F7F5EF",
        color: "#1F2933",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#24523A",
          bottom: 0,
          clipPath:
            "polygon(0 64%, 18% 43%, 34% 54%, 52% 31%, 72% 58%, 100% 36%, 100% 100%, 0 100%)",
          height: "56%",
          left: 0,
          position: "absolute",
          right: 0,
        }}
      />
      <div
        style={{
          background: "#2F80C0",
          borderRadius: "999px",
          height: "104px",
          position: "absolute",
          right: "92px",
          top: "72px",
          width: "104px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div style={{ color: "#2F80C0", fontSize: 30, fontWeight: 800 }}>
          Internet Rural México
        </div>
        <div
          style={{
            color: "#24523A",
            fontSize: 82,
            fontWeight: 900,
            lineHeight: 0.96,
            maxWidth: "900px",
          }}
        >
          Internet para donde las opciones tradicionales no llegan.
        </div>
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          background: "rgba(247, 245, 239, 0.92)",
          border: "1px solid rgba(31, 41, 51, 0.16)",
          borderRadius: "8px",
          color: "#24523A",
          fontSize: 34,
          fontWeight: 800,
          padding: "22px 26px",
        }}
      >
        Guías, comparación y evaluación inicial para zonas rurales.
      </div>
    </div>,
    size,
  );
}

import { ImageResponse } from "next/og";

export const alt = "Buddhicintaka, software from Muzaffarpur, Bihar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#f7f5f2",
                    color: "#1a1a1a",
                    padding: "72px 80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 36,
                        fontWeight: 600,
                        color: "#ff4f3a",
                        letterSpacing: "-0.02em",
                    }}
                >
                    buddhicintaka
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: 58,
                            fontWeight: 500,
                            lineHeight: 1.15,
                            letterSpacing: "-0.03em",
                            maxWidth: 900,
                        }}
                    >
                        Software from Muzaffarpur, Bihar
                    </div>
                    <div
                        style={{
                            marginTop: 24,
                            fontSize: 28,
                            color: "#5c5c5c",
                            maxWidth: 820,
                            lineHeight: 1.35,
                        }}
                    >
                        Building products used across India. Monkeys. Aasriva.
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}

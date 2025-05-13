import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(135deg, #fff176, #ffd54f)',
            color: '#2c1e00',
            padding: '60px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            fontSize: 60,
            fontWeight: 800,
            fontFamily: 'Comic Sans MS, Inter, sans-serif',
          }}
        >
          <div style={{ fontSize: 28, color: '#5d4037', marginBottom: 24 }}>
            Giggle Charisma
          </div>
          <div style={{ fontSize: 72 }}>Meme Generator</div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              marginTop: 30,
              maxWidth: 800,
            }}
          >
            Drag. Drop. Laugh. Repeat. Your daily dose of meme chaos.
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

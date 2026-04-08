import { clientLogo } from '../assets';

// Logo component using the client's actual logo
// light prop = show on dark backgrounds (adds brightness filter)
export default function Logo({ size = 80, light = false }) {
  // Logo is horizontal (aspect ~2.5:1), so height drives sizing
  const height = size;
  const width = Math.round(size * 2.49);

  return (
    <img
      src={clientLogo}
      alt="Susan Stevens Independent Celebrant"
      style={{
        height: height,
        width: 'auto',
        maxWidth: width,
        objectFit: 'contain',
        display: 'block',
        // On dark backgrounds, invert/brighten so it's visible
        filter: light
          ? 'brightness(0) invert(1) opacity(0.92)'
          : 'none',
        transition: 'filter 0.3s ease',
      }}
    />
  );
}

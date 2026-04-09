import { clientLogo } from '../assets';

export default function Logo({ size = 80, light = false }) {
  // Logo aspect ratio is ~2.74:1 (wider than tall)
  // size = height, width auto-calculated
  return (
    <img
      src={clientLogo}
      alt="Susan Stevens Independent Celebrant"
      style={{
        height: size,
        width: 'auto',
        maxWidth: size * 2.74,
        objectFit: 'contain',
        display: 'block',
        // On dark backgrounds add brightness/contrast to stay visible
        filter: light
          ? 'brightness(1.15) drop-shadow(0 1px 4px rgba(0,0,0,0.5))'
          : 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))',
        transition: 'filter 0.3s ease',
      }}
    />
  );
}

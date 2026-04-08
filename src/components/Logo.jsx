import { clientLogo } from '../assets';

// Logo always uses original colors
// On dark backgrounds, CSS drop-shadow makes it pop
export default function Logo({ size = 80, light = false }) {
  return (
    <img
      src={clientLogo}
      alt="Susan Stevens Independent Celebrant"
      style={{
        height: size,
        width: 'auto',
        maxWidth: size * 2.6,
        objectFit: 'contain',
        display: 'block',
        // On dark bg: add white drop shadow so logo pops against dark green
        filter: light
          ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5)) drop-shadow(0 1px 3px rgba(0,0,0,0.8)) brightness(1.1)'
          : 'drop-shadow(0 1px 3px rgba(0,0,0,0.15))',
        transition: 'filter 0.3s ease',
      }}
    />
  );
}

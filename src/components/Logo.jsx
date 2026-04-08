import { clientLogo, clientLogoWhite } from '../assets';

export default function Logo({ size = 80, light = false }) {
  return (
    <img
      src={light ? clientLogoWhite : clientLogo}
      alt="Susan Stevens Independent Celebrant"
      style={{
        height: size,
        width: 'auto',
        maxWidth: size * 2.5,
        objectFit: 'contain',
        display: 'block',
        transition: 'opacity 0.3s ease',
      }}
    />
  );
}

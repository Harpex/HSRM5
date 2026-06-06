/**
 * Sade, çizgisel (stroke) ikonlar — brif gereği minimal ve kurumsal.
 * Hepsi currentColor kullanır, 1.5 stroke genişliğindedir.
 */
type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const FactoryIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M4 21V9l5 3V9l5 3V6l6 3v12" />
    <path d="M8 21v-3M13 21v-3M18 21v-3" />
  </svg>
)

export const GaugeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 13a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" />
    <path d="m15 9-3 4" />
    <circle cx="12" cy="13" r="1" />
  </svg>
)

export const ShieldCheckIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const HandshakeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="m11 17 2 2 4-4" />
    <path d="M3 11l4-4 5 1 3-2 6 4-3 4-4-3" />
    <path d="M3 11l5 5 3-1" />
  </svg>
)

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
  </svg>
)

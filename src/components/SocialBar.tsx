import React from 'react';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nigat-solutions/',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nigat_tech/',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@nigat_tech',
    icon: (
      <img src="/images/Tiktok_icon.svg.png" alt="TikTok" width={28} height={28} style={{ display: 'block' }} />
    ),
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/nigatsoln/',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/></svg>
    ),
  },
  {
    name: 'Telegram',
    url: 'https://t.me/negat_ai',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.93 7.29l-1.63 7.73c-.12.54-.44.67-.89.42l-2.47-1.82-1.19 1.15c-.13.13-.24.24-.49.24l.17-2.39 4.35-3.93c.19-.17-.04-.27-.29-.1l-5.38 3.39-2.32-.73c-.5-.16-.51-.5.1-.73l9.06-3.5c.42-.16.8.1.66.73z"/></svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://x.com/nigat_tech',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.188 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.702 4.388 3.965 4.84-.415.113-.853.174-1.304.174-.319 0-.626-.031-.927-.088.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.104-6.102 2.104-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    ),
  },
];

const SocialBar: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      background: 'rgba(22, 25, 28, 0.7)',
      borderRadius: '1.5rem 0 0 1.5rem',
      padding: '1rem 0.5rem 1rem 0.5rem',
      boxShadow: '0 0 16px #ffa72644',
    }}
  >
    <span style={{ writingMode: 'vertical-rl', color: '#ffa726', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
      Follow Us
    </span>
    {socials.map(s => (
      <a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#fff', transition: 'color 0.2s' }}
        aria-label={s.name}
        onMouseOver={e => {
          e.currentTarget.style.color = '#ffa726';
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = 'drop-shadow(0 0 6px #ffa726) brightness(1.2)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.color = '#fff';
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = '';
        }}
        onTouchStart={e => {
          e.currentTarget.style.color = '#ffa726';
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = 'drop-shadow(0 0 6px #ffa726) brightness(1.2)';
        }}
        onTouchEnd={e => {
          e.currentTarget.style.color = '#fff';
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.filter = '';
        }}
      >
        {s.icon}
      </a>
    ))}
  </div>
);

export default SocialBar;

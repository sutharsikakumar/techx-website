import { footer } from '@/content';
import { Wordmark } from './Wordmark';
import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5v6M11.5 16.5v-6M11.5 13.2a2.5 2.5 0 0 1 5 0v3.3" />
      <circle cx="8" cy="7.6" r="0.7" fill="currentColor" />
    </svg>
  );
}

function HeelLifeIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function Footer() {
  const socials = [
    { ...footer.instagram, network: 'Instagram', Icon: InstagramIcon },
    { ...footer.linkedin, network: 'LinkedIn', Icon: LinkedInIcon },
    { ...footer.heellife, network: 'HeelLife', Icon: HeelLifeIcon },
  ];
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <ul className={styles.socials}>
          {socials.map(({ href, label, network, Icon }) => (
            <li key={network}>
              <a
                className={styles.link}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`TechX on ${network} (opens in a new tab)`}
              >
                <Icon />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Wordmark />
    </footer>
  );
}

import { footer } from '@/content';
import { Wordmark } from './Wordmark';
import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 10v9M5 5.5v.01M10 19v-5.5a3.5 3.5 0 0 1 7 0V19M10 10v9" />
    </svg>
  );
}

export function Footer() {
  const socials = [
    { ...footer.instagram, network: 'Instagram', Icon: InstagramIcon },
    { ...footer.linkedin, network: 'LinkedIn', Icon: LinkedInIcon },
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

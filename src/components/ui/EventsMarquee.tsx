import { CodeXml, Mic, Presentation, Terminal, Users } from "lucide-react";
import styles from "./EventsMarquee.module.css";

const EVENT_TYPES = [
  { label: "Workshops", caption: "Learn by doing", icon: Terminal },
  { label: "Hackathons", caption: "Build together", icon: CodeXml },
  { label: "Guest Speakers", caption: "Hear from experts", icon: Mic },
  { label: "Socials", caption: "Find your people", icon: Users },
  { label: "Tech Talks", caption: "Trade ideas", icon: Presentation },
];

export function EventsMarquee() {
  return (
    <div className={styles.marquee}>
      <p className="sr-only">
        Our events: {EVENT_TYPES.map(({ label }) => label).join(", ")}.
      </p>
      <div className={styles.viewport} aria-hidden="true">
        <div className={styles.track}>
          {/* Identical groups meet exactly at the animation's halfway offset. */}
          {[0, 1].map((group) => (
            <div className={styles.group} key={group}>
              {[...EVENT_TYPES, ...EVENT_TYPES].map(
                ({ label, caption, icon: Icon }, index) => (
                  <span
                    className={`${styles.item} ${index >= EVENT_TYPES.length ? styles.repeat : ""}`}
                    key={`${label}-${index}`}
                    data-category={label}
                  >
                    <span className={styles.stamp}>
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                    <span className={styles.copy}>
                      <span className={styles.label}>{label}</span>
                      <span className={styles.caption}>{caption}</span>
                    </span>
                    <span className={styles.separator} />
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

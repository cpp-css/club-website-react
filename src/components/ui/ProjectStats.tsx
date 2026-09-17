import { FolderCode, Rocket, Users } from "lucide-react";
import styles from "./ProjectStats.module.css";

interface ProjectStatsProps {
  projects: number;
  contributors: number;
  liveApps: number;
}

export function ProjectStats({ projects, contributors, liveApps }: ProjectStatsProps) {
  const stats = [
    { value: projects, suffix: "", label: "Projects", note: "Ideas made real", icon: FolderCode },
    { value: contributors, suffix: "+", label: "Contributors", note: "People behind the code", icon: Users },
    { value: liveApps, suffix: "", label: "Live apps", note: "Out in the world", icon: Rocket },
  ];

  return (
    <div className={styles.wrapper}>
      <section className={styles.card} aria-label="Club project statistics">
        <div className={styles.heading}>
          <p>Built here, together.</p>
          <span className={styles.sticker}>Student built <span aria-hidden="true">↗</span></span>
        </div>
        <dl className={styles.stats}>
          {stats.map(({ value, suffix, label, note, icon: Icon }) => (
            <div className={styles.stat} key={label}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.value}>{value}<span>{suffix}</span></dd>
              <dd className={styles.note}>{note}</dd>
              <Icon className={styles.icon} size={26} strokeWidth={1.5} aria-hidden="true" />
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

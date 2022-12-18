import React from 'react';
import styles from '@styles/components/home/MainStatementSection.module.css';
//--
export default function MainStatementSection() {
  return (
    <section className={styles.statement_section}>
      <div className={styles.statement_section__container_all}>
        <div className={styles.statement_section__container_main_text}>
          <div className={styles.statement_section__wrapper_main_text}>
            <h1 className={styles.statement_section__main_text}>
              <span className={styles.statement_section__span_text}>Create the perfect agile workflows</span>
              <br />
              for your software development team
            </h1>
          </div>
        </div>
        <div className={styles.statement_section__container_secondary_text}>
          <div className={styles.statement_section__wrapper_secondary_text}>
            <p className={styles.statement_section__secondary_text}>
              Manage simple and complex projects with desoft.com
            </p>
          </div>
        </div>
        <div className={styles.statement_section__container_tertiary_text}>
          <div className={styles.statement_section__wrapper_tertiary_text}>
            <p className={styles.statement_section__tertiary_text}>Select which templates you need to get started:</p>
          </div>
        </div>
      </div>
    </section>
  );
}

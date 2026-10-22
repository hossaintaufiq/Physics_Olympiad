"use client";

import { useState } from "react";
import styles from "./SampleQuestions.module.css";

// ---- Edit here ------------------------------------------------------------
// Put the PDFs in:  public/sample-questions/
// "file" is the URL path (everything under /public is served from the root).
// Grade ranges are assumptions: change them to match your site.
export interface Paper {
  key: string;
  title: string;
  grade: string;
  pages: string;
  file: string;
}

const PAPERS: Paper[] = [
  {
    key: "A",
    title: "ক্যাটাগরি A",
    grade: "পঞ্চম – ষষ্ঠ শ্রেণি",
    pages: "৩",
    file: "/sample-questions/Sample_Questions_Category_A.pdf",
  },
  {
    key: "B",
    title: "ক্যাটাগরি B",
    grade: "সপ্তম – অষ্টম শ্রেণি",
    pages: "৪",
    file: "/sample-questions/Sample_Questions_Category_B.pdf",
  },
  {
    key: "C",
    title: "ক্যাটাগরি C",
    grade: "নবম – দশম শ্রেণি",
    pages: "৫",
    file: "/sample-questions/Sample_Questions_Category_C.pdf",
  },
  {
    key: "D",
    title: "ক্যাটাগরি D",
    grade: "একাদশ – দ্বাদশ শ্রেণি",
    pages: "৩",
    file: "/sample-questions/Sample_Questions_Category_D.pdf",
  },
];
// --------------------------------------------------------------------------

interface SampleQuestionsProps {
  papers?: Paper[];
  title?: string;
}

export default function SampleQuestions({
  papers = PAPERS,
  title = "নমুনা প্রশ্ন",
}: SampleQuestionsProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const open = papers.find((p) => p.key === openKey);

  return (
    <section className={styles.sq} aria-labelledby="sq-title">
      <h2 id="sq-title" className={styles.sq__title}>
        {title}
      </h2>
      <p className={styles.sq__sub}>
        তোমার ক্যাটাগরি অনুযায়ী নমুনা প্রশ্নপত্র দেখো বা PDF ডাউনলোড করো।
      </p>

      <div className={styles.sq__grid}>
        {papers.map((p) => (
          <article
            key={p.key}
            className={`${styles.sq__card} ${
              openKey === p.key ? styles["is-open"] : ""
            }`}
          >
            <div className={styles.sq__badge} aria-hidden="true">
              {p.key}
            </div>
            <h3 className={styles.sq__name}>{p.title}</h3>
            <p className={styles.sq__grade}>{p.grade}</p>
            <p className={styles.sq__meta}>📄 PDF · {p.pages} পৃষ্ঠা</p>

            <div className={styles.sq__actions}>
              <button
                type="button"
                className={`${styles.sq__btn} ${styles["sq__btn--primary"]}`}
                aria-expanded={openKey === p.key}
                onClick={() => setOpenKey(openKey === p.key ? null : p.key)}
              >
                {openKey === p.key ? "বন্ধ করো" : "দেখো"}
              </button>
              <a className={styles.sq__btn} href={p.file} download>
                ⬇ ডাউনলোড
              </a>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div className={styles.sq__viewer}>
          <div className={styles.sq__viewerHead}>
            <strong>{open.title} – নমুনা প্রশ্ন</strong>
            <a
              className={styles.sq__link}
              href={open.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              নতুন ট্যাবে খোলো ↗
            </a>
          </div>
          <iframe
            key={open.key}
            className={styles.sq__frame}
            src={`${open.file}#toolbar=1&view=FitH`}
            title={`${open.title} নমুনা প্রশ্ন`}
          />
          <p className={styles.sq__fallback}>
            PDF দেখা না গেলে <a href={open.file}>এখানে ক্লিক করে</a> ডাউনলোড করো।
          </p>
        </div>
      )}
    </section>
  );
}

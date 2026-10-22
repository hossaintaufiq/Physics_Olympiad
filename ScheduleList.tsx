import { useMemo, useState } from "react";
import "./ScheduleList.css";

type Status = "upcoming" | "ongoing" | "completed";
type FilterKey = "all" | Status;

export interface ScheduleItem {
  id: number;
  /** "YYYY-MM-DD" */
  date: string;
  /** "YYYY-MM-DD" — optional, for multi-day events */
  endDate?: string;
  title: string;
  time?: string;
  venue?: string;
  note?: string;
}

type ScheduleRow = ScheduleItem & { status: Status };

// ---- Edit this list to change the schedule -------------------------------
// date / endDate: "YYYY-MM-DD". endDate is optional (for multi-day events).
// The status badge (upcoming / ongoing / completed) is computed automatically.
const SCHEDULE: ScheduleItem[] = [
  {
    id: 1,
    date: "2026-11-01",
    endDate: "2026-11-30",
    title: "অনলাইন নিবন্ধন",
    time: "সারাদিন",
    venue: "অনলাইন",
    note: "নিবন্ধন ফি পরিশোধের মাধ্যমে নিবন্ধন সম্পন্ন করুন।",
  },
  {
    id: 2,
    date: "2026-12-10",
    title: "প্রবেশপত্র প্রকাশ",
    time: "সকাল ১০:০০",
    venue: "অনলাইন",
    note: "ওয়েবসাইট থেকে প্রবেশপত্র ডাউনলোড করুন।",
  },
  {
    id: 3,
    date: "2026-12-20",
    title: "আঞ্চলিক পর্ব",
    time: "সকাল ১০:০০ – দুপুর ১২:৩০",
    venue: "নির্ধারিত কেন্দ্রসমূহ",
    note: "প্রতিটি ক্যাটাগরির জন্য ২ ঘণ্টা ৩০ মিনিট।",
  },
  {
    id: 4,
    date: "2027-01-15",
    title: "জাতীয় ফাইনাল",
    time: "সকাল ৯:০০",
    venue: "ঢাকা",
    note: "আঞ্চলিক পর্বে নির্বাচিতদের জন্য।",
  },
  {
    id: 5,
    date: "2027-01-25",
    title: "পুরস্কার বিতরণী অনুষ্ঠান",
    time: "বিকাল ৪:০০",
    venue: "ঢাকা",
    note: "বিজয়ীদের হাতে পুরস্কার তুলে দেওয়া হবে।",
  },
];
// --------------------------------------------------------------------------

const STATUS_LABEL: Record<Status, string> = {
  upcoming: "আসন্ন",
  ongoing: "চলমান",
  completed: "সমাপ্ত",
};

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "সব" },
  { key: "upcoming", label: "আসন্ন" },
  { key: "ongoing", label: "চলমান" },
  { key: "completed", label: "সমাপ্ত" },
];

const toDate = (s: string): Date => new Date(`${s}T00:00:00`);

function getStatus(item: ScheduleItem, now: Date): Status {
  const start = toDate(item.date);
  const end = toDate(item.endDate || item.date);
  end.setHours(23, 59, 59, 999);
  if (now < start) return "upcoming";
  if (now > end) return "completed";
  return "ongoing";
}

const fmt = (d: Date, opts: Intl.DateTimeFormatOptions): string =>
  d.toLocaleDateString("bn-BD", opts);

interface ScheduleListProps {
  items?: ScheduleItem[];
  title?: string;
}

export default function ScheduleList({
  items = SCHEDULE,
  title = "সময়সূচি",
}: ScheduleListProps) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const rows = useMemo<ScheduleRow[]>(() => {
    const now = new Date();
    return [...items]
      .sort((a, b) => toDate(a.date).getTime() - toDate(b.date).getTime())
      .map((it): ScheduleRow => ({ ...it, status: getStatus(it, now) }))
      .filter((it) => filter === "all" || it.status === filter);
  }, [items, filter]);

  return (
    <section className="sch" aria-labelledby="sch-title">
      <div className="sch__head">
        <h2 id="sch-title" className="sch__title">
          {title}
        </h2>
        <div className="sch__tabs" role="tablist" aria-label="সময়সূচি ফিল্টার">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`sch__tab ${filter === f.key ? "is-active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="sch__empty">কোনো ইভেন্ট পাওয়া যায়নি।</p>
      ) : (
        <ul className="sch__list">
          {rows.map((it) => {
            const d = toDate(it.date);
            const e = it.endDate ? toDate(it.endDate) : null;
            return (
              <li key={it.id} className={`sch__item sch__item--${it.status}`}>
                <div className="sch__date" aria-hidden="true">
                  <span className="sch__day">{fmt(d, { day: "numeric" })}</span>
                  <span className="sch__month">{fmt(d, { month: "short" })}</span>
                  <span className="sch__year">{fmt(d, { year: "numeric" })}</span>
                </div>

                <div className="sch__body">
                  <div className="sch__row">
                    <h3 className="sch__name">{it.title}</h3>
                    <span className={`sch__badge sch__badge--${it.status}`}>
                      {STATUS_LABEL[it.status]}
                    </span>
                  </div>

                  <p className="sch__meta">
                    <span>
                      📅 {fmt(d, { day: "numeric", month: "long", year: "numeric" })}
                      {e && ` – ${fmt(e, { day: "numeric", month: "long", year: "numeric" })}`}
                    </span>
                    {it.time && <span>🕒 {it.time}</span>}
                    {it.venue && <span>📍 {it.venue}</span>}
                  </p>

                  {it.note && <p className="sch__note">{it.note}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

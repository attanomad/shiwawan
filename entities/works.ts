export enum WorkStatus {
  InProgress = "IN_PROGRESS",
  Delivered = "DELIVERED",
}
export interface Work {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  imageUrl: string;
  cta: string;
  tags: string[];
  status: WorkStatus;
  kickedOffOn?: Date;
  deliveredOn?: Date;
}

export const workList: Array<Work> = [
  {
    id: "1",
    slug: "ban-petch-chiropractic",
    title: "บ้านเพชรจัดกระดูก",
    tagline: "Lorem ipsum dolor sit amet",
    imageUrl: "",
    cta: "ดูเพิ่มเติม",
    tags: ["Profile Website"],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "2",
    slug: "g-fitness",
    title: "G Fitness",
    tagline: "Lorem ipsum dolor sit amet",
    imageUrl: "",
    cta: "ดูเพิ่มเติม",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "3",
    slug: "thappray-real-estate",
    title: "Thappraya Real Estate",
    tagline: "Lorem ipsum dolor sit amet",
    imageUrl: "",
    cta: "ดูเพิ่มเติม",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "4",
    slug: "hedonism-cafe",
    title: "Hedonism Cafe",
    tagline: "Lorem ipsum dolor sit amet",
    imageUrl: "",
    cta: "ดูเพิ่มเติม",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "5",
    slug: "2-hedonism-cafe",
    title: "2 Hedonism Cafe",
    tagline: "Lorem ipsum dolor sit amet",
    imageUrl: "",
    cta: "ดูเพิ่มเติม",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "6",
    slug: "3-hedonism-cafe",
    title: "3 Hedonism Cafe",
    tagline: "Lorem ipsum dolor sit amet",
    imageUrl: "",
    cta: "ดูเพิ่มเติม",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
];

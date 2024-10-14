import { SupportedLocale } from "./common";

export enum WorkStatus {
  InProgress = "IN_PROGRESS",
  Delivered = "DELIVERED",
}
export interface Work {
  id: string;
  content: Record<
    SupportedLocale,
    {
      title: string;
      tagline: string;
      cta: string;
    }
  >;
  slug: string;
  imageUrl: string;
  tags: string[];
  status: WorkStatus;
  kickedOffOn?: Date;
  deliveredOn?: Date;
  url?: string;
}

export const workList: Array<Work> = [
  {
    id: "1",
    content: {
      th: {
        title: "บ้านเพชรจัดกระดูก",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "ดูเพิ่มเติม",
      },
      en: {
        title: "Ban Petch Chiropractic",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "See more",
      },
    },
    slug: "ban-petch-chiropractic",
    imageUrl: "/images/works/banpetch.jpg",
    tags: ["Profile Website"],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "2",
    content: {
      th: {
        title: "G Fitness",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "ดูเพิ่มเติม",
      },
      en: {
        title: "G Fitness",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "See more",
      },
    },
    slug: "g-fitness",
    imageUrl: "/images/works/g-fitness.jpg",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "3",
    content: {
      th: {
        title: "Thappraya Property",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "ดูเพิ่มเติม",
      },
      en: {
        title: "Thappraya Property",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "See more",
      },
    },
    slug: "thapprayaproperty",
    imageUrl: "/images/works/thappraya-real-estate.jpg",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
    url: "https://thapprayaproperty.shiwawan.com/",
  },
  {
    id: "4",
    content: {
      th: {
        title: "Hedonism Cafe",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "ดูเพิ่มเติม",
      },
      en: {
        title: "Hedonism Cafe",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "See more",
      },
    },
    slug: "hedonism-cafe",
    imageUrl: "/images/works/hedonism.jpg",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "5",
    content: {
      th: {
        title: "2 Hedonism Cafe",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "ดูเพิ่มเติม",
      },
      en: {
        title: "2 Hedonism Cafe",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "See more",
      },
    },
    slug: "2-hedonism-cafe",
    imageUrl: "",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
  {
    id: "6",
    content: {
      th: {
        title: "3 Hedonism Cafe",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "ดูเพิ่มเติม",
      },
      en: {
        title: "3 Hedonism Cafe",
        tagline: "Lorem ipsum dolor sit amet",
        cta: "See more",
      },
    },
    slug: "3-hedonism-cafe",
    imageUrl: "",
    tags: [],
    status: WorkStatus.Delivered,
    kickedOffOn: new Date("2024-08-01:00:00+0700"),
    deliveredOn: new Date("2024-09-24:00:00+0700"),
  },
];

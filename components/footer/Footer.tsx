const content = {
  social: {
    title: "พบเราได้ที่",
    socialList: [
      { id: "ig", title: "Instagram", url: "https://instagram.com/@shiwawan" },
      { id: "fb", title: "Facebook", url: "https://facebook.com/@shiwawan" },
      { id: "x", title: "X (Twitter)", url: "https://x.com/@shiwawan" },
      { id: "line", title: "Line", url: "https://line.me/@shiwawan" },
    ],
  },
  copyright: "© 2024 All Rights Reserved.",
};
export default function Footer() {
  return (
    <div className="flex justify-between items-end px-16 py-32 bg-accent-five text-white">
      <div>
        <p className="font-bold text-2xl">{content.social.title}:</p>
        <ul className="text-xl mt-[10px]">
          {content.social.socialList.map((s) => (
            <li key={s.id}>
              <a href={s.url}>{s.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-base">{content.copyright}</p>
    </div>
  );
}

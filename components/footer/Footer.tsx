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
    <footer className="bg-accent-five">
      <div className="flex gap-8 md:flex-row justify-between items-end md:items-end px-8 xl:px-16 py-16 xl:py-32 text-white">
        <div>
          <p className="font-bold text-lg xl:text-2xl">
            {content.social.title}:
          </p>
          <ul className="text-sm xl:text-xl mt-[10px]">
            {content.social.socialList.map((s) => (
              <li key={s.id}>
                <a href={s.url}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs">{content.copyright}</p>
      </div>

      {/* Nav Bar Placeholder */}
      <div className="w-full h-[50px]"></div>
    </footer>
  );
}

export interface SocialNetwork {
  id: string;
  title: string;
  url: string;
}

export const socialNetworks: SocialNetwork[] = [
  {
    id: "ig",
    title: "Instagram",
    url: "https://instagram.com/@shiwawan.web",
  },
  {
    id: "fb",
    title: "Facebook",
    url: "https://facebook.com/@shiwawan.web",
  },
  { id: "x", title: "X (Twitter)", url: "https://x.com/@shiwawanweb" },
  { id: "line", title: "Line", url: "https://lin.ee/P31hQii" },
];

export const socialNetworkIndex = socialNetworks.reduce<
  Record<string, SocialNetwork>
>((obj, s) => {
  obj[s.id] = s;

  return obj;
}, {});

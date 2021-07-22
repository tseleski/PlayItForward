export type UserInfo = {
  display_name: string;
  external_urls: {
    spotify: string;
  },
  followers: {
    href: string | null,
    total: number;
  },
  href: string;
  id: string;
  images: [];
  type: string;
  uri: string;
}

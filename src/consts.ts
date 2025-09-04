import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Poker Leaderboard",
  EMAIL: "butterflymaeve124@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_SESSIONS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SESSION: Metadata = {
  TITLE: "Session",
  DESCRIPTION: "A result from an online poker session we played",
}

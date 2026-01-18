/**
 * Profile data for Executive and General Council members
 * Used in the About page
 */

export type ProfileData = {
  fullName: string;
  position?: string;
  imageUrl?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
};

export type ProfileGroup = {
  title?: string;
  profiles: ProfileData[];
};

// Executive Council Profiles
export const EXECUTIVE_COUNCIL_PROFILES: ProfileData[] = [
  {
    fullName: "Cynthia Sa",
    position: "Co-President",
    github: "https://github.com/praticodes",
    linkedin: "https://www.linkedin.com/in/cynthia-sa-5776b0192/",
    imageUrl: "/people/CynthiaSa.webp",
  },
  {
    fullName: "Pratibha Thakur",
    position: "Co-President",
    github: "https://github.com/praticodes",
    linkedin: "https://www.linkedin.com/in/thakur-pratibha",
    imageUrl: "/people/PratibhaThakur.webp",
  },
];

export const VP_PROFILES: ProfileData[] = [
  {
    fullName: "Aditya Gautam",
    position: "Treasurer",
    github: "https://github.com/Autumn-AG",
    linkedin: "https://www.linkedin.com/in/adityagautam-ag/",
    imageUrl: "",
  },
  {
    fullName: "Yanzhen Chen",
    position: "VP External",
    github: "https://github.com/YheChen",
    linkedin: "https://www.linkedin.com/in/yanzhenchen/",
    imageUrl: "/people/YanzhenChen.webp",
  },
  {
    fullName: "Edison Yao",
    position: "VP Internal",
    github: "https://github.com/DojimaRyu",
    linkedin: "https://www.linkedin.com/in/edison-yao/",
    imageUrl: "/people/EdisonYao.webp",
  },
  {
    fullName: "Lily Phan",
    position: "VP Academic",
    github: "https://github.com/pH-li",
    linkedin: "https://www.linkedin.com/in/lilyphan48/",
    imageUrl: "/people/LilyPhan.webp",
  },
];

export const VP_SOCIAL_MARKETING_PROFILES: ProfileData[] = [
  {
    fullName: "Alisa Iskakova",
    position: "VP Social",
    github: "https://github.com/alisa-isk",
    linkedin: "https://www.linkedin.com/in/alisa-iskakova-b278022b7/",
    imageUrl: "/people/AlisaIskakova.webp",
  },
  {
    fullName: "Colleen Chang",
    position: "VP Marketing",
    github: "https://github.com/chexerboxer",
    linkedin: "https://www.linkedin.com/in/colleenxychang/",
    imageUrl: "/people/ColleenChang.webp",
  },
  {
    fullName: "Avery Ng",
    position: "VP Special Events",
    github: "https://github.com/avery-jingxin",
    linkedin: "https://www.linkedin.com/in/averyng128/",
  },
];

// General Council Profiles (currently empty, commented out examples provided)
// Uncomment and update when General Council members are appointed
/*
export const GENERAL_COUNCIL_PROFILES: ProfileData[] = [
  {
    fullName: "Vishnu Nittoor",
    position: "Associate, Academic Committee",
  },
  {
    fullName: "Andrew Kwok",
    position: "Associate, Academic Committee",
  },
  {
    fullName: "Alan Su",
    position: "Associate, Academic Committee",
  },
];
*/

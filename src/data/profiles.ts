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

/*
The following profiles are for execs and council members; if you don't have all the information, 
  it's fine - as long as your create a profile with their name, we can handle it.  

TODO: store this online and use an API?  */

// Executive Council Profiles
export const COPRES_PROFILES: ProfileData[] = [
  {
    fullName: "Yanzhen Chen",
    position: "Co-President",
    github: "https://github.com/YheChen",
    linkedin: "https://www.linkedin.com/in/yanzhenchen/",
    imageUrl: "/people/exec/YanzhenChen.webp",
  },
  {
    fullName: "Avery Ng",
    position: "Co-President",
    github: "https://github.com/avery-jingxin",
    linkedin: "https://www.linkedin.com/in/averyng128/",
    imageUrl: "/people/exec/avery-n.jpeg",
  },
];

export const VP_PROFILES: ProfileData[] = [
  {
    fullName: "Eva Verkhovsky",
    position: "Treasurer",
    imageUrl: "/people/exec/eva-v.webp",
  },
  {
    fullName: "Jordan Shao",
    position: "VP Academic",
    imageUrl: "/people/exec/jordan-s.webp",
  },
  {
    fullName: "Edison Yao",
    position: "VP Internal",
    github: "https://github.com/DojimaRyu",
    linkedin: "https://www.linkedin.com/in/edison-yao/",
    imageUrl: "/people/exec/chud^2.webp",
  },
  {
    fullName: "Pranay Chopra",
    position: "VP External",
    imageUrl: "/people/exec/pranay-c.webp",
  },
  {
    fullName: "Abhirve Munipalle",
    position: "VP Marketing",
  },
  {
    fullName: "Pooja Mangra",
    position: "VP Social",
    imageUrl: "/people/exec/pooja-m.webp",
  },
  {
    fullName: "Shanaya Goel",
    position: "VP Staff",
  },
  {
    fullName: "Melody Gao",
    position: "VP Special Events",
  },
];


// General Council Profiles 

export const ACADEMIC_PROFILES: ProfileData[] = [
 
];

export const EXTERNAL_PROFILES: ProfileData[] = [

];

export const SOCIAL_PROFILES: ProfileData[] = [
  {
    fullName: "Reena Obmina",
    position: "Social Associate",
    github: "https://github.com/rmobmina",
    linkedin: "https://www.linkedin.com/in/reena-obmina/",
    imageUrl: "/people/council/social/reenaObmina.webp",
  },
];

export const FINANCE_PROFILES: ProfileData[] = [

];

export const STAFF_PROFILES: ProfileData[] = [
  { fullName: "Ziyad Mouftah",
    position: "Staff Associate",
    linkedin: "https://www.linkedin.com/in/mouftz/",
    github: "https://github.com/mouftz",
    imageUrl: "/people/council/staff/ziyadMouftah.webp"
  }
];

export const INTERNAL_PROFILES: ProfileData[] = [

];

export const MARKETING_PROFILES: ProfileData[] = [
  { fullName: "Justin Yoon",
    position: "Marketing Associate",
    linkedin: "https://www.linkedin.com/in/justinyoon95",
    github: "https://github.com/justinyoon95",
    imageUrl: "/people/council/marketing/justinYoon.jpg"
  },
  { fullName: "Jenny Bian",
    position: "Marketing Associate",
    linkedin: "https://www.linkedin.com/in/jennybian/",
    github: "https://github.com/pusheen5000000",
    imageUrl: "/people/council/marketing/jennyBian.webp"
  }
];

export const SPEVENTS_PROFILES: ProfileData[] = [
 
];


export const TECH_LEAD_PROFILE: ProfileData = 
{
  fullName: "Christopher Cao",
  position: "Tech Team Lead"
}

export const TECH_PROFILES: ProfileData[] = [
 
];


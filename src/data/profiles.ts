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
    fullName: "Cynthia Sa",
    position: "Co-President",
    github: "https://github.com/praticodes",
    linkedin: "https://www.linkedin.com/in/cynthia-sa-5776b0192/",
    imageUrl: "/people/exec/CynthiaSa.webp",
  },
  {
    fullName: "Pratibha Thakur",
    position: "Co-President",
    github: "https://github.com/praticodes",
    linkedin: "https://www.linkedin.com/in/thakur-pratibha",
    imageUrl: "/people/exec/PratibhaThakur.webp",
  },
];

export const VP_PROFILES: ProfileData[] = [
  {
    fullName: "Aditya Gautam",
    position: "Treasurer",
    github: "https://github.com/Autumn-AG",
    linkedin: "https://www.linkedin.com/in/adityagautam-ag/",
    imageUrl: "/people/exec/aditya-g.webp",
  },
  {
    fullName: "Daniel Livshits",
    position: "VP Staff",
    github: "https://github.com/DanielLivshits",
    imageUrl: "/people/exec/daniel-l.webp"
  },
  {
    fullName: "Yanzhen Chen",
    position: "VP External",
    github: "https://github.com/YheChen",
    linkedin: "https://www.linkedin.com/in/yanzhenchen/",
    imageUrl: "/people/exec/YanzhenChen.webp",
  },
  {
    fullName: "Edison Yao",
    position: "VP Internal",
    github: "https://github.com/DojimaRyu",
    linkedin: "https://www.linkedin.com/in/edison-yao/",
    imageUrl: "/people/exec/EdisonYao.webp",
  },
  {
    fullName: "Lily Phan",
    position: "VP Academic",
    github: "https://github.com/pH-li",
    linkedin: "https://www.linkedin.com/in/lilyphan48/",
    imageUrl: "/people/exec/LilyPhan.webp",
  },
  {
    fullName: "Alisa Iskakova",
    position: "VP Social",
    github: "https://github.com/alisa-isk",
    linkedin: "https://www.linkedin.com/in/alisa-iskakova-b278022b7/",
    imageUrl: "/people/exec/AlisaIskakova.webp",
  },
  {
    fullName: "Colleen Chang",
    position: "VP Marketing",
    github: "https://github.com/chexerboxer",
    linkedin: "https://www.linkedin.com/in/colleenxychang/",
    imageUrl: "/people/exec/ColleenChang.webp",
  },
  {
    fullName: "Avery Ng",
    position: "VP Special Events",
    github: "https://github.com/avery-jingxin",
    linkedin: "https://www.linkedin.com/in/averyng128/",
    imageUrl: "/people/exec/avery-n.webp"
  },
];


// General Council Profiles 

export const ACADEMIC_PROFILES: ProfileData[] = [
  {
    fullName: "Mina Wu",
    imageUrl: "/people/council/academic/mina-wu.webp",
  },
  {
    fullName: "Jordan Shao",
    imageUrl: "/people/council/academic/jordan-s.webp",
  },
  {
    fullName: "Alan Su",
    imageUrl: "/people/council/academic/alan-s.webp",
  },
  {
    fullName: "Gracie Chen",
    imageUrl: "/people/council/academic/gracie-c.webp",
  },
  {
    fullName: "Nicole Leung",
    imageUrl: "/people/council/academic/nicole-l.webp",
  },
  {
    fullName: "Angelina Jiang",
    imageUrl: "/people/council/academic/angelina-j.webp",
  },
  {
    fullName: "Shirley Zhang",
    imageUrl: "/people/council/academic/shirley-z.webp",
  },
  {
    fullName: "York Ngo",
    imageUrl: "/people/council/academic/york-n.webp",
  },
  {
    fullName: "Enver Chowdhury",
    imageUrl: "/people/council/academic/enver-c.webp",
  }
];

export const EXTERNAL_PROFILES: ProfileData[] = [
  {
    fullName: "Eva Verkhovsky",
    imageUrl: "/people/council/external/eva-v.webp"
  },
  {
    fullName: "Michelle Huang",
    imageUrl: "/people/council/external/michelle-h.webp"
  },
  {
    fullName: "Pranay Chopra",
    imageUrl: "/people/council/external/pranay-c.webp"
  },
];

export const SOCIAL_PROFILES: ProfileData[] = [
  {
    fullName: "Jenny Bian",
    imageUrl: "/people/council/social/jenny-b.webp",
    github: "https://github.com/pusheen5000000",
    linkedin: "https://www.linkedin.com/in/jenny-bian-5a734b394/"
  },
  {
    fullName: "Miray Ozedmir",
    imageUrl: "/people/council/social/miray-o.webp"
  },
  {
    fullName: "Kevin Liu",
    imageUrl: "/people/council/social/kevin-l.webp"
  },
  {
    fullName: "Vineet Koushal",
    imageUrl: "/people/council/social/vineet-k.webp"
  },
  {
    fullName: "Aaliyah Pirani",
    imageUrl: "/people/council/social/aaliyah-p.webp"
  },
  {
    fullName: "Angeline How",
    imageUrl: "/people/council/social/angeline-h.webp"
  },
  {
    fullName: "Jeremy Tam",
    imageUrl: "/people/council/social/jeremy-t.webp"
  },
  {
    fullName: "Richard Lin",
    imageUrl: "/people/council/social/richard-l.webp"
  },
];

export const FINANCE_PROFILES: ProfileData[] = [
  {
    fullName: "Hrithik Shah",
    imageUrl: "/people/council/finance/hrithik-s.webp",
    github: "https://github.com/hrithik-shah",
    linkedin: "https://www.linkedin.com/in/hrithikshah/"
  },
  {
    fullName: "Clarina Ong"
  },
  {
    fullName: "Mila Bhaloo",
    imageUrl: "/people/council/finance/mila-b.webp"
  },
  {
    fullName: "Maya Slowikowski",
    imageUrl: "/people/council/finance/maya-s.webp"
  },
  {
    fullName: "Aditya Menon"
  },
];

export const STAFF_PROFILES: ProfileData[] = [
  {
    fullName: "Chenhao Sun",
    imageUrl: "/people/council/staff/chenhao-s.webp"
  },
  {
    fullName: "Kenny Zheng",
    imageUrl: "/people/council/staff/kenny-z.webp"
  },
];

export const INTERNAL_PROFILES: ProfileData[] = [
  {
    fullName: "Ashley Bi",
    imageUrl: "/people/council/internal/ashley-b.webp",
    github: "https://github.com/trashb",
    linkedin: "https://www.linkedin.com/in/aashley-bi"
  },
  {
    fullName: "Akram Klai",
    imageUrl: "/people/council/internal/akram-k.webp"
  },
  {
    fullName: "Fatima Ghafoor"
  },
];

export const MARKETING_PROFILES: ProfileData[] = [
  {
    fullName: "Chelsey Wang",
    imageUrl: "/people/council/marketing/chelsey-w.webp"
  },
  {
    fullName: "Kimberly Prijadi",
    imageUrl: "/people/council/marketing/kimberly-p.webp"
  },
  {
    fullName: "Kerri Wei",
    imageUrl: "/people/council/marketing/kerri-w.webp"
  },
  {
    fullName: "James Hanzell"
  },
  {
    fullName: "Joyee Jin",
    imageUrl: "/people/council/marketing/joyee-j.webp"
  },
  {
    fullName: "Amy Yong",
    imageUrl: "/people/council/marketing/amy-y.webp"
  }
];

export const SPEVENTS_PROFILES: ProfileData[] = [
  {
    fullName: "Jerry Zhou"
  },
  {
    fullName: "Yeyun (Sarah) Ko"
  },
  {
    fullName: "Melody Gao"
  },
  {
    fullName: "Pooja Mangra",
    imageUrl: "/people/council/spevents/pooja-m.webp"
  }
];

export const TECH_LEAD_PROFILE: ProfileData = 
  {
    fullName: "Christopher Cao",
    position: "Tech Team Lead"
  }

export const TECH_PROFILES: ProfileData[] = [
  {
    fullName: "Stanley P.",
    position: "Tech Team Associate"
  },
  {
    fullName: "Shirley Z.",
    position: "Tech Team Associate"
  },
  {
    fullName: "Aryan A.",
    position: "Tech Team Associate"
  },
  {
    fullName: "Rashu S.",
    position: "Tech Team Associate"
  },
  {
    fullName: "Jason L.",
    position: "Tech Team Associate"
  },
];


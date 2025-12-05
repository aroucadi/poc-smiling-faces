
export interface Post {
  id: string;
  user: {
    name: string;
    practice: string;
    avatar: string;
  };
  media: {
    type: 'image' | 'video';
    url: string;
    alt: string;
  }[];
  caption: string;
  engagement: {
    likes: number;
    comments: number;
    recommends?: number;
  };
  isLiked: boolean;
  isBookmarked: boolean;
}

export const posts: Post[] = [
  {
    id: '1',
    user: {
      name: 'Dr. Angela Carmichael',
      practice: 'Carmichael Dental Arts',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnVpQA9TiHWk6lqOJLByjgrCHN5eBJlEROtiSOjGadAFUGMNB-rwQpvDH58i-XtyE06pSGKvp1FVOwAbiBHJixUIZ_IACnUjodNevWhkp3FnSKPjXsXdQ8lzX11MKg1mFEgiKf3q0QVTdEkv1iXDOkaYPwUftObCSyokqLzQ0TlhE7_gWqDof1jWa8G3cTOBQJvF31GW1nP0bKmZFsK55mDx4OKr8M7jqpCVvMAKJyo6st_QD4Aju62Gq86atFa-Qud1uQ3sPAm-M',
    },
    media: [
      {
        type: 'image',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6mwseyFHObpsrqN2lXblnkldrSICiO1ARQ57HkWJZQ4jX8yYfSgBTTr9SDLk1IwCmSl3mAd4nhklt9WCu0dvXw9UeW6jtygPXe5EyXj2Mqm2RhMQ9SzQ4Ai9hcp8CdQkhF3wpv6f574LYZsGzG38e0JHJAOKezAJ5uLzxQ6gzjz_IUrtAhqam2KtY9VefBhgQqGsk35WMbUUGJSft0coQuHKT2ifDKF9RzFCCk8XvymH47agsC9BqNEUKZ0EHb2ntbVmIw9t22oE',
        alt: "Before and after photo of a patient's smile transformed with porcelain veneers.",
      },
      {
        type: 'image',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2IAMidq-byIC0SkMLsv2zO5OG7QjLsLOsmKWB2ENKPcZUPDUa12QU9bKNJclrRREKiS25fxULZuNbH1DnJaFK_ZoN_3VLju_HmVZjHild5Fdp6-G-W5noQl8H9G1xcMX1N54pHRKb5SBBXJROemzlZnwV4pplkyeB3zTnWueQF0ndZr-qigYWY3-KqCIOp1P5SIw3eLHSHmcE1dG7MOELpO4zYl19D5fEecPt-7V4Eh1jLMbc7mlU8i62u8-SQtvrM6Aj2UlVLHc',
        alt: 'A beautiful, confident smile after a cosmetic dentistry procedure.',
      }
    ],
    caption:
      "Transformed this patient's smile with a full set of porcelain veneers. The process was completed over two visits, focusing on creating a natural, bright, and harmonious look. Seeing the joy on their face makes every moment of this detailed work worth it. What a stunning result!",
    engagement: {
      likes: 1200,
      comments: 88,
      recommends: 42,
    },
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: '2',
    user: {
      name: 'Dr. Marcus Thorne',
      practice: 'Thorne Precision Dentistry',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC2kwezR_JrO_y28SF37NEb8ur1DbhYhkPnKcEIXko5xATqZlWiOFSNNL9keqallcRx8FhLtf7onWLvUAwot6Ksr8cgp5x0WFLqy_K1bcL7a-sQVjqtfksYX2yhQXT6-calmfMXTd-5vG0xc8Y3cnhB_CD847OTp4k7eeklSiE1a-JjkD3QoZP6yldWIbZcydAqhI1SIlA_K5BPvSyV3f04hrZut2jsKHAsHwn9Y4jH6moZsk8wYVVjXp-oDz4f6YWGO6ggNWdZX8',
    },
    media: [
      {
        type: 'image',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGWqi-i1_HG23tNXkoiECQNO_AJCau9Wt0e2U1tA0rCup4O9K-wfkFBLFP23MjSJ-hnDLDFGqXCjh6-izlPTuyf-38iu390FXb6Kj4ciOHm3YE8RmDSm0zLshQI40FJlndh33g8_sqPzZA0odcMoVSIsuWiyQnBYZw1tm3VlNwhVwywu8W8-oZdj4xqP2zYh5PoXMqE-ptbcMY_5bc6_SLwCNEBHI2G_ZKFYkso5mKbu8D4hg7bOq3Zl0F6v7yHNG3TbPGaB9P2PM',
        alt: 'Before and after of a complex dental implant surgery.',
      },
    ],
    caption:
      'A challenging but rewarding implant case. Our patient can now smile with confidence after years of discomfort. The procedure involved a sinus lift and bone graft, followed by the placement of three implants. A testament to meticulous planning and execution.',
    engagement: {
      likes: 894,
      comments: 102,
    },
    isLiked: false,
    isBookmarked: true,
  },
];

export interface AnalyticsData {
  profileViews: {
    total: number;
    change: number;
  };
  postEngagementRate: {
    rate: number;
    change: number;
  };
  leadsGenerated: {
    total: number;
    change: number;
  };
  appointmentsBooked: {
    total: number;
    change: number;
  };
  topPerformingPosts: {
    id: string;
    thumbnail: string;
    caption: string;
    views: number;
    likes: number;
  }[];
  visibilityRanking: {
    rank: number;
    category: string;
    location: string;
  };
}

export const analyticsData: AnalyticsData = {
  profileViews: {
    total: 1482,
    change: 15.2,
  },
  postEngagementRate: {
    rate: 4.7,
    change: 2.1,
  },
  leadsGenerated: {
    total: 28,
    change: 12.5,
  },
  appointmentsBooked: {
    total: 12,
    change: -3.0,
  },
  topPerformingPosts: [
    {
      id: '1',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDElzC4IlljotqALBm_9uaNIOo533BPctz56yaBMfnqUSg1Ar_2Mi3mfozCd4h2TikihawIJg5k_vhX6LHUqHp_ObI8TIj0a73I7vV9EC3yJ08ry18h5M-q4ttdzp-ghZfsk15MU5v1ADsGsn6km-SNLAZaD1ltES36UK0CWnu0xOvLX1hxWly_pMWYqCUL7ExUWSu-7SatVmAWVH93rRXsaBqBSPnS9gn9_E90so2O9k2Y3QhJl2EGvCoqGaab_KCrcdBMguWsn7I',
      caption: "Here's a look at a recent cosmetic bonding case. Incredible transformation!",
      views: 2100,
      likes: 124,
    },
    {
      id: '2',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB324axrfkhzWr3oW_GGCzewRPGGnsTHzaNKiKw7DWFkSTJLmGuMV3QP9aYLHRNQA7cO2HLtKgJ9kNQ9pqRKpkPjr-Sn-yee6oS3qb7jamn-GvHUy9fv2W92styTSDbDC4BV0RpNe71Ah53kK0kqQCNrRw2nnsxiMynH3yw3_UpAISync7Vci98kbu2IhiLEU--sRy_nBRrraqTXSkGB6c6C6o8Lk0CA4TTLJtlcupfn4GXUmBTatPj5SgbXPU8yHTXcshPUL4MMQ',
      caption: "Meet the team! We're dedicated to making your smile shine.",
      views: 1800,
      likes: 102,
    },
    {
      id: '3',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqaSvzf5z-tP83elYqSr9BqwQGuLpXRJCEXoWmt2FeieG94MWhQM7N61R4ToiB6Bx2DKBVe9VtboJ4dmmFycAxaXh7IzkqXlCWaLHHJbv63hVQ7Iq4ZJ7Jwnx4jhK86JHiloeIDZ9YJyUduCrOCx4t2Gl0XCvxL9zm9qn85FE1j8Welq9e_IMqMYvMuu9hmbhVCf71b0M0M157n4sbtgAWOld9WTljuKG7t-cAvTi3N83zdDZzCclMGeldcY2CxqWL1xHjeq1Ajxc',
      caption: "The art of creating natural-looking veneers. Precision and care in every step.",
      views: 1200,
      likes: 89,
    },
  ],
  visibilityRanking: {
    rank: 47,
    category: 'Cosmetic Dentistry',
    location: 'Los Angeles, CA',
  },
};

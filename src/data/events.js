export const events = [
  {
    id: 1,
    title: "Community Game Night",
    description: "Join us for an evening of fun gameplay! We'll be playing our featured maps together, hosting mini-competitions, and giving away prizes. All skill levels welcome!",
    type: "Community Event",
    date: "2026-03-15T19:00:00Z",
    endDate: "2026-03-15T22:00:00Z",
    location: "Discord Voice Channel",
    locationLink: "https://discord.gg/example",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop",
    attendees: 45,
    maxAttendees: 100,
    featured: true,
    tags: ["Community", "Gaming", "Social", "Prizes"],
    organizer: "Rachel Green",
    requirements: ["Discord account", "Roblox account"],
    rewards: ["Exclusive Badge", "In-game Currency", "Special Role"]
  },
  {
    id: 2,
    title: "Map Building Workshop",
    description: "Learn advanced building techniques from our master builders! This hands-on workshop covers terrain sculpting, lighting, and optimization tips.",
    type: "Workshop",
    date: "2026-03-20T18:00:00Z",
    endDate: "2026-03-20T20:00:00Z",
    location: "Private Roblox Server",
    locationLink: "https://www.roblox.com/games/example",
    banner: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=400&fit=crop",
    attendees: 28,
    maxAttendees: 50,
    featured: true,
    tags: ["Workshop", "Building", "Education", "Hands-on"],
    organizer: "Tyler Brooks",
    requirements: ["Roblox Studio", "Basic building knowledge"],
    rewards: ["Workshop Certificate", "Builder Badge", "Exclusive Assets"]
  },
  {
    id: 3,
    title: "Lua Scripting Bootcamp",
    description: "Beginner-friendly introduction to Lua scripting in Roblox. Perfect for those who want to start creating interactive elements in their games.",
    type: "Workshop",
    date: "2026-03-22T17:00:00Z",
    endDate: "2026-03-22T19:30:00Z",
    location: "YouTube Live Stream",
    locationLink: "https://youtube.com/@example",
    banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop",
    attendees: 67,
    maxAttendees: null, // Unlimited for livestream
    featured: true,
    tags: ["Workshop", "Scripting", "Education", "Beginner"],
    organizer: "Marcus Johnson",
    requirements: ["Roblox Studio", "Notepad for notes"],
    rewards: ["Beginner Scripter Badge", "Code Templates", "Resource Pack"]
  },
  {
    id: 4,
    title: "Spring Map Competition",
    description: "Show off your creativity in our seasonal map building competition! Theme: 'Nature's Awakening'. Top 3 entries win amazing prizes!",
    type: "Competition",
    date: "2026-04-01T00:00:00Z",
    endDate: "2026-04-30T23:59:59Z",
    location: "Submissions via Discord",
    locationLink: "https://discord.gg/example",
    banner: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=400&fit=crop",
    attendees: 89,
    maxAttendees: null,
    featured: true,
    tags: ["Competition", "Building", "Creative", "Prizes"],
    organizer: "Alex Chen",
    requirements: ["Original work", "Follow theme", "Submit by deadline"],
    rewards: ["1st: $100 Robux", "2nd: $50 Robux", "3rd: $25 Robux", "Featured on Homepage"]
  },
  {
    id: 5,
    title: "Weekly Playtest Session",
    description: "Help us test and improve maps in development! Your feedback shapes the future of our games. Testers get early access!",
    type: "Playtest",
    date: "2026-03-18T20:00:00Z",
    endDate: "2026-03-18T21:30:00Z",
    location: "Private Test Server",
    locationLink: "https://www.roblox.com/games/example",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop",
    attendees: 32,
    maxAttendees: 50,
    featured: false,
    tags: ["Playtest", "Testing", "Feedback", "Early Access"],
    organizer: "Chris Anderson",
    requirements: ["Discord for feedback", "Open mind"],
    rewards: ["Playtester Badge", "Early Access", "Credits in Game"]
  },
  {
    id: 6,
    title: "UI/UX Design Masterclass",
    description: "Elevate your game's interface with professional UI/UX design principles. Learn from industry-experienced designer Emily Wong!",
    type: "Workshop",
    date: "2026-03-25T18:30:00Z",
    endDate: "2026-03-25T20:30:00Z",
    location: "Discord Screenshare",
    locationLink: "https://discord.gg/example",
    banner: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=400&fit=crop",
    attendees: 41,
    maxAttendees: 60,
    featured: false,
    tags: ["Workshop", "UI/UX", "Design", "Professional"],
    organizer: "Emily Wong",
    requirements: ["Figma account (free)", "Examples ready"],
    rewards: ["UI Designer Badge", "Design Templates", "Feedback Session"]
  },
  {
    id: 7,
    title: "Horror Game Development Talk",
    description: "Join NightmareBuilder for an in-depth discussion on creating terrifying experiences. Learn atmosphere, sound design, and jump scare timing!",
    type: "Talk",
    date: "2026-03-28T19:00:00Z",
    endDate: "2026-03-28T20:30:00Z",
    location: "Discord Stage Channel",
    locationLink: "https://discord.gg/example",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&h=400&fit=crop",
    attendees: 56,
    maxAttendees: null,
    featured: false,
    tags: ["Talk", "Horror", "Game Design", "Q&A"],
    organizer: "NightmareBuilder",
    requirements: ["Love for horror games"],
    rewards: ["Horror Developer Badge", "Exclusive Sound Pack"]
  },
  {
    id: 8,
    title: "Community Meetup - Q1 2026",
    description: "Our quarterly community meetup! Celebrate our achievements, meet new members, play games, and shape the future of our community together!",
    type: "Meetup",
    date: "2026-03-30T18:00:00Z",
    endDate: "2026-03-30T22:00:00Z",
    location: "Discord + Roblox",
    locationLink: "https://discord.gg/example",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop",
    attendees: 124,
    maxAttendees: 200,
    featured: true,
    tags: ["Meetup", "Community", "Social", "Celebration"],
    organizer: "Rachel Green",
    requirements: ["Community member"],
    rewards: ["Q1 2026 Badge", "Special Role", "Raffle Entry"]
  },
  {
    id: 9,
    title: "Speedrun Challenge: Sky Islands",
    description: "Race to complete Sky Islands Parkour in record time! Live leaderboard, commentary, and prizes for top runners!",
    type: "Competition",
    date: "2026-04-05T17:00:00Z",
    endDate: "2026-04-05T20:00:00Z",
    location: "Sky Islands Parkour Map",
    locationLink: "https://www.roblox.com/games/example",
    banner: "https://images.unsplash.com/photo-1534131707092-573bca41e67d?w=1200&h=400&fit=crop",
    attendees: 78,
    maxAttendees: null,
    featured: false,
    tags: ["Competition", "Speedrun", "Parkour", "Live"],
    organizer: "JumpKing",
    requirements: ["Parkour skills", "Fast reflexes"],
    rewards: ["Speedrunner Badge", "Top 3: Exclusive Trails", "Leaderboard Fame"]
  },
  {
    id: 10,
    title: "3D Modeling Workshop",
    description: "Create game-ready 3D assets with Blender! From modeling to texturing, learn the complete workflow for Roblox.",
    type: "Workshop",
    date: "2026-04-08T19:00:00Z",
    endDate: "2026-04-08T21:00:00Z",
    location: "Discord Screenshare",
    locationLink: "https://discord.gg/example",
    banner: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop",
    attendees: 34,
    maxAttendees: 40,
    featured: false,
    tags: ["Workshop", "3D Modeling", "Blender", "Assets"],
    organizer: "David Kim",
    requirements: ["Blender installed", "Mouse (not trackpad)"],
    rewards: ["3D Artist Badge", "Model Templates", "Texture Pack"]
  }
];

// Helper functions
export const getUpcomingEvents = () => {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getPastEvents = () => {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getFeaturedEvents = () => events.filter(event => event.featured);

export const getEventById = (id) => events.find(event => event.id === id);

export const getEventsByType = (type) => events.filter(event => event.type === type);

export const getEventsThisMonth = () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= startOfMonth && eventDate <= endOfMonth;
  });
};

export const eventTypes = [
  'All',
  'Community Event',
  'Workshop',
  'Competition',
  'Playtest',
  'Talk',
  'Meetup'
];

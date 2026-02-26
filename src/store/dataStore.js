import { create } from 'zustand';

export const useDataStore = create((set, get) => ({
  // Maps/Games data
  maps: [],
  setMaps: (maps) => set({ maps }),
  addMap: (map) => set((state) => ({ maps: [...state.maps, map] })),
  updateMap: (id, updatedMap) =>
    set((state) => ({
      maps: state.maps.map((map) => (map.id === id ? { ...map, ...updatedMap } : map)),
    })),
  deleteMap: (id) => set((state) => ({ maps: state.maps.filter((map) => map.id !== id) })),
  featuredMaps: () => get().maps.filter((map) => map.featured),
  getMapById: (id) => get().maps.find((map) => map.id === id),

  // Team members data
  teamMembers: [],
  setTeamMembers: (members) => set({ teamMembers: members }),
  addTeamMember: (member) => set((state) => ({ teamMembers: [...state.teamMembers, member] })),
  featuredTeamMembers: () => get().teamMembers.filter((member) => member.featured),
  getTeamMemberById: (id) => get().teamMembers.find((member) => member.id === id),

  // Events/Schedule data
  events: [],
  setEvents: (events) => set({ events }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (id, updatedEvent) =>
    set((state) => ({
      events: state.events.map((event) => (event.id === id ? { ...event, ...updatedEvent } : event)),
    })),
  deleteEvent: (id) => set((state) => ({ events: state.events.filter((event) => event.id !== id) })),
  upcomingEvents: () => {
    const now = new Date();
    return get().events.filter((event) => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  },
  getEventById: (id) => get().events.find((event) => event.id === id),

  // Community statistics
  stats: {
    mapsCreated: 0,
    totalPlays: 0,
    communityMembers: 0,
    eventsHosted: 0,
    discordMembers: 0,
    youtubeSubscribers: 0,
    monthlyActiveUsers: 0,
  },
  setStats: (stats) => set({ stats }),
  updateStat: (key, value) =>
    set((state) => ({
      stats: { ...state.stats, [key]: value },
    })),

  // Likes (stored in localStorage)
  likedMaps: [],
  setLikedMaps: (likes) => set({ likedMaps: likes }),
  toggleLike: (mapId) =>
    set((state) => {
      const isLiked = state.likedMaps.includes(mapId);
      const newLikes = isLiked
        ? state.likedMaps.filter((id) => id !== mapId)
        : [...state.likedMaps, mapId];

      // Save to localStorage
      localStorage.setItem('likedMaps', JSON.stringify(newLikes));

      return { likedMaps: newLikes };
    }),
  isMapLiked: (mapId) => get().likedMaps.includes(mapId),

  // RSVP events (stored in localStorage)
  rsvpEvents: [],
  setRsvpEvents: (events) => set({ rsvpEvents: events }),
  toggleRsvp: (eventId) =>
    set((state) => {
      const isRsvp = state.rsvpEvents.includes(eventId);
      const newRsvp = isRsvp
        ? state.rsvpEvents.filter((id) => id !== eventId)
        : [...state.rsvpEvents, eventId];

      // Save to localStorage
      localStorage.setItem('rsvpEvents', JSON.stringify(newRsvp));

      return { rsvpEvents: newRsvp };
    }),
  isEventRsvp: (eventId) => get().rsvpEvents.includes(eventId),

  // Initialize data from localStorage
  initializeLocalData: () => {
    const likedMaps = JSON.parse(localStorage.getItem('likedMaps') || '[]');
    const rsvpEvents = JSON.parse(localStorage.getItem('rsvpEvents') || '[]');
    set({ likedMaps, rsvpEvents });
  },
}));

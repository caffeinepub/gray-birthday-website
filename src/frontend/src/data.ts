export type Message = {
  id: string;
  type: 'text' | 'video' | 'audio';
  content: string;
  senderName: string;
  senderGifUrl: string;
};

export type MoodSection = {
  id: string;
  title: string;
  themeColor: string;
  backgroundGradient: string;
  messages: Message[];
};

// Hero GIF URLs for the carousel
export const heroGifs = [
  'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
  'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
  'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
];

// Poem for Gray
export const birthdayPoem = {
  title: "For Gray",
  lines: [
    "On this special day, we celebrate you,",
    "A friend so dear, so kind, so true.",
    "Through laughter and tears, you've been our light,",
    "Making every moment feel just right.",
    "",
    "May this year bring joy beyond measure,",
    "Filled with love, hope, and endless treasure.",
    "Happy Birthday, Gray, you're one of a kind,",
    "Forever cherished in heart and mind."
  ]
};

// Mock mood sections data
export const moodSections: MoodSection[] = [
  {
    id: 'sad',
    title: 'Open when you feel sad',
    themeColor: 'from-blue-100 to-purple-100',
    backgroundGradient: 'bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50',
    messages: [
      {
        id: 'sad-1',
        type: 'text',
        content: "Hey Gray, I know things feel heavy right now, but remember: storms don't last forever. You're stronger than you think. 💙",
        senderName: 'Sarah',
        senderGifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
      },
      {
        id: 'sad-2',
        type: 'text',
        content: "Sending you the biggest virtual hug! You've gotten through 100% of your bad days so far. This too shall pass. ✨",
        senderName: 'Mike',
        senderGifUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
      },
      {
        id: 'sad-3',
        type: 'audio',
        content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        senderName: 'Emma',
        senderGifUrl: 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
      },
    ],
  },
  {
    id: 'doubt',
    title: 'Open when doubting yourself',
    themeColor: 'from-emerald-100 to-teal-100',
    backgroundGradient: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50',
    messages: [
      {
        id: 'doubt-1',
        type: 'text',
        content: "Gray, you are capable of amazing things! Don't let doubt cloud your brilliance. We believe in you! 🌟",
        senderName: 'Alex',
        senderGifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
      },
      {
        id: 'doubt-2',
        type: 'text',
        content: "Remember all those times you thought you couldn't do something, and then you did? Yeah, you're a rockstar. Keep going! 💪",
        senderName: 'Jordan',
        senderGifUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
      },
      {
        id: 'doubt-3',
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        senderName: 'Taylor',
        senderGifUrl: 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
      },
    ],
  },
  {
    id: 'laugh',
    title: 'Open when you want to laugh',
    themeColor: 'from-yellow-100 to-orange-100',
    backgroundGradient: 'bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50',
    messages: [
      {
        id: 'laugh-1',
        type: 'text',
        content: "Why don't scientists trust atoms? Because they make up everything! 😂 Hope this made you smile!",
        senderName: 'Chris',
        senderGifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
      },
      {
        id: 'laugh-2',
        type: 'text',
        content: "Remember that time we laughed so hard we cried? Let's do that again soon! You have the best laugh! 🤣",
        senderName: 'Sam',
        senderGifUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
      },
      {
        id: 'laugh-3',
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        senderName: 'Riley',
        senderGifUrl: 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
      },
    ],
  },
  {
    id: 'celebrate',
    title: 'Open when celebrating something big',
    themeColor: 'from-pink-100 to-rose-100',
    backgroundGradient: 'bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50',
    messages: [
      {
        id: 'celebrate-1',
        type: 'text',
        content: "🎉🎊 CONGRATULATIONS GRAY! 🎊🎉 You did it! We're so proud of you! Time to celebrate! 🥳",
        senderName: 'Morgan',
        senderGifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
      },
      {
        id: 'celebrate-2',
        type: 'text',
        content: "This calls for a party! You deserve all the good things coming your way. Cheers to you! 🍾✨",
        senderName: 'Casey',
        senderGifUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
      },
      {
        id: 'celebrate-3',
        type: 'audio',
        content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        senderName: 'Drew',
        senderGifUrl: 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
      },
    ],
  },
  {
    id: 'stressed',
    title: 'Open when overwhelmed or stressed',
    themeColor: 'from-green-100 to-lime-100',
    backgroundGradient: 'bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50',
    messages: [
      {
        id: 'stressed-1',
        type: 'text',
        content: "Take a deep breath, Gray. In... and out... You've got this. One step at a time. 🌿",
        senderName: 'Avery',
        senderGifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
      },
      {
        id: 'stressed-2',
        type: 'text',
        content: "It's okay to take a break. Rest is productive too. You're doing better than you think! 🧘‍♀️",
        senderName: 'Quinn',
        senderGifUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
      },
      {
        id: 'stressed-3',
        type: 'audio',
        content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        senderName: 'Reese',
        senderGifUrl: 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif',
      },
    ],
  },
];

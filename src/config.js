// 💡 Everything you'd want to personalize lives here.
// Change the words, emojis, and photo — no other file needed.
export const config = {
  // ── The Big Question ──────────────────────────────
  question: 'Hi Babe! Would you like to go on a date with me?',
  questionEmoji: '❤️',

  yesLabel: 'YES',
  yesEmoji: '💕',
  noLabel: 'NO',
  noEmoji: '🙈',

  // Your photo: drop a file in /public and point to it here.
  // Set to null to hide the photo entirely.
  photo: '/photo.jpg',

  // Playful messages the NO button cycles through as it keeps dodging.
  noReactions: [
    'Are you sure? 🥺',
    'Really sure? 😳',
    'Think again! 💭',
    'Pretty please? 🌸',
    "Don't be shy 😚",
    'My heart… 💔',
    'Last chance! ✨',
  ],

  // ── Success Screen ────────────────────────────────
  successTitle: "Yay! I can't wait to spend time with you",
  successEmoji: '❤️',

  showFutureButton: true,
  futureButtonLabel: 'See Our Future Adventures',

  // Shown after tapping the "future adventures" button.
  adventures: [
    { emoji: '☕', title: 'Cozy Coffee Dates' },
    { emoji: '🌅', title: 'Sunset Walks' },
    { emoji: '🍿', title: 'Movie Nights' },
    { emoji: '🍜', title: 'Foodie Adventures' },
    { emoji: '🎡', title: 'Spontaneous Trips' },
    { emoji: '⭐', title: 'Stargazing' },
  ],
}

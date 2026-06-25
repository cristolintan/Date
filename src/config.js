// 💡 Everything you'd want to personalize lives here.
// Change the words, emojis, and photo — no other file needed.

// Your photo is bundled by Vite (so its URL stays correct no matter where the
// site is hosted). To use a different photo, replace src/assets/photo.jpg, or
// change this import to point at your own file. Set `photo: null` below to hide.
import photo from './assets/photo.jpg'

export const config = {
  // ── The Big Question ──────────────────────────────
  question: 'Hi Babe! Would you like to go on a date with me?',
  questionEmoji: '❤️',

  yesLabel: 'YES',
  yesEmoji: '💕',
  noLabel: 'NO',
  noEmoji: '🙈',

  // The imported photo above. Set to null to hide the photo entirely.
  photo,

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

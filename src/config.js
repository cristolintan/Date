// 💡 Everything you'd want to personalize lives here.
// Change the words, emojis, and photo — no other file needed.

// Your photo is bundled by Vite (so its URL stays correct no matter where the
// site is hosted). To use a different photo, replace src/assets/photo.jpg, or
// change this import to point at your own file. Set `photo: null` below to hide.
import photo from './assets/photo.jpg'

// Cat-meme photos shown as the playful "NO" reactions (cycled in order).
// Add/remove imports here to change them — they're bundled & served from your
// own site, so they load fast (no external API).
import catSmiley from './assets/cats/smiley-cat.jpg'
import catReaching from './assets/cats/reaching-cat.jpeg'
import catSad from './assets/cats/sad-kitten.jpeg'
import catSobbing from './assets/cats/sobbing-cat.jpg'
import catCrying from './assets/cats/crying-cat.webp'

// Dancing-cat shown on the success/celebration screen after YES.
// Animated WebP — same dance, ~71% smaller than the original gif.
import dancingCat from './assets/cats/dancing-cat.webp'

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

  // Playful messages shown in the big headline as the NO button keeps dodging.
  noReactions: [
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Pretty please?',
    "Don't be shy",
    'My heart…',
    'Last chance!',
  ],

  // Show the playful lines as CAT MEMES (your bundled photos, cycled) instead
  // of plain text. Set to false for text-only. The line is overlaid on the
  // photo as the caption.
  useCatMemes: true,
  catImages: [catSmiley, catReaching, catSad, catSobbing, catCrying],

  // ── Success Screen ────────────────────────────────
  successTitle: "Yay! I can't wait to spend time with you",
  successEmoji: '❤️',

  // Dancing-cat gif celebrated on the success screen. Set to null to hide.
  celebrationGif: dancingCat,

  showFutureButton: true,
  futureButtonLabel: 'See Our Future Adventures',

  // ── Adventures (now a selectable step) ────────────
  adventuresTitle: 'Which adventures sound fun?',
  adventuresHint: 'Pick as many as you like ✨',
  adventures: [
    { emoji: '☕', title: 'Cozy Coffee Dates' },
    { emoji: '🌅', title: 'Sunset Walks' },
    { emoji: '🍿', title: 'Movie Nights' },
    { emoji: '🍜', title: 'Foodie Adventures' },
    { emoji: '🎡', title: 'Spontaneous Trips' },
    { emoji: '⭐', title: 'Stargazing' },
  ],
  adventuresNextLabel: 'Next 💌',

  // ── Availability step ─────────────────────────────
  availabilityTitle: 'When are you free?',
  availabilityHint: 'Tap whatever works — we’ll figure out the rest 💕',
  availabilityOptions: [
    { emoji: '🌆', title: 'Friday Evening' },
    { emoji: '🥐', title: 'Saturday Brunch' },
    { emoji: '🌃', title: 'Saturday Night' },
    { emoji: '☀️', title: 'Sunday Afternoon' },
    { emoji: '✨', title: 'Surprise Me!' },
  ],
  availabilityBackLabel: '← Back',
  availabilityConfirmLabel: "Lock it in! 🔒",

  // ── Celebration (final) screen ────────────────────
  celebrationTitle: "It's a date! 🎉",
  celebrationMessage: 'Our plan is officially set. Counting down the minutes 💗',
  celebrationAdventuresLabel: "Things we'll do",
  celebrationWhenLabel: "When we're free",
  celebrationRestartLabel: 'Plan again 🔁',

  // ── Social share preview (Open Graph) ─────────────
  // Used by the meta tags in index.html. Update siteUrl if you rename the repo
  // or use a custom domain.
  siteUrl: 'https://cristolintan.github.io/Date/',
}

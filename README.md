# FitEvolution: The AI-Driven Character Fitness App

**FitEvolution** is a next-generation fitness application designed specifically for the Iranian market. It bridges the gap between traditional fitness tracking and gaming by utilizing a Tamagotchi-style 2D character that evolves physically based on the user's real-world training consistency and nutritional habits.

---

# 💎 Project Vision & Market Strategy

## 🇮🇷 Market Localization

Unlike global apps like MyFitnessPal or Strava, FitEvolution is built with the Iranian user in mind:

- **Localized Database:** Native support for Iranian cuisine (Kebab, Ghormeh Sabzi, Ash, etc.) with accurate caloric/macro data.
- **Home-First Approach:** Focused on home workouts to accommodate users without gym access.
- **Economic Model:** An aggressive freemium model optimized for the Iranian payment ecosystem (Shetab / Café Bazaar).

---

## 🎮 Gamified Retention (Character Evolution Engine)

The core differentiator is the **Character Evolution Engine**:

- **Dynamic Physique:**
  - High training volume → Muscle Pump sprites
  - Consistent caloric deficit → Lean / Vascular sprites

- **XP & Leveling:**  
  Every workout feeds the character XP.

- **Streak Mechanics:**  
  Consistency unlocks:
  - Auras
  - Rare cosmetic upgrades
  - Glasses, hairstyles, clothing

---

# 🛠 Technical Stack

| Layer            | Technology                | Reason                                         |
| ---------------- | ------------------------- | ---------------------------------------------- |
| Framework        | React Native + Expo       | Cross-platform development with fast iteration |
| Navigation       | Expo Router (File-based)  | Modern, scalable routing                       |
| Backend          | Supabase                  | Managed PostgreSQL, Auth & Storage             |
| State Management | Zustand                   | Lightweight & performant                       |
| Styling          | NativeWind (Tailwind CSS) | Rapid UI development                           |
| CDN / Proxy      | ArvanCloud / AbrDerak     | Optimized connectivity inside Iran             |

---

## 📂 Project Structure (Modular Architecture)

This project follows a feature-based structure within the Expo Router framework:

```text
/root
├── /app                    # EXPO ROUTER (File-based navigation)
│   ├── (auth)              # Authentication flow (Login, Signup, Onboarding)
│   ├── (tabs)              # MAIN APP TABS
│   │   ├── index.tsx       # HOME: The Character Evolution Screen
│   │   ├── workout.tsx     # WORKOUT: Log activity & view plans
│   │   ├── nutrition.tsx   # FOOD: Iranian food search & calorie log
│   │   ├── profile.tsx     # STATS: Evolution gallery & user settings
│   │   └── _layout.tsx     # Tab bar configuration
│   └── _layout.tsx         # Root layout (Providers: Theme, Auth, State)
│
├── /assets
│   ├── /images
│   │   ├── /character      # Modular PNG Layers (Base, Pumped, Lean)
│   │   └── /ui             # Icons, backgrounds, custom illustrations
│   └── /fonts              # Custom Persian/English fonts (Vazirmatn, etc.)
│
├── /src
│   ├── /components         # UI COMPONENTS
│   │   ├── /character      # CharacterRenderer.tsx, EvolutionLogic.ts
│   │   ├── /shared         # Custom buttons, cards, progress bars
│   │   └── /forms          # Search bars, input fields
│   ├── /hooks              # useAuth, useCharacterStats, useNutrition
│   ├── /store              # Zustand slices for User State & XP
│   ├── /api                # Supabase client & table definitions
│   └── /utils              # Calorie calculators, date formatters
│
├── app.json                # Expo configuration
├── tailwind.config.js      # NativeWind configuration
└── package.json            # Project dependencies
```

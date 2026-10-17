# BAMBOO — Create. Trade. Grow.

BAMBOO is a mobile-first React + Vite prototype with ten connected views: Overview, Explore, Create Token, Portfolio, Token Details, Trade, Activity, Leaderboard, Learn, and Profile.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

## Included prototype interactions

- Search tokens by name, ticker, or category; filter gainers and losers. Use Ctrl/⌘ + K to open Explore and focus search.
- Open token details from market tables and mover lists, then carry the same selection into the trade ticket.
- Preview token creation locally with symbol validation and duplicate-symbol checks.
- Review simulated buy/sell order details, see a recording state, and save demo activity locally.
- Save watchlist, language, notification preference, selected token, token preview, order history, and chart range in browser local storage.
- Switch the interface language between English, French, and Haitian Creole.
- Change illustrative chart ranges (1D, 1W, 1M, 3M, 1Y, ALL); token charts reflect the selected token's simulated change direction.
- Responsive desktop sidebar and mobile bottom navigation.

## Production limitations

All prices, balances, performance charts, token market statistics, rankings, and order history are illustrative demo data. Confirming an order only adds a local demo record; it does not move funds or submit an order. There is no real wallet connection, payment processing, KYC/identity verification, token deployment, blockchain connection, or live exchange integration. Do not treat the demo as financial advice.

## Design reference

The requested `public/design-reference.png` was not present in the repository when it was inspected. The UI follows the specified dark forest-green and emerald direction, but pixel-level template matching requires that source image to be added to `public/design-reference.png`.

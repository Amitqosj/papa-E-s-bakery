# Papa E's Bakery — Premium Pitch Demo

Static React + Vite frontend for **Papa E's Bakery** (Atlanta, GA).

**No backend. No API. Opens immediately on Render.**

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview the dist build
```

## Deploy on Render (Web Service)

Use these exact settings:

| Field | Value |
|--------|--------|
| Service type | **Web Service** |
| Runtime | **Node** |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |

Do **not** put `dist` in Start Command — that fails with `dist: command not found`.

`npm start` runs `serve -s dist`, which hosts the built site and supports page refresh (SPA).

No backend API is required. The site still opens immediately after deploy.
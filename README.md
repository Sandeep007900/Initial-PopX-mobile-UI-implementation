# PopX Mobile UI - React

Small React project implementing a pixel-like mobile UI based on the provided Adobe XD and attachments. The project is set up with webpack for a minimal footprint.

Files of interest:

- `src/pages/Welcome.jsx` - landing view
- `src/pages/Register.jsx` - register form
- `src/pages/Login.jsx` - login form
- `src/pages/Account.jsx` - account settings

Run locally:

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm start
```

This opens the app at http://localhost:3000 (webpack-dev-server)

Build for production:

```powershell
npm run build
```

Deployment:

- Create a new GitHub repository and push all files.
- On Vercel or Netlify, connect the GitHub repo and set the build command to `npm run build` and publish the `dist` folder.

When you have the GitHub repo and deployed site URLs, paste them back here and I will verify.

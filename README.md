# Virtual SUGCON demo site

Content from Sitecore, bound to React with Sitecore JSS, rendered and exported by Next.js with [Uniform](https://uniform.dev) plugin.
UI theme from [Tailwind Tooolbox / Landing Page Theme](https://github.com/tailwindtoolbox/Landing-Page). 

Enabled for deployment to virtually any delivery platform:
- Netlify. Deployed [here](http://sugcondemo.com)
- Azure Static Web App (Preview).  Deployed [here](https://orange-coast-057f9361e.azurestaticapps.net/)
  - This repo contains the github action that facilitates the deployment
- Azure Blob Storage w/ Static Hosting
- AWS S3 bucket

## Getting started

### Provide environment variables

In local development, these could be in the `.env` file. To be picked up by GitHub Actions, these should be in [GitHub Secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

- `NPM_TOKEN` - the token provided by Uniform team.
- `UNIFORM_API_URL` - the endpoint of your Sitecore instance with Uniform connector installed.
- `UNIFORM_DATA_URL - the endpoint of your Sitecore instance with Uniform connector installed.
- `UNIFORM_API_KEY` - Sitecore API key for JSS app
- `GA_UA_ID` - Your Google tracking ID - if you want tracking
- `MAPS_APIKEY` - Google Maps API for the maps component
- `CLOUDINARY_ACCOUNT` - your Cloudinary account name for the responsive and device optimized images.

### Build locally
- `npm run dev`

### Start SSR server for Preview
- `npm run start`

### Static export
- `npm run export`

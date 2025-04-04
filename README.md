# Mphasis RAG UI

A React application for document processing and analytics.

## Features

- Light/Dark theme toggle
- Document upload and processing
- Analytics dashboard with charts and KPIs

## Deployment

This application is configured to be deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

The application will be automatically deployed to GitHub Pages whenever changes are pushed to the main branch. The deployment process is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

### Manual Deployment

If you want to deploy the application manually, you can run:

```bash
npm run deploy
```

This will build the application and deploy it to the `gh-pages` branch.

## Development

To run the application locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Building

To build the application:

```bash
npm run build
```

The built files will be in the `dist` directory.

## GitHub Pages URL

The application is deployed at: [https://dpmanek.github.io/MLflow](https://dpmanek.github.io/MLflow)

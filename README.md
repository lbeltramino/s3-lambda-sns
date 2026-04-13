# IDP App Template

Hello world Node.js application for IDP PoC.

## Structure

- `src/index.js` — HTTP server (K8s runtime)
- `k8s-deployment/app/Dockerfile` — Docker image build
- `aws-lambda/app/handler.js` — Lambda handler
- `aws-lambda/app/build.sh` — Lambda zip build
- `.github/workflows/build.yml` — CI workflow, reports build to IDP API

## Setup (when cloning as a new app)

1. Add `IDP_API_KEY` as a GitHub Actions secret
2. Update `IDP_HOST` env var in `build.yml` if needed
3. Push to `main` to trigger the first build

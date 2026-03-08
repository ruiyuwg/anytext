# Using local HTTPS development

Learn how to set up local HTTPS for Expo web apps.

When developing Expo web apps locally, you may need to use HTTPS with your local development environment for testing secure browser APIs. This guide shows you how to set up local HTTPS for Expo web apps.

## Prerequisites

This guide requires the following tool installed on your machine:

- `mkcert`: A tool for creating development certificates. For installation instructions, see the [`mkcert` GitHub repository](https://github.com/FiloSottile/mkcert#installation).

## Benefits

- **Team scalability**: Same setup works for everyone
- **Authentication support**: HTTP-Only Cookies and secure contexts
- **Production parity**: Match your production HTTPS environment
- **Easy sharing**: Consistent development URLs across the team

## Set up your project

Create or navigate to your Expo project:

```sh
npx create-expo-app@latest example-app --template default@sdk-55
cd example-app
cd your-expo-project
```

Start your Expo development server:

```sh
npx expo start --web
```

Your app will be running on `http://localhost:8081`. Keep this terminal window open.

Use `mkcert` to generate a certificate for localhost. Run the following command in a new terminal window from your project's root directory:

```sh
mkcert localhost
```

> **Tip**: Ensure that after installing `mkcert`, you run `mkcert -install` to install the local certificate authority (CA).

This will generate two signed certificate files: `localhost.pem` (certificate) and `localhost-key.pem` (private key), inside your project's root directory.

Inside your project's root directory, run the following command to start the proxy:

```sh
npx local-ssl-proxy --source 443 --target 8081 --cert localhost.pem --key localhost-key.pem
```

> **Tip**: [`local-ssl-proxy`](https://github.com/cameronhunter/local-ssl-proxy) is a tool that creates a proxy server that forwards HTTPS traffic from port 443 to your Expo dev server on port 8081.

This creates a proxy that forwards HTTPS traffic from port 443 to your Expo dev server on port 8081.

Open `https://localhost` in your browser to access your app. Your Expo app is now running with HTTPS.

***

# Metro bundler

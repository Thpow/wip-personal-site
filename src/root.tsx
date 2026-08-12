import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/typography.css";
import "./styles/sections.css";
import "./styles/print.css";

export default function Root() {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <RouterHead />
      </head>
      <body class="monolith-root">
        <a href="#main" class="skip-link">Skip to content</a>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
}

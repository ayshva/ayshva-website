# AYSHVA React website

React migration of the original AYSHVA website. The app renders native React components with local images and fonts; it does not load the old HTML bundle or its custom runtime.

## Development

Use Node.js 22 and npm:

```sh
npm ci
npm start
```

The development server runs at http://localhost:3000.

```sh
npm test -- --watchAll=false
npm run build
```

Deploy the generated `build/` directory on a static host at the domain root.

## Structure

- [src/App.js](src/App.js): navigation, shopping state, FAQ state, and WhatsApp order messages.
- [src/SiteView.jsx](src/SiteView.jsx): shared header, footer, and page selection.
- [src/components/](src/components/): home, shop, story, process, contact, and cart components.
- [src/App.css](src/App.css): original design and responsive styles, including the smaller assurance icons.
- [public/assets/](public/assets/): original images extracted from the source site.
- [src/fonts/](src/fonts/): local fonts bundled during the build.

Pages use hash navigation (`#home`, `#shop`, `#story`, `#process`, `#contact`), supporting refresh and browser back/forward without server routing rules.

## Existing content limitations

The original site includes image placeholders, sample reviews, and unfilled shipping, storage, certification, and laboratory information. These remain placeholders. Contact submission only displays the original local acknowledgement; no backend sends messages. Checkout opens WhatsApp with the selected order, rather than processing payment. Footer policy links lead to Contact until actual policy content is supplied.

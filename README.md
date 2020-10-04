# custom-feedback-app

A minimal web app that enables users to submit reviews and view a list of reviews that have been written by others.

For this project, I intentionally chose technologies and frameworks that are widely used and supported, and would therefore enable the project to have a healthy and maintainable codebase. These include [TypeScript](https://github.com/microsoft/typescript), [React](https://github.com/facebook/react), [Redux](https://github.com/reduxjs/redux), [Less](https://github.com/less/less.js), [webpack](https://github.com/webpack/webpack), [Jest](https://github.com/facebook/jest), and [Enzyme](https://github.com/enzymejs/enzyme).

## Dev Setup

#### Clone the repo

```bash
git clone https://github.com/sebprest/customer-feedback-app
cd customer-feedback-app
```

#### Install dependencies

```bash
npm install
```

#### Run the build script

```bash
npm run build
```

#### Start web server

```bash
npm start
```

## Potential improvements

### Form validation

At the moment, there is no validation on the review form fields besides `min` and `max` attributes on the `number` fields. Frontend validation like this can be easily overridden and can potentially pose a security risk on real-world applications.

Ideally, form validation would be performed on the backend and the form would render any errors returned from the request.

### Build optimisations

Webpack offers various features to minimise the size of the outputted JS bundle, such as tree shaking and code splitting. In the interest of time, many of these optimisations haven't been implemented, but in a real-world application they would be highly beneficial, especially as the codebase grows larger and more complex.

### Visual design

Clear and consistent visual design is central to a positive user experience. While visual flair is clearly missing from this project, I have done my best to implement styles that are functional and maintainable.

### Accessibility

Though significant attention was given to accessibility while implementing this project by adding features such as `htmlFor` on form labels and [Autoprefixer](https://github.com/postcss/autoprefixer) in the Less build phase, there are more optimisations that can potentially be made to improve screen reader and browser compatibility. These include polyfilling language features, transpiling to ES5 using a tool such as Babel, and giving further consideration to ARIA landmarks.

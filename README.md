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

## Design notes

### Comments

I have opted not to include any comments in the source code offering explanations of specific functions, variables or classes. This is an intentional decision that is a consequence of my belief that good code should be [_self-documenting_](https://en.wikipedia.org/wiki/Self-documenting_code). That is to say, various features of the codebase itself, such as the directory structure, architecture, [identifiers](https://en.wikipedia.org/wiki/Identifier_(computer_languages)), and logic should be constructed in such a way that any individual part of that codebase can be easily understood by reading the code itself, therefore eliminating the need for natural language explanations within the code.

### Directory structure

A common pattern for small codebases is to separate files by what they _are_, as in `components`, `types`, `reducers`, etc. While a codebase organised in this way can be effective in a small-scale project, it can easily become overwhelming as the number of files increases, which goes against my [previous point](#comments) about comments.

Instead, I have chosen a directory structure that separates files based on what they _do_. Having a directory for each component where the primary logic lives alongside all supporting files improves scalability and promotes [modularity](https://en.wikipedia.org/wiki/Modular_programming) and [loose coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)).

## Potential improvements

### Form validation

At the moment, there is no validation on the review form fields besides `min` and `max` attributes on the `number` fields. Frontend validation like this can be easily overridden and can potentially pose a security risk on real-world applications.

Ideally, form validation would be performed on the backend and the form would render any errors returned from the request.

### Build optimisations

Webpack offers various features to minimise the size of the outputted JS bundle, such as tree shaking and code splitting. In the interest of time, many of these optimisations haven't been implemented, but in a real-world application they would be highly beneficial, especially as the codebase grows larger and more complex.

### Visual design

Clear and consistent visual design is central to a positive user experience. While visual flair is clearly missing from this project, I have done my best to implement styles that are functional and maintainable.

### User experience considerations

At the moment, the `rating` field on the review form is a `number` input, and the rating of each review is rendered as a number in the review list. This is counterintuitive for users who are accustomed to representing ratings as stars or other symbols that are easily to visually identify at a glance. Given time to implement this, I would like to instead create a system that uses stars to represent ratings.

### Accessibility

Though significant attention was given to accessibility while implementing this project by adding features such as `htmlFor` on form labels and [Autoprefixer](https://github.com/postcss/autoprefixer) in the Less build phase, there are more optimisations that can potentially be made to improve screen reader and browser compatibility. These include polyfilling language features, transpiling to ES5 using a tool such as Babel, and giving further consideration to ARIA landmarks.

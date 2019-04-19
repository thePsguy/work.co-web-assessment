# Notes on process:
* Initially decided to use bootstrap:
  - Faced incompatibility issues with latest version of `react-bootstrap` needing react 16.x, and project being 15.x
  - Fixed above issues by upgrading to required versions of `react` and `react-dom` as needed, after ensuring project was not affected by this update.
  - Ended up only using the Button from bootstrap.
* Finally ended up using `flexbox` throughout:
  - Very actively been working with `flex` at work lately, much easier to get things done.
  - Used media query for the product cards' mobile view: [link to code](https://github.com/thePsguy/work.co-web-assessment/blob/c3e82e2a371b1993045fd425df351df6bbeb9622/src/components/ProductItem.css#L11)
  - For a non complicated UI like this, using `flex`, I believe, gave me more control over the UI than I would have had with bootstrap.
 * Icons:
    - `material-ui/icons` used for icons in sketch what were just lines (just the `X` for now)
    - Shopping cart icon saved as `svg` from sketch to be used as is.
  * Stylesheets:
    - Only created stylesheets in componenets needing _hover_, _mediaqueries_, and / or _tons of css_, used inline styles in all other places due to time contraints.
    - Ideally would use css modules for component specific local class names.
  * Cart modal dialog:
    - Used `material-ui/dialog` to show the modal view for the cart.
    - Added and mapped cross button to close modal.
    - Faced issues with closing modal since clicking to close it meant its parent was clicked as well, setting `cartVisible` back to `true` in the state. Realized needed to call `stopPropagation()` on click event to prevent this: [link to code](https://github.com/thePsguy/work.co-web-assessment/blob/6e27f72c0f657e96e6097106c0583c27da780d4c/src/components/HeaderCart.js#L56)
<hr />
<hr />
<hr />

# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

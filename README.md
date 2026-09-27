# Nike Catalogue — starter

A plain HTML, CSS and JavaScript project. **There is no build step and nothing to install.**

## Run it

Open `index.html` in your browser — double-click it, or drag it onto a window. An address
bar starting `file://` is correct. There is no server to start and no `npm install`.

## What is here

| file | what it is |
|---|---|
| `index.html` | the page shell: a header, an empty controls area, and an empty grid |
| `styles.css` | layout and typography, including the card styling. Done for you |
| `script.js` | **the product array, and nothing else** |

## What is not here, on purpose

There is no render function, no filter, no search and no sort. Those are the project.

The data is given to you because typing twelve objects is not the lesson; everything that
*reads* the data is yours to write. Your first ticket is to render the grid from that array
so that deleting a product from `script.js` removes it from the page without you touching
any HTML.

## The one rule worth knowing before you start

**The page is a function of the data.** Every change goes: update the state, derive the list
you want, then call your one render function. Nothing edits a card in place, hides one, or
reorders the grid by hand — that is what makes filter, search and sort work together instead
of fighting each other.

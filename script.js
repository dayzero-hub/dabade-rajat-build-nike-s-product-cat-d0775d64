// The catalogue data.
//
// This array is the ONLY thing this file starts with, and that is deliberate: typing
// twelve objects is not the lesson. Everything that reads it is yours to write —
// there is no render function, no filter, no search and no sort in here on purpose.
//
// Every field you put on a card comes from these objects. Read the shape before you
// start ticket 1.
const products = [
  { id: 1,  name: "Air Zoom Pegasus 41",   category: "Running",   price: 11895 },
  { id: 2,  name: "Vaporfly 3",            category: "Running",   price: 21995 },
  { id: 3,  name: "Structure 25",          category: "Running",   price: 9995  },
  { id: 4,  name: "Winflo 11",             category: "Running",   price: 7495  },
  { id: 5,  name: "LeBron XXII",           category: "Basketball", price: 17995 },
  { id: 6,  name: "GT Cut 3",              category: "Basketball", price: 14995 },
  { id: 7,  name: "Giannis Immortality 4", category: "Basketball", price: 6995  },
  { id: 8,  name: "Ja 2",                  category: "Basketball", price: 10495 },
  { id: 9,  name: "Air Force 1 '07",       category: "Lifestyle", price: 8695  },
  { id: 10, name: "Dunk Low Retro",        category: "Lifestyle", price: 9295  },
  { id: 11, name: "Air Max 90",            category: "Lifestyle", price: 10795 },
  { id: 12, name: "Blazer Mid '77",        category: "Lifestyle", price: 8295  },
];

// Ticket 1 starts here: write a function that takes a list of products and renders
// the cards into #product-grid.

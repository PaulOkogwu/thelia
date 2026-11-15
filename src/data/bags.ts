// The collection. Names and prices come from the owner's document (thelia-website.pdf, page 4).
// To sell a bag: paste its Stripe Payment Link into `paymentLink`.
// When a bag sells out: set `status: 'sold'`.
import type { ImageMetadata } from 'astro';

import marina from '../assets/bags/marina.jpg';
import celeste from '../assets/bags/celeste.jpg';
import rose from '../assets/bags/rose.jpg';
import emerald from '../assets/bags/emerald.jpg';
import soleil from '../assets/bags/soleil.jpg';
import amora from '../assets/bags/amora.jpg';
import perlaForest from '../assets/bags/perla-forest.jpg';
import perlaIvory from '../assets/bags/perla-ivory.jpg';
import strawberry from '../assets/bags/strawberry-shortcake.jpg';
import odette from '../assets/bags/odette.jpg';
import aurelia from '../assets/bags/aurelia.jpg';

export type Bag = {
  id: string;
  name: string;
  price: number;
  image: ImageMetadata;
  alt: string;
  note?: string;
  /** where the bag sits in the photo, for wide crops (CSS object-position) */
  focus?: string;
  paymentLink: string;
  status: 'available' | 'sold';
};

export type Group = {
  id: string;
  title: string;
  priceNote?: string;
  layout: 'pair' | 'trio' | 'feature' | 'row';
  bags: Bag[];
};

export const groups: Group[] = [
  {
    id: 'clutches',
    title: 'Clutches',
    priceNote: '$120 each',
    layout: 'pair',
    bags: [
      { id: 'marina', focus: '50% 52%', name: 'Marina clutch', price: 120, image: marina, alt: 'Marina clutch, crocheted in royal blue and pale blue, with a white Thelia label', paymentLink: '', status: 'available' },
      { id: 'celeste', focus: '50% 50%', name: 'Celeste clutch', price: 120, image: celeste, alt: 'Celeste clutch, crocheted in soft sky blue, with a gold Thelia tag', paymentLink: '', status: 'available' },
    ],
  },
  {
    id: 'minis',
    title: 'Minis',
    priceNote: '$60 each',
    layout: 'trio',
    bags: [
      { id: 'rose', name: 'Rose mini', price: 60, image: rose, alt: 'Rose mini, a small top-handle bag in coral pink and burgundy', paymentLink: '', status: 'available' },
      { id: 'emerald', name: 'Emerald mini', price: 60, image: emerald, alt: 'Emerald mini, a small top-handle bag in green and white', paymentLink: '', status: 'available' },
      { id: 'soleil', name: 'Soleil mini', price: 60, image: soleil, alt: 'Soleil mini, a small top-handle bag in butter yellow', paymentLink: '', status: 'available' },
    ],
  },
  {
    id: 'perla',
    title: 'The Perla Shell Bag',
    priceNote: '$199 each',
    layout: 'pair',
    bags: [
      { id: 'perla-forest', focus: '45% 78%', name: 'The Perla Shell Bag, forest green', price: 199, image: perlaForest, alt: 'The Perla Shell Bag in forest green, a ruched shell-shaped shoulder bag resting in a wooden bowl by a shop window', paymentLink: '', status: 'available' },
      { id: 'perla-ivory', focus: '45% 72%', name: 'The Perla Shell Bag, ivory', price: 199, image: perlaIvory, alt: 'The Perla Shell Bag in ivory with gold thread, a ruched shell-shaped shoulder bag resting in a wooden bowl', paymentLink: '', status: 'available' },
    ],
  },
  {
    id: 'amora',
    title: 'The Amora',
    layout: 'feature',
    bags: [
      { id: 'amora', name: 'The Amora', price: 140, image: amora, alt: 'The Amora, a pink and yellow top-handle bag with its matching pouch tied with a bow', note: 'Comes as a pair: the bag and its matching pouch.', paymentLink: '', status: 'available' },
    ],
  },
  {
    id: 'more',
    title: 'Shoulder and top-handle bags',
    layout: 'trio',
    bags: [
      { id: 'strawberry-shortcake', name: 'Strawberry Shortcake', price: 110, image: strawberry, alt: 'Strawberry Shortcake, a pink and cream shoulder bag with two red strawberry charms', paymentLink: '', status: 'available' },
      { id: 'odette', name: 'The Odette Bag', price: 110, image: odette, alt: 'The Odette Bag, a chocolate brown top-handle bag scattered with pearls, worn on a gold chain', paymentLink: '', status: 'available' },
      { id: 'aurelia', name: 'The Aurelia Bag', price: 120, image: aurelia, alt: 'The Aurelia Bag, a yellow and white top-handle bag with a Thelia swing tag', paymentLink: '', status: 'available' },
    ],
  },
];

export const allBags = groups.flatMap((g) => g.bags);

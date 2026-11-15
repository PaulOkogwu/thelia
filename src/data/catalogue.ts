// Catalogue at the bottom of the page: the owner's lifestyle photos (PDF pages 10-33) and the
// bags she sent as cut-outs without names or prices.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/catalogue/*.jpg', { eager: true });
const img = (name: string) => files[`../assets/catalogue/${name}.jpg`].default;

export type CatalogueItem = { image: ImageMetadata; alt: string; cutout?: boolean };

export const catalogue: CatalogueItem[] = [
  { image: img('cornfield-walk'), alt: 'Walking through a corn maze in autumn with a burgundy Thelia bag at the hip' },
  { image: img('pumpkins'), alt: 'A dark purple crochet bag with gold leaf charms in a basket of pumpkins and gourds' },
  { image: img('pair-worn'), alt: 'Two shoulder bags worn side by side, one in blues and white, one in red and yellow' },
  { image: img('soleil-cutout'), alt: 'Butter-yellow mini bag', cutout: true },
  { image: img('perla-forest-window'), alt: 'The Perla Shell Bag in forest green in a shop window' },
  { image: img('cornfield-friends'), alt: 'Two friends in a corn maze, each wearing a Thelia bag' },
  { image: img('vanity-pink'), alt: 'A pink crochet basket holding lipsticks and perfume' },
  { image: img('burgundy-chain'), alt: 'Burgundy crochet bag on a gold chain', cutout: true },
  { image: img('car'), alt: 'A burgundy crochet mini bag held in a car' },
  { image: img('cornfield-raised'), alt: 'Three Thelia bags held up against a blue sky in a corn field' },
  { image: img('blue-bow'), alt: 'Pale blue and white mini bag with a bow', cutout: true },
  { image: img('pink-drink'), alt: 'A pink and coral bow mini bag beside a pink drink' },
  { image: img('odette-worn'), alt: 'The Odette Bag with pearls, worn with a cream sweater' },
  { image: img('black-chain'), alt: 'Black crochet bag on a silver chain', cutout: true },
  { image: img('market'), alt: 'A table of Thelia bags at a market' },
  { image: img('vanity-blue'), alt: 'A blue and white crochet basket holding toiletries' },
  { image: img('pink-bow'), alt: 'Pink and white mini bag with a bow', cutout: true },
  { image: img('mirror'), alt: 'Mirror photo holding a burgundy crochet bag' },
  { image: img('amora-flat'), alt: 'The Amora bag and pouch in pink and yellow' },
  { image: img('beige-mini'), alt: 'Beige crochet mini bag', cutout: true },
  { image: img('pair-indoors'), alt: 'Two friends wearing red and blue Thelia shoulder bags' },
  { image: img('coral-bow'), alt: 'Coral mini bag with a bow', cutout: true },
  { image: img('dinner'), alt: 'A white crochet bag on a table at dinner' },
  { image: img('green-mini'), alt: 'Forest green crochet mini bag', cutout: true },
  { image: img('black-mini'), alt: 'Black crochet mini bag', cutout: true },
];

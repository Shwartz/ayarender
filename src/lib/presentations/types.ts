/**
 * Presentation data model. A project is plain data; each section `type` maps to one fixed Svelte component.
 * Stage 1 reads projects from `projects.ts`; Stage 2 will read the same shape from D1.
 */

/** Focal point and zoom for an image inside its tile. x/y are 0..1 (0.5 = centre), zoom >= 1. */
export interface Crop {
  x: number;
  y: number;
  zoom: number;
}

export interface SlideImage {
  /** Cloudflare Images id (never a URL, so variants can change per layout). */
  imageId: string;
  alt: string;
  crop?: Crop;
}

export interface TextSection {
  type: 'text';
  heading?: string;
  subheading?: string;
  blocks: { title?: string; body: string }[];
}

export interface MoodboardSection {
  type: 'moodboard';
  layout: MoodboardLayoutId;
  /** Small title at the top-left of the slide, e.g. "Moodboard". */
  title: string;
  /** Room label shown in the footer, e.g. "Main bedroom". */
  label: string;
  /** 3-5 hex colours shown as swatches in the footer. */
  palette: string[];
  /** Image per tile key defined by the layout. Missing keys render an empty tile. */
  tiles: Record<string, SlideImage | undefined>;
}

export interface ImageSection {
  type: 'image';
  /** Room label shown in the footer. */
  label: string;
  /** Centre footer label, e.g. "3D visuals", "Floor plan". */
  caption?: string;
  image: SlideImage;
  /** `inset` shows the whole image with margin; `full` fills the frame and may crop. */
  fit: 'inset' | 'full';
  /** Adds a link to open the full-size image (technical drawings). */
  zoomable?: boolean;
}

export type Section = TextSection | MoodboardSection | ImageSection;

export interface ProjectBranding {
  /** Client designer's logo as a Cloudflare Images id. */
  logoImageId?: string;
  /** Text fallback while no logo image has been uploaded. */
  logoText?: string;
}

export interface Project {
  slug: string;
  title: string;
  status: 'draft' | 'published';
  /** Colour of the bottom band on slides without a content footer. */
  accentColor: string;
  branding: ProjectBranding;
  sections: Section[];
}

export type MoodboardLayoutId = 'moodboard-9';

export interface TileSpec {
  key: string;
  /** 1-based grid lines; `w` and `h` are spans. */
  col: number;
  row: number;
  w: number;
  h: number;
}

export interface MoodboardLayout {
  id: MoodboardLayoutId;
  /** CSS `grid-template-columns` value. */
  columns: string;
  rows: number;
  tiles: TileSpec[];
}

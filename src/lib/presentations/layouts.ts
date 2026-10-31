import type { MoodboardLayout, MoodboardLayoutId } from './types';

/**
 * Moodboard layouts are data. Tiles sit on a 5-column grid with 20 equal rows and no gap;
 * the visual gutter comes from tile padding, so spans stay exact. Derived from the example deck.
 */
export const moodboardLayouts: Record<MoodboardLayoutId, MoodboardLayout> = {
  'moodboard-9': {
    id: 'moodboard-9',
    columns: '1fr 1fr 1fr 2.45fr 1.23fr',
    rows: 20,
    tiles: [
      { key: 't1', col: 1, row: 1, w: 2, h: 13 },
      { key: 't2', col: 3, row: 1, w: 1, h: 13 },
      { key: 't3', col: 4, row: 1, w: 1, h: 7 },
      { key: 't4', col: 5, row: 1, w: 1, h: 10 },
      { key: 't5', col: 4, row: 8, w: 1, h: 13 },
      { key: 't6', col: 5, row: 11, w: 1, h: 10 },
      { key: 't7', col: 1, row: 14, w: 1, h: 7 },
      { key: 't8', col: 2, row: 14, w: 1, h: 7 },
      { key: 't9', col: 3, row: 14, w: 1, h: 7 }
    ]
  }
};

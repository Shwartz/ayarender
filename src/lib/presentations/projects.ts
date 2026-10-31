import type { Crop, Project, SlideImage } from './types';

// Stage 1 seed data using existing site images. Replaced by a D1 query in Stage 2.
const img = (imageId: string, alt: string, crop?: Crop): SlideImage => ({ imageId, alt, crop });

const projects: Project[] = [
  {
    slug: 'demo-261031',
    title: 'Demo project',
    status: 'published',
    accentColor: '#cdb79e',
    branding: { logoText: 'Client Studio' },
    sections: [
      {
        type: 'text',
        heading: 'The Brief',
        subheading: 'Update & Refresh',
        blocks: [
          {
            title: 'Master bedroom',
            body: 'A spacious room to be developed into a personal sanctuary. The design should address limited natural light and restricted ceiling height while improving the furniture layout.'
          },
          {
            title: 'Spare bedroom',
            body: 'A good-sized guest bedroom designed primarily around a permanent bed rather than a sofa bed. It should include practical storage for guests, with flexibility for future use.'
          }
        ]
      },
      {
        type: 'moodboard',
        layout: 'moodboard-9',
        title: 'Moodboard',
        label: 'Main bedroom',
        palette: ['#7d8b99', '#cbb39a', '#7a6a5b'],
        tiles: {
          t1: img('a006ac59-f131-4f7a-523a-a299d9008200', 'Interior visual'),
          t2: img('d8168f5c-517b-49aa-5953-f68220b84200', 'Interior visual', { x: 0.3, y: 0.5, zoom: 1.4 }),
          t3: img('47529d87-998d-4b22-41cf-4f7984dc2b00', 'Interior visual'),
          t4: img('579089f1-797a-46c1-4ae1-3264127e2d00', 'Interior visual', { x: 0.7, y: 0.4, zoom: 1.6 }),
          t5: img('f3f559e5-1736-449d-41ee-e49d710ec000', 'Interior visual'),
          t6: img('31f9e377-04fa-4fb8-70dc-d344300cb100', 'Interior visual'),
          t7: img('c7bb5c41-fca7-4298-7ea2-b7daddac0100', 'Interior visual'),
          t8: img('d6e4987f-7c4f-4465-e23a-b0c0fc8b7100', 'Interior visual', { x: 0.5, y: 0.5, zoom: 2 })
          // t9 intentionally empty to check empty-tile rendering
        }
      },
      {
        type: 'image',
        label: 'Main bedroom',
        caption: '3D visuals',
        fit: 'inset',
        image: img('a006ac59-f131-4f7a-523a-a299d9008200', '3D interior visual')
      },
      {
        type: 'image',
        label: 'Main bedroom',
        caption: '3D visuals',
        fit: 'full',
        image: img('47529d87-998d-4b22-41cf-4f7984dc2b00', '3D interior visual')
      }
    ]
  }
];

export function getPublishedProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.status === 'published');
}

import { error } from '@sveltejs/kit';
import { getPublishedProject } from '$lib/presentations/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, setHeaders }) => {
  const project = getPublishedProject(params.slug);

  // Same plain 404 for unknown and unpublished slugs, so slugs can't be enumerated.
  if (!project) error(404, 'Not found');

  setHeaders({ 'X-Robots-Tag': 'noindex, nofollow' });
  return { project };
};

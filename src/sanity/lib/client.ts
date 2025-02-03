import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: '7f0fuul3',
  dataset: 'production',
  apiVersion: '2025-01-18',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

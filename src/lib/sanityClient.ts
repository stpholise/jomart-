import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2026-02-07",
  useCdn: import.meta.env.PROD,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

export const fetchProjects = async () => {
  return sanityClient.fetch(`
        *[_type == "project"] | order(_updatedAt desc){
        _id,
        name,
        slug,
        completed,
        location,
        gallery[]{
            asset->{
            _id,
            url,
            },
            caption
        },
        video,
        description,
        vision,
        }
        `);
};

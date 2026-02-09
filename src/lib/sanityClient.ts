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
        "coverImage": gallery[0].asset->url,
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

export const fetchProjectData = async (slug: string) => {
  return sanityClient.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
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
         "coverImage": gallery[0].asset->url,
        description,
        vision,
        videos[]{
          file{
            asset->{
            _id, 
            url
            }
         }
        }
    }
    
    `,
    { slug },
  );
};

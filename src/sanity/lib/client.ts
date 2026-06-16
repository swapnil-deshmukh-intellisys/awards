import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id_here";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-01";

// Sanity project ID must be alphanumeric and dashes only.
const isValidProjectId = /^[a-z0-9-]+$/i.test(projectId) && projectId !== "your_project_id_here";

export const client = isValidProjectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : {
      fetch: async () => {
        console.warn("Sanity client is unconfigured or has an invalid project ID. Returning null.");
        return null;
      },
    };


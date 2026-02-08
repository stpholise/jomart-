import { useState, useEffect, useCallback } from "react";

import { fetchProjects } from "../lib/sanityClient";

export interface ProjectType {
  _id: string;
  _rev: string;
  _updatedAt: string;
  name: string;
  slug: string;
  completed: boolean;
  location: string;
  gallery: {
    asset: {
        _id: string;
        url: string;
    }
    caption: string;
  }[];

  video?: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { projects, loading, error, refetch: fetchData}
};


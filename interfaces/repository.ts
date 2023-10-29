export interface Repository {
  name: string;
  id: string;
  url: string;
  description?: string;
  languages: {
    id: string;
    name: string;
  }[];
  createdAt: string;
}

import { Octokit } from '@octokit/core';

import { Hero, ProjectList, ExperienceList } from '../components';
import { Repository } from '../interfaces';

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

async function getLatestRepos(): Promise<Repository[]> {
  try {
    const response = await octokit.graphql<{
      user: {
        repositories: {
          edges: { node: any }[];
        };
      };
    }>(
      `query ($login: String!) {
        user(login: $login) {
          repositories(privacy: PUBLIC, first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
            edges {
              node {
                name
                id
                url
                description
                createdAt
                languages(first: 10) {
                  edges {
                    node {
                      name
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }`,
      { login: 'fbcarpinato' }
    );

    return (response?.user?.repositories?.edges || []).map(({ node }) => ({
      ...node,
      languages: node.languages.edges.map(
        (languageEdge: any) => languageEdge.node
      ),
    })) as Repository[];
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

export default async function Home() {
  const repositories = await getLatestRepos();

  return (
    <>
      <Hero />
      <ExperienceList />
      <ProjectList repositories={repositories} />
    </>
  );
}

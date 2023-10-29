import { Octokit } from '@octokit/core';
import { User } from '@octokit/graphql-schema';

import { Hero, ProjectList, ExperienceList } from '../components';
import { Repository } from '../interfaces';

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

async function getLatestRepos(): Promise<Repository[]> {
  try {
    const response = await octokit.graphql<{ user: User }>(
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

    return (response?.user?.repositories?.edges || []).map((edge) => ({
      ...edge?.node,
      languages: (edge?.node?.languages?.edges || []).map(
        (languageEdge) => languageEdge?.node
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

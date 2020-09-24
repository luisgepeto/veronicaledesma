/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsQuery
// ====================================================

export interface ProjectsQuery_mdx_frontmatter_banner_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface ProjectsQuery_mdx_frontmatter_banner_childImageSharp {
  fluid: ProjectsQuery_mdx_frontmatter_banner_childImageSharp_fluid | null;
  id: string;
}

export interface ProjectsQuery_mdx_frontmatter_banner {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: ProjectsQuery_mdx_frontmatter_banner_childImageSharp | null;
}

export interface ProjectsQuery_mdx_frontmatter {
  title: string;
  date: any | null;
  description: string | null;
  banner: ProjectsQuery_mdx_frontmatter_banner | null;
}

export interface ProjectsQuery_mdx {
  body: string;
  frontmatter: ProjectsQuery_mdx_frontmatter | null;
}

export interface ProjectsQuery {
  mdx: ProjectsQuery_mdx | null;
}

export interface ProjectsQueryVariables {
  slug: string;
}

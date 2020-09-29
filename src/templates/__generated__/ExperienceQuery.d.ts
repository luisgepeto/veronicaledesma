/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExperienceQuery
// ====================================================

export interface ExperienceQuery_mdx_frontmatter_banner_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface ExperienceQuery_mdx_frontmatter_banner_childImageSharp {
  fluid: ExperienceQuery_mdx_frontmatter_banner_childImageSharp_fluid | null;
  id: string;
}

export interface ExperienceQuery_mdx_frontmatter_banner {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: ExperienceQuery_mdx_frontmatter_banner_childImageSharp | null;
}

export interface ExperienceQuery_mdx_frontmatter {
  title: string;
  date: any | null;
  description: string | null;
  show_description: boolean | null;
  show_date: boolean | null;
  banner: ExperienceQuery_mdx_frontmatter_banner | null;
}

export interface ExperienceQuery_mdx {
  body: string;
  frontmatter: ExperienceQuery_mdx_frontmatter | null;
}

export interface ExperienceQuery {
  mdx: ExperienceQuery_mdx | null;
}

export interface ExperienceQueryVariables {
  slug: string;
}

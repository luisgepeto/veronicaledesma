/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_site_siteMetadata_contact {
  api_url: boolean | null;
  description: string | null;
  mail: boolean | null;
}

export interface IndexPageQuery_site_siteMetadata_social {
  name: string | null;
  url: string | null;
  icon: string | null;
}

export interface IndexPageQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  capitalizeTitleOnHome: boolean | null;
  titleImage: string | null;
  ogImage: string | null;
  twoColumnWall: boolean | null;
  introTag: string | null;
  about: string | null;
  contact: IndexPageQuery_site_siteMetadata_contact | null;
  social: (IndexPageQuery_site_siteMetadata_social | null)[] | null;
}

export interface IndexPageQuery_site {
  siteMetadata: IndexPageQuery_site_siteMetadata | null;
}

export interface IndexPageQuery_experience_edges_node_frontmatter_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface IndexPageQuery_experience_edges_node_frontmatter_image_childImageSharp {
  fluid: IndexPageQuery_experience_edges_node_frontmatter_image_childImageSharp_fluid | null;
}

export interface IndexPageQuery_experience_edges_node_frontmatter_image {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: IndexPageQuery_experience_edges_node_frontmatter_image_childImageSharp | null;
}

export interface IndexPageQuery_experience_edges_node_frontmatter {
  title: string;
  description: string | null;
  order: number | null;
  image: IndexPageQuery_experience_edges_node_frontmatter_image | null;
}

export interface IndexPageQuery_experience_edges_node_fields {
  slug: string | null;
}

export interface IndexPageQuery_experience_edges_node {
  id: string;
  frontmatter: IndexPageQuery_experience_edges_node_frontmatter | null;
  fields: IndexPageQuery_experience_edges_node_fields | null;
}

export interface IndexPageQuery_experience_edges {
  node: IndexPageQuery_experience_edges_node;
}

export interface IndexPageQuery_experience {
  edges: IndexPageQuery_experience_edges[];
}

export interface IndexPageQuery {
  site: IndexPageQuery_site | null;
  experience: IndexPageQuery_experience;
}

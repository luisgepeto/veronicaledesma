/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExperienceListQuery
// ====================================================

export interface ExperienceListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface ExperienceListQuery_allMdx_edges_node_frontmatter_image_childImageSharp {
  fluid: ExperienceListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid | null;
  id: string;
}

export interface ExperienceListQuery_allMdx_edges_node_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: ExperienceListQuery_allMdx_edges_node_frontmatter_image_childImageSharp | null;
}

export interface ExperienceListQuery_allMdx_edges_node_frontmatter {
  title: string;
  description: string | null;
  image: ExperienceListQuery_allMdx_edges_node_frontmatter_image | null;
}

export interface ExperienceListQuery_allMdx_edges_node_fields {
  slug: string | null;
}

export interface ExperienceListQuery_allMdx_edges_node {
  id: string;
  frontmatter: ExperienceListQuery_allMdx_edges_node_frontmatter | null;
  fields: ExperienceListQuery_allMdx_edges_node_fields | null;
}

export interface ExperienceListQuery_allMdx_edges {
  node: ExperienceListQuery_allMdx_edges_node;
}

export interface ExperienceListQuery_allMdx {
  edges: ExperienceListQuery_allMdx_edges[];
}

export interface ExperienceListQuery {
  allMdx: ExperienceListQuery_allMdx;
}

export interface ExperienceListQueryVariables {
  skip: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsListQuery
// ====================================================

export interface ProjectsListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface ProjectsListQuery_allMdx_edges_node_frontmatter_image_childImageSharp {
  fluid: ProjectsListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid | null;
  id: string;
}

export interface ProjectsListQuery_allMdx_edges_node_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: ProjectsListQuery_allMdx_edges_node_frontmatter_image_childImageSharp | null;
}

export interface ProjectsListQuery_allMdx_edges_node_frontmatter {
  title: string;
  description: string | null;
  image: ProjectsListQuery_allMdx_edges_node_frontmatter_image | null;
}

export interface ProjectsListQuery_allMdx_edges_node_fields {
  slug: string | null;
}

export interface ProjectsListQuery_allMdx_edges_node {
  id: string;
  frontmatter: ProjectsListQuery_allMdx_edges_node_frontmatter | null;
  fields: ProjectsListQuery_allMdx_edges_node_fields | null;
}

export interface ProjectsListQuery_allMdx_edges {
  node: ProjectsListQuery_allMdx_edges_node;
}

export interface ProjectsListQuery_allMdx {
  edges: ProjectsListQuery_allMdx_edges[];
}

export interface ProjectsListQuery {
  allMdx: ProjectsListQuery_allMdx;
}

export interface ProjectsListQueryVariables {
  skip: number;
  limit: number;
}

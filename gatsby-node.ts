import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import path from 'path';


export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode })
        const sourceName = getNode(node.parent).sourceInstanceName
        const prefix = sourceName === "basepages" ? '' : '/'+sourceName;

        createNodeField({
            node,
            name: `slug`,
            value: `${prefix}${slug}`,
        })
        createNodeField({
            node,
            name: `sourceName`,
            value: sourceName,
        })
    }
}


export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql<any>(`
        query GatsbyNodeQuery {
            all: allMdx {
                edges {
                    node {
                        fields {
                            slug
                            sourceName
                        }
                    }
                }
            }
            proyectos: allMdx(filter: { fields: { sourceName: { eq: "proyectos" } } }) {
                edges {
                    node {
                        id
                    }
                }
            }
            limitPost: site {
                siteMetadata {                    
                    projectsItemsPerPage
                }
            }
        }
    `).then(result => {
        result.data.all.edges.forEach(({ node }) => {
            let template = node.fields.sourceName
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".tsx"),
                context: {
                    slug: node.fields.slug,
                },
            })
        })


        const projectsItems = result.data.proyectos.edges
        const projectsItemsPerPage =
            result.data.limitPost.siteMetadata.projectsItemsPerPage
        const numProjectsItems = Math.ceil(projectsItems.length / projectsItemsPerPage)

        Array.from({ length: numProjectsItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/proyectos` : `/proyectos/${i + 1}`,
                component: path.resolve("./src/templates/proyectos-list.tsx"),
                context: {
                    limit: projectsItemsPerPage,
                    skip: i * projectsItemsPerPage,
                    numPages: numProjectsItems,
                    currentPage: i + 1,
                },
            })
        })
    })
}

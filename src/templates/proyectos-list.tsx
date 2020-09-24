import React, { useEffect } from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import ProjectsItem from "../components/item-proyectos"
import Pagination from "../components/pagination"
import { ProjectsListQuery } from "./__generated__/ProjectsListQuery"

export default function projectsList({ data, pageContext, location }: PageProps<ProjectsListQuery, {}>) {


    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'))
    }, [])

    const projectsItems = data.allMdx.edges.map((item, i) => (
        <ProjectsItem data={item.node} key={item.node.id} even={(i + 1) % 2 === 0}/>
    ))

    return (
        <Layout
            seo={{
                title: "PROYECTOS",
            }}
            location={location}
        >
            <div className="py-12 px-4 lg:px-0">
                <div className="title py-8 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        PROYECTOS
                    </h2>
                </div>
                <div className="flex flex-wrap">{projectsItems}</div>
                <div className="mt-8 lg:mt-24">
                    <Pagination pageContext={pageContext} type="proyectos" />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "proyectos" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    srcSet
                                    ...GatsbyImageSharpFluid
                                }
                                id
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

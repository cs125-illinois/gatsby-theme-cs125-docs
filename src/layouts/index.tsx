import React, { useRef } from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"
import { Container, Ref, Segment, Responsive, Rail, Sticky, Image } from "semantic-ui-react"
import { MDXProvider } from "@mdx-js/react"

import logo from "../images/favicon.png"

import { SidebarMenu } from "@cs125/semantic-ui/element-tracker"
import { Highlighted, headings } from "@cs125/semantic-ui/mdx"

const components = {
  code: Highlighted,
  ...headings,
}

const Layout: React.FC = ({ children }) => {
  const contextRef = useRef()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{process.env.npm_package_name}</title>
        <meta name="description" content={process.env.npm_package_description} />
        <link rel="preconnect" href="https://accounts.google.com" crossOrigin="use-credentials" />
        <link rel="preconnect" href="https://ssl.gstatic.com" crossOrigin="use-credentials" />
        <link rel="preconnect" href="https://apis.google.com" crossOrigin="use-credentials" />
      </Helmet>
      <Container text>
        <Ref innerRef={contextRef}>
          <Segment basic>
            <Responsive minWidth={1200}>
              <Rail position="right">
                <Sticky context={contextRef}>
                  <Segment basic style={{ paddingTop: 64 }}>
                    <SidebarMenu />
                  </Segment>
                </Sticky>
              </Rail>
            </Responsive>
            <Image floated={"right"} src={logo} style={{ width: "4rem" }} href={"https://cs125.cs.illinois.edu"} />
            <MDXProvider components={components}>{children}</MDXProvider>
          </Segment>
        </Ref>
      </Container>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

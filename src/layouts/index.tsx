import React, { useRef } from "react"
import PropTypes from "prop-types"

import { Container, Ref, Segment, Responsive, Rail, Sticky } from "semantic-ui-react"
import { MDXProvider } from "@mdx-js/react"

import { Highlighted, headings, SidebarMenu } from "@cs125/semantic-ui"
const components = {
  code: Highlighted,
  ...headings,
}

const Layout: React.FC = ({ children }) => {
  const contextRef = useRef()
  return (
    <Container text style={{ paddingTop: 16, paddingBottom: 16 }}>
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
          <MDXProvider components={components}>{children}</MDXProvider>
        </Segment>
      </Ref>
    </Container>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

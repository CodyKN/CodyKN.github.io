import Container from '../../components/container'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Head from 'next/head'
import PostBody from '../../components/post-body'

const about = `
  About Page
`

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <Container>
          <Intro />
          <article className="mb-32">
            <PostBody content={about} />
          </article>
        </Container>
      </Layout>
    </>
  )
}
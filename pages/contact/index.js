import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Head from 'next/head'

const contact = `
  Contacts Page
`

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <Container>
          <Intro />
          <article className="mb-32">
            <PostBody content={contact} />
          </article>
        </Container>
      </Layout>
    </>
  )
}
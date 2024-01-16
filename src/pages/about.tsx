import Link from 'next/link'
import RootLayout from '../components/RootLayout'

const AboutPage = () => (
  <RootLayout title="About | World of the best perfumes">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </RootLayout>
)

export default AboutPage

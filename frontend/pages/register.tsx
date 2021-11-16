import axios from 'axios'
import type { NextPage } from 'next'
import SEO from '../components/seo'
import RegisterTemplate from '../components/templates/Register'

const Home: NextPage = () => {
  const handleSubmit = (values: any) => {
    axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/register', values)
    .then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <SEO
        title="Register"
      />
      <RegisterTemplate onSubmit={handleSubmit} />
    </>
  )
}

export default Home

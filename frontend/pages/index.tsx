import axios from 'axios'
import type { NextPage } from 'next'
import SEO from '../components/seo'
import LoginTemplate from '../components/templates/Login'

const Home: NextPage = () => {
  const handleSubmit = (values: any) => {
    axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/login', values)
    .then(res => {
      console.log(res);
      alert(JSON.stringify(res.data, null, 2))
    })
  }

  return (
    <>
      <SEO
        title="Login"
      />
      <LoginTemplate onSubmit={handleSubmit} />
    </>
  )
}

export default Home

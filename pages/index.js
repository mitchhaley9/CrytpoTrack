import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CoinList from './components/CoinList'
import Coins from './components/Coins'
import SearchBar from './components/SearchBar'
import {useState} from 'react'
import Layout from './components/Layout'

export default function Home({filterCoins}) {
const [search, setSearch] = useState ('')

const allCoins = filterCoins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()))

const handleChange = e => {
  e.preventDefault()

  setSearch (e.target.value.toLowerCase())
}

  return (
    <Layout >
      <div className="coin_app">
      <Head>
        <title>Crypto Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<SearchBar type="text" placeholder="Search" onChange={handleChange} />
<CoinList filterCoins = {allCoins} / >
</div>


    </Layout>
  )
}


export const getServerSideProps = async () =>{
const res = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')

const filterCoins = await res.json();

return {
  props :{
    filterCoins
  }
}


}
import Coins from "./Coins"

export default function CoinList ({filterCoins}){
return(
 <>
{filterCoins.map(coin=>{
    return(
        <Coins 
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        image={coin.image}
        supply={coin.circulating_supply}
        marketCap={coin.market_cap}
        price = {coin.current_price}
        volume={coin.total_volume}
        priceChange={coin.price_change_percentage_24h}

        
        />
    )
})}
 </>
)
}
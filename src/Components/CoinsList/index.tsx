import { useContext } from 'react'
import { StyledList } from "./style"
import { Context } from 'vm'
import { ExchangeContext } from '../../Contexts/exchange-context'

export default function CoinsList(){
    const { allCoins, favoriteCoins, showOnlyFavCoins } = useContext(ExchangeContext) as Context

    return (
        <StyledList>
            {
                showOnlyFavCoins === true &&
                favoriteCoins.map((coin: any) => <li>
                    <h2>{coin.name}</h2>
                </li>
	            )
            }
            {
                showOnlyFavCoins === false &&
                allCoins.map((coin: any) => <li>
                    <h2>{coin.name}</h2>
                </li>
	            )
            }
        </StyledList>
    )
}
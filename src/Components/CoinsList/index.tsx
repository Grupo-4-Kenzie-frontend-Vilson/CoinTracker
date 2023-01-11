import { useContext } from 'react'
import { StyledList } from "./style"
import { Context } from 'vm'
import { ExchangeContext } from '../../Contexts/exchange-context'

export default function CoinsList(){
    const { allCoins } = useContext(ExchangeContext) as Context
    console.log(allCoins)

    return (
        <StyledList>
            {
                allCoins.map((coin: any) => <li>
                    <h2>{coin.name}</h2>
                </li>
	            )
            }
        </StyledList>
    )
}
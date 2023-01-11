import { AnimationLogo } from "../AnimationLogo"
import walletIcon from "../../assets/wallet.svg"
import logoutIcon from "../../assets/logout.svg"
import { DivCenterContent, StyledIcon, StyledMainHeader } from "./style"
import { useMediaQuery } from "react-responsive"
import { Link, Navigate, Outlet } from "react-router-dom"

export const MainHeader = () => {
    const isBigScreen: boolean = useMediaQuery({query: "(min-width: 769px)"})

    return (
        <>
            <StyledMainHeader>
                <DivCenterContent>
                    {
                        isBigScreen === true && 
                        <AnimationLogo height={120} width={80} />
                    }
                    <h1>CoinTracker</h1>
                </DivCenterContent>
                <DivCenterContent>
                    <StyledIcon src={walletIcon} alt="walletIcon"
                        onClick={() => {
                            <Link to="/wallet" />
                        }} />
                    <StyledIcon src={logoutIcon} alt="logoutIcon"
                        onClick={() => {
                            localStorage.clear()
                        }} />
                </DivCenterContent>
            </StyledMainHeader>
            <Outlet />
        </>
    )
}
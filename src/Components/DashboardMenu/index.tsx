import { DivCenterContent, StyledH3, StyledMainDiv } from "./style"
import { useMediaQuery } from 'react-responsive'

export const MainDiv = () => {
    const isBigScreen: boolean = useMediaQuery({query: '(min-width: 769px)'})

    return (
        <StyledMainDiv>
            <DivCenterContent>
                <StyledH3>Adicionar a carteira</StyledH3>
            </DivCenterContent>
            <DivCenterContent>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
<path fill="#FFFFFF" d="M12 40q-3.3 0-5.65-2.35Q4 35.3 4 32V16q0-3.3 2.35-5.65Q8.7 8 12 8h24q3.3 0 5.65 2.35Q44 12.7 44 16v16q0 3.3-2.35 5.65Q39.3 40 36 40Zm0-23.5h24q1.45 0 2.725.45Q40 17.4 41 18.25V16q0-2.1-1.45-3.55Q38.1 11 36 11H12q-2.1 0-3.55 1.45Q7 13.9 7 16v2.25q1-.85 2.275-1.3Q10.55 16.5 12 16.5Zm-4.85 6.8L31 29.05q.35.1.725.025.375-.075.625-.325l8-6.7q-.65-1.15-1.8-1.85-1.15-.7-2.55-.7H12q-1.75 0-3.1 1.075T7.15 23.3Z"/></svg>
            </DivCenterContent>
        </StyledMainDiv>
    )
}
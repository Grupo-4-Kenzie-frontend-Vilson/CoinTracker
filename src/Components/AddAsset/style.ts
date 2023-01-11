import styled from "styled-components";

export const StyledAddAssets = styled.div`
    .modal-overlay{
        background-color: rgba(0,0,0, 0.7);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-content{
        width: 90%;
        max-width: 500px;
        border-radius: 5px;
        background-color: var(--color-white);
    }
`

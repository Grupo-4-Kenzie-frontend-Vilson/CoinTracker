import { createGlobalStyle } from "styled-components";

export const Modal = createGlobalStyle`

  .modal-overlay{
    background-color: rgba(255,255,255, 0.2);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    
}
.modalHeader{
    h2{
        color: var(--color-white);
    }
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button{
        cursor: pointer;

        background-color: transparent;
        border: none;
        color: var(--color-white);
        
        &:hover{
            opacity: 80%;
        }
    }
}

.formModal{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    > select{
        max-width: 583px;
        height: 44px;
        background-color: var(--color-gray);
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: none;
        border-radius: 14px;
        padding: 10px;
    }

    >input{
        max-width: 583px;
        height: 44px;
        background-color: var(--color-gray);
        border: none;
        border-radius: 14px;
        padding: 10px;
    }

    
}

.buttonModal{
    width: 100%;
    display: flex;
    justify-content: center;

    >button{
        max-width: 217px;
            height: 68px;
            border-radius: 15px;
            background-color: var(--color-gray);
    
            cursor: pointer;
            border:none;
    
            color: var(--color-black);
            font-size: 26px;
            padding: 20px;
    
            &:hover{
                opacity: 80%;
            }
        
    }
}
.modal-content{
    width: 90%;
    max-width: 500px;
    border-radius: 5px;
    background-color: var(--color-primary);
    padding: 20px;

}
`;

import {css} from 'styled-components';

export const mobile=(props)=>{
return css`
@media (max-width:380px){
    ${props}
}
`
}

export const tablet=(props)=>{
    return css`
    @media (min-width:626px) and (max-width:913px) {
        ${props}
    }
    `
    }
    export const others=(props)=>{
        return css`
        @media (min-width:380px) and (max-width:625px) {
            ${props}
        }
        `
        }




    
        
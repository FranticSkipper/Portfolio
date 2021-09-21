import styled from 'styled-components'

const Div = styled.div`
    max-width: 1470px;
    padding: 0 15px;
    margin: 0 auto;
`

export const withContainer = (Component) => {
        return( 
            <Div>
                <Component/>
            </Div>
        )
}
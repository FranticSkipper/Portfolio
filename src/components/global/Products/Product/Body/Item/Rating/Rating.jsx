import React from 'react'
import styled from "styled-components";
import StarRatings from 'react-star-ratings';
import comments from '../../../../../../../assets/global/goods/comments/comment-icon.svg'
const Div = styled.div`
    display: flex;
    margin-bottom: 18px;
    @media(max-width: 991px){
        margin-bottom: 5px;
    }
`
const Stars = styled.div`
    position: relative;
    margin-right: 13px;
`

const Comments = styled.div`
    display: flex;
    align-items: center;
    img{
        display: block;
        margin-right: 7px;
    }
`
const Count = styled.div`
    position: relative;
    color: #D0D0D0;
    :after{
        content: ')';
    }
    :before{
        content: '('
    }
`

const Rating = (props) => {
    
    return(
        <Div>
            <Stars>
                <StarRatings
                    rating={props.currentRating} 
                    numberOfStars={5}
                    starRatedColor='#FFCC01'
                    starEmptyColor='#D0D0D0'
                    starDimension='26px'
                    starSpacing='0px'
                    name='product-rating'
                />
            </Stars>
            <Comments>
                <img src={comments} alt="Комментарии" />
                <Count> {props.comments} </Count>
            </Comments>

        </Div>
    )
}

export default Rating

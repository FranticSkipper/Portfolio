import React from 'react'
import { connect } from 'react-redux';
import Help from './Help'


const HelpContainer = (props) => {
    return(
        <Help {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        prompts: state.category.prompts
    }
}
export default connect(mapStateToProps, {})(HelpContainer)

import React from 'react'
import About from './About'
import { connect } from 'react-redux';



const AboutContainer = (props) => {

    return (
       <About {...props}/>
    )
}

const mapStateToProps = (state) => {
    return{
        socials: state.footer.socials
    }
}
export default connect(mapStateToProps, {})(AboutContainer)

import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { authLogin, profile } from '../store/actions/'
function Index(props) {


    useEffect(() => {
        if (Object.entries(props.login).length) {
            if(!props.login.sesion.login){
                props.history.push('login')
            }
        }else{
            props.history.push('login')
        }

    }, [])

    return (
        <h4>Home</h4>
    )




}


function mapDispatchToProps(dispatch) {
    return {
        authLogin: token => dispatch(authLogin(token)),
        profile: prof => dispatch(profile(prof)),
    };
}

function mapStateToProps(state) {
    return { login: state.Auth };
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);


export default Home
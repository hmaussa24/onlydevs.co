import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Login from './Login'
import { connect } from 'react-redux'
import { authLogin, profile } from '../store/actions/'
function Index(props) {
    const [isSend, setSend] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState(
        {
            email: '',
            password: ''
        })
    useEffect(() => {
        if (Object.entries(props.login).length) {
            if(props.login.sesion.login){
                props.history.push('home')
            }
        }

    }, [])

    const onLogin = async () => {
        console.log('Success:', data);
        setSend(true)
        await Axios.post('http://127.0.0.1:4500/login', data)
            .then(response => {
                if (response.data.login) {
                    localStorage.setItem('token', response.data.token)
                    props.authLogin(response.data.token);
                    props.profile(response.data.user)
                    props.history.push('/home')
                } else {
                    setError(response.data.message)
                    //alert(response.data.message)
                    setSend(false)
                }
            }, error => {
                setSend(false)
                setError(error)
                alert('Usuario o Contraseña incorrectos')
            })
    }

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
        return (
            <Login error={error} onLogin={onLogin} handleChange={handleChange} isSend={isSend}></Login>
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

const IniciarSesion = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);


export default IniciarSesion
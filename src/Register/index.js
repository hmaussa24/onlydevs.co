import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Register from './Register'
import { connect } from 'react-redux'
import { authLogin, profile } from '../store/actions/'
function Index(props) {
    const [login, setLogin] = useState(false)
    const [isSend, setSend] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState(
        {
            email: '',
            password: '',
            name: ''
        })
    useEffect(() => {
        if (Object.entries(props.login).length) {
            setLogin(props.login.sesion.login)
        }

    }, [])

    const onRegistro = async () => {
        console.log('Success:', data);
        setSend(true)
        await Axios.post('http://127.0.0.1:4500/registro', data)
            .then(response => {
                if (response.data.registro) {
                    props.history.push('/login')
                } else {
                    setError(response.data.message)
                    //alert(response.data.message)
                    setSend(false)
                }
            }, error => {
                setSend(false)
                setError(error)
                alert('Usuario no registrado')
            })
    }

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

        return (
            <Register error={error} onLogin={onRegistro} handleChange={handleChange} isSend={isSend}></Register>
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
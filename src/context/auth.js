import React, {useContext, useState, useReducer} from 'react'
import CONTEXT from './CONTEXT.json'
const Context = React.createContext()

const INITIAL_STATE = {auth: false}

const reducer = (state, action)=>{
    switch (action.type){
        case CONTEXT.SET_AUTH:
            return {auth: action.authStatus}
        default:
            return state
    }
}

const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setAuth = (authStatus)=>{
        dispatch({type:CONTEXT.SET_AUTH, authStatus})
    }


    return <Context.Provider value={{state, setAuth}}>
        {children}
    </Context.Provider>
}

const AuthConsumer = ()=>{
    return useContext(Context)
}

export {AuthProvider, AuthConsumer}
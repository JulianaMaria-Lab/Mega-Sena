import React from 'react'
import { LoadingSld, LoadingTxt } from './styles'

export function Loading(){
    return(
    <LoadingSld>
        <LoadingTxt> Carregando...</ LoadingTxt>
    </LoadingSld>
    );
}
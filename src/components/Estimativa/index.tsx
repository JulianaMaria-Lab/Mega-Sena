import { HTMLAttributes } from "react";
import { EstimativaSld, DataSld, PremioSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    dataProximoConcurso: string,
    valorEstimadoProximoConcurso:number
}

export function Estimativa({dataProximoConcurso,valorEstimadoProximoConcurso}: Props) {
    return (
    <EstimativaSld>
        <DataSld>Estimativa de prêmio do próximo concurso ({dataProximoConcurso}) </ DataSld>
        <PremioSld>R${valorEstimadoProximoConcurso} </ PremioSld>
    </EstimativaSld>
    );
}
import { useState, useEffect } from "react";
import service from "../services";
import { Props } from "../types";
import { Cabecalho } from "../components/Cabecalho";
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local";
import { Dezenas } from "../components/Dezenas";
import { Estimativa } from "../components/Estimativa";
import { Loading } from "../components/Loading";

export default function Principal() {
  const [concurso, setConcurso] = useState({} as Props);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    (async function () {
      const numero = Math.floor(Math.random() * 2534);
      const concurso: Props = await service.get(numero);
      console.log(concurso);
      setIsLoading(false);
      setConcurso(concurso);
    })();
  }, []);
  

  if(isLoading){
    return (<Loading />);
  };

  return (
    <>
      <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
      { concurso.acumulado && <Acumulado /> }  {/* Se True, exibe;se False, não exibe */}
      <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
      <Dezenas listaDezenas={concurso.listaDezenas} />
      <Estimativa dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/>
    </>
  );
}

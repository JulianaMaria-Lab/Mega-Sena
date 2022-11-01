/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import service from "../services";
import { Props } from "../types";
import { Cabecalho } from "../components/Cabecalho";
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local";
import { Dezenas } from "../components/Dezenas";
import { Estimativa } from "../components/Estimativa";
//import Loading from "../components/Loading";

export default function Principal() {
  const [concurso, setConcurso] = useState({} as Props);

  const [isLoading, setIsLoading] = useState(false);
  const [dezenas, setDezenas] = useState([""]);


  useEffect(function () {
    setIsLoading(true);
    (async function () {
      const numero = Math.floor(Math.random() * 2534);
      const concurso: Props = await service.get(numero);
      console.log(concurso);
      setConcurso(concurso);

    })();
  }, []);
  /*
  if(isLoading){
    return (<Loading />);
  };
*/
  return (
    <>
      <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
      { concurso.acumulado && <Acumulado /> }  {/* Se True, exibe;se False, não exibe */}
      <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
      <Dezenas listaDezenas={concurso.listaDezenas} />
      <Estimativa dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/>
    </>
  );

  /*
  return (


        <div>
            <div className="text">Sorteio realizado no {local} em {municipioUF}</div>
        </div>

        <div className='lista-dezenas'>
            <p className='dezenas'>{dezenas[0]}</p>
            <p className='dezenas'>{dezenas[1]}</p>
            <p className='dezenas'>{dezenas[2]}</p>
            <p className='dezenas'>{dezenas[3]}</p>
            <p className='dezenas'>{dezenas[4]}</p>
            <p className='dezenas'>{dezenas[5]}</p>
        </div>
        <div>
            <h1 className='data'>Estimativa de prêmio do próximo concurso {dataProxConcurso}</h1>
            <h3 className='estimado'> {`R$ ${valorEstimado}`}</h3>
        </div>

  ) */
}

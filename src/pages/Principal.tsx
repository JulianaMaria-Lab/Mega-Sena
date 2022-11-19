import { useState, useEffect, createContext } from "react";
import service from "../services";
import { Props, ThemeContextProps } from "../types";
import { Cabecalho } from "../components/Cabecalho";
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local";
import { Dezenas } from "../components/Dezenas";
import { Estimativa } from "../components/Estimativa";
import { Loading } from "../components/Loading";
import { dark, light } from "../styles/theme";
import isPar from "../services/isPar";
import { ThemeProvider } from "styled-components";

export const TheThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default function Principal() {
  const [concurso, setConcurso] = useState({} as Props);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(light);

  useEffect(function () {
    (async function () {
      const numero = Math.floor(Math.random() * 2534);
      const concurso: Props = await service.get(numero);
      console.log(concurso);
      setIsLoading(false);
      setConcurso(concurso);
    })();
  }, []);

  useEffect ( () => {
  const par = isPar(concurso.listaDezenas?.[0])
    if(!par){
      setTheme(dark)
    }else{
      setTheme(light)
    }
  }, [concurso.listaDezenas])

  const par = isPar(concurso.listaDezenas?.[0])
  const toggleTheme = () => {
    setTheme(!par ? dark : light);
  };

 // Carregando... 
  if(isLoading){
    return (<Loading />);
  };

  return (
    <> {/*contexto para passar o tema com a condição da const toggleTheme, onde verifica se a primeira dezena é par ou ímpar*/ }
    <TheThemeContext.Provider value={{toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
        { concurso.acumulado && <Acumulado /> }  {/* Se True, exibe;se False, não exibe */}
        <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
        <Dezenas listaDezenas={concurso.listaDezenas} />
        <Estimativa dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/>
      </ThemeProvider>
    </TheThemeContext.Provider>
    </>
  );
}

export interface Props {
    isLoading: boolean,
    numero: number,
    dataApuracao: string,
    localSorteio: string,
    nomeMunicipioUFSorteio : string,
    listaDezenas: string[]
    acumulado: string,
    dataProximoConcurso: string,
    valorEstimadoProximoConcurso:number
  }
  export interface ThemeContextProps{
    toggleTheme: Function;
  }
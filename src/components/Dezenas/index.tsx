import { HTMLAttributes } from "react";
import { Circle, DezenasSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    listaDezenas: string[],
}

export function Dezenas ({listaDezenas}: Props ) {
    return(

    <DezenasSld>   
        <Circle>{listaDezenas} </Circle>
    </DezenasSld>
    );
}
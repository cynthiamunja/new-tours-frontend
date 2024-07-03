import { AuthInterface } from "./reducers/auth.reducer";
import { CounterInterface, dummmyRE } from "./reducers/dummy.reducer";

export interface appState{
    dummy:dummmyRE
    counter:CounterInterface
    auth:AuthInterface
}
import { useState, useCallback } from 'react';

type Reducer<S, A> = (prevState: S, action: A) => S;
type Dispatch<A> = (action: A) => void;

function useCustomReducer<S, A>(reducer: Reducer<S, A>, initialState: S): [S, Dispatch<A>]
 {
    const [state, setState] = useState<S>(initialState);

    const dispatch: Dispatch<A> = useCallback((action: A) => {
        setState(prevState => reducer(prevState, action));
    }, [reducer]);

    return [state, dispatch];
}



export default useCustomReducer;

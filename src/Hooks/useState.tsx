import { useState, Dispatch, SetStateAction } from 'react';

function useCustomState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
    const [state, setState] = useState<S>(initialState);

    return [state, setState];
}

export default useCustomState;

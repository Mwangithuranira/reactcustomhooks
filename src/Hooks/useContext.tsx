import { useContext, Context } from 'react';

function useCustomContext<T>(context: Context<T>): T {
    const ctx = useContext(context);
    if (ctx === undefined) {
        throw new Error('useCustomContext must be used within a Provider');
    }
    return ctx;
}

export default useCustomContext;

import { useEffect, useRef } from 'react';

type EffectCallback = () => (void | (() => void | undefined));

function useCustomEffect(effect: EffectCallback) {
    const hasMounted = useRef(false);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return effect();
        } else {
            const cleanup = effect();
            return () => {
                if (cleanup) cleanup();
            };
        }
    }, [effect]);
}

export default useCustomEffect;

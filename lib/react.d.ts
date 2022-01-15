export declare type UseState = <T>(initialState: T | (() => T)) => [T, (newState: T) => void];
export declare const useState: UseState;
export declare type UseEffect = (didUpdate: () => ((() => void) | void), params?: any[]) => void;
export declare const useEffect: UseEffect;

/**
* React hook to handle session from your browser storage
* @param sessionKey This required parameter is used as the browser storage key. This should be a unique string per app. For example your package.json's name value.
* @param keepOnWindowClosed This optional parameter will determine if useSession will work with LocalStorage or SessionStorage. Default value is true, so default storage is LocalStorage
* @returns If there is a session in your browser storage then it will be returned. If there is no session, it will return null.
*/
declare function useSession(sessionKey: string, keepOnWindowClosed?: boolean): {
    session: object | string | null;
    save: (sessionValue: object | string) => void;
    saveJWT: (jwt: string) => void;
    clear: () => void;
};
export default useSession;

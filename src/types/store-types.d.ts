interface PasswordViewStore {
    show: boolean;
    onClick: (value: boolean)=> void;
}

interface LoadingStore {
    isLoading: boolean;
    setLoading: (value: boolean)=> void;
    loading_message: string;
    setLoadingMessage: (msg: string)=> void;
}
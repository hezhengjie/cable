class CableError extends Error {
    constructor(message: any) {
        const msg = `[Cable:error] ${message}`;
        super(msg);
    }
}

export default CableError;

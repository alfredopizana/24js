class CustomError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status || 400; // Va a almancenar el codigo de error, por default tiene 400
    }
}

export { CustomError };

export const createError = (res, status, msg) => {
    const err = new Error();
    err.status = status || 500;
    err.message = msg || `Something went wrong`;
    return res.status(status).send({
        msg,
    });
}

export const createMessage = (res, status, msg) => {
    const err = new Error();
    err.status = status || 200;
    err.message = msg || `Successfully`;
    return res.status(status).send({
        msg,
    });
};
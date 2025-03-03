
const environment = process.env.ENVIRONMENT; 

export const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    
    let errorMsg = "";
    switch (res.statusCode) {
        case 400:
            break;

        case 404:
            errorMsg = "Resource Not Found";
            break;

        case 500:
            errorMsg = "Internal error. Try again later.";
            switch (environment) {
                case 'dev':
                    errorMsg = err;
                    break;
                
                default:
                    break;

            }
            break;
    }

    res.render('error', { error: errorMsg });
}


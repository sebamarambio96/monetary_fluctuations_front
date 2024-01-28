function validationErrorProcessor(errorsObject, enqueueSnackbar) {
    console.log(errorsObject);
    for (const key in errorsObject) {
        if (errorsObject.hasOwnProperty(key)) {
            const errorMessages = errorsObject[key];

            errorMessages.forEach((errorMessage) => {
                enqueueSnackbar(`${errorMessage}`, {
                    variant: "warning",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "right",
                    },
                });
            });
        }
    }
}

export { validationErrorProcessor };

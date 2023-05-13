const errorHandler = (request, response) => {

    response
        .status(400)
        .json({
            success: false,
            message: "Error ",
            extraInfo: error.message
        })

}
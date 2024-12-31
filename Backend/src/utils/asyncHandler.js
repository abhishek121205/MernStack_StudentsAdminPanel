const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(400).json({
            error:true,
            message: error.message,
        })

    }
}

// module.exports = { asyncHandler }
export { asyncHandler }
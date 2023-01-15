import Joi from 'joi';

const postSchema = Joi.object({
    content : Joi.string().trim().required(),

    client:  Joi.string().trim().required(),
    skinType:  Joi.string().trim().required(),
    skinCondition:  Joi.string().trim().required(),
    // products:  [{type: Schema.Types.ObjectId, ref: 'product'}],
    Price:  Joi.Number().trim().required(),
    Advance:  Joi.Number().trim().required(),
    Bal:  Joi.Number().trim().required(),
    Destination:  Joi.string().trim().required(),
    Due:  Joi.date().trim().required(),
    comment:  Joi.string().trim().required(),
    state: String,
    ref: String,
})

async function orderValidator(req, res, next) {

    const postPayload = req.body;

    try {
        await postSchema.validateAsync(postPayload);
        next();
    } catch (err) {
        next(err.details[0].message)
    }
}
export default  orderValidator;
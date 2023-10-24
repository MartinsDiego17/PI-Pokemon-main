const getAllTypes = require('../controllers/getAllTypes');

const getTypesHandler = async (req, res) => {

    try {
        const allTypes = await getAllTypes();
        console.log(allTypes)
        res.status(200).json(allTypes)
    } catch (error) {

        res.status(404).json({ error: error.message })

    }

}

module.exports = getTypesHandler;
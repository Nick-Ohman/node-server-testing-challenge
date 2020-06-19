const Humans = require('./human-model.js')
const router = require('express').Router();


router.get('/', (req, res) => {
    Humans.getAll()
    .then(humans => {
        res.status(200).json({
            data:humans
        })
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "Error retrieving Human",
            error
        })
    })
});

router.post('/', (req, res) => {
    Humans.add(req.body)
            .then(resp => {
                res.status(201).json(resp)
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: 'Error adding Human',
                    error
                })
            })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id 
        Humans.remove(id)
            .then(human => {
                res.status(200).json({
                    deletedhuman: human
                })
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: "Error Deleting Object",
                    error
                })
            })
})



module.exports=router;
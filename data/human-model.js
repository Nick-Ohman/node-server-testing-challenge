const db = require("./dbconfig");
module.exports = {
    getAll,
    findById,
    add,
    remove
};



function getAll() {
    return db("humans");
}

function findById(id){
    return db('humans')
            .where({id})
            .first()
}

async function add(human){
    const [id] = await db('humans')
                    .insert(human, 'id')
                    return findById(id)
}

function remove(id){
    return findById(id)
    .then(human => {
        const deleted = human
        return db('humans')
                .where({id})
                .first()
                .del()
                .then(count => {
                    return deleted;
                })
    })
}
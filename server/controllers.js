module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses()
        .then((products) => res.status(200).send(products))
    },
    addHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, address, state, zip, image, mortage, rent} = req.body
        dbInstance.add_house([name, address, state, zip, image, mortage, rent])
        .then(()=> res.sendStatus(200))
    },
    deleteHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req
        dbInstance.delete_house([params.id])
        .then( () => res.sendStatus(200))
    }
}
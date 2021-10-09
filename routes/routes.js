const { Router } = require('express')

const router = Router()

router.get("", async(req, res) => {
    try{
        res.send("Успешно")
    } catch (e) {
        res.status(500).json({ message : "Что-то пошле не так, попробуйте снова"})
    }

})

module.exports = router
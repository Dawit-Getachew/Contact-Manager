const express =  require('express')
const router =  express.Router()


router.route('/register').post((req, res) => {
    res.json({
        message: "Register the user"
    })
})

router.post('/login', (req, res) => {
res.json({
    message: "Login the user",
})
})

router.route('/current').post((req, res) => {
 res.json({
     message: "Current User"
 })
})



module.exports = router;
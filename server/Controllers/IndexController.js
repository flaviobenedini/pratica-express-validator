const controller = {}

controller.index = (req, res) => res.render('index', { title: 'Express' })

controller.add = (req,res) = res.send(req.body)


module.exports = controller
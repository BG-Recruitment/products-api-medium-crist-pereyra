const router = require('express').Router();
const controller = require('../controllers/products');


router.get("/products", (req, res, next) => {
    Products.all("SELECT * FROM product ORDER BY id ASC", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
});

router.post("/products", (req, res, next) => {
    var reqProduct = re.body;
    db.run(`INSERT INTO product (name, price, mrp, stock, isPublished) VALUES (${name},${price},${mrp},${stock},false)`,
    [reqProduct.name, reqProduct.price, reqProduct.mrp, reqProduct.stock, reqProduct.isPublished],
    function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.status(201).json({
            "id": this.lastID
        })
    });
});

app.patch("/products", (req, res, next) => {
    var reqProduct = re.body;
    db.run(`UPDATE product set name = ${name}, price = ${price}, mrp = ${mrp}, stock = ${stock}, isPublished = true WHERE id = ${id}`,
        [reqProduct.name, reqProduct.price, reqProduct.mrp, reqProduct.stock, reqProduct.isPublished, reqProduct.id],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": res.message })
                return;
            }
            res.status(204).json({ updatedID: this.changes });
        });
});

app.delete("/products/<id>:id", (req, res, next) => {
    res.status(405).json({ "error": res.message })
});
module.exports = router;

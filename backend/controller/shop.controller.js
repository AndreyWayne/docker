const db = require('../db');

class ShopController {
    async getAll(req, res) {
        const all = await db.query('SELECT * FROM goods');

        res.json(all.rows);
    }

    async getCount(req, res) {
        const all = await db.query('SELECT SUM(price) FROM goods');

        res.json(all.rows);
    }

    async getIN(req, res) {
        const all = await db.query('SELECT * FROM goods WHERE id IN (1,3)');

        res.json(all.rows);
    }

    async getBetween(req, res) {
        const all = await db.query('SELECT * FROM goods WHERE id BETWEEN 2 AND 2');

        res.json(all.rows);
    }

    async getAllLimit(req, res) {
        const all = await db.query('SELECT * FROM goods WHERE id=2 LIMIT 1');

        res.json(all.rows);
    }

    async getMax(req, res) {
        const all = await db.query('SELECT MAX(price) FROM goods');

        res.json(all.rows);
    }

    async getAllSort(req, res) {
        const all = await db.query('SELECT * FROM goods ORDER BY id DESC, price ASC');

        res.json(all.rows)
    }

    async getId(req, res) {
        const { id } = req.params;

        const result = await db.query(`SELECT * FROM goods WHERE id=${ id }`);

        res.json(result.rows[0])
    }

    async getAllFilter(req, res) {
        const response = [];

        for (const key in req.query) {
            response.push(`${ key }='${ req.query[key] }'`);
        }

        console.log(response)

        const result = await db.query(`SELECT * FROM goods WHERE ${ response.join(' AND ') }`);

        res.json(result.rows);
    }

    async create(req, res) {
        const { title, price, user_id } = req.body;

        const result = await db.query('INSERT INTO goods (title, price, user_id) values ($1, $2, $3) RETURNING *', [title, price, user_id]);

        res.json(result);
    }

    async update(req, res) {
        const { title, price } = req.body;

        const result = await db.query(`UPDATE goods SET title='${ title }', price='${ price }' WHERE id=${ req.params.id } RETURNING *`);

        res.json(result)
    }

    async delete(req, res) {
        const { id } = req.params;

        const result = await db.query(`DELETE FROM goods WHERE id=${ id } RETURNING *`);

        res.json(result)
    }

    async join(req, res) {
        const result = await db.query('SELECT * FROM goods INNER JOIN person ON goods.user_id=person.id WHERE person.id=1')

        res.json(result)
    }

    async union(req, res) {
        const result = await db.query('SELECT id FROM goods UNION SELECT id FROM person')

        res.json(result)
    }
}

module.exports = new ShopController();
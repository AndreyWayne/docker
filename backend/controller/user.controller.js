const db = require('../db');

class UserController {
    async createUser(req, res) {
        const { name, surname, last_name } = req.body;

        const newPerson = await db.query(
            `INSERT INTO person (name, last_name) values ($1, $2) RETURNING *`, [name, last_name]
        );

        res.json(newPerson.rows[0]);
    }

    async getUser(req, res) {
        const id = req.params.id;

        const user = await db.query(`SELECT * FROM person where id = $1`, [id]);

        res.json(user.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query(`select * FROM person`);

        res.json(users.rows);
    }

    async updateUser(req, res) {
        
    }

    async deleteUser(req, res) {
        
    }
}

module.exports = new UserController()
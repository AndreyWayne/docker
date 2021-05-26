const db = require('../db');

class PostController {
    async createPost(req, res) {
        let {title, content, user_id} = req.body; 

        const newPost = await db.query('INSERT INTO posting (title, content, user_id) values ($1, $2, $3) RETURNING * ', [title, content, user_id]);


        res.json(newPost.rows[0])
    }

    async getPost(req, res) {
        const id = req.query.id;

        const posts = await db.query('select * from posting where user_id = $1', [id]);

        res.json(posts.rows)
    }

    async get(req, res) {
        const posts = await db.query('select * from posting');

        res.json(posts.rows)
    }
}

module.exports = new PostController();
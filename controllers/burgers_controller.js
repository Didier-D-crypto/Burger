module.exports = app => {
    //app.get write all your routes in here then send to server.js
    app.get("/", function (req, res) {
        connection.query("SELECT * FROM movies;", function (err, data) {
            if (err) {
                return res.status(500).end();
            }

            res.render("index", { movies: data });
        });
    });

    // Create a new plan
    app.post("/api/quotes", (req, res) => {
        connection.query("INSERT INTO quotes (quotes) VALUES (?)", [req.body.quotes], (err, result) => {
            if (err) {
                return res.status(500).end();
            }

            // Send back the ID of the new plan
            res.json({ id: result.insertId });
            console.log({ id: result.insertId });
        });
    });

    // Update a plan //discern witch data you're updating
    app.put("/api/ /:id", function (req, res) {
        connection.query("UPDATE movies SET movie = ? WHERE id = ?", [req.body.movies, req.params.id], function (err, result) {
            if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
            }
            else if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        });
    });

    // Delete a plan
    app.delete("/api/quotes/:id", (req, res) => {
        connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function (err, result) {
            if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
            }
            else if (result.affectedRows === 0) {// pay attention to affected rows
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        });
    });
}
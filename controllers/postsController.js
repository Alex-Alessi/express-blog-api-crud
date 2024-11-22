const postsData = require("../data/posts");

// # index
function index(req, res) {
  const { tag, titolo } = req.query;

  let filteredPosts = postsData;

  if (tag) {
    filteredPosts = postsData.filter((post) => post.tags.includes(tag));
  }

  if (titolo) {
    filteredPosts = postsData.filter(
      (post) => post.titolo.toLowerCase() === titolo.toLowerCase()
    );
  }

  res.json(filteredPosts);
}

// # show
function show(req, res) {
  const id = req.params.id;
  res.json(`Mostra il post con id ${id}`);
}

// # store
function store(req, res) {
  res.json(`Crea un post`);
}

// # update
function update(req, res) {
  const id = req.params.id;
  res.json(`Modifica totale del post con id ${id}`);
}

// # modify
function modify(req, res) {
  const id = req.params.id;
  res.json(`Modifica parziale del post con id ${id}`);
}

// # destroy
function destroy(req, res) {
  const id = req.params.id;
  res.json(`Elimina il post con id ${id}`);
}

module.exports = { index, show, store, update, modify, destroy };

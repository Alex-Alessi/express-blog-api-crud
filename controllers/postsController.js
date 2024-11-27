const postsData = require("../data/posts");

// # index
function index(req, res) {
  const { tag, titolo } = req.query;

  let filteredPosts = [...postsData];

  if (tag) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag));
  }

  if (titolo) {
    filteredPosts = filteredPosts.filter(
      (post) => post.titolo.toLowerCase() === titolo.toLowerCase()
    );
  }

  filteredPosts = filteredPosts.map((post) => ({ ...post, img: post.img }));

  res.json(filteredPosts);
}

// # show
function show(req, res) {
  const id = parseInt(req.params.id);
  let post = postsData.find((post) => post.id === id);

  if (!post) {
    const err = new Error("Id pizza not found");
    err.code = 404;
    throw err;
  }

  post = { ...post, img: post.img };

  res.json(post);
}

// # store
function store(req, res) {
  const { titolo, contenuto, img, tags } = req.body;
  const id = postsData.at(-1).id + 1;

  if (!titolo || !contenuto || !img || !Array.isArray(tags) || !tags.length) {
    const err = new Error("Invalid params");
    err.code = 400;
    throw err;
  }

  const newPost = {
    id,
    titolo,
    contenuto,
    img,
    tags,
  };
  postsData.push(newPost);
  console.log(newPost);

  res.json(newPost);
}

// # update
function update(req, res) {
  // trovo la pizza da modificare
  const id = parseInt(req.params.id);

  let post = postsData.find((post) => post.id === id);

  if (!post) {
    const err = new Error("Id pizza not found");
    err.code = 404;
    throw err;
  }

  // ottengo i parametri
  const { titolo, contenuto, img, tags } = req.body;

  if (!titolo || !contenuto || !img || !Array.isArray(tags) || !tags.length) {
    const err = new Error("Invalid params");
    err.code = 400;
    throw err;
  }

  post.titolo = titolo;
  post.contenuto = contenuto;
  post.img = img;
  post.tags = tags;

  res.json(post);
}

// # modify
function modify(req, res) {
  // trovo la pizza da modificare
  const id = parseInt(req.params.id);

  let post = postsData.find((post) => post.id === id);

  if (!post) {
    const err = new Error("Id pizza not found");
    err.code = 404;
    throw err;
  }

  // ottengo i parametri
  const { titolo, contenuto, img, tags } = req.body;

  if (titolo) {
    post.titolo = titolo;
  }

  if (contenuto) {
    post.contenuto = contenuto;
  }

  if (img) {
    post.img = img;
  }
  // controlliamo che sia un array e che non sia vuoto
  if (tags?.length) {
    post.tags = tags;
  }

  res.json(post);
}

// # destroy
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const post = postsData.find((post) => post.id === id);

  if (!post) {
    const err = new Error("Id pizza not found");
    err.code = 404;
    throw err;
  }

  const postIndex = postsData.indexOf(post);

  postsData.splice(postIndex, 1);

  console.log(postsData);

  res.json(postsData);
}

module.exports = { index, show, store, update, modify, destroy };

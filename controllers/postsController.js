const posts = [
  {
    titolo: "ciambellone",
    contenuto: "dolce ciambellone soffice",
    img: "ciambellone.jpeg",
    tags: [""],
  },
  {
    titolo: "cracker_barbabietola",
    contenuto: "snack alla barbabietola",
    img: "cracker_barbabietola.jpeg",
    tags: [""],
  },
  {
    titolo: "pane_fritto_dolce",
    contenuto: "impasto fritto e dolce",
    img: "pane_fritto_dolce.jpeg",
    tags: [""],
  },
  {
    titolo: "pasta_barbabietola",
    contenuto: "pasta alla barbabietola",
    img: "pasta_barbabietola.jpeg",
    tags: [""],
  },
  {
    titolo: "torta_paesana",
    contenuto: "una torta paesana",
    img: "torta_paesana.jpeg",
    tags: [""],
  },
];

// # index
function index(req, res, host, port) {
  const postData = posts.map((post) => {
    return {
      ...post,
      img: `${host}:${port}/img/${post.img}`,
    };
  });

  const data = {
    posts: postData,
    length: posts.length,
  };

  res.json(data);
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

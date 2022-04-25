const databases = {
  articles: {
    databaseID: "bf32a3bfe5474dc7895a6bf4dacf1a11",
    articleRef: "Papers",
  },
  authors: {
    databaseID: "fc172b9218e2438795c3c7b57a70610d",
    authorRef: "Authors",
  },
}

const status = {
  prefix: "status:",
  colname: "Status",
  states: {
    unread: "⏳ Unread",
    "reading-list": "📚 Reading List",
    done: "🎉 Finished!",
  },
}

const topics = {
  prefix: "topic:",
  colname: "Topics",
  topics: {
    dl: "Deep Learning",
  },
}

const fields = {
  prefix: "field:",
  colname: "Fields",
  fields: {
    mas: "Multi-Agent Systems",
  },
}

const methods = {
  prefix: "method:",
  colname: "Methods",
  methods: {
    mcmc: "Markov-Chain Monte-Carlo",
    vi: "Variational Inference",
  },
}

const icons = {
  book: ":books:",
  "article-journal": ":scroll:",
  inproceedings: ":newspaper:",
  "paper-conference": ":rolled_up_newspaper:",
  proceedings: ":bookmark_tabs:",
}

module.exports = {
  databases, status, topics, fields, methods, icons,
}


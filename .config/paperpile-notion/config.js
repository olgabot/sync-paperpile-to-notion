const databases = {
  authors: {
    databaseID: "e099196d94ab4ff1913a597fff33e8a2",
    articleRef: "Articles",
  },
  articles: {
    databaseID: "bf32a3bfe5474dc7895a6bf4dacf1a11",
    authorRef: "Authors",
  },
}

const folders = {
  prefix: "folder:",
  colname: "Folders",
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
  databases, status, topics, fields, methods, icons, folders
}


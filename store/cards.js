export const state = () => ({
  authors: [],
  cards: []
})

export const mutations = {
  setAuthors(state, authors) {
    state.authors = authors;
  },
  setCards(state, cards) {
    state.cards = cards;
  }
}

export const actions = {
  async fetch({commit}) {
    const authors = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');

    const cards = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
    cards.forEach(card => {
      card.author = authors[+card.userId - 1].name;
      card.date = generateRandomDate(new Date(2008, 7, 8).getTime());
    });

    commit('setAuthors', authors);
    commit('setCards', cards);
  }
}

export const getters = {
  authors: state => state.authors,
  cards: state => state.cards
}

function generateRandomDate(startTime) {
  const time = new Date(startTime + Math.random() * (new Date().getTime() - startTime)).setHours(0, 0, 0, 0);
  const dtFormat = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return {
    time: time,
    format: dtFormat.format(time).slice(0, -3)
  };
}

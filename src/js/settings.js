export const classFor = {
  headerEffect: {
    sectionTitle: '.sectionTitle',
    headerWrapper: '.headerWrapper',
  },
  scrollBar: {
    slider: '.slider',
  }
};
export const idFor = {
  popup: {
    popup: 'popup',
    popupEmail: 'popupEmail',
    closePopupEmail: 'closePopup',
  },
  popupCookies: {
    cookies: 'cookies',
    buttonAccept: 'buttonAccept',
    buttonReject: 'buttonReject',
  },
  blog: {
    postsWrapper: 'postsWrapper'
  }
};
export const classNames = {
  header: {
    active: 'active',
  },
  pages: {
    dNone: 'd-none',
  },
  popup: {
    block: 'block',
    none: 'none',
  }
};
export const settings = {
  db: {
    //url: '//localhost:3131',
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
    authors: 'authors',
  }
};
const select = {
  templateOf: {
    listPosts: '#templatePosts',

  }
};
export const templates = {
  listPosts: Handlebars.compile(
    document.querySelector(select.templateOf.listPosts).innerHTML
  ),
};

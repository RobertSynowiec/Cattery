import { idFor, templates } from '../settings.js';
import { utils } from '../utils.js';

class Blog {
  constructor(data) {

    this.data = data;
    console.log('td', this.data);
    this.render();

  }

  render() {
    this.bookList = document.getElementById(idFor.blog.postsWrapper);
    console.log('tb2', this.bookList);

    for (let elem of this.data.posts) {
      const generatedHTML = templates.listPosts(elem);
      const generatedElementDOM = utils.createDOMFromHTML(generatedHTML);
      this.bookList.appendChild(generatedElementDOM);
    }
  }
}
export default Blog;
import route from 'riot-route'
import { mount, register, unmount } from 'riot'
import Admin from './tags/admin.riot'
import BlogRoll from './tags/blog-roll.riot'
import Editor from './tags/editor.riot'
import Post from './tags/post.riot'



/* Router */
//Configure router
register('admin', Admin);
register('blog-roll', BlogRoll);
register('editor', Editor);
register('new', Editor);
register('post', Post);
route.base('/');
route.start(true);

//Mount a tag as a main view.
function blog_set_view(view, MyComponent, opts) {
    unmount('#app', true);
    mount('#app', opts, view);
}

//Home
route('/', function() {
    //Mount blog-roll.tag onto html element with id of #view
    blog_set_view('blog-roll', BlogRoll, {});
});

//Admin
route('/admin', function() {
    //Mount admin.tag onto html element with id of #view
    blog_set_view('admin', Admin, {});
});

//New Post
route('/new', function() {
    //Mount editor.tag onto html element with id of #view
    blog_set_view('editor', Editor, {});
});

//Edit Post
route('/edit/*', function(url) {
    //Mount editor.tag onto html element with id of #view
    blog_set_view('editor', Editor, { 'url': url });
});

//Single blog post
route('/*', function(url) {
    //Mount post.tag onto html element with id of #view
    blog_set_view('post', Post, { 'url': url });
});
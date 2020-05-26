/* Global variables */
import { install } from 'riot';

export var posts = []

export var dbMixin = {
    init: function(Component) {
        if (localStorage.getItem('posts') === 'undefined' || localStorage.getItem('posts') == null) {
            localStorage.setItem('posts', '[]');
        }

        posts = JSON.parse(localStorage.getItem('posts'));
        //console.log('mixin posts: ', posts)
        if (Component.props && Component.props.url) {
            for (var i in posts) {
                if (posts[i].url === Component.props.url) {
                    Component.post = posts[i];
                    Component.post.index = i;
                }
            }
        }
    },

    save: function(postParam) {
        posts = postParam;
        var posts_str = JSON.stringify(posts);
        localStorage.setItem('posts', posts_str);
    }
}


install(function(component) {
    // add posts and dbMixin to all the riot components
    component.posts = posts;
    component.dbMixin = dbMixin;
    return component
})
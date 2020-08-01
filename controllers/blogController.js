const Blog = require('../models/blog');
// blog_index,blog_details,blog_create_get,blog_create_post,blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('blogs/index', {
                title: 'All Blogs',
                blogs: result
            });
        }).catch((err) => {
            res.render('404', {
                title: 'Blog not found'
            });
        })
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        }).catch((err) => {
            res.render('404', {
                title: 'Blog not found'
            });
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({
                redirect: '/blogs'
            });
        })
        .catch(err => {
            res.render('404', {
                title: 'Blog not found'
            });
        });
}

const blog_details = (req, res) => {
    Blog.findById(req.params.id)
        .then((result) => {
            // res.send(result);

            res.render('blogs/singleBlogs', {
                title: 'Detail Blogs',
                blog: result
            });
            // console.log(result);
        }).catch((err) => {
            res.log(err);
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {
        title: 'Create Blogs',
    });
}

module.exports = {
    blog_index,
    blog_create_post,
    blog_delete,
    blog_details,
    blog_create_get
}
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();

// connect to mongodb

const dbURi = 'mongodb+srv://kutank_dev:dev@123@codeninjablogs.vi1i6.mongodb.net/node_ninja?retryWrites=true&w=majority'

mongoose.connect(dbURi, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// listen for request
// app.listen(3000);


// middleware & static file
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('5f246f28110946473946d65b')
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             res.log(err);
//         })
// });

// app.use((req, res, next) => {
//     console.log('New request made :');
//     console.log('Host : ', req.hostname);
//     console.log('Path : ', req.path);
//     console.log('Method : ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("in the next middleware");
//     next();
// });


// route
app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('views/index.html', {
    //     root: __dirname
    // });
    // const blogs = []

    // res.render('index', {
    //     title: 'Wellcome',
    //     blogs
    // });
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    // res.sendFile('views/about.html', {
    //     root: __dirname
    // });
    res.render('about', {
        title: 'About Page',
    });
})

// // redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// blog routes

app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('views/404.html', {
    //     root: __dirname
    // });
    res.render('404', {
        title: "Error 404"
    });
});
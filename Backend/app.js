const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
  origin: 'http://localhost:3000', // allow only requests from this origin
  methods: ['GET', 'POST'],      // allow only specified methods
  allowedHeaders: ['Content-Type'], // allow only specified headers
};

app.use(cors(corsOptions));



// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'posts'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes
// Get all posts
app.get('/api/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching posts:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(result);
  });
});

//handle post in posts table
//Post posts

app.post('/api/posts',(req,res)=>{
  const {id,title,description,Likes,date} = req.body

  const sql = 'insert into posts values (?,?,?,?,?)';
  db.query(sql,[id,title,description,Likes,date],(err,result)=>{
    if(err){
      console.error('Err posting err', err)
      res.status(500).json({error: "Internal server error"})
      return ;
    }
    res.status(201).json({message: "data posted successful"})
  })
})
// Like a post// Route to handle like button click
app.post('/api/posts/like', (req, res) => {
  const { postId } = req.body;
  const sql = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
  db.query(sql, [postId], (err, result) => {
    if (err) {
      console.error('Error updating likes:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Likes updated successfully' });
  });
});


// Like a post// Route to handle like button click
app.post('/api/posts/likes', (req, res) => {
  const { postId } = req.body;
  const sql = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';
  db.query(sql, [postId], (err, result) => {
    if (err) {
      console.error('Error updating likes:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Likes updated successfully' });
  });
});

//get all comments from the database 
app.get("/api/comments",(req,res)=>{
 const sql = 'select * from comments'

 db.query(sql,(err,result)=>{
  if (err){
    console.error('Error getting comments');
    res.status(500).json({err: "Internal server error"})
    return;
  }
  res.status(200).json(result)
 })
})
//post  comments into the database 
app.post('/api/comments',(req,res)=>{

  const {comment_content,id} = req.body
  const sql = 'insert into comments (comment_content ,id) values(?,?)'

  db.query(sql,[comment_content,id],(err,result)=>{
    if(err){
      console.error("post comments error")
      res.status(500).json({err: "Internal server error"})
      return;
    }
    res.status(201).json({message: "comments posted succeful"})
  })
})


//get contact messages and emails from the database 

app.get('/api/contacts',(req,res)=>{
  const sql = 'select * from contact '
  db.query(sql,(err,result)=>{
    if (err){
      console.error("post contact error")
      res.status(500).json({err: "internal serer error"})
      return ;
    }
    res.status(200).json(result)
  })
})

//get individual contact from the databases in the table of contact 
// Assuming you have already set up your Express server and MySQL connection

app.get('/api/contacts/:id', (req, res) => {
  const sql = 'SELECT * FROM contact WHERE person_id = ?';
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error fetching contact details:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

  res.status(200).json(result)
  });
});


//posts message from contact form on the frotend

app.post('/api/contacts',(req,res)=>{
  const sql = 'insert into contact (name,email,message) values (?,?,?)'

  const {name,email,message} = req.body
  db.query(sql,[name,email,message],(err,result)=>{
    if (err){
      console.error("post contact error")
      res.status(500).json({err: "internal serer error"})
      return ;
    }
    res.status(201).json(result)
  })
})


//hangle get users from database who registered

app.get('/api/users',(req,res)=>{

  const sql = 'select * from users'
  db.query(sql,(err,result)=>{
    if(err){
      console.error("failed to get users")
      res.status(500).json({err: "Internal server error"})
      return;
    }
    res.status(200).json(result);
  })
})


//hangle post users  regist

app.post('/api/users',(req,res)=>{

  const sql = 'insert into users (name,email,new_password,confirm_password) values (?,?,?,?)'
  const {name,email,new_password,confirm_password} = req.body
  db.query(sql,[name,email,new_password,confirm_password],(err, result)=>{
    if(err){
      console.error("failed to get users")
      res.status(500).json({err: "Internal server error"})
      return;
    }
    res.status(201).json({message: "data posted successful"});
  })
})

//api for login page for fortend

app.post('/api/login',(req,res)=>{

  const sql = 'select * from users where email = ? and new_password = ?'
  const {email,new_password} = req.body
  db.query(sql,[email,new_password],(err, result)=>{
    if(err){
      console.error("failed to get users")
      res.status(500).json({err: "Internal server error"})
      return;
    }
    if (!result) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    if(result){
      res.status(201).json(result)
      console.log(result);
    }
  })
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express')
const {getPosts,getPost,addPost,updatePost,editPost,deletePost,addpostpage }=require("../controllers/postsController")
const router = express.Router()
// les routes post
router.get('/',getPosts)
router.post('/add',addPost)
router.get('/addpost',addpostpage)
router.get('/getPost/:id',getPost)
router.get('/editPost/:id',editPost)
router.post('/updatePost',updatePost)
router.get('/deletePost/:id',deletePost)

module.exports=router
const pug = require('pug');
const Post=require("../models/postModel")
async function getPosts(req,res){
   //Recupérer tous les posts dans myBlogdb et envoyer index.pug au client
    let posts = await Post.find()
    res.render('index',{posts:posts})
}
async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
    let postsdetail = await Post.findById(req.params.id)
    
    res.status(200).render('post',{postsdetail});
}
async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
   let t = req.body.titre;
   let au = req.body.auteur;
   let resu = req.body.resume;
   let con = req.body.content;

   let post = new Post({ titre: ""+t,auteur:""+au, resume: ""+resu ,content:""+con})
    post.save()
    res.status(200).redirect('/posts')
}
async function editPost(req,res){
    //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
    let postsdetail = await Post.findById(req.params.id)
    res.status(200).render('addpost',{postsdetail:postsdetail});
}
async function updatePost(req,res){
    //metre à jour un post et rediriger le client vers ce post
    let t = req.body.titre
    let au = req.body.auteur
    let resu = req.body.resume
    let con = req.body.content
    let i = req.body.id
    await Post.updateOne({_id:i},{ titre: t,auteur:au, resume: resu ,content:con})
    res.status(200).redirect('getPost/'+i)
}
async function deletePost(req,res){
    //Suprimer un post et rediriger le client vers /
    await Post.deleteOne({_id:''+req.params.id})
    res.status(200).redirect('/posts');
}
async function addpostpage(req,res){
    let postsdetail = false;
    res.render('addpost',{postsdetail});
}
module.exports={getPosts,getPost,addPost,updatePost,editPost,deletePost,addpostpage}

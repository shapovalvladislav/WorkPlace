package dao;

import org.hibernate.SessionFactory;

import domain.Post;

public class PostsDAO extends GenericDAO<Post> {

    public PostsDAO(SessionFactory factory) {
        super(Post.class, factory);
    }

    public Post createPost(Post post) {
        return save(post);
    }
}

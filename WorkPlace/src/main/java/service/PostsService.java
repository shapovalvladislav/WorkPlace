package service;

import java.util.List;

import dao.DaoFactory;
import dao.PostsDAO;
import domain.Post;

public class PostsService {

    public static Post createPost(Post post) {
        PostsDAO dao = DaoFactory.getPostsDAO();
        return dao.save(post);
    }

}

export const Api = {
    BASE_URL: "http://localhost:3000/api",
    // BASE_URL: "http://192.168.1.15:3000/api",
    userLogin: "/user/login",
    userChangePassword: "/user/changePassword",
    //Read
    getAllUsers: "/user/getAllUsers",
    getAllCategorys: "/category/getAllCategorys",
    getAllArticles: "/article/getAllArticles",
    //Add
    addUser: "/create",
    addCategory: "/category/add",
    addArticle: "/article/add",
    //Update
    updateUser: "/user/update",
    updateCategory: "/category/update",
    updateArticle: "/article/update",
    //Delete
    deleteUser: "/user/delete",
    deleteCategory: "/category/delete",
    deleteArticle: "/article/delete",
}

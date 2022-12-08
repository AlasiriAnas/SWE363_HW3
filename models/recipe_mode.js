const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const getDbConnection = async () => {
    return await sqlite.open({
        filename: 'recipes_store.db3',
        driver: sqlite3.Database
    })
}

const  getAllRecipes = () =>{

    return //array of recipes from the reccipes table 

};


const getRecipeDetail = (recipe_id) => {

    return // one object that contains all the details of the recipe with the given id. 

};


const getComments = (recipe_id, comment) => {

    return // list of comments of the the given recipe id  from the comments table 

}; 


const addComments = (recipe_id, comment) => {

    //inserts in the comments table the comment given.
    return // metadata about the inserted row.   

}; 

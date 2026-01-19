import { cityBlogArray } from "../data/data.js";


//Operations REST CRUD
//INDEX
function index(req, res) {
   
};


//SHOW
function show(req, res) {
    const tagName = req.params.tag;
    
}


//STORE
function store(req, res) {
    
}


//UPDATE
function update(req, res) {

}


//MODIFY
function modify(req, res) {
   
}

//DESTROY
function destroy(req, res) {
    
}




const tagsController = {

    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default tagsController;
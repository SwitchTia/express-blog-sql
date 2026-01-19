import { cityBlogArray } from "../data/data.js";
import connection from "../data/db.js";

//Operations REST CRUD
//INDEX

function index(req, res) {
  const query = "SELECT * FROM `cities`";

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500);
      return res.json({
        message: "Internal server error",
      });
    }

    res.json({
      results: result,
    });
  });
}
// function index(req, res) {
//     const response = {

//         totalCitiesToVisit: cityBlogArray.length,

//         listOfCities: cityBlogArray,
//     }
//     res.json(response)
// };


//SHOW
function show(req, res) {
    const id = parseInt(req.params.id);

    const resp = cityBlogArray.find(city => city.id === id);

    res.json(resp)
}


//STORE
function store(req, res) {
    const newCity = req.body;

    const newId = cityBlogArray[cityBlogArray.length - 1].id + 1;

    //creating a new blog object:
    const newCityBlogToAdd = {

        id: newId,
        title: newCity.title,
        content: newCity.content,
        image: newCity.image,
        tags: newCity.tags

    }

    cityBlogArray.push(newCityBlogToAdd);

    res.status(201);

    res.json(newCityBlogToAdd);
}


//UPDATE
function update(req, res) {

    const id = parseInt(req.params.id);

    const city = cityBlogArray.find(city => city.id === id);


    if (city === undefined) {
        req.status(404)
        return res.json({
            Error: "Not found",
            Message: "Blog not found"

        })
    }
    const updates = req.body;

    if (updates.title) {
        city.title = updates.title;
    }
    if (updates.content) {
        city.content = updates.content;
    }
    if (updates.image) {
        city.image = updates.image;
    }
    if (updates.tags) {
        city.tags = updates.tags;
    }

    res.json(city);
}


//MODIFY
function modify(req, res) {
    const id = parseInt(req.params.id);

    const city = cityBlogArray.find(city => city.id === id);

    if (city === undefined) {
        req.status(404)
        return res.json({
            Error: "Not found",
            Message: "Blog not found"

        })
    }

    //missing logic

}

//DESTROY
function destroy(req, res) {
    const id = parseInt(req.params.id);


    const cityIndex = cityBlogArray.findIndex(city => city.id === id);

    const deletedCity = cityBlogArray.splice(cityIndex, 1);

    res.json("CityBlog has been removed permanently");
}




const cityController = {

    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default cityController;


// //import pizzeArray from "../data/menu.js";
// import connection from "../data/db.js";

// function index(req, res) {
//   const query = "SELECT * FROM `pizzas`";

//   connection.query(query, (err, result) => {
//     if (err) {
//       res.status(500);
//       return res.json({
//         message: "Internal server error",
//       });
//     }

//     res.json({
//       results: result,
//     });
//   });
// }

// function show(req, res) {
//   const id = req.params.id;
//   const query = "SELECT * FROM `pizzas` WHERE `pizzas`.`id` = ?";
//   connection.query(query, [id], (err, result) => {
//     if (err) {
//       res.status(500);
//       return res.json({
//         message: "Internal server error",
//       });
//     }

//     if (result.length === 0) {
//       res.status(404);
//       res.json({
//         message: "Pizza non trovata",
//       });
//     } else {
//       const pizza = result[0];
//       res.json(pizza);
//     }
//   });
// }

// function showWithDetails(req, res) {
//   const id = req.params.id;

//   const pizzaQuery = "SELECT * FROM `pizzas` WHERE `id` = ?";

//   connection.query(pizzaQuery, [id], (err, pizzaResult) => {
//     if (err) {
//       res.status(500);
//       return res.json({
//         message: "Internal server error",
//       });
//     }

//     if (pizzaResult.length === 0) {
//       res.status(404);
//       return res.json({
//         message: "Pizza non trovata",
//       });
//     } else {
//       const ingredientsQuery = `
//         SELECT ingredients.* 
//         FROM ingredients
//         INNER JOIN ingredient_pizza
//         ON ingredients.id = ingredient_pizza.ingredient_id
//         WHERE ingredient_pizza.pizza_id = ? 
//       `;

//       connection.query(ingredientsQuery, [id], (err, ingredientsResult) => {
//         if (err) {
//           res.status(500);
//           return res.json({
//             message: "Internal server error",
//           });
//         }

//         const pizza = {
//           ...pizzaResult[0],
//           ingredients: ingredientsResult,
//         };

//         res.json(pizza);
//       });
//     }
//   });
// }

// function store(req, res) {
//   const dati = req.body;

//   // Calcolo del successivo id
//   const newId = pizzeArray[pizzeArray.length - 1].id + 1;

//   const newPizza = {
//     id: newId,
//     name: dati.name,
//     image: dati.image,
//     ingredients: dati.ingredients,
//   };

//   pizzeArray.push(newPizza);

//   res.status(201);
//   res.json(newPizza);
// }

// function update(req, res) {
//   const pizza = req.pizza;

//   const dati = req.body;

//   pizza.name = dati.name;
//   pizza.image = dati.image;
//   pizza.ingredients = dati.ingredients;

//   res.json(pizza);
// }

// function modify(req, res) {
//   const id = parseInt(req.params.id);
//   res.send(`Modifica parziale di pizza ${id}`);
// }

// function destroy(req, res) {
//   const id = req.params.id;
//   const query = "DELETE FROM `pizzas` WHERE id = ?";
//   connection.query(query, [id], (err) => {
//     if (err) {
//       res.status(500);
//       return res.json({
//         message: "Internal server error",
//       });
//     }
//     res.sendStatus(204);
//   });
// }

// const controller = {
//   index,
//   show,
//   store,
//   update,
//   modify,
//   destroy,
//   showWithDetails,
// };

// export default controller;
//
const { Indian } = require('../models');

const indiandata = [

{
    "title": "Indian",
	"recipes": [
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 9,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 33,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 457.06,
			"extendedIngredients": [
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne pepper",
					"nameClean": "ground cayenne pepper",
					"original": "1 tablespoon Cayenne pepper, ground",
					"originalName": "Cayenne pepper, ground",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 6194,
					"aisle": "Canned and Jarred",
					"image": "chicken-broth.png",
					"consistency": "LIQUID",
					"name": "chicken broth",
					"nameClean": "chicken broth",
					"original": "1 1/3 cup chicken broth",
					"originalName": "chicken broth",
					"amount": 1.3333334,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.3333334,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 313.333,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 20028,
					"aisle": "Health Foods",
					"image": "couscous-cooked.jpg",
					"consistency": "SOLID",
					"name": "couscous",
					"nameClean": "couscous",
					"original": "2/3 cup couscous",
					"originalName": "couscous",
					"amount": 0.6666667,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.6666667,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 115.333,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 2064,
					"aisle": "Spices and Seasonings",
					"image": "mint.jpg",
					"consistency": "SOLID",
					"name": "mint leaves",
					"nameClean": "mint",
					"original": "10 fresh mint leaves",
					"originalName": "fresh mint leaves",
					"amount": 10.0,
					"unit": "",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 10.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 10.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala spices",
					"nameClean": "garam masala",
					"original": "4 tbsp. garam masala spices*",
					"originalName": "garam masala spices",
					"amount": 4.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "1 tsp. ground cumin",
					"originalName": "ground cumin",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10066,
					"aisle": "Meat",
					"image": "pork-loin-chops.png",
					"consistency": "SOLID",
					"name": "pork loin chops",
					"nameClean": "lean pork loin chops",
					"original": "4 6-oz. lean pork loin chops",
					"originalName": "lean pork loin chops",
					"amount": 24.0,
					"unit": "oz",
					"meta": [
						"lean"
					],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 680.389,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 9150,
					"aisle": "Produce",
					"image": "lemon.png",
					"consistency": "SOLID",
					"name": "lemon",
					"nameClean": "lemon",
					"original": "1 lemon",
					"originalName": "lemon",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "2 tablespoons olive oil",
					"originalName": "olive oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 9299,
					"aisle": "Produce",
					"image": "raisins.jpg",
					"consistency": "SOLID",
					"name": "raisins",
					"nameClean": "raisins",
					"original": "4 tsp. raisins",
					"originalName": "raisins",
					"amount": 4.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 12023,
					"aisle": "Ethnic Foods",
					"image": "sesame-seeds.png",
					"consistency": "SOLID",
					"name": "sesame seeds",
					"nameClean": "sesame seeds",
					"original": "2 tsp. sesame seeds",
					"originalName": "sesame seeds",
					"amount": 2.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1256,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "greek yogurt",
					"original": "1/2 cup Greek style yogurt",
					"originalName": "Greek style yogurt",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"greek style"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 100.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 644167,
			"title": "Garam Masala Pork Chops with Mint Yogurt and Spiced Couscous",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/6247HX8F/garam-masala-pork-chops-with-mint-yogurt-and-spiced-couscous",
			"image": "https://spoonacular.com/recipeImages/644167-556x370.jpg",
			"imageType": "jpg",
			"summary": "Garam Masala Pork Chops with Mint Yogurt and Spiced Couscous might be just the <b>Indian</b> recipe you are searching for. For <b>$4.57 per serving</b>, you get a main course that serves 4. One serving contains <b>461 calories</b>, <b>47g of protein</b>, and <b>15g of fat</b>. This recipe from Foodista requires yogurt, raisins, couscous, and lemon. 2 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. With a spoonacular <b>score of 77%</b>, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/garam-masala-lamb-chops-with-apricot-couscous-697250\">Garam Masala Lamb Chops with Apricot Couscous</a>, <a href=\"https://spoonacular.com/recipes/spiced-lamb-chops-on-sauteed-peppers-and-onions-with-garlic-and-mint-couscous-288106\">Spiced Lamb Chops on Sauteed Peppers and Onions with Garlic and Mint Couscous</a>, and <a href=\"https://spoonacular.com/recipes/garam-masala-how-to-make-punjabi-garam-masala-powder-at-home-487599\">garam masala , how to make punjabi garam masala powder at home</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [],
			"occasions": [],
			"instructions": "<ol><li>Chops:</li><li>Trim pork chops of excess fat. Rub garam masala into chops (both sides).</li><li>Place on a plate, cover and refrigerate for 6-8 hours, to allow flavors to penetrate.</li><li>Chop the mint and stir into the yogurt and refrigerate for the same period as the pork chops.</li><li>Preheat broiler. Spray broiler rack with nonstick cooking spray. Broil chops for about 5 minutes each side. Alternately, grill chops over direct heat until well marked on both sides, move to indirect heat, cover loosely in foil, and cook until internal temp reaches 145F. Remove from heat and allow to rest 3 minutes.</li><li>Serve with mint yogurt.</li><li>Note: *Garam Masala is available in specialty stores and many larger grocery stores.</li><li>Spiced Couscous:</li><li>In a medium saucepan bring the broth, raisins, olive oil, cumin, cayenne and salt to a boil. Stir in the couscous, bring back to a boil, cover and remove from the heat. Set aside for 5 minutes.</li><li>Juice the lemon and stir into the couscous with the sesame seeds.</li><li>Serve.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Chops:Trim pork chops of excess fat. Rub garam masala into chops (both sides).",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 10010062,
									"name": "pork chops",
									"localizedName": "pork chops",
									"image": "pork-chops.jpg"
								},
								{
									"id": 1012034,
									"name": "dry seasoning rub",
									"localizedName": "dry seasoning rub",
									"image": "seasoning.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Place on a plate, cover and refrigerate for 6-8 hours, to allow flavors to penetrate.Chop the mint and stir into the yogurt and refrigerate for the same period as the pork chops.Preheat broiler. Spray broiler rack with nonstick cooking spray. Broil chops for about 5 minutes each side. Alternately, grill chops over direct heat until well marked on both sides, move to indirect heat, cover loosely in foil, and cook until internal temp reaches 145F.",
							"ingredients": [
								{
									"id": 4679,
									"name": "cooking spray",
									"localizedName": "cooking spray",
									"image": "cooking-spray.png"
								},
								{
									"id": 10010062,
									"name": "pork chops",
									"localizedName": "pork chops",
									"image": "pork-chops.jpg"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 2064,
									"name": "mint",
									"localizedName": "mint",
									"image": "mint.jpg"
								}
							],
							"equipment": [
								{
									"id": 405914,
									"name": "broiler",
									"localizedName": "broiler",
									"image": "oven.jpg"
								},
								{
									"id": 404706,
									"name": "grill",
									"localizedName": "grill",
									"image": "grill.jpg"
								},
								{
									"id": 404765,
									"name": "aluminum foil",
									"localizedName": "aluminum foil",
									"image": "aluminum-foil.png"
								}
							],
							"length": {
								"number": 485,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Remove from heat and allow to rest 3 minutes.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Serve with mint yogurt.Note: *Garam Masala is available in specialty stores and many larger grocery stores.Spiced Couscous:In a medium saucepan bring the broth, raisins, olive oil, cumin, cayenne and salt to a boil. Stir in the couscous, bring back to a boil, cover and remove from the heat. Set aside for 5 minutes.Juice the lemon and stir into the couscous with the sesame seeds.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 12023,
									"name": "sesame seeds",
									"localizedName": "sesame seeds",
									"image": "sesame-seeds.png"
								},
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 20028,
									"name": "couscous",
									"localizedName": "couscous",
									"image": "couscous-cooked.jpg"
								},
								{
									"id": 2031,
									"name": "ground cayenne pepper",
									"localizedName": "ground cayenne pepper",
									"image": "chili-powder.jpg"
								},
								{
									"id": 9299,
									"name": "raisins",
									"localizedName": "raisins",
									"image": "raisins.jpg"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 1006615,
									"name": "broth",
									"localizedName": "broth",
									"image": "chicken-broth.png"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 1019016,
									"name": "juice",
									"localizedName": "juice",
									"image": "apple-juice.jpg"
								},
								{
									"id": 9150,
									"name": "lemon",
									"localizedName": "lemon",
									"image": "lemon.png"
								},
								{
									"id": 2064,
									"name": "mint",
									"localizedName": "mint",
									"image": "mint.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Serve.",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/garam-masala-pork-chops-with-mint-yogurt-and-spiced-couscous-644167"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 17,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 11,
			"healthScore": 16,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 119.98,
			"extendedIngredients": [
				{
					"id": 1005091,
					"aisle": "Meat",
					"image": "chicken-thigh.jpg",
					"consistency": "SOLID",
					"name": "chicken thighs",
					"nameClean": "bone in skin on chicken thighs",
					"original": "2 lbs chicken thighs, bone in and skin on",
					"originalName": "chicken thighs, bone in and skin on",
					"amount": 2.0,
					"unit": "lbs",
					"meta": [
						"bone in"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 771.107,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1005091,
					"aisle": "Meat",
					"image": "chicken-thighs.png",
					"consistency": "SOLID",
					"name": "chicken thighs",
					"nameClean": "bone in skin on chicken thighs",
					"original": "2 lbs chicken thighs, bone in and skin on",
					"originalName": "chicken thighs, bone in and skin on",
					"amount": 2.0,
					"unit": "lbs",
					"meta": [
						"bone in"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 771.107,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10511282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "yellow onion",
					"original": "½ yellow onion, diced",
					"originalName": "yellow onion, diced",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"diced",
						"yellow"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "3 garlic cloves, roughly chopped",
					"originalName": "garlic cloves, roughly chopped",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"roughly chopped"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1012049,
					"aisle": "Produce",
					"image": "thyme.jpg",
					"consistency": "SOLID",
					"name": "thyme",
					"nameClean": "fresh thyme",
					"original": "1 Tsp. fresh thyme",
					"originalName": "fresh thyme",
					"amount": 1.0,
					"unit": "Tsp",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "scotch-bonnet-chile.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet pepper sauce",
					"nameClean": "habanero chili",
					"original": "1 Tsp. scotch bonnet pepper sauce",
					"originalName": "scotch bonnet pepper sauce",
					"amount": 1.0,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "habanero-pepper.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet pepper sauce",
					"nameClean": "habanero chili",
					"original": "1 Tsp. scotch bonnet pepper sauce",
					"originalName": "scotch bonnet pepper sauce",
					"amount": 1.0,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2021,
					"aisle": "Spices and Seasonings",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "powdered ginger",
					"nameClean": "ginger powder",
					"original": "¼ Tsp. powdered ginger",
					"originalName": "powdered ginger",
					"amount": 0.25,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "¼ tsp. curry powder",
					"originalName": "curry powder",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 4047,
					"aisle": "Baking",
					"image": "oil-coconut.jpg",
					"consistency": "LIQUID",
					"name": "coconut oil",
					"nameClean": "coconut oil",
					"original": "1 Tsp. coconut oil",
					"originalName": "coconut oil",
					"amount": 1.0,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1 Tsp. cilantro, finely chopped",
					"originalName": "cilantro, finely chopped",
					"amount": 1.0,
					"unit": "Tsp",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallion",
					"nameClean": "spring onions",
					"original": "1 scallion",
					"originalName": "scallion",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "1 Tbsp. vegetable oil",
					"originalName": "vegetable oil",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10511282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "yellow onion",
					"original": "½ yellow onion, sliced",
					"originalName": "yellow onion, sliced",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"yellow",
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "3 garlic cloves, minced",
					"originalName": "garlic cloves, minced",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "1 ½ Tbsp. curry powder",
					"originalName": "curry powder",
					"amount": 1.5,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10293663,
					"aisle": "Ethnic Foods",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "amchar masala",
					"nameClean": "amchar masala",
					"original": "1 Tsp. amchar masala",
					"originalName": "amchar masala",
					"amount": 1.0,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin",
					"nameClean": "cumin",
					"original": "½ Tsp. cumin",
					"originalName": "cumin",
					"amount": 0.5,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "½ Tsp. salt",
					"originalName": "salt",
					"amount": 0.5,
					"unit": "Tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1 cup of water",
					"originalName": "water",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11352,
					"aisle": "Produce",
					"image": "potatoes-yukon-gold.png",
					"consistency": "SOLID",
					"name": "potatoes",
					"nameClean": "potato",
					"original": "2 potatoes, cut into large cubes",
					"originalName": "potatoes, cut into large cubes",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"cut into large cubes"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 663824,
			"title": "Trinidadian Chicken Potato Curry",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/DLRB38NQ/trinidadian-chicken-potato-curry",
			"image": "https://spoonacular.com/recipeImages/663824-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you have about <b>45 minutes</b> to spend in the kitchen, Trinidadian Chicken Potato Curry might be an excellent <b>gluten free, dairy free, and whole 30</b> recipe to try. This recipe makes 4 servings with <b>574 calories</b>, <b>35g of protein</b>, and <b>37g of fat</b> each. For <b>$1.2 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 11 fans. A few people really liked this main course. A mixture of chicken thighs, salt, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe is typical of Indian cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 65%</b>. This score is pretty good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/toms-trinidadian-chicken-curry-17227\">Tom’s Trinidadian Chicken Curry</a>, <a href=\"https://spoonacular.com/recipes/trinidadian-chicken-curry-with-coconut-grits-collard-greens-1230781\">Trinidadian Chicken Curry with Coconut Grits & Collard Greens</a>, and <a href=\"https://spoonacular.com/recipes/trinidadian-chicken-curry-with-coconut-grits-collard-greens-1231161\">Trinidadian Chicken Curry with Coconut Grits & Collard Greens</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"whole 30",
				"ketogenic"
			],
			"occasions": [],
			"instructions": "Wash and pat dry chicken thighs. In a sealable container, combine all marinade ingredients. Toss chicken in marinade, cover and refrigerate for at least 2 hours.\nIn a Dutch oven, heat vegetable oil over medium high heat. Add onions and saut until tender. Add garlic and continue to saut until fragrant.\nSprinkle onions and garlic with curry powder and stir to evenly coat. Add 1 tablespoon of water and cook for one minute, stirring constantly.\nAdd chicken and marinade. Saut until lightly browned, about 5 minutes.\nIf you want a thick curry add potatoes now, otherwise set aside.\nSprinkle chicken with amchar masala, cumin and salt. Toss to coat. Pour in one cup of water and bring to a boil.\nReduce heat, cover pot and simmer for 20 minutes. If you reserved the potatoes for a thinner curry, add them to the pot after twenty minutes.\nContinue to simmer for an additional twenty minutes until chicken reaches an internal temperature of 165 F and potatoes are cooked through.\nServe warm with roti or rice.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Wash and pat dry chicken thighs. In a sealable container, combine all marinade ingredients. Toss chicken in marinade, cover and refrigerate for at least 2 hours.",
							"ingredients": [
								{
									"id": 5091,
									"name": "chicken thighs",
									"localizedName": "chicken thighs",
									"image": "chicken-thigh.jpg"
								},
								{
									"id": 0,
									"name": "marinade",
									"localizedName": "marinade",
									"image": "seasoning.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 120,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "In a Dutch oven, heat vegetable oil over medium high heat.",
							"ingredients": [
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404667,
									"name": "dutch oven",
									"localizedName": "dutch oven",
									"image": "dutch-oven.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Add onions and saut until tender.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add garlic and continue to saut until fragrant.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Sprinkle onions and garlic with curry powder and stir to evenly coat.",
							"ingredients": [
								{
									"id": 2015,
									"name": "curry powder",
									"localizedName": "curry powder",
									"image": "curry-powder.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Add 1 tablespoon of water and cook for one minute, stirring constantly.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 1,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Add chicken and marinade. Saut until lightly browned, about 5 minutes.",
							"ingredients": [
								{
									"id": 0,
									"name": "marinade",
									"localizedName": "marinade",
									"image": "seasoning.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 8,
							"step": "If you want a thick curry add potatoes now, otherwise set aside.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Sprinkle chicken with amchar masala, cumin and salt. Toss to coat.",
							"ingredients": [
								{
									"id": 10293663,
									"name": "amchar masala",
									"localizedName": "amchar masala",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Pour in one cup of water and bring to a boil.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Reduce heat, cover pot and simmer for 20 minutes. If you reserved the potatoes for a thinner curry, add them to the pot after twenty minutes.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							],
							"length": {
								"number": 40,
								"unit": "minutes"
							}
						},
						{
							"number": 12,
							"step": "Continue to simmer for an additional twenty minutes until chicken reaches an internal temperature of 165 F and potatoes are cooked through.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 20,
								"unit": "minutes"
							}
						},
						{
							"number": 13,
							"step": "Serve warm with roti or rice.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 0,
									"name": "roti",
									"localizedName": "roti",
									"image": "pita-bread.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/trinidadian-chicken-potato-curry-663824"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 2,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 32,
			"healthScore": 71,
			"creditsText": "Lisa's Vegetarian Kitchen",
			"license": "CC BY 2.5 CA",
			"sourceName": "Food and Spice",
			"pricePerServing": 94.05,
			"extendedIngredients": [
				{
					"id": 16063,
					"aisle": "Canned and Jarred",
					"image": "black-eyed-peas.jpg",
					"consistency": "SOLID",
					"name": "black-eyed peas",
					"nameClean": "blackeyed peas",
					"original": "2/3 cup dried black-eyed peas (2 cups cooked)",
					"originalName": "2/3 cup dried black-eyed peas cooked)",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"dried",
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 344.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "2 teaspoons curry powder",
					"originalName": "curry powder",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1/2 teaspoon garam masala",
					"originalName": "garam masala",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11209,
					"aisle": "Produce",
					"image": "eggplant.png",
					"consistency": "SOLID",
					"name": "globe",
					"nameClean": "eggplant",
					"original": "1 large globe or Italian eggplant",
					"originalName": "globe or Italian eggplant",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"italian"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "1/2 teaspoon ground coriander",
					"originalName": "ground coriander",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "1/2 teaspoon ground cumin",
					"originalName": "ground cumin",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002024,
					"aisle": "Spices and Seasonings",
					"image": "dry-mustard.jpg",
					"consistency": "SOLID",
					"name": "ground mustard powder",
					"nameClean": "mustard powder",
					"original": "1/2 teaspoon ground mustard powder",
					"originalName": "ground mustard powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "juice of lemon",
					"nameClean": "lemon juice",
					"original": "juice from 1 lemon (3 tablespoons)",
					"originalName": "juice from 1 lemon",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "2 teaspoons olive oil",
					"originalName": "olive oil",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chilies",
					"nameClean": "green chili pepper",
					"original": "2 green or red chilies, seeded and finely chopped",
					"originalName": "green or red chilies, seeded and finely chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green",
						"red",
						"seeded",
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1012047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "sea salt",
					"nameClean": "coarse sea salt",
					"original": "1 teaspoon sea salt, or to taste",
					"originalName": "sea salt, or to taste",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11677,
					"aisle": "Produce",
					"image": "shallots.jpg",
					"consistency": "SOLID",
					"name": "shallots",
					"nameClean": "shallot",
					"original": "2 shallots, mined",
					"originalName": "shallots, mined",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11147,
					"aisle": "Produce",
					"image": "swiss-chard.jpg",
					"consistency": "SOLID",
					"name": "swiss chard",
					"nameClean": "swiss chard",
					"original": "1 bunch Swiss chard, trimmed and chopped",
					"originalName": "Swiss chard, trimmed and chopped",
					"amount": 1.0,
					"unit": "bunch",
					"meta": [
						"trimmed",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 medium tomato, finely chopped",
					"originalName": "tomato, finely chopped",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "5 tablespoons water, or more as needed",
					"originalName": "water, or more as needed",
					"amount": 5.0,
					"unit": "tablespoons",
					"meta": [
						"as needed"
					],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				}
			],
			"id": 798400,
			"title": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "http://foodandspice.blogspot.com/2016/08/spicy-black-eyed-pea-curry-with-swiss.html",
			"image": "https://spoonacular.com/recipeImages/798400-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant could satisfy your Indian craving in around <b>45 minutes</b>. This recipe serves 6 and costs 94 cents per serving. This hor d'oeuvre has <b>129 calories</b>, <b>7g of protein</b>, and <b>2g of fat</b> per serving. It is brought to you by foodandspice.blogspot.com. If you have black-eyed peas, olive oil, globe, and a few other ingredients on hand, you can make it. This recipe is liked by 32 foodies and cooks. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/roasted-eggplant-and-swiss-chard-lasagna-1070265\">Roasted Eggplant and Swiss Chard Lasagna</a>, <a href=\"https://spoonacular.com/recipes/pumpkin-black-eyed-pea-and-coconut-curry-1065869\">Pumpkin, Black-Eyed Pea, and Coconut Curry</a>, and <a href=\"https://spoonacular.com/recipes/spicy-black-eyed-pea-relish-31042\">Spicy Black-eyed Pea Relish</a> for similar recipes.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "Rinse the black-eyed peas and soak in several inches of water for 6 hours or overnight. Drain and rinse, then transfer to a large saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 40 to 60 minutes. Take care not to overcook  the beans should be tender but not be falling apart. Drain and set aside.To prepare the eggplant, cut of the stem and bottom edge and then cut in half lengthwise. Score the flesh into diagonal 1-inch lines, then turn and score again until you have a diagonal pattern. Take care not to cut through the skin. Sprinkle with some salt and let sit for 40 minutes. Rinse and squeeze out any excess water. Brush the eggplant with some oil and transfer to a roasting pan. Bake in a preheated 400 oven until the flesh appears collapsed and is wrinkly. Remove from heat and let cool for about 10 minutes, season with a bit of salt, and remove the flesh from the eggplant. If there is too much water, drain in a strainer. Set aside.Heat the oil over medium heat in the same saucepan used to cook the black-eyed peas. When hot, toss in the shallots and chilies and saut for 2 to 3 minutes. Now add the spices and stir for another minute, until fragrant. Add the tomato, cook for another few minutes, and then add the eggplant and black-eyed peas, and cook for another few minutes, stirring often.Pour a few tablespoons of water into the pan and add handfuls of chard at a time until wilted. Add more water as necessary. Add the lemon juice and salt to taste near the end of the cooking time. Remove from heat, cover, and let sit for a few minutes before serving.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Rinse the black-eyed peas and soak in several inches of water for 6 hours or overnight.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 360,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Drain and rinse, then transfer to a large saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 40 to 60 minutes. Take care not to overcook  the beans should be tender but not be falling apart.",
							"ingredients": [
								{
									"id": 0,
									"name": "beans",
									"localizedName": "beans",
									"image": "kidney-beans.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							],
							"length": {
								"number": 40,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Drain and set aside.To prepare the eggplant, cut of the stem and bottom edge and then cut in half lengthwise. Score the flesh into diagonal 1-inch lines, then turn and score again until you have a diagonal pattern. Take care not to cut through the skin.",
							"ingredients": [
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Sprinkle with some salt and let sit for 40 minutes. Rinse and squeeze out any excess water.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 40,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Brush the eggplant with some oil and transfer to a roasting pan.",
							"ingredients": [
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404629,
									"name": "roasting pan",
									"localizedName": "roasting pan",
									"image": "roasting-pan.jpg"
								}
							]
						},
						{
							"number": 6,
							"step": "Bake in a preheated 400 oven until the flesh appears collapsed and is wrinkly.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 7,
							"step": "Remove from heat and let cool for about 10 minutes, season with a bit of salt, and remove the flesh from the eggplant. If there is too much water, drain in a strainer. Set aside.",
							"ingredients": [
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 405600,
									"name": "sieve",
									"localizedName": "sieve",
									"image": "strainer.png"
								}
							],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 8,
							"step": "Heat the oil over medium heat in the same saucepan used to cook the black-eyed peas. When hot, toss in the shallots and chilies and saut for 2 to 3 minutes. Now add the spices and stir for another minute, until fragrant.",
							"ingredients": [
								{
									"id": 11677,
									"name": "shallot",
									"localizedName": "shallot",
									"image": "shallots.jpg"
								},
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 9,
							"step": "Add the tomato, cook for another few minutes, and then add the eggplant and black-eyed peas, and cook for another few minutes, stirring often.",
							"ingredients": [
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Pour a few tablespoons of water into the pan and add handfuls of chard at a time until wilted.",
							"ingredients": [
								{
									"id": 11147,
									"name": "swiss chard",
									"localizedName": "swiss chard",
									"image": "swiss-chard.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 11,
							"step": "Add more water as necessary.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Add the lemon juice and salt to taste near the end of the cooking time.",
							"ingredients": [
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 13,
							"step": "Remove from heat, cover, and let sit for a few minutes before serving.",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/spicy-black-eyed-pea-curry-with-swiss-chard-and-roasted-eggplant-798400"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 5,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 7,
			"healthScore": 11,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 229.9,
			"extendedIngredients": [
				{
					"id": 5006,
					"aisle": "Meat",
					"image": "whole-chicken.jpg",
					"consistency": "SOLID",
					"name": "chicken",
					"nameClean": "whole chicken",
					"original": "2 pounds chicken",
					"originalName": "chicken",
					"amount": 2.0,
					"unit": "pounds",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 435.449,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 16112,
					"aisle": "Ethnic Foods",
					"image": "miso.jpg",
					"consistency": "SOLID",
					"name": "tikka tandoori paste",
					"nameClean": "miso",
					"original": "2 cups tikka tandoori paste*",
					"originalName": "tikka tandoori paste",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 550.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 2012,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "coriander leaves",
					"nameClean": "dried cilantro",
					"original": "coriander leaves",
					"originalName": "coriander leaves",
					"amount": 12.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1256,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "greek yogurt",
					"nameClean": "greek yogurt",
					"original": "1 cup greek yogurt",
					"originalName": "greek yogurt",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 200.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onions",
					"nameClean": "onion",
					"original": "Onions",
					"originalName": "Onions",
					"amount": 12.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "tomato",
					"original": "Fresh tomatoes",
					"originalName": "Fresh tomatoes",
					"amount": 12.0,
					"unit": "servings",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 12.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 641904,
			"title": "Easy Chicken Tandoori",
			"readyInMinutes": 45,
			"servings": 12,
			"sourceUrl": "http://www.foodista.com/recipe/X8BXB6WT/easy-chicken-tandoori",
			"image": "https://spoonacular.com/recipeImages/641904-556x370.jpg",
			"imageType": "jpg",
			"summary": "Easy Chicken Tandoori is an Indian recipe that serves 12. One serving contains <b>236 calories</b>, <b>17g of protein</b>, and <b>9g of fat</b>. For <b>$2.3 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 7 would say it hit the spot. It is a good option if you're following a <b>gluten free</b> diet. It works best as a main course, and is done in roughly <b>45 minutes</b>. This recipe from Foodista requires chicken, tikka tandoori paste, onions, and tomatoes. Overall, this recipe earns a <b>solid spoonacular score of 58%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-chicken-tandoori-1377395\">Easy Chicken Tandoori</a>, <a href=\"https://spoonacular.com/recipes/aartis-easy-tandoori-chicken-288364\">Aarti's Easy Tandoori Chicken</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-tandoori-chicken-670403\">Easy Homemade Tandoori Chicken</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "<ol><li>Mix the tandoori paste and yogurt well. Marinate the chicken pieces well for about 30 minutes</li><li>Place the chicken pieces along with the marinate into a baking pan and bake until golden brown and then turn over  until chicken is done. Keep turning the chicken pieces a few times while baking. </li><li>Serve with in a bed of rice. Then lay the chicken fillets on the rice and put a bit of greek yogurt</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Mix the tandoori paste and yogurt well. Marinate the chicken pieces well for about 30 minutes",
							"ingredients": [
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Place the chicken pieces along with the marinate into a baking pan and bake until golden brown and then turn over  until chicken is done. Keep turning the chicken pieces a few times while baking.",
							"ingredients": [
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [
								{
									"id": 404646,
									"name": "baking pan",
									"localizedName": "baking pan",
									"image": "roasting-pan.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Serve with in a bed of rice. Then lay the chicken fillets on the rice and put a bit of greek yogurt",
							"ingredients": [
								{
									"id": 1055062,
									"name": "boneless skinless chicken breast",
									"localizedName": "boneless skinless chicken breast",
									"image": "chicken-breasts.png"
								},
								{
									"id": 1256,
									"name": "greek yogurt",
									"localizedName": "greek yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/easy-chicken-tandoori-641904"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 5,
			"creditsText": "ranjaniskitchen",
			"license": "spoonacular's terms",
			"sourceName": "spoonacular",
			"pricePerServing": 142.38,
			"extendedIngredients": [
				{
					"id": 16053,
					"aisle": "Canned and Jarred",
					"image": "broad-beans.jpg",
					"consistency": "SOLID",
					"name": "avarakkai / broad beans",
					"nameClean": "fava beans",
					"original": "Avarakkai / Broad beans- 1cup (chopped lengthwise)",
					"originalName": "Avarakkai / Broad beans (chopped lengthwise)",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"chopped",
						"( lengthwise)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 170.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chillies nos)",
					"nameClean": "green chili pepper",
					"original": "Green chillies – 2 nos(slitted)",
					"originalName": "Green chillies – 2 nos(slitted)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2013,
					"aisle": "Spices and Seasonings",
					"image": "coriander-seeds.jpg",
					"consistency": "SOLID",
					"name": "coriander seeds",
					"nameClean": "whole coriander seeds",
					"original": "Coriander seeds – 2 tbsp",
					"originalName": "Coriander seeds – 2 tbsp",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "Cumin seeds – 1 tsp",
					"originalName": "Cumin seeds – 1 tsp",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 99002,
					"aisle": "Ethnic Foods",
					"image": "jaggery.jpg",
					"consistency": "SOLID",
					"name": "jaggery",
					"nameClean": "jaggery",
					"original": "Jaggery – 1 tbsp",
					"originalName": "Jaggery – 1 tbsp",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 9150,
					"aisle": "Produce",
					"image": "lemon.png",
					"consistency": "SOLID",
					"name": "tamarind - lemon size",
					"nameClean": "lemon",
					"original": "Tamarind – small lemon size",
					"originalName": "Tamarind – small lemon size",
					"amount": 3.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2046,
					"aisle": "Condiments",
					"image": "regular-mustard.jpg",
					"consistency": "LIQUID",
					"name": "mustard",
					"nameClean": "mustard",
					"original": "Mustard – 1 tsp",
					"originalName": "Mustard – 1 tsp",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "oil – 1 tsp",
					"originalName": "oil – 1 tsp",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "Oil – 2tbsp",
					"originalName": "Oil – 2tbsp",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper corns tsp",
					"nameClean": "black pepper",
					"original": "Pepper corns – ½ tsp",
					"originalName": "Pepper corns – ½ tsp",
					"amount": 0.5,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt – as needed",
					"originalName": "Salt – as needed",
					"amount": 3.0,
					"unit": "servings",
					"meta": [
						"as needed"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomatoes nos)",
					"nameClean": "tomato",
					"original": "Tomatoes – 2 nos(finely chopped)",
					"originalName": "Tomatoes – 2 nos(finely chopped)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 99234,
					"aisle": "Ethnic Foods",
					"image": "yellow-split-peas.jpg",
					"consistency": "SOLID",
					"name": "toor dal cup",
					"nameClean": "split pigeon peas",
					"original": "Toor dal – ½ cup",
					"originalName": "Toor dal – ½ cup",
					"amount": 0.5,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder tsp",
					"nameClean": "turmeric",
					"original": "Turmeric powder – ¼ tsp",
					"originalName": "Turmeric powder – ¼ tsp",
					"amount": 0.25,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 721185,
			"title": "avarakkai paruppu curry recipe",
			"author": "ranjaniskitchen",
			"readyInMinutes": 30,
			"servings": 3,
			"sourceUrl": "https://spoonacular.com/-1458055544821",
			"image": "https://spoonacular.com/recipeImages/721185-556x370.jpg",
			"imageType": "jpg",
			"summary": "Avarakkai paruppu curry might be a good recipe to expand your hor d'oeuvre repertoire. This recipe serves 3. One portion of this dish contains roughly <b>6g of protein</b>, <b>12g of fat</b>, and a total of <b>215 calories</b>. For <b>$1.42 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. If you have turmeric powder tsp, salt, mustard, and a few other ingredients on hand, you can make it. This recipe is typical of Indian cuisine. From preparation to the plate, this recipe takes around <b>30 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by spoonacular user <a href=\"/profile/ranjaniskitchen\">ranjaniskitchen</a>. Similar recipes are <a href=\"https://spoonacular.com/recipes/avarakkai-paruppu-curry-recipe-1235287\">avarakkai paruppu curry recipe</a>, <a href=\"https://spoonacular.com/recipes/how-to-make-avarakkai-poriyal-494841\">How to make Avarakkai Poriyal</a>, and <a href=\"https://spoonacular.com/recipes/tempeh-curry-recipe-77722\">Tempeh Curry Recipe</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "<ol> <li>Wash avarakkai(broad beans), remove the strings on both sides, and cut into medium long pieces. </li> <li>Cook in stove top or pressure cook for three whistles. Once done drain the water and keep cooked avarakkai. Keep the water to use in kuzhambhu or use the water to soak tamarind.</li> <li>Pressure cook dal and keep aside.</li> <li>Heat a pan, add tsp of oil and roast the ingredients given under “to roast and grind”. Let the tomatoes cook completely. Cool them and process it in a mixer adding enough water to fine paste.</li> <li>Heat a pan, add oil , once heated add mustards seeds, then add tamarind water. After it starts boiling, add cooked dal, jaggery, salt, turmeric powder and grinded masala.</li> <li>Allow it to cook in medium low flame for 5 minutes. Now add cooked broad beans. Let it boil for 4 minutes.</li> <li>Turn off the flame and add chopped coriander leaves.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Wash avarakkai(broad beans), remove the strings on both sides, and cut into medium long pieces.  Cook in stove top or pressure cook for three whistles. Once done drain the water and keep cooked avarakkai. Keep the water to use in kuzhambhu or use the water to soak tamarind. Pressure cook dal and keep aside.",
							"ingredients": [
								{
									"id": 16053,
									"name": "fava beans",
									"localizedName": "fava beans",
									"image": "broad-beans.jpg"
								},
								{
									"id": 1019322,
									"name": "tamarind",
									"localizedName": "tamarind",
									"image": "tamarind.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 10316069,
									"name": "lentils",
									"localizedName": "lentils",
									"image": "lentils-brown.jpg"
								}
							],
							"equipment": [
								{
									"id": 404794,
									"name": "stove",
									"localizedName": "stove",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Heat a pan, add tsp of oil and roast the ingredients given under “to roast and grind”.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Let the tomatoes cook completely. Cool them and process it in a mixer adding enough water to fine paste.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404726,
									"name": "blender",
									"localizedName": "blender",
									"image": "blender.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Heat a pan, add oil , once heated add mustards seeds, then add tamarind water. After it starts boiling, add cooked dal, jaggery, salt, turmeric powder and grinded masala. Allow it to cook in medium low flame for 5 minutes. Now add cooked broad beans.",
							"ingredients": [
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 16053,
									"name": "fava beans",
									"localizedName": "fava beans",
									"image": "broad-beans.jpg"
								},
								{
									"id": 1019322,
									"name": "tamarind",
									"localizedName": "tamarind",
									"image": "tamarind.png"
								},
								{
									"id": 99002,
									"name": "jaggery",
									"localizedName": "jaggery",
									"image": "jaggery.jpg"
								},
								{
									"id": 93818,
									"name": "seeds",
									"localizedName": "seeds",
									"image": "sunflower-seeds.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 10316069,
									"name": "lentils",
									"localizedName": "lentils",
									"image": "lentils-brown.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Let it boil for 4 minutes. Turn off the flame and add chopped coriander leaves.",
							"ingredients": [
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/avarakkai-paruppu-curry-recipe-721185"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 15,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 13,
			"healthScore": 6,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 122.74,
			"extendedIngredients": [
				{
					"id": 1034053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "extra virgin olive oil",
					"original": "2 tablespoons extra-virgin olive oil",
					"originalName": "extra-virgin olive oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"extra-virgin"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 large onion cut into pieces",
					"originalName": "onion cut into pieces",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"cut into pieces"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves minced",
					"originalName": "garlic cloves minced",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "1 1/2 teaspoons ground cumin",
					"originalName": "ground cumin",
					"amount": 1.5,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "ground turmeric",
					"nameClean": "turmeric",
					"original": "1 teaspoon ground turmeric",
					"originalName": "ground turmeric",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "1 teaspoon ground coriander",
					"originalName": "ground coriander",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 teaspoon garam masala",
					"originalName": "garam masala",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2021,
					"aisle": "Spices and Seasonings",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ground ginger",
					"nameClean": "ginger powder",
					"original": "1 pinch of ground ginger",
					"originalName": "ground ginger",
					"amount": 1.0,
					"unit": "pinch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						}
					}
				},
				{
					"id": 12118,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "coconut milk",
					"original": "1 1/4 cups coconut milk",
					"originalName": "coconut milk",
					"amount": 1.25,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 282.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11531,
					"aisle": "Canned and Jarred",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "canned diced tomatoes",
					"original": "1 cup canned chopped tomatoes",
					"originalName": "canned chopped tomatoes",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"canned",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 240.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "lemon juice",
					"nameClean": "lemon juice",
					"original": "2 teaspoons lemon juice",
					"originalName": "lemon juice",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "dark-brown-sugar.png",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 tablespoon brown sugar",
					"originalName": "brown sugar",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "light-brown-sugar.jpg",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 tablespoon brown sugar",
					"originalName": "brown sugar",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 20027,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "corn starch",
					"nameClean": "corn starch",
					"original": "1 1/2 teaspoons corn starch",
					"originalName": "corn starch",
					"amount": 1.5,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "salt",
					"originalName": "salt",
					"amount": 3.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "2 tablespoons chopped fresh cilantro",
					"originalName": "chopped fresh cilantro",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": -1,
					"aisle": "?",
					"image": null,
					"consistency": "SOLID",
					"name": "wholes",
					"nameClean": null,
					"original": "4 wholes (2 split) skinless, boneless chicken breasts cut into 1-inch/2.5cm pieces",
					"originalName": "wholes split) skinless, boneless chicken breasts cut into 1-inch/2.5cm pieces",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"split",
						"boneless",
						"skinless",
						"cut into 1-inch/2.5cm pieces"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": -1,
					"aisle": "?",
					"image": null,
					"consistency": "SOLID",
					"name": "wholes",
					"nameClean": null,
					"original": "4 wholes (2 split) skinless, boneless chicken breasts cut into 1-inch/2.5cm pieces",
					"originalName": "wholes split) skinless, boneless chicken breasts cut into 1-inch/2.5cm pieces",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"split",
						"boneless",
						"skinless",
						"cut into 1-inch/2.5cm pieces"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 640634,
			"title": "Creamy Curry Chicken With Yellow Rice",
			"readyInMinutes": 45,
			"servings": 3,
			"sourceUrl": "https://www.foodista.com/recipe/FH4M8SNQ/creamy-curry-chicken-with-yellow-rice",
			"image": "https://spoonacular.com/recipeImages/640634-556x370.jpg",
			"imageType": "jpg",
			"summary": "Creamy Curry Chicken With Yellow Rice might be just the <b>Indian</b> recipe you are searching for. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>335 calories</b>, <b>4g of protein</b>, and <b>30g of fat</b> per serving. This recipe serves 3. For <b>$1.23 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. A couple people made this recipe, and 13 would say it hit the spot. This recipe from Foodista requires olive oil, coconut milk, garam masala, and ground turmeric. It works best as a hor d'oeuvre, and is done in about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 50%</b>. This score is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/yellow-curry-chicken-with-basmati-rice-516045\">Yellow Curry Chicken with Basmati Rice</a>, <a href=\"https://spoonacular.com/recipes/one-pan-thai-coconut-yellow-curry-chicken-rice-1589921\">One Pan Thai Coconut Yellow Curry Chicken & Rice</a>, and <a href=\"https://spoonacular.com/recipes/one-pan-thai-coconut-yellow-curry-chicken-rice-video-943333\">One Pan Thai Coconut Yellow Curry Chicken & Rice + Video</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "Heat the olive oil in a large, heavy-bottom pan over medium heat. Add the chicken and cook for 6 to 8 minutes, turning frequently, until lightly browned and cooked through. Remove from the pan and set aside. Add the onion and saut for a few minutes. Add the garlic, cumin, turmeric, ground coriander, garam masala, ginger and cook for one minute.\nMix the corn starch with the coconut milk until smooth. Return the chicken to the pan and stir in the coconut milk, brown sugar and tomatoes. Cook over medium heat and stir for 1 to 2 minutes. Partially cover and cook for 15 more minutes until the sauce has reduced and thickened. Stir in the lemon juice and season with salt.\nServe the creamy chicken curry on a bed of yellow rice (I use brown rice cooked in water with salt and 1 teaspoon of turmeric) sprinkled with fresh cilantro.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Heat the olive oil in a large, heavy-bottom pan over medium heat.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add the chicken and cook for 6 to 8 minutes, turning frequently, until lightly browned and cooked through.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 6,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Remove from the pan and set aside.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Add the onion and saut for a few minutes.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add the garlic, cumin, turmeric, ground coriander, garam masala, ginger and cook for one minute.",
							"ingredients": [
								{
									"id": 1002013,
									"name": "ground coriander",
									"localizedName": "ground coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 1,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Mix the corn starch with the coconut milk until smooth. Return the chicken to the pan and stir in the coconut milk, brown sugar and tomatoes. Cook over medium heat and stir for 1 to 2 minutes. Partially cover and cook for 15 more minutes until the sauce has reduced and thickened. Stir in the lemon juice and season with salt.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 19334,
									"name": "brown sugar",
									"localizedName": "brown sugar",
									"image": "dark-brown-sugar.png"
								},
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 16,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Serve the creamy chicken curry on a bed of yellow rice (I use brown rice cooked in water with salt and 1 teaspoon of turmeric) sprinkled with fresh cilantro.",
							"ingredients": [
								{
									"id": 11165,
									"name": "fresh cilantro",
									"localizedName": "fresh cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 20040,
									"name": "brown rice",
									"localizedName": "brown rice",
									"image": "uncooked-brown-rice.png"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/creamy-curry-chicken-with-yellow-rice-640634"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 11,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 100,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 164.1,
			"extendedIngredients": [
				{
					"id": 18369,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "baking powder",
					"nameClean": "baking powder",
					"original": "1 small pinch baking powder",
					"originalName": "baking powder",
					"amount": 1.0,
					"unit": "small pinch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small pinch",
							"unitLong": "small pinch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small pinch",
							"unitLong": "small pinch"
						}
					}
				},
				{
					"id": 11819,
					"aisle": "Produce",
					"image": "red-chili.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "chili pepper",
					"original": "2 mediums hot chillies, minced",
					"originalName": "s hot chillies, minced",
					"amount": 2.0,
					"unit": "medium",
					"meta": [
						"hot",
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "medium",
							"unitLong": "mediums"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "medium",
							"unitLong": "mediums"
						}
					}
				},
				{
					"id": 1012010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "cinnamon powder",
					"nameClean": "ground cinnamon",
					"original": "1 teaspoon cinnamon powder",
					"originalName": "cinnamon powder",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "coriander",
					"nameClean": "cilantro",
					"original": "1/4 cup chopped coriander",
					"originalName": "chopped coriander",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "2 teaspoons cumin seeds",
					"originalName": "cumin seeds",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93604,
					"aisle": "Ethnic Foods",
					"image": "curry-leaves.jpg",
					"consistency": "SOLID",
					"name": "curry leaves",
					"nameClean": "curry leaves",
					"original": "6 curry leaves",
					"originalName": "curry leaves",
					"amount": 6.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 tablespoon garlic, minced",
					"originalName": "garlic, minced",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "lemon juice or",
					"nameClean": "lemon juice",
					"original": "1 tablespoon lemon juice or to taste",
					"originalName": "lemon juice or to taste",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 16080,
					"aisle": "Health Foods",
					"image": "mung-beans.png",
					"consistency": "SOLID",
					"name": "mung beans",
					"nameClean": "mung beans",
					"original": "1 1/2 cups mung beans",
					"originalName": "mung beans",
					"amount": 1.5,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 310.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2024,
					"aisle": "Spices and Seasonings",
					"image": "mustard-seeds.png",
					"consistency": "SOLID",
					"name": "mustard seeds",
					"nameClean": "yellow mustard seeds",
					"original": "1 teaspoon mustard seeds",
					"originalName": "mustard seeds",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "Sugar to taste",
					"originalName": "Sugar to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4584,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "sunflower oil",
					"nameClean": "sunflower oil",
					"original": "1 tablespoon sunflower oil",
					"originalName": "sunflower oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 medium tomato, chopped",
					"originalName": "tomato, chopped",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon turmeric",
					"originalName": "turmeric",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				}
			],
			"id": 646043,
			"title": "Gujarati Dry Mung Bean Curry",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/G6ZJW56S/gujarati-dry-mung-bean-curry",
			"image": "https://spoonacular.com/recipeImages/646043-556x370.jpg",
			"imageType": "jpg",
			"summary": "Gujarati Dry Mung Bean Curry takes about <b>45 minutes</b> from beginning to end. This main course has <b>376 calories</b>, <b>20g of protein</b>, and <b>5g of fat</b> per serving. This recipe serves 4 and costs $1.64 per serving. A mixture of baking powder, cumin seeds, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 3 fans. This recipe is typical of Indian cuisine. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is outstanding. <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1353775\">Gujarati Dry Mung Bean Curry</a>, <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1520647\">Gujarati Dry Mung Bean Curry</a>, and <a href=\"https://spoonacular.com/recipes/uncle-bills-mung-bean-curry-1283881\">Uncle Bill's Mung Bean Curry</a> are very similar to this recipe.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "<ol><li>Wash the mung beans and boil them in plenty of hot water with a pinch of baking powder until al-dente. If you have a pressure cooker thats about 6-7 whistles. Drain and set aside.</li><li>In a large pan heat the oil and add the mustard seeds (wait for them to pop) then add the cumin seeds, asafoetida, curry leaves, garlic and chillies. Saut until aromatic. Obviously dont let it burn.</li><li>Add the tomatoes, turmeric and mung beans and cook for two minutes. Be careful not to mash it up as you stir.</li><li>Add the salt, sugar, lemon juice and cinnamon powder and cook for a further two minutes.</li><li>Throw in the chopped coriander, combine and serve.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Wash the mung beans and boil them in plenty of hot water with a pinch of baking powder until al-dente. If you have a pressure cooker thats about 6-7 whistles.",
							"ingredients": [
								{
									"id": 18369,
									"name": "baking powder",
									"localizedName": "baking powder",
									"image": "white-powder.jpg"
								},
								{
									"id": 16080,
									"name": "mung beans",
									"localizedName": "mung beans",
									"image": "mung-beans.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404658,
									"name": "pressure cooker",
									"localizedName": "pressure cooker",
									"image": "pressure-cooker.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Drain and set aside.In a large pan heat the oil and add the mustard seeds (wait for them to pop) then add the cumin seeds, asafoetida, curry leaves, garlic and chillies. Saut until aromatic. Obviously dont let it burn.",
							"ingredients": [
								{
									"id": 2024,
									"name": "mustard seeds",
									"localizedName": "mustard seeds",
									"image": "mustard-seeds.png"
								},
								{
									"id": 93604,
									"name": "curry leaves",
									"localizedName": "curry leaves",
									"image": "curry-leaves.jpg"
								},
								{
									"id": 2014,
									"name": "cumin seeds",
									"localizedName": "cumin seeds",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 1032035,
									"name": "asafoetida",
									"localizedName": "asafoetida",
									"image": "curry-powder.jpg"
								},
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 0,
									"name": "pop",
									"localizedName": "soft drink",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the tomatoes, turmeric and mung beans and cook for two minutes. Be careful not to mash it up as you stir.",
							"ingredients": [
								{
									"id": 16080,
									"name": "mung beans",
									"localizedName": "mung beans",
									"image": "mung-beans.png"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add the salt, sugar, lemon juice and cinnamon powder and cook for a further two minutes.Throw in the chopped coriander, combine and serve.",
							"ingredients": [
								{
									"id": 1012010,
									"name": "ground cinnamon",
									"localizedName": "ground cinnamon",
									"image": "cinnamon.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/gujarati-dry-mung-bean-curry-646043"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 17,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 14,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 164.0,
			"extendedIngredients": [
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 teaspoon garam masala",
					"originalName": "garam masala",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1012010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "ground cinnamon",
					"nameClean": "ground cinnamon",
					"original": "1/2 teaspoon ground cinnamon",
					"originalName": "ground cinnamon",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "2 teaspoons curry powder (mild or hot)",
					"originalName": "curry powder (mild or hot)",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"hot",
						"(mild or )"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1/2 teaspoon freshly ground black pepper",
					"originalName": "freshly ground black pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"black",
						"freshly ground"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1/2 teaspoon salt",
					"originalName": "salt",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne pepper",
					"nameClean": "ground cayenne pepper",
					"original": "1/4 teaspoon cayenne pepper (or more to taste)",
					"originalName": "cayenne pepper (or more to taste)",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [
						"to taste",
						"( )"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "light-brown-sugar.jpg",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 tablespoon light brown sugar",
					"originalName": "light brown sugar",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"light"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "dark-brown-sugar.png",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 tablespoon light brown sugar",
					"originalName": "light brown sugar",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"light"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves, crushed",
					"originalName": "garlic cloves, crushed",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "2 teaspoons grated ginger",
					"originalName": "grated ginger",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"grated"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "lemon juice",
					"nameClean": "lemon juice",
					"original": "2 tablespoons lemon juice",
					"originalName": "lemon juice",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "1/4 cup olive or vegetable oil",
					"originalName": "olive or vegetable oil",
					"amount": 0.25,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 54.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 23572,
					"aisle": "Frozen",
					"image": "beef-cubes-raw.png",
					"consistency": "SOLID",
					"name": "beef",
					"nameClean": "beef",
					"original": "1 pound beef thinly sliced",
					"originalName": "beef thinly sliced",
					"amount": 1.0,
					"unit": "pound",
					"meta": [
						"thinly sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10011693,
					"aisle": "Canned and Jarred",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "canned tomatoes",
					"nameClean": "canned tomatoes",
					"original": "14 1/2 ounces can diced tomatoes",
					"originalName": "diced tomatoes",
					"amount": 14.5,
					"unit": "ounces",
					"meta": [
						"diced",
						"canned"
					],
					"measures": {
						"us": {
							"amount": 14.5,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 411.068,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "green onions",
					"nameClean": "spring onions",
					"original": "Chopped green onions",
					"originalName": "Chopped green onions",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10020445,
					"aisle": "Pasta and Rice",
					"image": "rice-white-long-grain-or-basmatii-cooked.jpg",
					"consistency": "SOLID",
					"name": "basmati rice",
					"nameClean": "cooked basmati rice",
					"original": "Steamed basmati rice",
					"originalName": "Steamed basmati rice",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"steamed"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 650606,
			"title": "Madras Beef Curry",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/ZXVD8SZL/madras-beef-curry",
			"image": "https://spoonacular.com/recipeImages/650606-556x370.jpg",
			"imageType": "jpg",
			"summary": "Madras Beef Curry is a main course that serves 4. One serving contains <b>569 calories</b>, <b>24g of protein</b>, and <b>37g of fat</b>. For <b>$1.64 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. 3 people found this recipe to be scrumptious and satisfying. A mixture of canned tomatoes, ground cinnamon, green onions, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe is typical of Indian cuisine. It is a good option if you're following a <b>gluten free and dairy free</b> diet. It is brought to you by Foodista. With a spoonacular <b>score of 46%</b>, this dish is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/madras-beef-curry-1397951\">Madras Beef Curry</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-madras-beef-curry-with-vegetables-1068311\">Slow Cooker Madras Beef Curry with Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/madras-beef-curry-with-vegetables-crock-pot-616692\">Madras Beef Curry with Vegetables {Crock Pot}</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "Slice the beef thinly (as for a stir fry) and place in a medium bowl. Add all of the other ingredients, except the tomatoes, green onions and rice and combine to coat the meat well. Let sit for 10-15 minutes to flavor the meat.\nHeat a medium pan with a lid over medium heat. Add the meat and brown well, stirring occasionally. Continue to cook over medium heat until all of the meat juices have evaporated and only oil remains in the bottom of the pan with the meat.\nAdd the tomatoes, stir to combine and lower the heat to medium low. Cover and simmer, stirring occasionally, until the meat is tender and most of the moisture from the tomatoes has been absorbed by the meat, about 30 minutes. If sauce becomes too thick before the beef is tender, add  cup water and continue to simmer with the lid on.\nTaste and adjust the seasoning adding additional salt if needed. Madras curries are often spicy. Additional cayenne pepper may be added at this point if a spicier curry is desired.\nServe over steamed basmati rice with chopped green onions on top.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Slice the beef thinly (as for a stir fry) and place in a medium bowl.",
							"ingredients": [
								{
									"id": 23572,
									"name": "beef",
									"localizedName": "beef",
									"image": "beef-cubes-raw.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Add all of the other ingredients, except the tomatoes, green onions and rice and combine to coat the meat well.",
							"ingredients": [
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Let sit for 10-15 minutes to flavor the meat.",
							"ingredients": [
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Heat a medium pan with a lid over medium heat.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Add the meat and brown well, stirring occasionally. Continue to cook over medium heat until all of the meat juices have evaporated and only oil remains in the bottom of the pan with the meat.",
							"ingredients": [
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 6,
							"step": "Add the tomatoes, stir to combine and lower the heat to medium low. Cover and simmer, stirring occasionally, until the meat is tender and most of the moisture from the tomatoes has been absorbed by the meat, about 30 minutes. If sauce becomes too thick before the beef is tender, add  cup water and continue to simmer with the lid on.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 23572,
									"name": "beef",
									"localizedName": "beef",
									"image": "beef-cubes-raw.png"
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 30,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Taste and adjust the seasoning adding additional salt if needed. Madras curries are often spicy.",
							"ingredients": [
								{
									"id": 1042027,
									"name": "seasoning",
									"localizedName": "seasoning",
									"image": "seasoning.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Additional cayenne pepper may be added at this point if a spicier curry is desired.",
							"ingredients": [
								{
									"id": 2031,
									"name": "cayenne pepper",
									"localizedName": "cayenne pepper",
									"image": "chili-powder.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Serve over steamed basmati rice with chopped green onions on top.",
							"ingredients": [
								{
									"id": 10020444,
									"name": "basmati rice",
									"localizedName": "basmati rice",
									"image": "rice-white-long-grain-or-basmatii-cooked.jpg"
								},
								{
									"id": 11291,
									"name": "green onions",
									"localizedName": "green onions",
									"image": "spring-onions.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/madras-beef-curry-650606"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 2,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 34,
			"healthScore": 10,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 165.35,
			"extendedIngredients": [
				{
					"id": 5062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breasts",
					"nameClean": "chicken breast",
					"original": "350 grams Chicken Breasts (cubed approx. in 1 inch pieces)",
					"originalName": "Chicken Breasts (cubed approx. in 1 inch pieces)",
					"amount": 350.0,
					"unit": "grams",
					"meta": [
						"cubed",
						"( approx. in 1 inch pieces)"
					],
					"measures": {
						"us": {
							"amount": 12.346,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 350.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1002010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "cinnamon stick",
					"nameClean": "cinnamon stick",
					"original": "½ inch cinnamon stick",
					"originalName": "cinnamon stick",
					"amount": 0.5,
					"unit": "inch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "inch",
							"unitLong": "inches"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "inch",
							"unitLong": "inches"
						}
					}
				},
				{
					"id": 93818,
					"aisle": "Savory Snacks",
					"image": "sunflower-seeds.jpg",
					"consistency": "SOLID",
					"name": "cardamom seeds",
					"nameClean": "seeds",
					"original": "1 black cardamom seeds (I used only half the amount of its seeds)",
					"originalName": "black cardamom seeds (I used only half the amount of its seeds)",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"black",
						"(I used only half the amount of its seeds)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 93818,
					"aisle": "Savory Snacks",
					"image": "sunflower-seeds.jpg",
					"consistency": "SOLID",
					"name": "cardamom seeds",
					"nameClean": "seeds",
					"original": "2 green cardamom seeds",
					"originalName": "green cardamom seeds",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1002011,
					"aisle": "Spices and Seasonings",
					"image": "cloves.jpg",
					"consistency": "SOLID",
					"name": "cloves",
					"nameClean": "clove",
					"original": "5 cloves",
					"originalName": "",
					"amount": 5.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "green chili pepper",
					"original": "2-3 green chillies",
					"originalName": "green chillies",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10111215,
					"aisle": "Ethnic Foods",
					"image": "garlic-paste.png",
					"consistency": "SOLID",
					"name": "garlic paste",
					"nameClean": "garlic paste",
					"original": "½ tsp garlic paste",
					"originalName": "garlic paste",
					"amount": 0.5,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93754,
					"aisle": "Ethnic Foods",
					"image": "ginger-garlic-paste.png",
					"consistency": "SOLID",
					"name": "ginger paste",
					"nameClean": "ginger paste",
					"original": "½ tsp ginger paste",
					"originalName": "ginger paste",
					"amount": 0.5,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2032,
					"aisle": "Spices and Seasonings",
					"image": "white-pepper.png",
					"consistency": "SOLID",
					"name": "pepper corns",
					"nameClean": "white pepper",
					"original": "8-10 white pepper corns",
					"originalName": "white pepper corns",
					"amount": 8.0,
					"unit": "",
					"meta": [
						"white"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2037,
					"aisle": "Gourmet",
					"image": "saffron.jpg",
					"consistency": "SOLID",
					"name": "saffron",
					"nameClean": "saffron",
					"original": "A pinch of saffron",
					"originalName": "saffron",
					"amount": 1.0,
					"unit": "pinch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						}
					}
				},
				{
					"id": 1077,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "milk.png",
					"consistency": "LIQUID",
					"name": "milk",
					"nameClean": "milk",
					"original": "2 tsp milk",
					"originalName": "milk",
					"amount": 2.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 3.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": -1,
					"aisle": "?",
					"image": null,
					"consistency": "SOLID",
					"name": "skewers",
					"nameClean": null,
					"original": "9-10 skewers",
					"originalName": "skewers",
					"amount": 9.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 9.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 9.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": -1,
					"aisle": "?",
					"image": null,
					"consistency": "SOLID",
					"name": "skewers",
					"nameClean": null,
					"original": "9-10 skewers",
					"originalName": "skewers",
					"amount": 9.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 9.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 9.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 658967,
			"title": "Saffron Chicken Tikka",
			"readyInMinutes": 45,
			"servings": 3,
			"sourceUrl": "https://www.foodista.com/recipe/GV8J2V28/saffron-chicken-tikka",
			"image": "https://spoonacular.com/recipeImages/658967-556x370.jpg",
			"imageType": "jpg",
			"summary": "Saffron Chicken Tikka could be just the <b>gluten free</b> recipe you've been looking for. This recipe serves 3. One portion of this dish contains about <b>25g of protein</b>, <b>4g of fat</b>, and a total of <b>160 calories</b>. For <b>$1.65 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 34 would say it hit the spot. It works well as a main course. It is brought to you by Foodista. This recipe is typical of Indian cuisine. A mixture of chicken breasts, salt, chillies, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/saffron-marinated-chicken-skewers-kesari-malai-tikka-198909\">Saffron-Marinated Chicken Skewers (Kesari Malai Tikka)</a>, <a href=\"https://spoonacular.com/recipes/chicken-tikka-how-to-make-chicken-tikka-in-oven-1200159\">chicken tikka , how to make chicken tikkan in oven</a>, and <a href=\"https://spoonacular.com/recipes/chicken-tikka-how-to-make-chicken-tikka-in-oven-1242313\">chicken tikka , how to make chicken tikkan in oven</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "Soak saffron in warm milk for 15 to 20 minutes.\nIn the meantime, dry roast the cinnamon stick, black cardamom seeds, green cardamom seeds, pepper corns and cloves. Pound them to a powder (not very fine).\nIn a mortar and pestle grind the green chillies to a paste. (Using a pinch of coarse salt will help)\nMix all the ingredients together and your marinade is ready.\nEnsure that you pat dry the chicken cubes.\nTransfer the chicken in a bowl\nAdd the marinade to the chicken cubes and mix it well so that all pieces are well coated.\nCover the bowl with a cling film and put it in the refrigerator.\nLeave the chicken to marinate over-night. (I marinated for almost 18 hours and the result was moist and tender chicken tikkas)\nFor Grilling:\nI grilled these tikkas in my non-stick grill pan. Using a non-stick pan helped me keep the amount of oil to minimal.\nSoak the skewers in water for at least half an hour before you intend to serve them.\nNow take the skewers and start skewering the chicken pieces on them. I leave a little space in between the chicken pieces; else they stick together and do not get cooked well. (Perhaps the reason could be pan grilling)\nKeep the skewers ready and then heat the pan (medium hot).\nYou can use an oil spray or pour a little oil using a spoon in a linear fashion across the grill pan.\nPlace the skewers over the oiled pan and grill them on medium low heat.\nIt will take approximately 45 seconds to a minute for one side to get cooked.\nThen turn around and cook the other side the same way.\nServe them hot as a starter or as a main course with Bakarkhani!! Bon apptit!!",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Soak saffron in warm milk for 15 to 20 minutes.",
							"ingredients": [
								{
									"id": 2037,
									"name": "saffron",
									"localizedName": "saffron",
									"image": "saffron.jpg"
								},
								{
									"id": 1077,
									"name": "milk",
									"localizedName": "milk",
									"image": "milk.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "In the meantime, dry roast the cinnamon stick, black cardamom seeds, green cardamom seeds, pepper corns and cloves. Pound them to a powder (not very fine).",
							"ingredients": [
								{
									"id": 0,
									"name": "cardamom seeds",
									"localizedName": "cardamom seeds",
									"image": "cardamom.jpg"
								},
								{
									"id": 1002010,
									"name": "cinnamon stick",
									"localizedName": "cinnamon stick",
									"image": "cinnamon.jpg"
								},
								{
									"id": 1002011,
									"name": "clove",
									"localizedName": "clove",
									"image": "cloves.jpg"
								},
								{
									"id": 1002030,
									"name": "pepper",
									"localizedName": "pepper",
									"image": "pepper.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "In a mortar and pestle grind the green chillies to a paste. (Using a pinch of coarse salt will help)",
							"ingredients": [
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								},
								{
									"id": 1002047,
									"name": "coarse salt",
									"localizedName": "coarse salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404751,
									"name": "mortar and pestle",
									"localizedName": "mortar and pestle",
									"image": "mortar-and-pestle.jpg"
								}
							]
						},
						{
							"number": 4,
							"step": "Mix all the ingredients together and your marinade is ready.",
							"ingredients": [
								{
									"id": 0,
									"name": "marinade",
									"localizedName": "marinade",
									"image": "seasoning.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Ensure that you pat dry the chicken cubes.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Transfer the chicken in a bowl",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 7,
							"step": "Add the marinade to the chicken cubes and mix it well so that all pieces are well coated.",
							"ingredients": [
								{
									"id": 0,
									"name": "marinade",
									"localizedName": "marinade",
									"image": "seasoning.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Cover the bowl with a cling film and put it in the refrigerator.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 9,
							"step": "Leave the chicken to marinate over-night. (I marinated for almost 18 hours and the result was moist and tender chicken tikkas)",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 1080,
								"unit": "minutes"
							}
						}
					]
				},
				{
					"name": "For Grilling",
					"steps": [
						{
							"number": 1,
							"step": "I grilled these tikkas in my non-stick grill pan. Using a non-stick pan helped me keep the amount of oil to minimal.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404648,
									"name": "grill pan",
									"localizedName": "grill pan",
									"image": "grill-pan.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Soak the skewers in water for at least half an hour before you intend to serve them.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 3065,
									"name": "skewers",
									"localizedName": "skewers",
									"image": "wooden-skewers.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Now take the skewers and start skewering the chicken pieces on them. I leave a little space in between the chicken pieces; else they stick together and do not get cooked well. (Perhaps the reason could be pan grilling)",
							"ingredients": [
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								}
							],
							"equipment": [
								{
									"id": 3065,
									"name": "skewers",
									"localizedName": "skewers",
									"image": "wooden-skewers.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Keep the skewers ready and then heat the pan (medium hot).",
							"ingredients": [],
							"equipment": [
								{
									"id": 3065,
									"name": "skewers",
									"localizedName": "skewers",
									"image": "wooden-skewers.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "You can use an oil spray or pour a little oil using a spoon in a linear fashion across the grill pan.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404648,
									"name": "grill pan",
									"localizedName": "grill pan",
									"image": "grill-pan.jpg"
								}
							]
						},
						{
							"number": 6,
							"step": "Place the skewers over the oiled pan and grill them on medium low heat.",
							"ingredients": [],
							"equipment": [
								{
									"id": 3065,
									"name": "skewers",
									"localizedName": "skewers",
									"image": "wooden-skewers.jpg"
								},
								{
									"id": 404706,
									"name": "grill",
									"localizedName": "grill",
									"image": "grill.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 7,
							"step": "It will take approximately 45 seconds to a minute for one side to get cooked.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Then turn around and cook the other side the same way.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Serve them hot as a starter or as a main course with Bakarkhani!! Bon apptit!!",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/saffron-chicken-tikka-658967"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 8,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 54,
			"healthScore": 25,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 219.1,
			"extendedIngredients": [
				{
					"id": 5062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breasts",
					"nameClean": "chicken breast",
					"original": "3 chicken breasts cut into bite size cubes",
					"originalName": "chicken breasts cut into bite size cubes",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"cut into bite size cubes"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4517,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "grape seed oil",
					"nameClean": "grape seed oil",
					"original": "4 tablespoons of vegetable oil or grape seed oil",
					"originalName": "vegetable oil or grape seed oil",
					"amount": 4.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 large onion chopped",
					"originalName": "onion chopped",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "2 cloves of garlic finely chopped",
					"originalName": "garlic finely chopped",
					"amount": 2.0,
					"unit": "cloves",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 teaspoon garam masala (spice mixture)",
					"originalName": "garam masala (spice mixture)",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"(spice mixture)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin",
					"nameClean": "cumin",
					"original": "1 teaspoon cumin",
					"originalName": "cumin",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "coriander",
					"nameClean": "cilantro",
					"original": "1 teaspoon coriander",
					"originalName": "coriander",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric",
					"nameClean": "turmeric",
					"original": "1/4 teaspoon turmeric",
					"originalName": "turmeric",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2006,
					"aisle": "Spices and Seasonings",
					"image": "cardamom.jpg",
					"consistency": "SOLID",
					"name": "cardamon",
					"nameClean": "cardamom",
					"original": "1/8 teaspoon cardamon",
					"originalName": "cardamon",
					"amount": 0.125,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.125,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.125,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "cinnamon",
					"nameClean": "cinnamon",
					"original": "1/4 teaspoon cinnamon",
					"originalName": "cinnamon",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "2 teaspoons fresh ginger, finely chopped",
					"originalName": "fresh ginger, finely chopped",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"fresh",
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne",
					"nameClean": "ground cayenne pepper",
					"original": "1/2 teaspoon cayenne",
					"originalName": "cayenne",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2028,
					"aisle": "Spices and Seasonings",
					"image": "paprika.jpg",
					"consistency": "SOLID",
					"name": "paprika",
					"nameClean": "paprika",
					"original": "1 tablespoon paprika",
					"originalName": "paprika",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11887,
					"aisle": "Pasta and Rice",
					"image": "tomato-paste.jpg",
					"consistency": "SOLID",
					"name": "tomato paste",
					"nameClean": "tomato paste",
					"original": "1 teaspoon tomato paste",
					"originalName": "tomato paste",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 tomato chopped",
					"originalName": "tomato chopped",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1/2 cup water",
					"originalName": "water",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 118.294,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1001116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "plain yogurt",
					"original": "1 small container plain yogurt (about ½ cup)",
					"originalName": "small container plain yogurt (about",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 122.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "coriander",
					"nameClean": "cilantro",
					"original": "fresh coriander for garnish",
					"originalName": "fresh coriander for garnish",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"fresh",
						"for garnish"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 641908,
			"title": "Easy Chicken Tikka Masala",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/7Q3RC88N/easy-chicken-tikka-masala",
			"summary": "Easy Chicken Tikka Masala might be a good recipe to expand your main course recipe box. One serving contains <b>371 calories</b>, <b>38g of protein</b>, and <b>20g of fat</b>. This gluten free recipe serves 4 and costs <b>$2.19 per serving</b>. 54 people were glad they tried this recipe. If you have salt, water, onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe is typical of Indian cuisine. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 84%</b>. This score is excellent. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/easy-chicken-tikka-masala-1073355\">Easy Chicken Tikka Masala</a>, <a href=\"https://spoonacular.com/recipes/easy-chicken-tikka-masala-671187\">Easy Chicken Tikka Masala</a>, and <a href=\"https://spoonacular.com/recipes/easy-chicken-tikka-masala-1554183\">Easy Chicken Tikka Masala</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "In a small bowl mix all the spices including the ginger. Set aside.\nIn a large saucepan, heat the oil .\nAdd the onions and cook until golden brown.\nAdd the garlic and continue to cook for a minute.\nStir in the spices and allow the flavours to infuse.\nStir in the tomato paste.\nAdd the chopped tomato and pour in the water. Simmer and season with salt to taste.\nAdd the chicken pieces stirring well to coat the meat with the sauce. Continue to simmer until the chicken is cooked and the sauce has thickened, about 12 minutes.\nStir in the yogurt and continue to simmer 5 minutes.\nGarnish with chopped fresh cilantro\nServe with bismati rice.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a small bowl mix all the spices including the ginger. Set aside.",
							"ingredients": [
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "In a large saucepan, heat the oil .",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the onions and cook until golden brown.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add the garlic and continue to cook for a minute.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Stir in the spices and allow the flavours to infuse.",
							"ingredients": [
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Stir in the tomato paste.",
							"ingredients": [
								{
									"id": 11887,
									"name": "tomato paste",
									"localizedName": "tomato paste",
									"image": "tomato-paste.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Add the chopped tomato and pour in the water. Simmer and season with salt to taste.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Add the chicken pieces stirring well to coat the meat with the sauce. Continue to simmer until the chicken is cooked and the sauce has thickened, about 12 minutes.",
							"ingredients": [
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 12,
								"unit": "minutes"
							}
						},
						{
							"number": 9,
							"step": "Stir in the yogurt and continue to simmer 5 minutes.",
							"ingredients": [
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 10,
							"step": "Garnish with chopped fresh cilantro",
							"ingredients": [
								{
									"id": 11165,
									"name": "fresh cilantro",
									"localizedName": "fresh cilantro",
									"image": "cilantro.png"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Serve with bismati rice.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/easy-chicken-tikka-masala-641908"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 18,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 42,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 287.83,
			"extendedIngredients": [
				{
					"id": 2004,
					"aisle": "Produce",
					"image": "bay-leaves.jpg",
					"consistency": "SOLID",
					"name": "bay leaf",
					"nameClean": "bay leaves",
					"original": "2 Bay Leaf",
					"originalName": "Bay Leaf",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 16058,
					"aisle": "Canned and Jarred",
					"image": "chickpeas.png",
					"consistency": "SOLID",
					"name": "chickpeas",
					"nameClean": "canned chickpeas",
					"original": "2 15 oz cans chickpeas",
					"originalName": "chickpeas",
					"amount": 30.0,
					"unit": "oz",
					"meta": [
						"canned"
					],
					"measures": {
						"us": {
							"amount": 30.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 850.486,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 99236,
					"aisle": "Ethnic Foods",
					"image": "bengal-gram.png",
					"consistency": "SOLID",
					"name": "chana masala powder",
					"nameClean": "chana dal",
					"original": "2 teaspoons Chana Masala Powder",
					"originalName": "Chana Masala Powder",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "coriander powder",
					"nameClean": "ground coriander",
					"original": "2 teaspoons Coriander Powder-",
					"originalName": "Coriander Powder",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "1 teaspoon Cumin Seeds",
					"originalName": "Cumin Seeds",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "2 cloves Garlic",
					"originalName": "Garlic",
					"amount": 2.0,
					"unit": "cloves",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1/2 piece Ginger-",
					"originalName": "Ginger",
					"amount": 0.5,
					"unit": "piece",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2064,
					"aisle": "Spices and Seasonings",
					"image": "mint.jpg",
					"consistency": "SOLID",
					"name": "mint leaves",
					"nameClean": "mint",
					"original": "1/2 cup Mint Leaves",
					"originalName": "Mint Leaves",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 22.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "2 tablespoons Oil-",
					"originalName": "Oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 Onion- finely chopped",
					"originalName": "Onion- finely chopped",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chili powder",
					"nameClean": "chili powder",
					"original": "1/2 teaspoon Red Chili Powder-",
					"originalName": "Red Chili Powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt- to taste",
					"originalName": "Salt- to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "tomato",
					"original": "2 Tomatoes",
					"originalName": "Tomatoes",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon Turmeric Powder-",
					"originalName": "Turmeric Powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "SOLID",
					"name": "yogurt",
					"nameClean": "yogurt",
					"original": "1 cup Yogurt-",
					"originalName": "Yogurt",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 245.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 637422,
			"title": "Chana Masala in Minty Yogurt sauce",
			"readyInMinutes": 30,
			"servings": 2,
			"sourceUrl": "http://www.foodista.com/recipe/JMMH2RM2/chana-masala-in-minty-yogurt-sauce",
			"image": "https://spoonacular.com/recipeImages/637422-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Chana Masalan in Minty Yogurt sauce can be made <b>in roughly 30 minutes</b>. For <b>$2.88 per serving</b>, you get a sauce that serves 2. Watching your figure? This gluten free and lacto ovo vegetarian recipe has <b>661 calories</b>, <b>29g of protein</b>, and <b>28g of fat</b> per serving. This recipe is liked by 3 foodies and cooks. It is brought to you by Foodista. It is a <b>reasonably priced</b> recipe for fans of Indian food. Head to the store and pick up bay leaf, ginger, coriander powder, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/chana-masala-how-to-make-south-indian-chana-masala-486717\">chana masala , how to make south indian chana masala</a>, <a href=\"https://spoonacular.com/recipes/punjabi-chana-masala-or-punjabi-chole-masala-easy-chana-masala-1353019\">punjabi chana masalan or punjabi chole masala | easy chana masala</a>, and <a href=\"https://spoonacular.com/recipes/punjabi-chana-masala-or-punjabi-chole-masala-easy-chana-masala-487951\">punjabi chana masalan or punjabi chole masala | easy chana masala</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"sauce"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "<ol><li>Blend together the tomatoes, ginger, garlic and mint leaves to a smooth paste.  No need to add water.</li><li>Heat oil in a large pan and add cumin seeds and bay leafs.  Fry for 10 seconds and add the chopped onion and saute until soft.</li><li>Add coriander powder, chana masala powder and turmeric powder and chili powder.  Fry for 2 minutes.</li><li>Add the ground tomato paste, mix well and fry until oil separates.</li><li>Add the canned or cooked chana/chick peas and salt and mix well.</li><li>Cook for 7-8 minutes.  Lower the heat to simmer and add yogurt.  Mix thoroughly.  If needed, add 1/4 cup of water.</li><li>Let it simmer for 5 minutes and remove from heat.</li><li>Serve hot with rice, roti or naan.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Blend together the tomatoes, ginger, garlic and mint leaves to a smooth paste.  No need to add water.",
							"ingredients": [
								{
									"id": 2064,
									"name": "mint",
									"localizedName": "mint",
									"image": "mint.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Heat oil in a large pan and add cumin seeds and bay leafs.  Fry for 10 seconds and add the chopped onion and saute until soft.",
							"ingredients": [
								{
									"id": 2014,
									"name": "cumin seeds",
									"localizedName": "cumin seeds",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add coriander powder, chana masala powder and turmeric powder and chili powder.  Fry for 2 minutes.",
							"ingredients": [
								{
									"id": 1002013,
									"name": "ground coriander",
									"localizedName": "ground coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add the ground tomato paste, mix well and fry until oil separates.",
							"ingredients": [
								{
									"id": 11887,
									"name": "tomato paste",
									"localizedName": "tomato paste",
									"image": "tomato-paste.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add the canned or cooked chana/chick peas and salt and mix well.Cook for 7-8 minutes.  Lower the heat to simmer and add yogurt.",
							"ingredients": [
								{
									"id": 16057,
									"name": "chickpeas",
									"localizedName": "chickpeas",
									"image": "chickpeas.png"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 8,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Mix thoroughly.  If needed, add 1/4 cup of water.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Let it simmer for 5 minutes and remove from heat.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 8,
							"step": "Serve hot with rice, roti or naan.",
							"ingredients": [
								{
									"id": 93723,
									"name": "naan",
									"localizedName": "naan",
									"image": "naan.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 0,
									"name": "roti",
									"localizedName": "roti",
									"image": "pita-bread.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/chana-masala-in-minty-yogurt-sauce-637422"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 12,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 4,
			"healthScore": 73,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 117.24,
			"extendedIngredients": [
				{
					"id": 1032009,
					"aisle": "Spices and Seasonings",
					"image": "red-pepper-flakes.jpg",
					"consistency": "SOLID",
					"name": "of chilli flakes",
					"nameClean": "red pepper flakes",
					"original": "Large pinch of dried chilli flakes",
					"originalName": "Large of dried chilli flakes",
					"amount": 1.0,
					"unit": "pinch",
					"meta": [
						"dried"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						}
					}
				},
				{
					"id": 2045,
					"aisle": "Spices and Seasonings",
					"image": "dill.jpg",
					"consistency": "SOLID",
					"name": "dill",
					"nameClean": "dill",
					"original": "1 cup fresh dill, chopped finely",
					"originalName": "fresh dill, chopped finely",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"fresh",
						"chopped",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 47.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "2 cloves of garlic, chopped finely",
					"originalName": "garlic, chopped finely",
					"amount": 2.0,
					"unit": "cloves",
					"meta": [
						"chopped",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "Olive oil",
					"originalName": "Olive oil",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11352,
					"aisle": "Produce",
					"image": "potatoes-yukon-gold.png",
					"consistency": "SOLID",
					"name": "potatoes",
					"nameClean": "potato",
					"original": "4 large potatoes, parboiled and chopped into cubes",
					"originalName": "potatoes, parboiled and chopped into cubes",
					"amount": 4.0,
					"unit": "large",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon turmeric powder",
					"originalName": "turmeric powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				}
			],
			"id": 647875,
			"title": "Indian-Style Dill and Turmeric Potato Salad",
			"readyInMinutes": 30,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/2LQW8RTQ/indian-style-dill-and-turmeric-potatoes",
			"image": "https://spoonacular.com/recipeImages/647875-556x370.jpg",
			"imageType": "jpg",
			"summary": "Indian-Style Dill and Turmeric Potato Salad might be just the <b>Indian</b> recipe you are searching for. This gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe serves 4 and costs <b>$1.17 per serving</b>. One serving contains <b>416 calories</b>, <b>8g of protein</b>, and <b>14g of fat</b>. Not a lot of people made this recipe, and 4 would say it hit the spot. It works well as an affordable side dish. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. Head to the store and pick up olive oil, turmeric powder, potatoes, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/indian-style-dill-and-turmeric-potato-salad-1364367\">Indian-Style Dill and Turmeric Potato Salad</a>, <a href=\"https://spoonacular.com/recipes/turmeric-potato-salad-906713\">Turmeric Potato Salad</a>, and <a href=\"https://spoonacular.com/recipes/potato-podimas-how-to-make-potato-podimas-south-indian-style-487619\">potato podimas , how to make potato podimas | south indian style</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"side dish"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"whole 30",
				"vegan"
			],
			"occasions": [
				"father's day",
				"4th of july",
				"summer"
			],
			"instructions": "<ol><li>Heat the olive oil in a large frying pan.</li><li>Add the garlic and chilli and heat gently until fragrant. Then add the turmeric powder. Fry together for about 30 seconds.</li><li>Add the potatoes and mix gently to coat with the turmeric. Add a about 1/4 cup of water and let the potatoes cook through. Then add some salt to taste.</li><li>Take off the heat and add the dill. Serve immediately.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Heat the olive oil in a large frying pan.",
							"ingredients": [
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add the garlic and chilli and heat gently until fragrant. Then add the turmeric powder. Fry together for about 30 seconds.",
							"ingredients": [
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Add the potatoes and mix gently to coat with the turmeric.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add a about 1/4 cup of water and let the potatoes cook through. Then add some salt to taste.Take off the heat and add the dill.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2045,
									"name": "dill",
									"localizedName": "dill",
									"image": "dill.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Serve immediately.",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/indian-style-dill-and-turmeric-potato-salad-647875"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 15,
			"creditsText": "swasthi",
			"license": "spoonacular's terms",
			"sourceName": "spoonacular",
			"pricePerServing": 128.57,
			"extendedIngredients": [
				{
					"id": 1022006,
					"aisle": "Spices and Seasonings",
					"image": "cardamom.jpg",
					"consistency": "SOLID",
					"name": "cardamoms/ elaichi",
					"nameClean": "green cardamoms",
					"original": "2 green cardamoms/ elaichi",
					"originalName": "green cardamoms/ elaichi",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10511819,
					"aisle": "Produce",
					"image": "red-chili.jpg",
					"consistency": "SOLID",
					"name": "to 5 chilies",
					"nameClean": "red chili pepper",
					"original": "3 to 5 red chilies",
					"originalName": "to 5 red chilies",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1002010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "cinnamon stick",
					"nameClean": "cinnamon stick",
					"original": "1 inch cinnamon stick",
					"originalName": "cinnamon stick",
					"amount": 1.0,
					"unit": "inch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						}
					}
				},
				{
					"id": 12104,
					"aisle": "Produce",
					"image": "coconut.jpg",
					"consistency": "SOLID",
					"name": "coconut or",
					"nameClean": "coconut",
					"original": "¼ cup coconut chopped or grated",
					"originalName": "coconut chopped or grated",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"grated",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 20.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 2013,
					"aisle": "Spices and Seasonings",
					"image": "coriander-seeds.jpg",
					"consistency": "SOLID",
					"name": "coriander seeds",
					"nameClean": "whole coriander seeds",
					"original": "2 tsp coriander seeds",
					"originalName": "coriander seeds",
					"amount": 2.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin",
					"nameClean": "cumin",
					"original": "½ tsp cumin",
					"originalName": "cumin",
					"amount": 0.5,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93604,
					"aisle": "Ethnic Foods",
					"image": "curry-leaves.jpg",
					"consistency": "SOLID",
					"name": "curry leaves",
					"nameClean": "curry leaves",
					"original": "1 sprig curry leaves",
					"originalName": "curry leaves",
					"amount": 1.0,
					"unit": "sprig",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "sprig",
							"unitLong": "sprig"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "sprig",
							"unitLong": "sprig"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "eggs",
					"nameClean": "egg",
					"original": "4 eggs boiled",
					"originalName": "eggs boiled",
					"amount": 4.0,
					"unit": "",
					"meta": [
						"boiled"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2012,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "coriander leaves",
					"nameClean": "dried cilantro",
					"original": "few coriander leaves",
					"originalName": "few coriander leaves",
					"amount": 9.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 9.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 9.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10093754,
					"aisle": "Ethnic Foods",
					"image": "ginger-garlic-paste.png",
					"consistency": "SOLID",
					"name": "ginger garlic paste",
					"nameClean": "ginger garlic paste",
					"original": "1 tsp ginger garlic paste",
					"originalName": "ginger garlic paste",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "2 to 3 tbsp oil",
					"originalName": "oil",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 large onion",
					"originalName": "onion",
					"amount": 1.0,
					"unit": "large",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "¼ tsp pepper",
					"originalName": "pepper",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2033,
					"aisle": "Baking",
					"image": "poppyseed.png",
					"consistency": "SOLID",
					"name": "poppy seeds",
					"nameClean": "poppy seeds",
					"original": "1.5 tbsp poppy seeds or 8 cashews",
					"originalName": "poppy seeds or 8 cashews",
					"amount": 1.5,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt as needed",
					"originalName": "Salt as needed",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"as needed"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "tomato",
					"original": "¾ cup cubed tomatoes",
					"originalName": "cubed tomatoes",
					"amount": 0.75,
					"unit": "cup",
					"meta": [
						"cubed"
					],
					"measures": {
						"us": {
							"amount": 0.75,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 111.75,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 769533,
			"title": "chettinad egg curry",
			"author": "swasthi",
			"readyInMinutes": 30,
			"servings": 4,
			"sourceUrl": "https://spoonacular.com/-1464237647770",
			"image": "https://spoonacular.com/recipeImages/769533-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe chettinad egg curry can be made <b>in roughly 30 minutes</b>. One portion of this dish contains approximately <b>8g of protein</b>, <b>15g of fat</b>, and a total of <b>208 calories</b>. This recipe serves 4 and costs $1.29 per serving. It is a <b>budget friendly</b> recipe for fans of Indian food. It is brought to you by spoonacular user <a href=\"/profile/swasthi\">swasthi</a>. If you have coriander leaves, pepper, cinnamon stick, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> diet. It works well as a hor d'oeuvre. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chettinad-egg-curry-1229419\">chettinad egg curry</a>, <a href=\"https://spoonacular.com/recipes/chettinad-curry-eggs-127912\">Chettinad Curry Eggs</a>, and <a href=\"https://spoonacular.com/recipes/muttai-paniyaram-chettinad-egg-paniyaram-628809\">Muttai Paniyaram – Chettinad Egg Paniyaram</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"whole 30"
			],
			"occasions": [],
			"instructions": "<p>Complete recipe at <a href=\"http://indianhealthyrecipes.com/chettinad-egg-curry-recipes/\">Swasthi's blog</a></p>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Complete recipe at Swasthi's blog",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/chettinad-egg-curry-769533"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 22,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 26,
			"healthScore": 52,
			"creditsText": "afrolems.com",
			"sourceName": "afrolems.com",
			"pricePerServing": 243.53,
			"extendedIngredients": [
				{
					"id": 12118,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "coconut milk",
					"original": "2 cups of coconut milk",
					"originalName": "coconut milk",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 452.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 20027,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "corn starch",
					"nameClean": "corn starch",
					"original": "1 tablespoon of corn starch",
					"originalName": "corn starch",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "2 tablespoons of curry powder",
					"originalName": "curry powder",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 clove of garlic (chopped)",
					"originalName": "garlic (chopped)",
					"amount": 1.0,
					"unit": "clove",
					"meta": [
						"chopped",
						"()"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						}
					}
				},
				{
					"id": 99186,
					"aisle": "Meat",
					"image": "diced-ham.jpg",
					"consistency": "SOLID",
					"name": "seasoning cubes",
					"nameClean": "diced ham",
					"original": "Seasoning cubes",
					"originalName": "Seasoning cubes",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 15050,
					"aisle": "Seafood",
					"image": "mackerel-fresh.jpg",
					"consistency": "SOLID",
					"name": "mackerel",
					"nameClean": "mackerel",
					"original": "1 medium piece of Mackerel (chopped in 4 pieces)",
					"originalName": "Mackerel (chopped in 4 pieces)",
					"amount": 1.0,
					"unit": "medium piece",
					"meta": [
						"chopped",
						"( in 4 pieces)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium piece",
							"unitLong": "medium piece"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium piece",
							"unitLong": "medium piece"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "bulb of onion",
					"nameClean": "onion",
					"original": "1/2 bulb of onion",
					"originalName": "bulb of onion",
					"amount": 0.5,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10016033,
					"aisle": "Pasta and Rice",
					"image": "kidney-beans.jpg",
					"consistency": "SOLID",
					"name": "kidney beans",
					"nameClean": "red kidney beans",
					"original": "1/2 cup of red kidney beans",
					"originalName": "red kidney beans",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 88.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 20444,
					"aisle": "Pasta and Rice",
					"image": "uncooked-white-rice.png",
					"consistency": "SOLID",
					"name": "rice",
					"nameClean": "rice",
					"original": "1 cup of Rice",
					"originalName": "Rice",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 185.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "scotch-bonnet-chile.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet peppers",
					"nameClean": "habanero chili",
					"original": "3 scotch bonnet peppers",
					"originalName": "scotch bonnet peppers",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "habanero-pepper.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet peppers",
					"nameClean": "habanero chili",
					"original": "3 scotch bonnet peppers",
					"originalName": "scotch bonnet peppers",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 716364,
			"title": "Rice and Peas with Coconut Curry Mackerel",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.afrolems.com/2014/10/31/rice-and-peas-with-coconut-curry-mackerel/",
			"image": "https://spoonacular.com/recipeImages/716364-556x370.jpg",
			"imageType": "jpg",
			"summary": "Rice and Peas with Coconut Curry Mackerel could be just the <b>gluten free and dairy free</b> recipe you've been looking for. For <b>$2.44 per serving</b>, you get a main course that serves 4. One serving contains <b>625 calories</b>, <b>31g of protein</b>, and <b>34g of fat</b>. This recipe from Afrolems has 26 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. If you have coconut milk, corn starch, garlic, and a few other ingredients on hand, you can make it. A couple people really liked this Indian dish. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/rice-and-peas-with-coconut-curry-mackerel-1585999\">Rice and Peas with Coconut Curry Mackerel</a>, <a href=\"https://spoonacular.com/recipes/coconut-chicken-curry-with-snow-peas-and-rice-1213727\">Coconut Chicken Curry with Snow Peas and Rice</a>, and <a href=\"https://spoonacular.com/recipes/black-eyed-peas-curry-with-coconut-lobia-curry-600742\">Black Eyed Peas Curry (With Coconut) (Lobia Curry)</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free"
			],
			"occasions": [],
			"instructions": "Pour 1 cup of coconut milk in a pot with 1 seasoning cube and allow to boil for a minute.Pour in your rice and peas in the boiling coconut milk and pour 2 cups of water and leave to boil till the rice and peas are soft on low heat.In a separate pot, season and bring the mackerel to boil in the rest of the coconut milk, curry powder and some water.Toss in the chopped onion, scotch bonnet peppers and garlic and allow to simmer on medium heat.Once the fish is cooked, add the corn starch to thicken the sauce and allow to simmer for 4 minutes on low heat.Serve with the rice and peas",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Pour 1 cup of coconut milk in a pot with 1 seasoning cube and allow to boil for a minute.",
							"ingredients": [
								{
									"id": 0,
									"name": "seasoning cube",
									"localizedName": "seasoning cube",
									"image": "stock-cube.jpg"
								},
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Pour in your rice and peas in the boiling coconut milk and pour 2 cups of water and leave to boil till the rice and peas are soft on low heat.In a separate pot, season and bring the mackerel to boil in the rest of the coconut milk, curry powder and some water.Toss in the chopped onion, scotch bonnet peppers and garlic and allow to simmer on medium heat.Once the fish is cooked, add the corn starch to thicken the sauce and allow to simmer for 4 minutes on low heat.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 2015,
									"name": "curry powder",
									"localizedName": "curry powder",
									"image": "curry-powder.jpg"
								},
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								},
								{
									"id": 15050,
									"name": "mackerel",
									"localizedName": "mackerel",
									"image": "mackerel-fresh.jpg"
								},
								{
									"id": 10111333,
									"name": "peppers",
									"localizedName": "peppers",
									"image": "green-pepper.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 10014052,
									"name": "scotch whiskey",
									"localizedName": "scotch whiskey",
									"image": "whiskey-bottle.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 10115261,
									"name": "fish",
									"localizedName": "fish",
									"image": "fish-fillet.jpg"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Serve with the rice and peas",
							"ingredients": [
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/rice-and-peas-with-coconut-curry-mackerel-716364"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 2,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 14,
			"healthScore": 5,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 94.87,
			"extendedIngredients": [
				{
					"id": 11209,
					"aisle": "Produce",
					"image": "eggplant.png",
					"consistency": "SOLID",
					"name": "eggplants",
					"nameClean": "eggplant",
					"original": "2 medium (800 g 1lb 12 oz) eggplants (aubergine)",
					"originalName": "(800 g 1lb 12 oz) eggplants (aubergine)",
					"amount": 2.0,
					"unit": "medium",
					"meta": [
						"(800 g 1lb 12 oz)",
						"(aubergine)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "medium",
							"unitLong": "mediums"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "medium",
							"unitLong": "mediums"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "ghee/vegetable oil",
					"nameClean": "vegetable oil",
					"original": "3 tablespoons ghee/vegetable oil",
					"originalName": "ghee/vegetable oil",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 medium onion, finely diced",
					"originalName": "onion, finely diced",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"diced",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "centimeters piece of ginger",
					"nameClean": "ginger",
					"original": "2 1/2 centimeters (1 inch) piece of fresh ginger, grated",
					"originalName": "1/2 centimeters (1 inch) piece of fresh ginger, grated",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"fresh",
						"grated",
						"(1 inch)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "6 cloves garlic, crushed",
					"originalName": "garlic, crushed",
					"amount": 6.0,
					"unit": "cloves",
					"meta": [
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 2018,
					"aisle": "Spices and Seasonings",
					"image": "fennel-seeds.jpg",
					"consistency": "SOLID",
					"name": "fennel seeds",
					"nameClean": "fennel seeds",
					"original": "1 teaspoon fennel seeds",
					"originalName": "fennel seeds",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds/ground cumin",
					"nameClean": "cumin seeds",
					"original": "1 teaspoon cumin seeds/ground cumin",
					"originalName": "cumin seeds/ground cumin",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "1 tablespoon ground coriander",
					"originalName": "ground coriander",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "ground turmeric",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon ground turmeric",
					"originalName": "ground turmeric",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "a pinch of chilli powder",
					"nameClean": "chili powder",
					"original": "1/2 teaspoon cayenne or a small pinch of chilli powder",
					"originalName": "cayenne or a small pinch of chilli powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1012047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "sea salt",
					"nameClean": "coarse sea salt",
					"original": "1 teaspoon sea salt",
					"originalName": "sea salt",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10011693,
					"aisle": "Canned and Jarred",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "canned tomatoes",
					"original": "400 grams tin (14 oz) chopped tomatoes",
					"originalName": "400 grams tin chopped tomatoes",
					"amount": 14.0,
					"unit": "oz",
					"meta": [
						"chopped",
						"canned",
						"tinned"
					],
					"measures": {
						"us": {
							"amount": 14.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 396.893,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 641958,
			"title": "Easy Eggplant Curry",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "https://www.foodista.com/recipe/FGRJH88D/easy-eggplant-curry",
			"image": "https://spoonacular.com/recipeImages/641958-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Easy Eggplant Curry can be made <b>in roughly 45 minutes</b>. One serving contains <b>139 calories</b>, <b>3g of protein</b>, and <b>8g of fat</b>. This recipe serves 6. For <b>95 cents per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. It works well as a hor d'oeuvre. It is a <b>very affordable</b> recipe for fans of Indian food. 14 people were glad they tried this recipe. Head to the store and pick up tomatoes, centimeters piece of ginger, cumin seeds/ground cumin, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> diet. Overall, this recipe earns a <b>solid spoonacular score of 51%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-eggplant-curry-1356887\">Easy Eggplant Curry</a>, <a href=\"https://spoonacular.com/recipes/easy-eggplant-curry-1378235\">Easy Eggplant Curry</a>, and <a href=\"https://spoonacular.com/recipes/easy-eggplant-curry-1353003\">Easy Eggplant Curry</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"whole 30",
				"vegan"
			],
			"occasions": [],
			"instructions": "Wash eggplants and dice into 2 cm cubes.\nHeat ghee/oil in a large frying pan over medium heat. Add the onion and cook, stirring occasionally for about 10 minutes until a deep golden brown colour. (Be patient and don't be tempted to rush this stage).\nAdd the grated ginger, crushed garlic, fennel and cumin seeds (if using, if you are using cumin powder however, add in the next stage with the other ground spices). Cook for about 2 minutes until garlic and ginger are fragrant. Add ground coriander, turmeric, cayenne/chilli powder and salt. Cook for 30 seconds. Add the diced eggplant and stir well to coat evenly with spices. Pour in the tin of chopped tomatoes, give it a big stir, then place the lid on and continue to cook over low-medium heat for about 10-15 minutes. Check and stir a few times to ensure it's not catching on the bottom. Turn temperature down a little if need be.\nWhen the sauce has thicken and the eggplant is meltingly soft, check the seasoning once more. Serve sprinkled with coriander/cilantro leaves and steamed rice. Enjoy!",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Wash eggplants and dice into 2 cm cubes.",
							"ingredients": [
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Heat ghee/oil in a large frying pan over medium heat.",
							"ingredients": [
								{
									"id": 93632,
									"name": "ghee",
									"localizedName": "ghee",
									"image": "ghee.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the onion and cook, stirring occasionally for about 10 minutes until a deep golden brown colour. (Be patient and don't be tempted to rush this stage).",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add the grated ginger, crushed garlic, fennel and cumin seeds (if using, if you are using cumin powder however, add in the next stage with the other ground spices). Cook for about 2 minutes until garlic and ginger are fragrant.",
							"ingredients": [
								{
									"id": 1012014,
									"name": "ground cumin",
									"localizedName": "ground cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 2014,
									"name": "cumin seeds",
									"localizedName": "cumin seeds",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 11957,
									"name": "fennel",
									"localizedName": "fennel",
									"image": "fennel.png"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add ground coriander, turmeric, cayenne/chilli powder and salt. Cook for 30 seconds.",
							"ingredients": [
								{
									"id": 1002013,
									"name": "ground coriander",
									"localizedName": "ground coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 2031,
									"name": "ground cayenne pepper",
									"localizedName": "ground cayenne pepper",
									"image": "chili-powder.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Add the diced eggplant and stir well to coat evenly with spices.",
							"ingredients": [
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Pour in the tin of chopped tomatoes, give it a big stir, then place the lid on and continue to cook over low-medium heat for about 10-15 minutes. Check and stir a few times to ensure it's not catching on the bottom. Turn temperature down a little if need be.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 8,
							"step": "When the sauce has thicken and the eggplant is meltingly soft, check the seasoning once more.",
							"ingredients": [
								{
									"id": 1042027,
									"name": "seasoning",
									"localizedName": "seasoning",
									"image": "seasoning.png"
								},
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Serve sprinkled with coriander/cilantro leaves and steamed rice. Enjoy!",
							"ingredients": [
								{
									"id": 11165,
									"name": "fresh cilantro",
									"localizedName": "fresh cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 10220445,
									"name": "cooked rice",
									"localizedName": "cooked rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/easy-eggplant-curry-641958"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 0,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 7,
			"healthScore": 0,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 16.52,
			"extendedIngredients": [
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "1/2 ounce Butter",
					"originalName": "Butter",
					"amount": 0.5,
					"unit": "ounce",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 14.175,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 5062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breasts",
					"nameClean": "chicken breast",
					"original": "2 Chicken Breasts, Chopped",
					"originalName": "Chicken Breasts, Chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 6194,
					"aisle": "Canned and Jarred",
					"image": "chicken-broth.png",
					"consistency": "LIQUID",
					"name": "chicken broth",
					"nameClean": "chicken broth",
					"original": "1/2 cup Chicken Broth",
					"originalName": "Chicken Broth",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 117.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 teaspoon Garam masala",
					"originalName": "Garam masala",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1/2 teaspoon Garlic, minced",
					"originalName": "Garlic, minced",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 inch piece peeled ginger",
					"originalName": "peeled ginger",
					"amount": 1.0,
					"unit": "inch",
					"meta": [
						"peeled"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						}
					}
				},
				{
					"id": 9150,
					"aisle": "Produce",
					"image": "lemon.png",
					"consistency": "SOLID",
					"name": "lemon",
					"nameClean": "lemon",
					"original": "1 large lemon",
					"originalName": "lemon",
					"amount": 1.0,
					"unit": "large",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "1 tablespoon of Oil",
					"originalName": "Oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 1001116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "plain yogurt",
					"original": "1/2 cup Plain Yogurt",
					"originalName": "Plain Yogurt",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 122.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1102047,
					"aisle": "Spices and Seasonings",
					"image": "salt-and-pepper.jpg",
					"consistency": "SOLID",
					"name": "salt and pepper",
					"nameClean": "salt and pepper",
					"original": "Salt and Pepper to Taste",
					"originalName": "Salt and Pepper to Taste",
					"amount": 48.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 48.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 48.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1056,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "sour-cream.jpg",
					"consistency": "SOLID",
					"name": "cream",
					"nameClean": "sour cream",
					"original": "1/2 cup Sour Cream",
					"originalName": "Sour Cream",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"sour"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 115.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "tomato",
					"original": "14 1/2 Oz. Can Diced Tomatoes",
					"originalName": "Diced Tomatoes",
					"amount": 14.5,
					"unit": "Oz",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 14.5,
							"unitShort": "Oz",
							"unitLong": "Ozs"
						},
						"metric": {
							"amount": 14.5,
							"unitShort": "Oz",
							"unitLong": "Ozs"
						}
					}
				}
			],
			"id": 647799,
			"title": "Indian Butter Chicken",
			"readyInMinutes": 45,
			"servings": 48,
			"sourceUrl": "http://www.foodista.com/recipe/YFDM66DG/indian-butter-chicken-mommie-cooks",
			"image": "https://spoonacular.com/recipeImages/647799-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many Indian recipes, so give Indian Butter Chicken a try. This gluten free recipe serves 48 and costs <b>17 cents per serving</b>. One portion of this dish contains about <b>2g of protein</b>, <b>1g of fat</b>, and a total of <b>24 calories</b>. This recipe from Foodista has 7 fans. If you have salt and pepper, garam masala, tomatoes, and a few other ingredients on hand, you can make it. Only a few people really liked this hor d'oeuvre. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>not so great spoonacular score of 10%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/indian-butter-chicken-989969\">Indian Butter Chicken</a>, <a href=\"https://spoonacular.com/recipes/indian-butter-chicken-1302779\">Indian Butter Chicken</a>, and <a href=\"https://spoonacular.com/recipes/indian-butter-chicken-1308207\">Indian Butter Chicken</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "<ol><li>Start out by adding the oil to your pan and heating it up on medium high heat. Add in your chopped chicken, garlic, and garam masala. Swirl it together and cook it up for about two to three minutes.</li><li>Next up you'll add in your onion and ginger. Continue cooking until the chicken is cooked through.</li><li>Now, turn your heat down a notch to medium and add in your lemon juice and butter.</li><li>Let the butter melt completely and then add in the tomatoes and broth.</li><li>Give the dish a minute or two to heat back up and then stir in the yogurt and sour cream.</li><li>Mix it all together and shake in some salt and pepper to taste.</li><li>Serve over rice.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Start out by adding the oil to your pan and heating it up on medium high heat.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add in your chopped chicken, garlic, and garam masala. Swirl it together and cook it up for about two to three minutes.Next up you'll add in your onion and ginger. Continue cooking until the chicken is cooked through.Now, turn your heat down a notch to medium and add in your lemon juice and butter.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Let the butter melt completely and then add in the tomatoes and broth.Give the dish a minute or two to heat back up and then stir in the yogurt and sour cream.",
							"ingredients": [
								{
									"id": 1056,
									"name": "sour cream",
									"localizedName": "sour cream",
									"image": "sour-cream.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 1006615,
									"name": "broth",
									"localizedName": "broth",
									"image": "chicken-broth.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Mix it all together and shake in some salt and pepper to taste.",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								},
								{
									"id": 0,
									"name": "shake",
									"localizedName": "shake",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Serve over rice.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/indian-butter-chicken-647799"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 81,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 38,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 1348.09,
			"extendedIngredients": [
				{
					"id": 99004,
					"aisle": "Seafood",
					"image": "shrimp.png",
					"consistency": "SOLID",
					"name": "trader joe's langostino tails",
					"nameClean": "langostino tails",
					"original": "12 ounces Trader Joe's frozen langostino tails",
					"originalName": "Trader Joe's frozen langostino tails",
					"amount": 12.0,
					"unit": "ounces",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 12.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 340.194,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1020,
					"aisle": "Cheese",
					"image": "fontina.jpg",
					"consistency": "SOLID",
					"name": "fontina cheese",
					"nameClean": "fontina cheese",
					"original": "4 oz fontina cheese",
					"originalName": "fontina cheese",
					"amount": 4.0,
					"unit": "oz",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 113.398,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1009,
					"aisle": "Cheese",
					"image": "cheddar-cheese.png",
					"consistency": "SOLID",
					"name": "cheddar cheese",
					"nameClean": "cheddar cheese",
					"original": "4 oz cheddar cheese",
					"originalName": "cheddar cheese",
					"amount": 4.0,
					"unit": "oz",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 113.398,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1053,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "fluid-cream.jpg",
					"consistency": "LIQUID",
					"name": "heavy cream",
					"nameClean": "cream",
					"original": "heavy cream",
					"originalName": "heavy cream",
					"amount": 1.0,
					"unit": "serving",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "2 tablespoons butter, divided",
					"originalName": "butter, divided",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"divided"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10611282,
					"aisle": "Produce",
					"image": "white-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "white onion",
					"original": "1 white onion, ½ diced, ½ thinly sliced",
					"originalName": "white onion, ½ diced, ½ thinly sliced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced",
						"white",
						"thinly sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 20081,
					"aisle": "Baking",
					"image": "flour.png",
					"consistency": "SOLID",
					"name": "flour",
					"nameClean": "wheat flour",
					"original": "flour",
					"originalName": "flour",
					"amount": 1.0,
					"unit": "serving",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 2025,
					"aisle": "Spices and Seasonings",
					"image": "ground-nutmeg.jpg",
					"consistency": "SOLID",
					"name": "nutmeg",
					"nameClean": "nutmeg",
					"original": "nutmeg",
					"originalName": "nutmeg",
					"amount": 1.0,
					"unit": "serving",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "chili curry powder",
					"nameClean": "curry powder",
					"original": "chili curry powder",
					"originalName": "chili curry powder",
					"amount": 1.0,
					"unit": "serving",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 11320420,
					"aisle": "Pasta and Rice",
					"image": "fusilli.jpg",
					"consistency": "SOLID",
					"name": "fusili pasta",
					"nameClean": "corkscrew pasta",
					"original": "2 cups uncooked fusili pasta",
					"originalName": "uncooked fusili pasta",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"uncooked"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 120.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10018079,
					"aisle": "Baking",
					"image": "panko.jpg",
					"consistency": "SOLID",
					"name": "panko bread crumbs",
					"nameClean": "panko",
					"original": "1/2 cup panko bread crumbs",
					"originalName": "panko bread crumbs",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 30.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1032,
					"aisle": "Cheese",
					"image": "parmesan.jpg",
					"consistency": "LIQUID",
					"name": "parmesan cheese",
					"nameClean": "grated parmesan cheese",
					"original": "fresh grated parmesan cheese",
					"originalName": "fresh grated parmesan cheese",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"fresh",
						"grated"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 11959,
					"aisle": "Produce",
					"image": "arugula-or-rocket-salad.jpg",
					"consistency": "SOLID",
					"name": "arugula",
					"nameClean": "arugula",
					"original": "fresh arugula",
					"originalName": "fresh arugula",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 1034053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "an evoo",
					"nameClean": "extra virgin olive oil",
					"original": "an excellent EVOO",
					"originalName": "an excellent EVOO",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"excellent"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 1012069,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vinegar-(white).jpg",
					"consistency": "LIQUID",
					"name": "balsamic vinegar",
					"nameClean": "white balsamic vinegar",
					"original": "a high quality white balsamic vinegar",
					"originalName": "a high quality white balsamic vinegar",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"white"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 1012047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "sea salt",
					"nameClean": "coarse sea salt",
					"original": "sea salt",
					"originalName": "sea salt",
					"amount": 1.0,
					"unit": "serving",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "cracked pepper",
					"nameClean": "black pepper",
					"original": "cracked black pepper",
					"originalName": "cracked black pepper",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				},
				{
					"id": 1024053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "truffle-oil.jpg",
					"consistency": "LIQUID",
					"name": "truffle oil",
					"nameClean": "truffle oil",
					"original": "black truffle oil, for garnish",
					"originalName": "black truffle oil, for garnish",
					"amount": 1.0,
					"unit": "serving",
					"meta": [
						"black",
						"for garnish"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "serving",
							"unitLong": "serving"
						}
					}
				}
			],
			"id": 640633,
			"title": "Creamy Curry Cheese and Macaroni With Langostino Tails and Black Truffle Oil",
			"readyInMinutes": 45,
			"servings": 1,
			"sourceUrl": "https://www.foodista.com/recipe/SDJKZM8G/creamy-curry-cheese-and-macaroni-with-langostino-tails-and-black-truffle-oil",
			"image": "https://spoonacular.com/recipeImages/640633-556x370.jpg",
			"imageType": "jpg",
			"summary": "Creamy Curry Cheese and Macaroni With Langostino Tails and Black Truffle Oil is an Indian main course. Watching your figure? This pescatarian recipe has <b>2436 calories</b>, <b>138g of protein</b>, and <b>143g of fat</b> per serving. For <b>$13.48 per serving</b>, this recipe <b>covers 47%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. 3 people found this recipe to be scrumptious and satisfying. Head to the store and pick up flour, an evoo, cheddar cheese, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/bacon-and-truffle-oil-macaroni-and-cheese-527146\">Bacon and Truffle Oil Macaroni and Cheese</a>, <a href=\"https://spoonacular.com/recipes/new-york-strip-steak-with-tri-berry-relish-crispy-onion-strings-and-baked-macaroni-and-cheese-with-prosciutto-and-truffle-oil-294268\">New York Strip Steak with Tri-Berry Relish, Crispy Onion Strings and Baked Macaroni and Cheese with Prosciutto and Truffle Oil</a>, and <a href=\"https://spoonacular.com/recipes/vegan-creamy-pasta-with-butternut-and-truffle-oil-712477\">Vegan creamy pasta with butternut and truffle oil</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"side dish",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"pescatarian"
			],
			"occasions": [],
			"instructions": "Trader Joes came through: their 12 oz bag of frozen langostino tails are an excellent alternative to lobster, but more indulgent than shrimp.  Id also use crawfish tails; or Maine shrimp, since theyre so tiny and sweet, and so unlike their bigger, brinier, ubiquitous tiger cousins.  See how sweet and pink and plump they are?  I defrost them, rinse them, then drain them over a screen set over a bowl, to separate all the liquids from the meat.\nSince I only have one suitable pan (my Ikeawok), I start with my breadcrumbs, which I can set aside for use later.  I melt a tablespoon of butter of medium high heat until just turning brown\nI throw my panko breadcrumbs, about 1/2 a cup, into my hot butter, and toss in my wok\nUntil all the crumbs are uniformly toasted.  I remove them from the pan, setting them aside on some parchment paper, where I flavor them with salt and pepper, until I need them later.\nAlong with fontina cheese, I have a nice mild Wisconsin cheddar.  I shred about 4 packed ounces of each onto a plate.\nOK, I shred about 6 oz of each; Clayton is on the prowl, and he pinches when (he thinks) Im not looking.\nAlong with grated nutmeg, simple salt and pepper, and a dash of chili curry powder, these are the spice components of my sauce.  To me, the best macaroni and cheeses are the simple ones: firm pasta, flavorful cheesy sauce, and a crisp crust.  The addition of too many flavors and veggies just mucks up perfection.\nBut the addition of  1/2 a white onion, nicely minced, is a must  shallot would do nicely, too, or garlic.  In this case, we went simple\nAnd sweated and softened the minced onion (about 1/2 cup) in a tablespoon of sizzling (but not browned) melted butter.\nAfter a moment, I add a tablespoon of flour to the sizzling butter, and stir well to make a roux.\nFinally, I add my cream, and bring this to a simmer to thicken.  See how the butter-sauteed onions float to the top?  They will be tender little bursts of flavor on the tongue later in the meal.  Stir well, and thicken over medium heat.  My pasta is cooking on the back burner, and will be ready in a few minutes.\nMeanwhile, I throw my cheese into the sauce, and\nI briskly whisk over medium heat to melt and blend.\nI add my just slightly undercooked pasta to my cheese sauce, and blend well.  I then add my drained langostino tails, mixing well, and simmering until heated through.\nFinally, I spoon my sauce, seafood, and noodles into buttered 8oz ramekins.  I sprinkle a healthy portion of my breadcrumbs over the top of each dish, then place in a 350 oven to bake through for 15-20 minutes.\nFor the last five minutes, I put a cookie sheet, lined with parchment paper, and mounded with fresh shredded parmesan cheese, into the oven to make some cheesy croutons for a simple, snappy, arugula, onion, salted kumato tomato, EVOO, and white balsamic vinegar salad to serve on the side.\nRight before service, I dribble some black truffle oil, a delicious gift given to my by my close friend and superpartner, Tom, over the top of my bubbling baked crispy topped macaroni and cheese.  My salad is fresh and light and sharp, topped with a wafery salty savory parmesan cracker, the perfect compliment to my rich, fragrant, slightly hot and wonderfully spiced creamy macaroni and cheese, studded as it is with sweet, briny mouthfuls of tender langostino tails, and topped with just the right buttered toast texture.  Clayton and I dig in with abandon: our noses fill with the umame aroma of melting cheese, our mouths with the gooey heat of pasta cream, and our brains fire synapses hard-wired to supreme excitement and titilla",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Trader Joes came through: their 12 oz bag of frozen langostino tails are an excellent alternative to lobster, but more indulgent than shrimp.  Id also use crawfish tails; or Maine shrimp, since theyre so tiny and sweet, and so unlike their bigger, brinier, ubiquitous tiger cousins.  See how sweet and pink and plump they are?  I defrost them, rinse them, then drain them over a screen set over a bowl, to separate all the liquids from the meat.",
							"ingredients": [
								{
									"id": 99004,
									"name": "langostino tails",
									"localizedName": "langostino tails",
									"image": "shrimp.png"
								},
								{
									"id": 15243,
									"name": "crawfish tails",
									"localizedName": "crawfish tails",
									"image": "crayfish.jpg"
								},
								{
									"id": 15147,
									"name": "lobster",
									"localizedName": "lobster",
									"image": "lobster.png"
								},
								{
									"id": 15270,
									"name": "shrimp",
									"localizedName": "shrimp",
									"image": "shrimp.png"
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Since I only have one suitable pan (my Ikeawok), I start with my breadcrumbs, which I can set aside for use later.  I melt a tablespoon of butter of medium high heat until just turning brown",
							"ingredients": [
								{
									"id": 18079,
									"name": "breadcrumbs",
									"localizedName": "breadcrumbs",
									"image": "breadcrumbs.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "I throw my panko breadcrumbs, about 1/2 a cup, into my hot butter, and toss in my wok",
							"ingredients": [
								{
									"id": 10018079,
									"name": "panko",
									"localizedName": "panko",
									"image": "panko.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								}
							],
							"equipment": [
								{
									"id": 404666,
									"name": "wok",
									"localizedName": "wok",
									"image": "wok.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Until all the crumbs are uniformly toasted.  I remove them from the pan, setting them aside on some parchment paper, where I flavor them with salt and pepper, until I need them later.",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								}
							],
							"equipment": [
								{
									"id": 404770,
									"name": "baking paper",
									"localizedName": "baking paper",
									"image": "baking-paper.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Along with fontina cheese, I have a nice mild Wisconsin cheddar.  I shred about 4 packed ounces of each onto a plate.",
							"ingredients": [
								{
									"id": 1020,
									"name": "fontina cheese",
									"localizedName": "fontina cheese",
									"image": "fontina.jpg"
								},
								{
									"id": 1009,
									"name": "cheddar cheese",
									"localizedName": "cheddar cheese",
									"image": "cheddar-cheese.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "OK, I shred about 6 oz of each; Clayton is on the prowl, and he pinches when (he thinks) Im not looking.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Along with grated nutmeg, simple salt and pepper, and a dash of chili curry powder, these are the spice components of my sauce.  To me, the best macaroni and cheeses are the simple ones: firm pasta, flavorful cheesy sauce, and a crisp crust.  The addition of too many flavors and veggies just mucks up perfection.",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								},
								{
									"id": 2015,
									"name": "curry powder",
									"localizedName": "curry powder",
									"image": "curry-powder.jpg"
								},
								{
									"id": 20499,
									"name": "macaroni",
									"localizedName": "macaroni",
									"image": "macaroni.png"
								},
								{
									"id": 2025,
									"name": "nutmeg",
									"localizedName": "nutmeg",
									"image": "ground-nutmeg.jpg"
								},
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 0,
									"name": "crust",
									"localizedName": "crust",
									"image": ""
								},
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "But the addition of  1/2 a white onion, nicely minced, is a must  shallot would do nicely, too, or garlic.  In this case, we went simple",
							"ingredients": [
								{
									"id": 10611282,
									"name": "white onion",
									"localizedName": "white onion",
									"image": "white-onion.png"
								},
								{
									"id": 11677,
									"name": "shallot",
									"localizedName": "shallot",
									"image": "shallots.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "And sweated and softened the minced onion (about 1/2 cup) in a tablespoon of sizzling (but not browned) melted butter.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "After a moment, I add a tablespoon of flour to the sizzling butter, and stir well to make a roux.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "Finally, I add my cream, and bring this to a simmer to thicken.  See how the butter-sauteed onions float to the top?  They will be tender little bursts of flavor on the tongue later in the meal.  Stir well, and thicken over medium heat.  My pasta is cooking on the back burner, and will be ready in a few minutes.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 1053,
									"name": "cream",
									"localizedName": "cream",
									"image": "fluid-cream.jpg"
								},
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 12,
							"step": "Meanwhile, I throw my cheese into the sauce, and",
							"ingredients": [
								{
									"id": 1041009,
									"name": "cheese",
									"localizedName": "cheese",
									"image": "cheddar-cheese.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 13,
							"step": "I briskly whisk over medium heat to melt and blend.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404661,
									"name": "whisk",
									"localizedName": "whisk",
									"image": "whisk.png"
								}
							]
						},
						{
							"number": 14,
							"step": "I add my just slightly undercooked pasta to my cheese sauce, and blend well.  I then add my drained langostino tails, mixing well, and simmering until heated through.",
							"ingredients": [
								{
									"id": 99004,
									"name": "langostino tails",
									"localizedName": "langostino tails",
									"image": "shrimp.png"
								},
								{
									"id": 0,
									"name": "cheese sauce",
									"localizedName": "cheese sauce",
									"image": ""
								},
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 15,
							"step": "Finally, I spoon my sauce, seafood, and noodles into buttered 8oz ramekins.  I sprinkle a healthy portion of my breadcrumbs over the top of each dish, then place in a 350 oven to bake through for 15-20 minutes.",
							"ingredients": [
								{
									"id": 18079,
									"name": "breadcrumbs",
									"localizedName": "breadcrumbs",
									"image": "breadcrumbs.jpg"
								},
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								},
								{
									"id": 0,
									"name": "seafood",
									"localizedName": "seafood",
									"image": "shrimp.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								},
								{
									"id": 404781,
									"name": "ramekin",
									"localizedName": "ramekin",
									"image": "ramekin.jpg"
								}
							],
							"length": {
								"number": 20,
								"unit": "minutes"
							}
						},
						{
							"number": 16,
							"step": "For the last five minutes, I put a cookie sheet, lined with parchment paper, and mounded with fresh shredded parmesan cheese, into the oven to make some cheesy croutons for a simple, snappy, arugula, onion, salted kumato tomato, EVOO, and white balsamic vinegar salad to serve on the side.",
							"ingredients": [
								{
									"id": 1012069,
									"name": "white balsamic vinegar",
									"localizedName": "white balsamic vinegar",
									"image": "vinegar-(white).jpg"
								},
								{
									"id": 1033,
									"name": "parmesan",
									"localizedName": "parmesan",
									"image": "parmesan.jpg"
								},
								{
									"id": 18242,
									"name": "croutons",
									"localizedName": "croutons",
									"image": "croutons.png"
								},
								{
									"id": 11959,
									"name": "arugula",
									"localizedName": "arugula",
									"image": "arugula-or-rocket-salad.jpg"
								},
								{
									"id": 10118192,
									"name": "cookies",
									"localizedName": "cookies",
									"image": "shortbread-cookies.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 1034053,
									"name": "extra virgin olive oil",
									"localizedName": "extra virgin olive oil",
									"image": "olive-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404770,
									"name": "baking paper",
									"localizedName": "baking paper",
									"image": "baking-paper.jpg"
								},
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 17,
							"step": "Right before service, I dribble some black truffle oil, a delicious gift given to my by my close friend and superpartner, Tom, over the top of my bubbling baked crispy topped macaroni and cheese.  My salad is fresh and light and sharp, topped with a wafery salty savory parmesan cracker, the perfect compliment to my rich, fragrant, slightly hot and wonderfully spiced creamy macaroni and cheese, studded as it is with sweet, briny mouthfuls of tender langostino tails, and topped with just the right buttered toast texture.  Clayton and I dig in with abandon: our noses fill with the umame aroma of melting cheese, our mouths with the gooey heat of pasta cream, and our brains fire synapses hard-wired to supreme excitement and titilla",
							"ingredients": [
								{
									"id": 32004,
									"name": "macaroni and cheese",
									"localizedName": "macaroni and cheese",
									"image": "macaroni-and-cheese.png"
								},
								{
									"id": 99004,
									"name": "langostino tails",
									"localizedName": "langostino tails",
									"image": "shrimp.png"
								},
								{
									"id": 0,
									"name": "melting cheese",
									"localizedName": "melting cheese",
									"image": "cheddar-cheese.png"
								},
								{
									"id": 1024053,
									"name": "truffle oil",
									"localizedName": "truffle oil",
									"image": "truffle-oil.jpg"
								},
								{
									"id": 1033,
									"name": "parmesan",
									"localizedName": "parmesan",
									"image": "parmesan.jpg"
								},
								{
									"id": 18621,
									"name": "crackers",
									"localizedName": "crackers",
									"image": "crackers.jpg"
								},
								{
									"id": 1053,
									"name": "cream",
									"localizedName": "cream",
									"image": "fluid-cream.jpg"
								},
								{
									"id": 20420,
									"name": "pasta",
									"localizedName": "pasta",
									"image": "fusilli.jpg"
								},
								{
									"id": 0,
									"name": "sandwich bread",
									"localizedName": "sandwich bread",
									"image": "white-bread.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/creamy-curry-cheese-and-macaroni-with-langostino-tails-and-black-truffle-oil-640633"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 11,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 7,
			"healthScore": 5,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 143.91,
			"extendedIngredients": [
				{
					"id": 5062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breast",
					"nameClean": "chicken breast",
					"original": "250 g of Chicken Breast",
					"originalName": "Chicken Breast",
					"amount": 250.0,
					"unit": "g",
					"meta": [],
					"measures": {
						"us": {
							"amount": 8.818,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 250.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 12118,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "coconut milk",
					"original": "1 cup coconut milk",
					"originalName": "coconut milk",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 226.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "coriander powder",
					"nameClean": "ground coriander",
					"original": "1/2 teaspoon of coriander powder",
					"originalName": "coriander powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin powder",
					"nameClean": "ground cumin",
					"original": "1/2 teaspoon of cumin powder",
					"originalName": "cumin powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10111215,
					"aisle": "Ethnic Foods",
					"image": "garlic-paste.png",
					"consistency": "SOLID",
					"name": "ginger/garlic paste",
					"nameClean": "garlic paste",
					"original": "2 teaspoons of Ginger/Garlic Paste",
					"originalName": "Ginger/Garlic Paste",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93740,
					"aisle": "Gluten Free",
					"image": "almond-meal-or-almond-flour.jpg",
					"consistency": "SOLID",
					"name": "ground almond",
					"nameClean": "almond meal",
					"original": "2 teaspoons of ground almond",
					"originalName": "ground almond",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "1 tablespoon of Oil",
					"originalName": "Oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2033,
					"aisle": "Baking",
					"image": "poppyseed.png",
					"consistency": "SOLID",
					"name": "poppy seeds",
					"nameClean": "poppy seeds",
					"original": "½ teaspoon of poppy seeds",
					"originalName": "poppy seeds",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 9299,
					"aisle": "Produce",
					"image": "raisins.jpg",
					"consistency": "SOLID",
					"name": "raisins",
					"nameClean": "raisins",
					"original": "3 -4 raisins",
					"originalName": "raisins",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1 teaspoon salt",
					"originalName": "salt",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				}
			],
			"id": 652834,
			"title": "My Chicken Korma",
			"readyInMinutes": 45,
			"servings": 3,
			"sourceUrl": "http://www.foodista.com/recipe/DYMLK2QG/my-chicken-korma",
			"image": "https://spoonacular.com/recipeImages/652834-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you want to add more <b>gluten free, dairy free, whole 30, and ketogenic</b> recipes to your collection, My Chicken Korma might be a recipe you should try. This main course has <b>315 calories</b>, <b>20g of protein</b>, and <b>25g of fat</b> per serving. This recipe serves 3. For <b>$1.44 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. 7 people found this recipe to be flavorful and satisfying. Head to the store and pick up oil, ginger/garlic paste, salt, and a few other things to make it today. It is brought to you by Foodista. This recipe is typical of Indian cuisine. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 41%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-korma-how-to-make-veg-korma-487584\">vegetable korma , how to make veg korma</a>, <a href=\"https://spoonacular.com/recipes/vegetable-korma-how-to-make-veg-korma-1265641\">vegetable korma , how to make veg korma</a>, and <a href=\"https://spoonacular.com/recipes/vegetable-korma-how-to-make-veg-korma-1262709\">vegetable korma , how to make veg korma</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"whole 30",
				"ketogenic"
			],
			"occasions": [],
			"instructions": "<ol><li>Cut the chicken breasts into small pieces.</li><li>Heat Oil in a pan. Add the ginger/garlic paste to the oil and fry it for about 3 mins at a low heat. Then add cumin, coriander, almond and poppy seeds. Fry the masala for about 3-4 mins at a low heat.</li><li>Add the chicken pieces to the masala and continue to fry for another 5 mins at a low heat, stirring carefully and folding the masala from across the pan.</li><li>Add the coconut milk, stir the chicken pieces and ensure they are covered with coconut milk. Add salt to taste and the raisins.</li><li>Cover the pan and let the chicken cook with occasional stirring.</li><li>Serve with basmati rice.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Cut the chicken breasts into small pieces.",
							"ingredients": [
								{
									"id": 5062,
									"name": "chicken breast",
									"localizedName": "chicken breast",
									"image": "chicken-breasts.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Heat Oil in a pan.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the ginger/garlic paste to the oil and fry it for about 3 mins at a low heat. Then add cumin, coriander, almond and poppy seeds. Fry the masala for about 3-4 mins at a low heat.",
							"ingredients": [
								{
									"id": 10111215,
									"name": "garlic paste",
									"localizedName": "garlic paste",
									"image": "garlic-paste.png"
								},
								{
									"id": 2033,
									"name": "poppy seeds",
									"localizedName": "poppy seeds",
									"image": "poppyseed.png"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 12061,
									"name": "almonds",
									"localizedName": "almonds",
									"image": "almonds.jpg"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 7,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add the chicken pieces to the masala and continue to fry for another 5 mins at a low heat, stirring carefully and folding the masala from across the pan.",
							"ingredients": [
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add the coconut milk, stir the chicken pieces and ensure they are covered with coconut milk.",
							"ingredients": [
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								},
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Add salt to taste and the raisins.Cover the pan and let the chicken cook with occasional stirring.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 9299,
									"name": "raisins",
									"localizedName": "raisins",
									"image": "raisins.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 7,
							"step": "Serve with basmati rice.",
							"ingredients": [
								{
									"id": 10020444,
									"name": "basmati rice",
									"localizedName": "basmati rice",
									"image": "rice-white-long-grain-or-basmatii-cooked.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/my-chicken-korma-652834"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 17,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 14,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 198.07,
			"extendedIngredients": [
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry",
					"nameClean": "curry powder",
					"original": "teaspoon of curry",
					"originalName": "curry",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 99226,
					"aisle": "Spices and Seasonings",
					"image": "fresh-sage.png",
					"consistency": "SOLID",
					"name": "sage",
					"nameClean": "sage",
					"original": "small bunch of fresh sage – chopped",
					"originalName": "fresh sage – chopped",
					"amount": 1.0,
					"unit": "small bunch",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small bunch",
							"unitLong": "small bunch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small bunch",
							"unitLong": "small bunch"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic - &",
					"nameClean": "garlic",
					"original": "3 cloves garlic – crushed & chopped",
					"originalName": "garlic – crushed & chopped",
					"amount": 3.0,
					"unit": "cloves",
					"meta": [
						"crushed",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 19296,
					"aisle": "Nut butters, Jams, and Honey",
					"image": "honey.png",
					"consistency": "LIQUID",
					"name": "honey",
					"nameClean": "honey",
					"original": "3 tablespoons of honey",
					"originalName": "honey",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "juice of lemon",
					"nameClean": "lemon juice",
					"original": "juice of 1/2 lemon",
					"originalName": "juice lemon",
					"amount": 0.5,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 9206,
					"aisle": "Beverages",
					"image": "orange-juice.jpg",
					"consistency": "LIQUID",
					"name": "juice of orange",
					"nameClean": "orange juice",
					"original": "juice of 1/2 orange",
					"originalName": "juice orange",
					"amount": 0.5,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "3 tablespoons olive oil",
					"originalName": "olive oil",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "dashes of black pepper",
					"originalName": "black pepper",
					"amount": 1.0,
					"unit": "dashes",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "dashes",
							"unitLong": "dashe"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "dashes",
							"unitLong": "dashe"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric",
					"nameClean": "turmeric",
					"original": "dashes of turmeric",
					"originalName": "turmeric",
					"amount": 1.0,
					"unit": "dashes",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "dashes",
							"unitLong": "dashe"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "dashes",
							"unitLong": "dashe"
						}
					}
				},
				{
					"id": 5006,
					"aisle": "Meat",
					"image": "whole-chicken.jpg",
					"consistency": "SOLID",
					"name": "chicken",
					"nameClean": "whole chicken",
					"original": "1 whole chicken",
					"originalName": "whole chicken",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"whole"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 641110,
			"title": "Curry and Sage Roast Chicken",
			"readyInMinutes": 60,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/X2P3TBHN/curry-and-sage-chicken",
			"image": "https://spoonacular.com/recipeImages/641110-556x370.jpg",
			"imageType": "jpg",
			"summary": "Curry and Sage Roast Chicken could be just the <b>gluten free, dairy free, paleolithic, and primal</b> recipe you've been looking for. This recipe serves 4. This main course has <b>565 calories</b>, <b>36g of protein</b>, and <b>39g of fat</b> per serving. For <b>$1.98 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 2 would say it hit the spot. This recipe from Foodista requires turmeric, juice of lemon, pepper, and olive oil. This recipe is typical of Indian cuisine. From preparation to the plate, this recipe takes about <b>1 hour</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 55%</b>, which is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/curry-and-sage-roast-chicken-1358311\">Curry and Sage Roast Chicken</a>, <a href=\"https://spoonacular.com/recipes/parmesan-sage-roast-turkey-with-sage-gravy-75412\">Parmesan-Sage Roast Turkey with Sage Gravy</a>, and <a href=\"https://spoonacular.com/recipes/sage-pesto-rubbed-roast-chicken-137052\">Sage Pesto-Rubbed Roast Chicken</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"paleolithic",
				"primal"
			],
			"occasions": [],
			"instructions": "<ol><li>Preheat Oven 350 degrees:</li><li>Clean chicken inside and out and pat dry.</li><li>Combine olive oil, lemon juice, orange juice, garlic, honey, sage, curry, black pepper and turmeric in a small bowl and mix well.</li><li>Rub chicken down with this mixture and stuff some of the garlic and sage under the skin of the chicken.</li><li>Place in a baking pan and bake according to the size of your chicken.  Let the skin become golden and beautiful.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Preheat Oven 350 degrees:Clean chicken inside and out and pat dry.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Combine olive oil, lemon juice, orange juice, garlic, honey, sage, curry, black pepper and turmeric in a small bowl and mix well.Rub chicken down with this mixture and stuff some of the garlic and sage under the skin of the chicken.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 9206,
									"name": "orange juice",
									"localizedName": "orange juice",
									"image": "orange-juice.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 19296,
									"name": "honey",
									"localizedName": "honey",
									"image": "honey.png"
								},
								{
									"id": 99226,
									"name": "sage",
									"localizedName": "sage",
									"image": "fresh-sage.png"
								},
								{
									"id": 1012034,
									"name": "dry seasoning rub",
									"localizedName": "dry seasoning rub",
									"image": "seasoning.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Place in a baking pan and bake according to the size of your chicken.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [
								{
									"id": 404646,
									"name": "baking pan",
									"localizedName": "baking pan",
									"image": "roasting-pan.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 4,
							"step": "Let the skin become golden and beautiful.",
							"ingredients": [],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/curry-and-sage-roast-chicken-641110"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 0,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 106.9,
			"extendedIngredients": [
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "2 tablespoons Butter-",
					"originalName": "Butter",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "coriander powder",
					"nameClean": "ground coriander",
					"original": "Coriander powder-",
					"originalName": "Coriander powder",
					"amount": 6.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "1/2 teaspoon cumin seeds-",
					"originalName": "cumin seeds",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam",
					"nameClean": "garam masala",
					"original": "Garam",
					"originalName": "Garam",
					"amount": 6.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10093754,
					"aisle": "Ethnic Foods",
					"image": "ginger-garlic-paste.png",
					"consistency": "SOLID",
					"name": "ginger-garlic paste",
					"nameClean": "ginger garlic paste",
					"original": "1 teaspoon Ginger-garlic paste-",
					"originalName": "Ginger-garlic paste",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "green chili pepper",
					"original": "4 Green chillies-",
					"originalName": "Green chillies",
					"amount": 4.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 98963,
					"aisle": "Spices and Seasonings",
					"image": "methi.png",
					"consistency": "SOLID",
					"name": "kasuri methi",
					"nameClean": "dried fenugreek leaves",
					"original": "1 teaspoon Kasuri methi-",
					"originalName": "Kasuri methi",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1077,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "milk.png",
					"consistency": "LIQUID",
					"name": "cream/ milk",
					"nameClean": "milk",
					"original": "1/2 cup Cream/ Milk-",
					"originalName": "Cream/ Milk",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 122.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "2 tablespoons Oil-",
					"originalName": "Oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onions",
					"nameClean": "onion",
					"original": "1 Onions- medium cut into chunks",
					"originalName": "Onions- medium cut into chunks",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"cut into chunks"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 19150,
					"aisle": "Sweet Snacks",
					"image": "peanut-butter-cup.jpg",
					"consistency": "SOLID",
					"name": "palak- cups",
					"nameClean": "peanut butter cups",
					"original": "2 Palak- cups,washed",
					"originalName": "Palak- cups,washed",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"washed"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 6.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 16213,
					"aisle": "Produce",
					"image": "tofu.png",
					"consistency": "SOLID",
					"name": "tofu- a block",
					"nameClean": "tofu",
					"original": "1/2 Tofu- a block,cut into small cubes",
					"originalName": "Tofu- a block,cut into small cubes",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"cut into small cubes"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 Tomato- small chopped",
					"originalName": "Tomato- small chopped",
					"amount": 1.0,
					"unit": "small",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon Turmeric-",
					"originalName": "Turmeric",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				}
			],
			"id": 654379,
			"title": "Palak-tofu (bean curd)",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "http://www.foodista.com/recipe/BJJJDSJ6/palak-tofu-bean-curd",
			"image": "https://spoonacular.com/recipeImages/654379-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you want to add more <b>Indian</b> recipes to your recipe box, Palak-tofu (bean curd) might be a recipe you should try. For <b>$1.07 per serving</b>, you get a side dish that serves 6. One portion of this dish contains around <b>5g of protein</b>, <b>13g of fat</b>, and a total of <b>175 calories</b>. Head to the store and pick up ginger-garlic paste, chillies, oil, and a few other things to make it today. 2 people were impressed by this recipe. It is a good option if you're following a <b>gluten free</b> diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>rather bad spoonacular score of 16%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/palak-tofu-bean-curd-1357357\">Palak-tofu (bean curd)</a>, <a href=\"https://spoonacular.com/recipes/mapo-tofu-bean-curd-143648\">Mapo Tofu (Bean Curd)</a>, and <a href=\"https://spoonacular.com/recipes/mapo-tofu-bean-curd-1357343\">Mapo Tofu (Bean Curd)</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"side dish"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "<ol><li>Heat 1tbsp oil  in a pan,add the onions,saute till brown,add ginger garlic paste,saute for a min,add green chillies, chopped tomatoes and saute well.</li><li>Add the washed uncut palak,saute for 5 mins till they wilt.</li><li>Take it out in a plate and allow to cool.grind to coarse paste in a blender.set aside.</li><li>Add 1 tbsp oil in the same pan and saute the tofu cubes,add little salt,turmeric and saute for 2 mins.take them out in a plate.</li><li>Add the coarse palak paste in the pan and salt according to the content along with coriander powder.let it cook on slow for 10 mins.</li><li>Add the sauteed tofu cubes,mix well.</li><li>Crush in the kasuri methi in the palm of your hands and mix in.Pour in the milk or cream,mix well and cover it on slow flame for 5 mins.drop in the butter (it gives an added creamyness)Finish it off with garam masala.</li><li>Serve hot with roti or paratha.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Heat 1tbsp oil  in a pan,add the onions,saute till brown,add ginger garlic paste,saute for a min,add green chillies, chopped tomatoes and saute well.",
							"ingredients": [
								{
									"id": 10093754,
									"name": "ginger garlic paste",
									"localizedName": "ginger garlic paste",
									"image": "ginger-garlic-paste.png"
								},
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add the washed uncut palak,saute for 5 mins till they wilt.Take it out in a plate and allow to cool.grind to coarse paste in a blender.set aside.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404726,
									"name": "blender",
									"localizedName": "blender",
									"image": "blender.png"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add 1 tbsp oil in the same pan and saute the tofu cubes,add little salt,turmeric and saute for 2 mins.take them out in a plate.",
							"ingredients": [
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 16213,
									"name": "tofu",
									"localizedName": "tofu",
									"image": "tofu.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add the coarse palak paste in the pan and salt according to the content along with coriander powder.let it cook on slow for 10 mins.",
							"ingredients": [
								{
									"id": 1002013,
									"name": "ground coriander",
									"localizedName": "ground coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add the sauteed tofu cubes,mix well.Crush in the kasuri methi in the palm of your hands and mix in.",
							"ingredients": [
								{
									"id": 98963,
									"name": "dried fenugreek leaves",
									"localizedName": "dried fenugreek leaves",
									"image": "methi.png"
								},
								{
									"id": 16213,
									"name": "tofu",
									"localizedName": "tofu",
									"image": "tofu.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Pour in the milk or cream,mix well and cover it on slow flame for 5 mins.drop in the butter (it gives an added creamyness)Finish it off with garam masala.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 1053,
									"name": "cream",
									"localizedName": "cream",
									"image": "fluid-cream.jpg"
								},
								{
									"id": 1077,
									"name": "milk",
									"localizedName": "milk",
									"image": "milk.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Serve hot with roti or paratha.",
							"ingredients": [
								{
									"id": 99217,
									"name": "paratha",
									"localizedName": "paratha",
									"image": "pita-bread.jpg"
								},
								{
									"id": 0,
									"name": "roti",
									"localizedName": "roti",
									"image": "pita-bread.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/palak-tofu-bean-curd-654379"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 8,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 17,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 196.8,
			"extendedIngredients": [
				{
					"id": 1012,
					"aisle": "Cheese",
					"image": "cottage-cheese.jpg",
					"consistency": "SOLID",
					"name": "paneer",
					"nameClean": "cottage cheese",
					"original": "200 g paneer (Indian cottage cheese) cut into 3cm x 1cm pieces",
					"originalName": "paneer (Indian cottage cheese) cut into 3cm x 1cm pieces",
					"amount": 200.0,
					"unit": "g",
					"meta": [
						"cut into 3cm x 1cm pieces",
						"(Indian cottage cheese)"
					],
					"measures": {
						"us": {
							"amount": 7.055,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 200.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "2 tbsp oil",
					"originalName": "oil",
					"amount": 2.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "1 tsp cumin seeds",
					"originalName": "cumin seeds",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 tomato cut into strips",
					"originalName": "tomato cut into strips",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"cut into strips"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomatoes",
					"nameClean": "tomato",
					"original": "2 tomatoes (for purée)",
					"originalName": "tomatoes (for purée)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"(for purée)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 large onion - 1/2 cut into strips and 1/2 for puree",
					"originalName": "onion - 1/2 cut into strips and 1/2 for puree",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"for puree",
						"cut into strips and 1/2 "
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 11333,
					"aisle": "Produce",
					"image": "green-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "green pepper",
					"original": "1 pepper cut into strips (I used half a green and half a red pepper for some colour)",
					"originalName": "pepper cut into strips (I used half a green and half a red pepper for some colour)",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"green",
						"red",
						"for some colour",
						"cut into strips (i used half a  and half a  pepper )"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder",
					"nameClean": "turmeric",
					"original": "1/4 tsp turmeric powder",
					"originalName": "turmeric powder",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chilli powder",
					"nameClean": "chili powder",
					"original": "1/4 tsp chilli powder",
					"originalName": "chilli powder",
					"amount": 0.25,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "green chili pepper",
					"original": "2 green chillies chopped",
					"originalName": "green chillies chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10111962,
					"aisle": "Produce",
					"image": "dried-arbol-chiles.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "dried chili pepper",
					"original": "2 - 3 dried red (kashmiri) chillies",
					"originalName": "dried red (kashmiri) chillies",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"dried",
						"red",
						"(kashmiri)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 inch ginger cut into thin strips",
					"originalName": "ginger cut into thin strips",
					"amount": 1.0,
					"unit": "inch",
					"meta": [
						"cut into thin strips"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1/2 tsp garam masala",
					"originalName": "garam masala",
					"amount": 0.5,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "1/2 tsp sugar",
					"originalName": "sugar",
					"amount": 0.5,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vinegar-(white).jpg",
					"consistency": "LIQUID",
					"name": "vinegar",
					"nameClean": "distilled white vinegar",
					"original": "1 & 1/2 tsp vinegar",
					"originalName": "vinegar",
					"amount": 1.5,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "coriander",
					"nameClean": "cilantro",
					"original": "A couple of sprigs of coriander for garnish",
					"originalName": "A couple of of coriander for garnish",
					"amount": 2.0,
					"unit": "sprigs",
					"meta": [
						"for garnish"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "sprigs",
							"unitLong": "sprigs"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "sprigs",
							"unitLong": "sprigs"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "salt to taste",
					"originalName": "salt to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 654532,
			"title": "Paneer jalfrezi",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/DSW8B4D7/paneer-jalfrezi",
			"image": "https://spoonacular.com/recipeImages/654532-556x370.jpg",
			"imageType": "jpg",
			"summary": "Forget going out to eat or ordering takeout every time you crave Indian food. Try making Paneer jalfrezi at home. This recipe serves 2 and costs $1.97 per serving. One portion of this dish contains around <b>15g of protein</b>, <b>19g of fat</b>, and a total of <b>327 calories</b>. Head to the store and pick up garam masala, turmeric powder, chillies, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Only a few people made this recipe, and 2 would say it hit the spot. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. It is brought to you by Foodista. It works well as a main course. Overall, this recipe earns a <b>good spoonacular score of 54%</b>. <a href=\"https://spoonacular.com/recipes/paneer-jalfrezi-how-to-make-paneer-veg-jalfrezi-486625\">paneer jalfrezi , how to make paneer veg jalfrezi</a>, <a href=\"https://spoonacular.com/recipes/paneer-jalfrezi-22202\">Paneer Jalfrezi</a>, and <a href=\"https://spoonacular.com/recipes/paneer-jalfrezi-1374407\">Paneer jalfrezi</a> are very similar to this recipe.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "Roughly chop half an onion and 2 tomatoes. Heat 1 tbsp oil in a non stick pan. Add the onions and fry until lightly brown. Add the tomatoes and cook for 2-3 minutes until soft. Remove, let cool and blend to a pure in blender.\nIn the same pan heat 1 tbsp oil on medium heat. Add the cumin seeds and let them sputter. Add the kashmiri red chillies and the finely sliced ginger and fry for 30-45 seconds.\nAdd the turmeric powder followed by the onions, peppers, chilli powder, salt and two-thirds of the chopped green chillies and fry for 3-4 minutes.\nAdd the paneer and cook on a low heat for 5 minutes. Add the tomato pure, garam masala and sugar and simmer for 2 minutes.\nThen add the tomatoes (cut into strips) and toss. Stir in the vinegar and garnish with green chillies and coriander.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Roughly chop half an onion and 2 tomatoes.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Heat 1 tbsp oil in a non stick pan.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the onions and fry until lightly brown.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Add the tomatoes and cook for 2-3 minutes until soft.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Remove, let cool and blend to a pure in blender.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404726,
									"name": "blender",
									"localizedName": "blender",
									"image": "blender.png"
								}
							]
						},
						{
							"number": 6,
							"step": "In the same pan heat 1 tbsp oil on medium heat.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 7,
							"step": "Add the cumin seeds and let them sputter.",
							"ingredients": [
								{
									"id": 2014,
									"name": "cumin seeds",
									"localizedName": "cumin seeds",
									"image": "ground-cumin.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Add the kashmiri red chillies and the finely sliced ginger and fry for 30-45 seconds.",
							"ingredients": [
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Add the turmeric powder followed by the onions, peppers, chilli powder, salt and two-thirds of the chopped green chillies and fry for 3-4 minutes.",
							"ingredients": [
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								},
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 10111333,
									"name": "peppers",
									"localizedName": "peppers",
									"image": "green-pepper.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						},
						{
							"number": 10,
							"step": "Add the paneer and cook on a low heat for 5 minutes.",
							"ingredients": [
								{
									"id": 98847,
									"name": "paneer",
									"localizedName": "paneer",
									"image": "paneer.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 11,
							"step": "Add the tomato pure, garam masala and sugar and simmer for 2 minutes.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 12,
							"step": "Then add the tomatoes (cut into strips) and toss. Stir in the vinegar and garnish with green chillies and coriander.",
							"ingredients": [
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 2053,
									"name": "vinegar",
									"localizedName": "vinegar",
									"image": "vinegar-(white).jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/paneer-jalfrezi-654532"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 9,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 4,
			"healthScore": 54,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 401.56,
			"extendedIngredients": [
				{
					"id": 2001,
					"aisle": "Spices and Seasonings",
					"image": "allspice-ground.jpg",
					"consistency": "SOLID",
					"name": "allspice",
					"nameClean": "allspice",
					"original": "1tsp. allspice",
					"originalName": "allspice",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 4047,
					"aisle": "Baking",
					"image": "oil-coconut.jpg",
					"consistency": "LIQUID",
					"name": "coconut oil",
					"nameClean": "coconut oil",
					"original": "1 tbsp. coconut oil",
					"originalName": "coconut oil",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "6 tbsp. curry powder",
					"originalName": "curry powder",
					"amount": 6.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 tablespoon Garlic, granulated",
					"originalName": "Garlic, granulated",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11333,
					"aisle": "Produce",
					"image": "green-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "green pepper",
					"original": "1 large green pepper (chopped)",
					"originalName": "green pepper (chopped)",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"green",
						"chopped",
						"()"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1/2 medium Onion, chopped",
					"originalName": "Onion, chopped",
					"amount": 0.5,
					"unit": "medium",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "medium",
							"unitLong": "mediums"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "medium",
							"unitLong": "mediums"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper pepper",
					"nameClean": "black pepper",
					"original": "2 tsp. black pepper pepper",
					"originalName": "black pepper pepper",
					"amount": 2.0,
					"unit": "tsp",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1 1/2 teaspoons salt",
					"originalName": "salt",
					"amount": 1.5,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11291,
					"aisle": "Produce",
					"image": "spring-onions.jpg",
					"consistency": "SOLID",
					"name": "scallions",
					"nameClean": "spring onions",
					"original": "3 scallions (chopped)",
					"originalName": "scallions (chopped)",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"chopped",
						"()"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "habanero-pepper.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet pepper",
					"nameClean": "habanero chili",
					"original": "1 scotch bonnet pepper or habanero (seeded and minced)",
					"originalName": "scotch bonnet pepper or habanero (seeded and minced)",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"minced",
						"seeded",
						"( and )"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10011819,
					"aisle": "Produce",
					"image": "scotch-bonnet-chile.jpg",
					"consistency": "SOLID",
					"name": "scotch bonnet pepper",
					"nameClean": "habanero chili",
					"original": "1 scotch bonnet pepper or habanero (seeded and minced)",
					"originalName": "scotch bonnet pepper or habanero (seeded and minced)",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"minced",
						"seeded",
						"( and )"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 5096,
					"aisle": "Meat",
					"image": "chicken-thighs.png",
					"consistency": "SOLID",
					"name": "chicken thighs",
					"nameClean": "boneless skinless chicken thighs",
					"original": "3lb of chicken thighs, legs or breast (skinless)",
					"originalName": "chicken thighs, legs or breast (skinless)",
					"amount": 3.0,
					"unit": "lb",
					"meta": [
						"skinless",
						"()"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 1.361,
							"unitShort": "kgs",
							"unitLong": "kgs"
						}
					}
				},
				{
					"id": 11507,
					"aisle": "Produce",
					"image": "sweet-potato.png",
					"consistency": "SOLID",
					"name": "sweet potatoes",
					"nameClean": "sweet potato",
					"original": "2 sweet potatoes (chopped)",
					"originalName": "sweet potatoes (chopped)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"chopped",
						"()"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2049,
					"aisle": "Produce",
					"image": "thyme.jpg",
					"consistency": "SOLID",
					"name": "thyme",
					"nameClean": "thyme",
					"original": "1tbsp. thyme",
					"originalName": "thyme",
					"amount": 1.0,
					"unit": "tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "2 cups water",
					"originalName": "water",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 473.176,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 633088,
			"title": "Authentic Jamaican Curry Chicken",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/VVMBG4PD/authentic-jamaican-curry-chicken",
			"image": "https://spoonacular.com/recipeImages/633088-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you want to add more <b>gluten free, dairy free, paleolithic, and primal</b> recipes to your recipe box, Authentic Jamaican Curry Chicken might be a recipe you should try. This recipe serves 4. For <b>$4.02 per serving</b>, this recipe <b>covers 46%</b> of your daily requirements of vitamins and minerals. This main course has <b>587 calories</b>, <b>70g of protein</b>, and <b>19g of fat</b> per serving. 4 people have made this recipe and would make it again. Not a lot of people really liked this Indian dish. This recipe from Foodista requires thyme, scallions, scotch bonnet pepper, and sweet potatoes. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 87%</b>. This score is great. Try <a href=\"https://spoonacular.com/recipes/authentic-jamaican-curry-chicken-1261085\">Authentic Jamaican Curry Chicken</a>, <a href=\"https://spoonacular.com/recipes/authentic-jamaican-curry-chicken-1258495\">Authentic Jamaican Curry Chicken</a>, and <a href=\"https://spoonacular.com/recipes/authentic-jamaican-brown-stew-chicken-107028\">Authentic Jamaican Brown Stew Chicken</a> for similar recipes.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"paleolithic",
				"primal",
				"whole 30"
			],
			"occasions": [],
			"instructions": "<ol><li>Season the chicken with all of the ingredients except for the potatoes and water and marinate up to 2 hours or overnight in the fridge.</li><li>Add the oil to a Dutch oven and on high heat, fry the only the chicken pieces until it is brown and seared on each side for about 10 minutes.</li><li>After the meat is nice and brown on both sides, add the remaining vegetable marinade, scotch bonnet pepper and water to the pot, cover and bring to a boil.</li><li>Add the potatoes and lower to a simmer and stew it for about 1 hour until it has a thick consistency.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Season the chicken with all of the ingredients except for the potatoes and water and marinate up to 2 hours or overnight in the fridge.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 120,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Add the oil to a Dutch oven and on high heat, fry the only the chicken pieces until it is brown and seared on each side for about 10 minutes.After the meat is nice and brown on both sides, add the remaining vegetable marinade, scotch bonnet pepper and water to the pot, cover and bring to a boil.",
							"ingredients": [
								{
									"id": 10011819,
									"name": "scotch bonnet chili",
									"localizedName": "scotch bonnet chili",
									"image": "scotch-bonnet-chile.jpg"
								},
								{
									"id": 1005006,
									"name": "chicken pieces",
									"localizedName": "chicken pieces",
									"image": "chicken-parts.jpg"
								},
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								},
								{
									"id": 0,
									"name": "marinade",
									"localizedName": "marinade",
									"image": "seasoning.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 1065062,
									"name": "meat",
									"localizedName": "meat",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404667,
									"name": "dutch oven",
									"localizedName": "dutch oven",
									"image": "dutch-oven.jpg"
								}
							],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add the potatoes and lower to a simmer and stew it for about 1 hour until it has a thick consistency.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								},
								{
									"id": 0,
									"name": "stew",
									"localizedName": "stew",
									"image": ""
								}
							],
							"equipment": [],
							"length": {
								"number": 60,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/authentic-jamaican-curry-chicken-633088"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 15,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 15,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 206.76,
			"extendedIngredients": [
				{
					"id": 1014582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "canola oil",
					"nameClean": "canola oil",
					"original": "4 tablespoons canola oil, divided",
					"originalName": "canola oil, divided",
					"amount": 4.0,
					"unit": "tablespoons",
					"meta": [
						"divided"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chilli powder",
					"nameClean": "chili powder",
					"original": "1/2 teaspoon red chilli powder",
					"originalName": "red chilli powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1129,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "hard-boiled-egg.png",
					"consistency": "SOLID",
					"name": "hardboiled eggs",
					"nameClean": "hard boiled egg",
					"original": "4 hard boiled eggs",
					"originalName": "hard boiled eggs",
					"amount": 4.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "coriander to garnish",
					"nameClean": "cilantro",
					"original": "Chopped fresh coriander leaves to garnish",
					"originalName": "Chopped fresh coriander to garnish",
					"amount": 1.0,
					"unit": "leaves",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "leaf",
							"unitLong": "leave"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "leaf",
							"unitLong": "leave"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "2 teaspoons fresh ginger, grated",
					"originalName": "fresh ginger, grated",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"fresh",
						"grated"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 teaspoon garam masala",
					"originalName": "garam masala",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves, minced",
					"originalName": "garlic cloves, minced",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "green chili pepper",
					"original": "2 green chillies (or just one for the faint hearted)",
					"originalName": "green chillies (or just one for the faint hearted)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green",
						"for the faint hearted",
						"(or just one )"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "2 teaspoons ground coriander",
					"originalName": "ground coriander",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "1 teaspoon ground cumin",
					"originalName": "ground cumin",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onions",
					"nameClean": "onion",
					"original": "2 onions, roughly chopped",
					"originalName": "onions, roughly chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"roughly chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "big tomatoes",
					"nameClean": "tomato",
					"original": "3 big tomatoes, roughly chopped",
					"originalName": "big tomatoes, roughly chopped",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"roughly chopped"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon turmeric powder",
					"originalName": "turmeric powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				}
			],
			"id": 635601,
			"title": "Boiled Egg Curry",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "http://www.foodista.com/recipe/64SQ5YPT/boiled-egg-curry",
			"image": "https://spoonacular.com/recipeImages/635601-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many main course recipes, so give Boiled Egg Curry a try. This recipe serves 2. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe has <b>515 calories</b>, <b>16g of protein</b>, and <b>40g of fat</b> per serving. For <b>$2.07 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. 2 people were impressed by this recipe. This recipe is typical of Indian cuisine. A mixture of canolan oil, salt, ground coriander, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 57%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/boiled-egg-curry-1364959\">Boiled Egg Curry</a>, <a href=\"https://spoonacular.com/recipes/masaledar-ublay-unday-or-hard-boiled-egg-curry-79650\">Masaledar Ublay Unday Or Hard Boiled Egg Curry</a>, and <a href=\"https://spoonacular.com/recipes/hard-boiled-egg-casserole-471051\">Hard-Boiled Egg Casserole</a> for similar recipes.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"whole 30"
			],
			"occasions": [],
			"instructions": "<ol><li>Boil 4 eggs in boiling water for about 10 minutes.</li><li>Heat 2 tablespoons canola oil in a deep pan over medium heat. Add the chopped onions and fry until golden. Take off the heat. Transfer the fried onions from the pan to a food processor. Grind the onions, tomatoes, green chillies into a smooth paste.</li><li>Heat the remaining 2 tablespoons of canola oil in the same pan over medium heat. Add the onion paste. Fry for 2-3 minutes. Stir in ginger and garlic and all the dry spices. Fry until the oil begins to separate from the onion tomato mixture.</li><li>Add 2 cups of water bring to a boil on a medium flame.</li><li>Cut the boiled eggs into halves lengthside and add them to the gravy. Simmer for 10 minutes or till the gravy is thickened/ reduced to about 3/4 of the original quantity after you added the water</li><li>Garnish with coriander leaves. Serve hot with rice or flatbread.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Boil 4 eggs in boiling water for about 10 minutes.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Heat 2 tablespoons canola oil in a deep pan over medium heat.",
							"ingredients": [
								{
									"id": 1014582,
									"name": "canola oil",
									"localizedName": "canola oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the chopped onions and fry until golden. Take off the heat.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Transfer the fried onions from the pan to a food processor. Grind the onions, tomatoes, green chillies into a smooth paste.",
							"ingredients": [
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								},
								{
									"id": 93709,
									"name": "fried onions",
									"localizedName": "fried onions",
									"image": "fried-onions.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Heat the remaining 2 tablespoons of canola oil in the same pan over medium heat.",
							"ingredients": [
								{
									"id": 1014582,
									"name": "canola oil",
									"localizedName": "canola oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 6,
							"step": "Add the onion paste. Fry for 2-3 minutes. Stir in ginger and garlic and all the dry spices. Fry until the oil begins to separate from the onion tomato mixture.",
							"ingredients": [
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 3,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Add 2 cups of water bring to a boil on a medium flame.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Cut the boiled eggs into halves lengthside and add them to the gravy. Simmer for 10 minutes or till the gravy is thickened/ reduced to about 3/4 of the original quantity after you added the water",
							"ingredients": [
								{
									"id": 6997,
									"name": "gravy",
									"localizedName": "gravy",
									"image": "gravy.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 9,
							"step": "Garnish with coriander leaves.",
							"ingredients": [
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Serve hot with rice or flatbread.",
							"ingredients": [
								{
									"id": 10018413,
									"name": "flatbread",
									"localizedName": "flatbread",
									"image": "pita-bread.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/boiled-egg-curry-635601"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": true,
			"weightWatcherSmartPoints": 21,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 18,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 219.68,
			"extendedIngredients": [
				{
					"id": 10020444,
					"aisle": "Pasta and Rice",
					"image": "rice-white-long-grain-or-basmatii-cooked.jpg",
					"consistency": "SOLID",
					"name": "basmati rice",
					"nameClean": "basmati rice",
					"original": "basmati rice",
					"originalName": "basmati rice",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "light-brown-sugar.jpg",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 Tbsp. palm or brown sugar",
					"originalName": "palm or brown sugar",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 19334,
					"aisle": "Baking",
					"image": "dark-brown-sugar.png",
					"consistency": "SOLID",
					"name": "brown sugar",
					"nameClean": "golden brown sugar",
					"original": "1 Tbsp. palm or brown sugar",
					"originalName": "palm or brown sugar",
					"amount": 1.0,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 6179,
					"aisle": "Ethnic Foods",
					"image": "asian-fish-sauce.jpg",
					"consistency": "LIQUID",
					"name": "fish sauce",
					"nameClean": "fish sauce",
					"original": "2 Tbsp. fish sauce",
					"originalName": "fish sauce",
					"amount": 2.0,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 9160,
					"aisle": "Produce",
					"image": "lime-juice.png",
					"consistency": "LIQUID",
					"name": "lime juice",
					"nameClean": "lime juice",
					"original": "2 Tbsp. fresh lime juice, or wedges for serving",
					"originalName": "fresh lime juice, or wedges for serving",
					"amount": 2.0,
					"unit": "Tbsp",
					"meta": [
						"fresh",
						"for serving"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "yellow-bell-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "bell pepper",
					"original": "pepper",
					"originalName": "pepper",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10211821,
					"aisle": "Produce",
					"image": "bell-pepper-orange.png",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "bell pepper",
					"original": "pepper",
					"originalName": "pepper",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt",
					"originalName": "Salt",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1055062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breasts",
					"nameClean": "boneless skinless chicken breast",
					"original": "2 large boneless, skinless, chicken breasts",
					"originalName": "boneless, skinless, chicken breasts",
					"amount": 2.0,
					"unit": "large",
					"meta": [
						"boneless",
						"skinless"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 12117,
					"aisle": "Canned and Jarred",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "unsweetened coconut milk",
					"original": "1 (14oz) can unsweetened coconut milk",
					"originalName": "unsweetened coconut milk",
					"amount": 14.0,
					"unit": "oz",
					"meta": [
						"unsweetened",
						"canned"
					],
					"measures": {
						"us": {
							"amount": 14.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 396.893,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "2 Tbsp. grapeseed or vegetable oil",
					"originalName": "grapeseed or vegetable oil",
					"amount": 2.0,
					"unit": "Tbsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10093605,
					"aisle": "Ethnic Foods",
					"image": "green-curry-paste.png",
					"consistency": "SOLID",
					"name": "curry paste",
					"nameClean": "green curry paste",
					"original": "2 Tbsp. curry paste (green, red, or yellow)",
					"originalName": "curry paste (green, red, or yellow)",
					"amount": 2.0,
					"unit": "Tbsp",
					"meta": [
						"green",
						"red",
						"yellow",
						"(, , or )"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				}
			],
			"id": 641145,
			"title": "Curry-Braised Chicken",
			"readyInMinutes": 75,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/YN6PSSKQ/curry-braised-chicken",
			"image": "https://spoonacular.com/recipeImages/641145-556x370.jpg",
			"imageType": "jpg",
			"summary": "Forget going out to eat or ordering takeout every time you crave Indian food. Try making Curry-Braised Chicken at home. This recipe serves 4. For <b>$2.2 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This main course has <b>565 calories</b>, <b>19g of protein</b>, and <b>33g of fat</b> per serving. This recipe is liked by 2 foodies and cooks. If you have lime juice, chicken breasts, coconut milk, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>1 hour and 15 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, and fodmap friendly</b> diet. With a spoonacular <b>score of 64%</b>, this dish is good. Try <a href=\"https://spoonacular.com/recipes/curry-braised-chicken-legs-1531923\">Curry Braised Chicken Legs</a>, <a href=\"https://spoonacular.com/recipes/coconut-curry-braised-chicken-thighs-1040009\">Coconut-Curry Braised Chicken Thighs</a>, and <a href=\"https://spoonacular.com/recipes/curry-and-yogurt-braised-chicken-thighs-74523\">Curry-and-Yogurt-Braised Chicken Thighs</a> for similar recipes.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"fodmap friendly"
			],
			"occasions": [],
			"instructions": "<ol><li>Preheat your oven to 325 degrees Fahrenheit.</li><li>Cut the chicken breasts in half. Heat oil over medium-high in a Dutch oven. Dust chicken with salt and pepper, then brown 1-2 minutes per side in the oil, working in batches. Set chicken aside.</li><li>Add curry paste to the Dutch oven, then use a wooden spoon to break up large pieces and work the paste into the hot oil. Once combined, add the coconut milk and use the wooden spoon to release any browned pieces of chicken stuck to the pot. Stir in the fish sauce and sugar.</li><li>Cover the Dutch oven and place in the oven. Bake for 45-55 minutes, or until chicken is cooked through and no longer pink.</li><li>Stir in the lime juice and serve with cooked rice.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Preheat your oven to 325 degrees Fahrenheit.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg",
									"temperature": {
										"number": 325.0,
										"unit": "Fahrenheit"
									}
								}
							]
						},
						{
							"number": 2,
							"step": "Cut the chicken breasts in half.",
							"ingredients": [
								{
									"id": 5062,
									"name": "chicken breast",
									"localizedName": "chicken breast",
									"image": "chicken-breasts.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Heat oil over medium-high in a Dutch oven. Dust chicken with salt and pepper, then brown 1-2 minutes per side in the oil, working in batches. Set chicken aside.",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404667,
									"name": "dutch oven",
									"localizedName": "dutch oven",
									"image": "dutch-oven.jpg"
								}
							],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add curry paste to the Dutch oven, then use a wooden spoon to break up large pieces and work the paste into the hot oil. Once combined, add the coconut milk and use the wooden spoon to release any browned pieces of chicken stuck to the pot. Stir in the fish sauce and sugar.Cover the Dutch oven and place in the oven.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 93605,
									"name": "curry paste",
									"localizedName": "curry paste",
									"image": "chili-paste.png"
								},
								{
									"id": 6179,
									"name": "fish sauce",
									"localizedName": "fish sauce",
									"image": "asian-fish-sauce.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404732,
									"name": "wooden spoon",
									"localizedName": "wooden spoon",
									"image": "wooden-spoon.jpg"
								},
								{
									"id": 404667,
									"name": "dutch oven",
									"localizedName": "dutch oven",
									"image": "dutch-oven.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 5,
							"step": "Bake for 45-55 minutes, or until chicken is cooked through and no longer pink.Stir in the lime juice and serve with cooked rice.",
							"ingredients": [
								{
									"id": 10220445,
									"name": "cooked rice",
									"localizedName": "cooked rice",
									"image": "uncooked-white-rice.png"
								},
								{
									"id": 9160,
									"name": "lime juice",
									"localizedName": "lime juice",
									"image": "lime-juice.png"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 55,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/curry-braised-chicken-641145"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 28,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 4,
			"healthScore": 11,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 226.2,
			"extendedIngredients": [
				{
					"id": 5096,
					"aisle": "Meat",
					"image": "chicken-thighs.png",
					"consistency": "SOLID",
					"name": "chicken thighs",
					"nameClean": "boneless skinless chicken thighs",
					"original": "4 pieces boneless, skinless chicken thighs",
					"originalName": "boneless, skinless chicken thighs",
					"amount": 4.0,
					"unit": "pieces",
					"meta": [
						"boneless",
						"skinless"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1230,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "buttermilk.jpg",
					"consistency": "SOLID",
					"name": "buttermilk",
					"nameClean": "buttermilk",
					"original": "2 cups buttermilk",
					"originalName": "buttermilk",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 480.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "2 cloves garlic, minced",
					"originalName": "garlic, minced",
					"amount": 2.0,
					"unit": "cloves",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1 teaspoon salt",
					"originalName": "salt",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1/2 teaspoon black pepper",
					"originalName": "black pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne pepper",
					"nameClean": "ground cayenne pepper",
					"original": "1/2 teaspoon cayenne pepper",
					"originalName": "cayenne pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "1/4 teaspoon ground coriander",
					"originalName": "ground coriander",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin",
					"nameClean": "cumin",
					"original": "1/4 teaspoon cumin",
					"originalName": "cumin",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2006,
					"aisle": "Spices and Seasonings",
					"image": "cardamom.jpg",
					"consistency": "SOLID",
					"name": "cardamom",
					"nameClean": "cardamom",
					"original": "1/4 teaspoon cardamom",
					"originalName": "cardamom",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 4582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "oil",
					"nameClean": "cooking oil",
					"original": "1 tablespoon oil",
					"originalName": "oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 small onion, minced",
					"originalName": "onion, minced",
					"amount": 1.0,
					"unit": "small",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "small",
							"unitLong": "small"
						}
					}
				},
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "2 tablespoons butter",
					"originalName": "butter",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "lemon juice",
					"nameClean": "lemon juice",
					"original": "2 teaspoons lemon juice",
					"originalName": "lemon juice",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "2 teaspoons ginger, finely grated",
					"originalName": "ginger, finely grated",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"finely grated"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves, minced into a paste",
					"originalName": "garlic cloves, minced into a paste",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "2 teaspoons garam masala, divided",
					"originalName": "garam masala, divided",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [
						"divided"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2004,
					"aisle": "Produce",
					"image": "bay-leaves.jpg",
					"consistency": "SOLID",
					"name": "bay leaf",
					"nameClean": "bay leaves",
					"original": "1 bay leaf",
					"originalName": "bay leaf",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11549,
					"aisle": "Canned and Jarred",
					"image": "tomato-sauce-or-pasta-sauce.jpg",
					"consistency": "SOLID",
					"name": "tomato sauce",
					"nameClean": "canned tomato sauce",
					"original": "1 can (14.5 oz. can) tomato sauce",
					"originalName": "(14.5 oz. can) tomato sauce",
					"amount": 1.0,
					"unit": "can",
					"meta": [
						"(14.5 oz. can)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 10311693,
					"aisle": "Produce",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "canned tomatoes",
					"nameClean": "petite tomatoes",
					"original": "1 can (14.5 oz. can) petite diced tomatoes",
					"originalName": "(14.5 oz. can) petite diced tomatoes",
					"amount": 1.0,
					"unit": "can",
					"meta": [
						"diced",
						"(14.5 oz. can)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 1001053,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "fluid-cream.jpg",
					"consistency": "LIQUID",
					"name": "whipping cream",
					"nameClean": "whipping cream",
					"original": "1 pint whipping cream",
					"originalName": "whipping cream",
					"amount": 1.0,
					"unit": "pint",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "pts",
							"unitLong": "pint"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "pts",
							"unitLong": "pint"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1 bunch chopped cilantro, to taste",
					"originalName": "chopped cilantro, to taste",
					"amount": 1.0,
					"unit": "bunch",
					"meta": [
						"chopped",
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						}
					}
				}
			],
			"id": 636488,
			"title": "Butter Chicken",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/G337LZ3J/chicken-makhani-butter-chicken",
			"image": "https://spoonacular.com/recipeImages/636488-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Butter Chicken can be made <b>in about 45 minutes</b>. This recipe serves 4 and costs $2.26 per serving. One portion of this dish contains roughly <b>12g of protein</b>, <b>57g of fat</b>, and a total of <b>653 calories</b>. It is brought to you by Foodista. If you have canned tomatoes, ground coriander, tomato sauce, and a few other ingredients on hand, you can make it. 4 people found this recipe to be scrumptious and satisfying. It works well as a budget friendly hor d'oeuvre. It is a good option if you're following a <b>gluten free</b> diet. This recipe is typical of Indian cuisine. Overall, this recipe earns a <b>pretty good spoonacular score of 47%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/no-butter-butter-chicken-574097\">No-Butter Butter Chicken</a>, <a href=\"https://spoonacular.com/recipes/chicken-makhani-indian-butter-chicken-1254081\">Chicken Makhani (Indian Butter Chicken)</a>, and <a href=\"https://spoonacular.com/recipes/chicken-makhani-indian-butter-chicken-1233577\">Chicken Makhani (Indian Butter Chicken)</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "Combine first 9 ingredients and marinate overnight.\nHeat 1 tablespoon oil in a large saucepan over medium high heat.\nSaute onion until soft and translucent.\nStir in butter, lemon juice, ginger, garlic , 1 teaspoon garam masala, cumin and bay leaf. Cook, stirring, for 1 minute.\nAdd tomato sauce and diced tomatoes, and cook for 2 minutes, stirring frequently.\nStir in cream.\nReduce heat to low, and simmer for 10 minutes, stirring frequently.\nSeason with salt and pepper.\nRemove from heat and set aside.\nHeat 1 tablespoon oil in a large heavy skillet over medium heat.\nCook chicken until lightly browned, about 10 minutes.\nReduce heat, and season with 1 teaspoon garam masala and.\nStir in a few spoonfuls of sauce, and simmer until liquid has reduced, and chicken is no longer pink.\nStir cooked chicken into sauce.\nMix together cornstarch and water, then stir into the sauce.\nCook for 5 to 10 minutes, or until thickened.\nTop with cilantro, if desired.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Combine first 9 ingredients and marinate overnight.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Heat 1 tablespoon oil in a large saucepan over medium high heat.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Saute onion until soft and translucent.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Stir in butter, lemon juice, ginger, garlic , 1 teaspoon garam masala, cumin and bay leaf. Cook, stirring, for 1 minute.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 2004,
									"name": "bay leaves",
									"localizedName": "bay leaves",
									"image": "bay-leaves.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 1,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add tomato sauce and diced tomatoes, and cook for 2 minutes, stirring frequently.",
							"ingredients": [
								{
									"id": 11549,
									"name": "tomato sauce",
									"localizedName": "tomato sauce",
									"image": "tomato-sauce-or-pasta-sauce.jpg"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Stir in cream.",
							"ingredients": [
								{
									"id": 1053,
									"name": "cream",
									"localizedName": "cream",
									"image": "fluid-cream.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Reduce heat to low, and simmer for 10 minutes, stirring frequently.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 8,
							"step": "Season with salt and pepper.",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 9,
							"step": "Remove from heat and set aside.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Heat 1 tablespoon oil in a large heavy skillet over medium heat.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 11,
							"step": "Cook chicken until lightly browned, about 10 minutes.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 12,
							"step": "Reduce heat, and season with 1 teaspoon garam masala and.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 13,
							"step": "Stir in a few spoonfuls of sauce, and simmer until liquid has reduced, and chicken is no longer pink.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 14,
							"step": "Stir cooked chicken into sauce.",
							"ingredients": [
								{
									"id": 5114,
									"name": "cooked chicken",
									"localizedName": "cooked chicken",
									"image": "rotisserie-chicken.png"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 15,
							"step": "Mix together cornstarch and water, then stir into the sauce.",
							"ingredients": [
								{
									"id": 20027,
									"name": "corn starch",
									"localizedName": "corn starch",
									"image": "white-powder.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 16,
							"step": "Cook for 5 to 10 minutes, or until thickened.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 17,
							"step": "Top with cilantro, if desired.",
							"ingredients": [
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/butter-chicken-636488"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 24,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 13,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 238.87,
			"extendedIngredients": [
				{
					"id": 18337,
					"aisle": "Refrigerated",
					"image": "puff-pastry.png",
					"consistency": "SOLID",
					"name": "puff pastry",
					"nameClean": "puff pastry dough",
					"original": "2 packages puff pastry",
					"originalName": "puff pastry",
					"amount": 2.0,
					"unit": "packages",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						}
					}
				},
				{
					"id": 1123,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg.png",
					"consistency": "SOLID",
					"name": "egg",
					"nameClean": "egg",
					"original": "1 egg",
					"originalName": "egg",
					"amount": 1.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1 teaspoon water",
					"originalName": "water",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11353,
					"aisle": "Produce",
					"image": "russet-or-idaho-potatoes.png",
					"consistency": "SOLID",
					"name": "russet potato",
					"nameClean": "russet potato",
					"original": "1 large russet potato",
					"originalName": "russet potato",
					"amount": 1.0,
					"unit": "large",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "Water",
					"originalName": "Water",
					"amount": 8.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt",
					"originalName": "Salt",
					"amount": 8.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2004,
					"aisle": "Produce",
					"image": "bay-leaves.jpg",
					"consistency": "SOLID",
					"name": "bay leaves",
					"nameClean": "bay leaves",
					"original": "2 bay leaves",
					"originalName": "bay leaves",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2013,
					"aisle": "Spices and Seasonings",
					"image": "coriander-seeds.jpg",
					"consistency": "SOLID",
					"name": "coriander seeds",
					"nameClean": "whole coriander seeds",
					"original": "1 1/2 teaspoons coriander seeds",
					"originalName": "coriander seeds",
					"amount": 1.5,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 1.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1022030,
					"aisle": "Spices and Seasonings",
					"image": "black-pepper.png",
					"consistency": "SOLID",
					"name": "peppercorns",
					"nameClean": "black peppercorns",
					"original": "1/2 teaspoon black peppercorns",
					"originalName": "black peppercorns",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1032009,
					"aisle": "Spices and Seasonings",
					"image": "red-pepper-flakes.jpg",
					"consistency": "SOLID",
					"name": "chili flakes",
					"nameClean": "red pepper flakes",
					"original": "1/2 teaspoon red chili flakes",
					"originalName": "red chili flakes",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1055062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breast",
					"nameClean": "boneless skinless chicken breast",
					"original": "3 ounces boneless, skinless chicken breast",
					"originalName": "boneless, skinless chicken breast",
					"amount": 3.0,
					"unit": "ounces",
					"meta": [
						"boneless",
						"skinless"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 85.049,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 9176,
					"aisle": "Produce",
					"image": "mango.jpg",
					"consistency": "SOLID",
					"name": "mango",
					"nameClean": "mango",
					"original": "1 mango, peeled, pitted and finely diced",
					"originalName": "mango, peeled, pitted and finely diced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced",
						"pitted",
						"peeled",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1/4 cup peas",
					"originalName": "peas",
					"amount": 0.25,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 36.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1/4 cup peas",
					"originalName": "peas",
					"amount": 0.25,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 36.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1/4 cup peas",
					"originalName": "peas",
					"amount": 0.25,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 36.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 9160,
					"aisle": "Produce",
					"image": "lime-juice.png",
					"consistency": "LIQUID",
					"name": "juice of lime",
					"nameClean": "lime juice",
					"original": "1/2 Juice of lime",
					"originalName": "Juice of lime",
					"amount": 0.5,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 98839,
					"aisle": "Ethnic Foods",
					"image": "chile-chipotle.jpg",
					"consistency": "SOLID",
					"name": "chipotle sauce",
					"nameClean": "chipotle chiles",
					"original": "5 tablespoons chipotle sauce",
					"originalName": "chipotle sauce",
					"amount": 5.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "1/2 teaspoon cumin seeds",
					"originalName": "cumin seeds",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro leaves",
					"nameClean": "cilantro",
					"original": "3 tablespoons cilantro leaves, minced",
					"originalName": "cilantro leaves, minced",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "salt and pepper",
					"nameClean": "black pepper",
					"original": "Salt and freshly ground black pepper",
					"originalName": "Salt and freshly ground black pepper",
					"amount": 8.0,
					"unit": "servings",
					"meta": [
						"black",
						"freshly ground"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 633650,
			"title": "Baked Indian Samosas",
			"readyInMinutes": 45,
			"servings": 8,
			"sourceUrl": "https://www.foodista.com/recipe/G5WJN68G/baked-indian-samosas",
			"image": "https://spoonacular.com/recipeImages/633650-556x370.jpg",
			"imageType": "jpg",
			"summary": "Baked Indian Samosas is an Indian recipe that serves 8. One serving contains <b>784 calories</b>, <b>14g of protein</b>, and <b>48g of fat</b>. For <b>$2.39 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 2 people were glad they tried this recipe. It works well as a budget friendly hor d'oeuvre. It is brought to you by Foodista. If you have puff pastry, cilantro leaves, bay leaves, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 51%</b>, which is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/traditional-indian-samosas-516716\">Traditional Indian Samosas</a>, <a href=\"https://spoonacular.com/recipes/spinach-samosas-with-indian-salad-215578\">Spinach samosas with Indian salad</a>, and <a href=\"https://spoonacular.com/recipes/spinach-samosas-with-indian-salad-1230391\">Spinach samosas with Indian salad</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"dairy free"
			],
			"occasions": [],
			"instructions": "Preheat the oven to 425 degrees F.\nIn a small saucepan, add the potato and enough cold water to cover. Add a generous pinch of salt and bring to a boil over medium heat, then reduce the heat and simmer until tender, 12 to 15 minutes.\nBring 4 cups water to a simmer and add a generous pinch of salt, bay leaves, 1 teaspoon coriander seeds, peppercorns, chili flakes, and chicken breast. Simmer until cooked through, 8 to 10 minutes.\nMash the potato and finely shred the chicken and put into a large bowl. Combine with peas, mango, lime juice, chipotle sauce, remaining coriander seeds, cumin, cilantro, and salt and pepper, to taste. Mixing with a spoon or your hands, until well incorporated. Taste for seasoning and adjust, if necessary.\nRoll the puff pastry out slightly, flattening the seams. Using a paring knife to trace a 7-inch ring mold or bowl, cut the dough into 8 (7-inch wide) rounds. Cut each into 2 semicircles.\nPut a tablespoon or so of the filling in the center of a semicircle. Have a small bowl of water handy. Dip your finger in the water and run it along the edges of the semicircle. Arrange the samosas so the flat side is facing away from you. Grab the left corner and fold it over the dough in a triangular motion, so that this corner lands on the bottom right side of the filling. Do the same with the other corner.\nSqueeze bottom shut, and fold over, sealing with water and then press with a fork.  Repeat with remaining dough and filling. Arrange the 8 samosas on a lightly greased baking sheet.\nIn a small bowl, whisk the egg and 1 teaspoon water with a fork until thoroughly combined. Brush the tops with the egg wash.\nBake for 15 minutes at 425 degrees F, then turn heat down to 375 degrees F and bake for 10 more minutes. You can flip them over just before you turn the heat down, if you like.\nServe with chutney",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Preheat the oven to 425 degrees F.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg",
									"temperature": {
										"number": 425.0,
										"unit": "Fahrenheit"
									}
								}
							]
						},
						{
							"number": 2,
							"step": "In a small saucepan, add the potato and enough cold water to cover.",
							"ingredients": [
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Add a generous pinch of salt and bring to a boil over medium heat, then reduce the heat and simmer until tender, 12 to 15 minutes.",
							"ingredients": [
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 12,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Bring 4 cups water to a simmer and add a generous pinch of salt, bay leaves, 1 teaspoon coriander seeds, peppercorns, chili flakes, and chicken breast. Simmer until cooked through, 8 to 10 minutes.",
							"ingredients": [
								{
									"id": 2013,
									"name": "whole coriander seeds",
									"localizedName": "whole coriander seeds",
									"image": "coriander-seeds.jpg"
								},
								{
									"id": 5062,
									"name": "chicken breast",
									"localizedName": "chicken breast",
									"image": "chicken-breasts.png"
								},
								{
									"id": 1032009,
									"name": "red pepper flakes",
									"localizedName": "red pepper flakes",
									"image": "red-pepper-flakes.jpg"
								},
								{
									"id": 1022030,
									"name": "peppercorns",
									"localizedName": "peppercorns",
									"image": "black-pepper.png"
								},
								{
									"id": 2004,
									"name": "bay leaves",
									"localizedName": "bay leaves",
									"image": "bay-leaves.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 8,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Mash the potato and finely shred the chicken and put into a large bowl.",
							"ingredients": [
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 11352,
									"name": "potato",
									"localizedName": "potato",
									"image": "potatoes-yukon-gold.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 6,
							"step": "Combine with peas, mango, lime juice, chipotle sauce, remaining coriander seeds, cumin, cilantro, and salt and pepper, to taste.",
							"ingredients": [
								{
									"id": 2013,
									"name": "whole coriander seeds",
									"localizedName": "whole coriander seeds",
									"image": "coriander-seeds.jpg"
								},
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								},
								{
									"id": 9160,
									"name": "lime juice",
									"localizedName": "lime juice",
									"image": "lime-juice.png"
								},
								{
									"id": 98839,
									"name": "chipotle chiles",
									"localizedName": "chipotle chiles",
									"image": "chile-chipotle.jpg"
								},
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 9176,
									"name": "mango",
									"localizedName": "mango",
									"image": "mango.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Mixing with a spoon or your hands, until well incorporated. Taste for seasoning and adjust, if necessary.",
							"ingredients": [
								{
									"id": 1042027,
									"name": "seasoning",
									"localizedName": "seasoning",
									"image": "seasoning.png"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Roll the puff pastry out slightly, flattening the seams. Using a paring knife to trace a 7-inch ring mold or bowl, cut the dough into 8 (7-inch wide) rounds.",
							"ingredients": [
								{
									"id": 18337,
									"name": "puff pastry sheets",
									"localizedName": "puff pastry sheets",
									"image": "puff-pastry.png"
								},
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								}
							],
							"equipment": [
								{
									"id": 404745,
									"name": "knife",
									"localizedName": "knife",
									"image": "chefs-knife.jpg"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 9,
							"step": "Cut each into 2 semicircles.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Put a tablespoon or so of the filling in the center of a semicircle. Have a small bowl of water handy. Dip your finger in the water and run it along the edges of the semicircle. Arrange the samosas so the flat side is facing away from you. Grab the left corner and fold it over the dough in a triangular motion, so that this corner lands on the bottom right side of the filling. Do the same with the other corner.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "dip",
									"localizedName": "dip",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 11,
							"step": "Squeeze bottom shut, and fold over, sealing with water and then press with a fork.  Repeat with remaining dough and filling. Arrange the 8 samosas on a lightly greased baking sheet.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								}
							]
						},
						{
							"number": 12,
							"step": "In a small bowl, whisk the egg and 1 teaspoon water with a fork until thoroughly combined.",
							"ingredients": [
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": [
								{
									"id": 404661,
									"name": "whisk",
									"localizedName": "whisk",
									"image": "whisk.png"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 13,
							"step": "Brush the tops with the egg wash.",
							"ingredients": [
								{
									"id": 1123,
									"name": "egg",
									"localizedName": "egg",
									"image": "egg.png"
								}
							],
							"equipment": []
						},
						{
							"number": 14,
							"step": "Bake for 15 minutes at 425 degrees F, then turn heat down to 375 degrees F and bake for 10 more minutes. You can flip them over just before you turn the heat down, if you like.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg",
									"temperature": {
										"number": 425.0,
										"unit": "Fahrenheit"
									}
								}
							],
							"length": {
								"number": 25,
								"unit": "minutes"
							}
						},
						{
							"number": 15,
							"step": "Serve with chutney",
							"ingredients": [
								{
									"id": 0,
									"name": "chutney",
									"localizedName": "chutney",
									"image": ""
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/baked-indian-samosas-633650"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 14,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 27,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 239.38,
			"extendedIngredients": [
				{
					"id": 10023572,
					"aisle": "Meat",
					"image": "fresh-ground-beef.jpg",
					"consistency": "SOLID",
					"name": "mince beef",
					"nameClean": "ground chuck",
					"original": "300 grams of mince beef",
					"originalName": "mince beef",
					"amount": 300.0,
					"unit": "grams",
					"meta": [],
					"measures": {
						"us": {
							"amount": 10.582,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 300.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 medium size onion chopped",
					"originalName": "onion chopped",
					"amount": 1.0,
					"unit": "medium size",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium size",
							"unitLong": "medium size"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium size",
							"unitLong": "medium size"
						}
					}
				},
				{
					"id": 1002006,
					"aisle": "Spices and Seasonings",
					"image": "cardamom.jpg",
					"consistency": "SOLID",
					"name": "cardamon pods",
					"nameClean": "cardamom pods",
					"original": "2 smalls cardamon pods (slitted)",
					"originalName": "s cardamon pods (slitted)",
					"amount": 2.0,
					"unit": "small",
					"meta": [
						"(slitted)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "small",
							"unitLong": "smalls"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "small",
							"unitLong": "smalls"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "3 cloves garlic, crushed",
					"originalName": "garlic, crushed",
					"amount": 3.0,
					"unit": "cloves",
					"meta": [
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 inch thick ginger, crushed",
					"originalName": "1 inch thick ginger, crushed",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder",
					"nameClean": "turmeric",
					"original": "1 teaspoon turmeric powder",
					"originalName": "turmeric powder",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "coriander powder",
					"nameClean": "ground coriander",
					"original": "1 teaspoon coriander powder",
					"originalName": "coriander powder",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin powder",
					"nameClean": "ground cumin",
					"original": "1 teaspoon cumin powder",
					"originalName": "cumin powder",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chilli powder",
					"nameClean": "chili powder",
					"original": "1 teaspoon chilli powder",
					"originalName": "chilli powder",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 teaspoon garam masala",
					"originalName": "garam masala",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin seeds",
					"nameClean": "cumin seeds",
					"original": "1 teaspoon cumin seeds",
					"originalName": "cumin seeds",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11887,
					"aisle": "Pasta and Rice",
					"image": "tomato-paste.jpg",
					"consistency": "SOLID",
					"name": "tomato paste",
					"nameClean": "tomato paste",
					"original": "2 tablespoons tomato paste",
					"originalName": "tomato paste",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen peas",
					"originalName": "frozen peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen peas",
					"originalName": "frozen peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "1 cup frozen peas",
					"originalName": "frozen peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 145.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chilli",
					"nameClean": "green chili pepper",
					"original": "1/2 green chilli (cook as a whole)",
					"originalName": "green chilli (cook as a whole)",
					"amount": 0.5,
					"unit": "",
					"meta": [
						"whole",
						"green",
						"(cook as a )"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "some coriander",
					"nameClean": "cilantro",
					"original": "Some chopped coriander for garnish",
					"originalName": "Some chopped coriander for garnish",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"chopped",
						"for garnish"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 651911,
			"title": "Minced Beef Curry",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/7HCZZZLC/minced-beef-curry",
			"image": "https://spoonacular.com/recipeImages/651911-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many main course recipes, so give Minced Beef Curry a try. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has <b>513 calories</b>, <b>32g of protein</b>, and <b>32g of fat</b> per serving. This recipe serves 2. For <b>$2.39 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. 2 people have tried and liked this recipe. Not a lot of people really liked this Indian dish. From preparation to the plate, this recipe takes about <b>45 minutes</b>. A mixture of mince beef, some coriander, coriander powder, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 71%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/minced-beef-curry-1353471\">Minced Beef Curry</a>, <a href=\"https://spoonacular.com/recipes/minced-mutton-curry-651914\">Minced Mutton Curry</a>, and <a href=\"https://spoonacular.com/recipes/minced-beef-wellington-1245141\">Minced beef Wellington</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"paleolithic",
				"primal"
			],
			"occasions": [],
			"instructions": "Mix garam masala, turmeric,coriander, cumin and chilli powder with 2 tbsps of water. Set aside.\nFry the cumin seeds and the chopped onions with 3 tbsps full of oil on medium heat. Cook till the onions become golden brown.\nAdd the ginger garlic paste and spices to the onion mixture and fry till aromatic.\nThen add the remaining ingredients into the mixture and  let it simmer on low heat.\nWhen the oil starts to separate (a layer of oil form on top of the gravy), I add about half a cup of water and season with salt and allow the curry to simmer for a further 10 mins.\nFinally, garnish with chopped coriander before you serve.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Mix garam masala, turmeric,coriander, cumin and chilli powder with 2 tbsps of water. Set aside.",
							"ingredients": [
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Fry the cumin seeds and the chopped onions with 3 tbsps full of oil on medium heat. Cook till the onions become golden brown.",
							"ingredients": [
								{
									"id": 2014,
									"name": "cumin seeds",
									"localizedName": "cumin seeds",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Add the ginger garlic paste and spices to the onion mixture and fry till aromatic.",
							"ingredients": [
								{
									"id": 10093754,
									"name": "ginger garlic paste",
									"localizedName": "ginger garlic paste",
									"image": "ginger-garlic-paste.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Then add the remaining ingredients into the mixture and  let it simmer on low heat.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 5,
							"step": "When the oil starts to separate (a layer of oil form on top of the gravy), I add about half a cup of water and season with salt and allow the curry to simmer for a further 10 mins.",
							"ingredients": [
								{
									"id": 6997,
									"name": "gravy",
									"localizedName": "gravy",
									"image": "gravy.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Finally, garnish with chopped coriander before you serve.",
							"ingredients": [
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/minced-beef-curry-651911"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 12,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 19,
			"healthScore": 49,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 360.46,
			"extendedIngredients": [
				{
					"id": 11353,
					"aisle": "Produce",
					"image": "russet-or-idaho-potatoes.png",
					"consistency": "SOLID",
					"name": "baking potatoes",
					"nameClean": "russet potato",
					"original": "2 baking Potatoes",
					"originalName": "baking Potatoes",
					"amount": 2.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 6008,
					"aisle": "Canned and Jarred",
					"image": "beef-broth.png",
					"consistency": "LIQUID",
					"name": "beef broth",
					"nameClean": "beef broth",
					"original": "2 cups of beef broth",
					"originalName": "beef broth",
					"amount": 2.0,
					"unit": "cups",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 480.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "2 tablespoons of Butter",
					"originalName": "Butter",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1 bunch of Cilantro, Chopped",
					"originalName": "Cilantro, Chopped",
					"amount": 1.0,
					"unit": "bunch",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "bunch",
							"unitLong": "bunch"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry",
					"nameClean": "curry powder",
					"original": "2 tablespoons of Curry",
					"originalName": "Curry",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 98953,
					"aisle": "Spices and Seasonings",
					"image": "hemp-protein-powder.png",
					"consistency": "SOLID",
					"name": "fennel powder",
					"nameClean": "ground fennel",
					"original": "1/2 teaspoon of fennel powder",
					"originalName": "fennel powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1/2 teaspoon of Garam Masala",
					"originalName": "Garam Masala",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "3 cloves of Garlic, Minced",
					"originalName": "Garlic, Minced",
					"amount": 3.0,
					"unit": "cloves",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 teaspoon of Ginger",
					"originalName": "Ginger",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 17059,
					"aisle": "Meat",
					"image": "beef-cubes-raw.jpg",
					"consistency": "SOLID",
					"name": "lamb stew meat",
					"nameClean": "lamb stew meat",
					"original": "5 1/2 pounds of Cooked Lamb stew meat",
					"originalName": "Cooked Lamb stew meat",
					"amount": 5.5,
					"unit": "pounds",
					"meta": [
						"cooked"
					],
					"measures": {
						"us": {
							"amount": 5.5,
							"unitShort": "lb",
							"unitLong": "pounds"
						},
						"metric": {
							"amount": 2.495,
							"unitShort": "kgs",
							"unitLong": "kgs"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms-white.jpg",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "6 ounces of Mushrooms, Chopped",
					"originalName": "Mushrooms, Chopped",
					"amount": 6.0,
					"unit": "ounces",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 170.097,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms.png",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "6 ounces of Mushrooms, Chopped",
					"originalName": "Mushrooms, Chopped",
					"amount": 6.0,
					"unit": "ounces",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 170.097,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "2 tablespoons of Olive Oil",
					"originalName": "Olive Oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 Onion, Diced",
					"originalName": "Onion, Diced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2027,
					"aisle": "Produce",
					"image": "oregano.jpg",
					"consistency": "SOLID",
					"name": "oregano",
					"nameClean": "oregano",
					"original": "1 tablespoon of Oregano",
					"originalName": "Oregano",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 1001116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "plain yogurt",
					"original": "1/2 cup of Plain Yogurt",
					"originalName": "Plain Yogurt",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 122.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 2036,
					"aisle": "Spices and Seasonings",
					"image": "rosemary.jpg",
					"consistency": "SOLID",
					"name": "rosemary",
					"nameClean": "rosemary",
					"original": "1 tablespoon of Rosemary",
					"originalName": "Rosemary",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2036,
					"aisle": "Spices and Seasonings",
					"image": "rosemary.jpg",
					"consistency": "SOLID",
					"name": "rosemary",
					"nameClean": "rosemary",
					"original": "1 tablespoon of Rosemary",
					"originalName": "Rosemary",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1/2 teaspoon of Salt",
					"originalName": "Salt",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10011693,
					"aisle": "Canned and Jarred",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "tomato paste",
					"nameClean": "canned tomatoes",
					"original": "1 can of Tomato Paste",
					"originalName": "Tomato Paste",
					"amount": 1.0,
					"unit": "can",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				}
			],
			"id": 660290,
			"title": "Slow Cooker Lamb Curry",
			"readyInMinutes": 45,
			"servings": 8,
			"sourceUrl": "http://www.foodista.com/recipe/Z5MXNR2V/slow-cooker-lamb-curry",
			"image": "https://spoonacular.com/recipeImages/660290-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Slow Cooker Lamb Curry could satisfy your Indian craving in about <b>45 minutes</b>. This recipe serves 8. For <b>$3.6 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. One serving contains <b>567 calories</b>, <b>67g of protein</b>, and <b>24g of fat</b>. 19 people were impressed by this recipe. Head to the store and pick up fennel powder, oregano, garam masala, and a few other things to make it today. It is a good option if you're following a <b>gluten free</b> diet. It works well as a pretty expensive main course. It is brought to you by Foodista. With a spoonacular <b>score of 92%</b>, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/slow-cooker-lamb-curry-1583131\">Slow cooker lamb curry</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-lamb-stew-1146747\">Slow Cooker Lamb Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-lamb-shanks-484177\">Slow Cooker Lamb Shanks</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free"
			],
			"occasions": [],
			"instructions": "<ol><li>Pull out your slow cooker and add everything into the pot with the exception of the yogurt.</li><li>Now turn on your pot, setting it on low for the next 4-6 hours or high for the next 3-5.</li><li>When the time is up, open up your slow cooker, grab your yogurt and stir it into the curry.</li><li>Serve over rice.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Pull out your slow cooker and add everything into the pot with the exception of the yogurt.Now turn on your pot, setting it on low for the next 4-6 hours or high for the next 3-5.When the time is up, open up your slow cooker, grab your yogurt and stir it into the curry.",
							"ingredients": [
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404718,
									"name": "slow cooker",
									"localizedName": "slow cooker",
									"image": "slow-cooker.jpg"
								},
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							],
							"length": {
								"number": 360,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Serve over rice.",
							"ingredients": [
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-lamb-curry-660290"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": true,
			"weightWatcherSmartPoints": 2,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 23,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 57.52,
			"extendedIngredients": [
				{
					"id": 11482,
					"aisle": "Produce",
					"image": "acorn-squash.jpg",
					"consistency": "SOLID",
					"name": "acorn squash",
					"nameClean": "acorn squash",
					"original": "1 large acorn squash (a bit over a pound)",
					"originalName": "acorn squash (a bit over a pound)",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"(a bit over a pound)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "1 tsp curry powder",
					"originalName": "curry powder",
					"amount": 1.0,
					"unit": "tsp",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 19911,
					"aisle": "Cereal",
					"image": "maple-syrup.png",
					"consistency": "LIQUID",
					"name": "maple syrup",
					"nameClean": "maple syrup",
					"original": "1 Tbs maple syrup",
					"originalName": "maple syrup",
					"amount": 1.0,
					"unit": "Tbs",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbs",
							"unitLong": "Tb"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbs",
							"unitLong": "Tb"
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "1 Tbs olive oil",
					"originalName": "olive oil",
					"amount": 1.0,
					"unit": "Tbs",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbs",
							"unitLong": "Tb"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbs",
							"unitLong": "Tb"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1 dash of salt",
					"originalName": "salt",
					"amount": 1.0,
					"unit": "dash",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "dash",
							"unitLong": "dash"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "dash",
							"unitLong": "dash"
						}
					}
				}
			],
			"id": 650871,
			"title": "Maple & Curry Acorn Squash",
			"readyInMinutes": 45,
			"servings": 3,
			"sourceUrl": "http://www.foodista.com/recipe/HRB3ZH8D/maple-curry-acorn-squash",
			"image": "https://spoonacular.com/recipeImages/650871-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Maple & Curry Acorn Squash can be made <b>in around 45 minutes</b>. One portion of this dish contains about <b>1g of protein</b>, <b>5g of fat</b>, and a total of <b>119 calories</b>. For <b>58 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe serves 3. 2 people were glad they tried this recipe. Not a lot of people really liked this hor d'oeuvre. This recipe from Foodista requires acorn squash, curry powder, maple syrup, and olive oil. It is a <b>very reasonably priced</b> recipe for fans of Indian food. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 72%</b>. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/maple-curry-acorn-squash-1341055\">Maple & Curry Acorn Squash</a>, <a href=\"https://spoonacular.com/recipes/maple-glazed-acorn-squash-407081\">Maple-Glazed Acorn Squash</a>, and <a href=\"https://spoonacular.com/recipes/maple-roasted-acorn-squash-612793\">maple roasted acorn squash</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"paleolithic",
				"lacto ovo vegetarian",
				"primal",
				"fodmap friendly",
				"vegan"
			],
			"occasions": [],
			"instructions": "<ol><li>Preheat oven to 400 F. Line a baking sheet with parchment paper or a silicone mat.</li><li>Rinse the outside of the acorn squash and then chop it in half. Seed the squash and chop off the stem. Next, slice it into one-inch wedges. I like use the natural grooves on the squash as a guide for thickness.</li><li>Place the sliced acorn squash in a medium-sized bowl. Add the rest of the ingredients to the bowl and stir until everything is well incorporated.</li><li>Lay the acorn squash in a single layer on top of the lined baking sheet, cut side down.</li><li>Bake for about 15 minutes. Flip the acorn squash slices to the other side so that both sides will be browned equally.</li><li>Bake the squash for another 10 to 15 minutes or until the pieces can be easily pierced with a fork.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Preheat oven to 400 F. Line a baking sheet with parchment paper or a silicone mat.Rinse the outside of the acorn squash and then chop it in half. Seed the squash and chop off the stem. Next, slice it into one-inch wedges. I like use the natural grooves on the squash as a guide for thickness.",
							"ingredients": [
								{
									"id": 11482,
									"name": "acorn squash",
									"localizedName": "acorn squash",
									"image": "acorn-squash.jpg"
								},
								{
									"id": 10011485,
									"name": "squash",
									"localizedName": "squash",
									"image": "butternut-squash.jpg"
								}
							],
							"equipment": [
								{
									"id": 404770,
									"name": "baking paper",
									"localizedName": "baking paper",
									"image": "baking-paper.jpg"
								},
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg",
									"temperature": {
										"number": 400.0,
										"unit": "Fahrenheit"
									}
								}
							]
						},
						{
							"number": 2,
							"step": "Place the sliced acorn squash in a medium-sized bowl.",
							"ingredients": [
								{
									"id": 11482,
									"name": "acorn squash",
									"localizedName": "acorn squash",
									"image": "acorn-squash.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Add the rest of the ingredients to the bowl and stir until everything is well incorporated.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 4,
							"step": "Lay the acorn squash in a single layer on top of the lined baking sheet, cut side down.",
							"ingredients": [
								{
									"id": 11482,
									"name": "acorn squash",
									"localizedName": "acorn squash",
									"image": "acorn-squash.jpg"
								}
							],
							"equipment": [
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								}
							]
						},
						{
							"number": 5,
							"step": "Bake for about 15 minutes. Flip the acorn squash slices to the other side so that both sides will be browned equally.",
							"ingredients": [
								{
									"id": 11482,
									"name": "acorn squash",
									"localizedName": "acorn squash",
									"image": "acorn-squash.jpg"
								}
							],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Bake the squash for another 10 to 15 minutes or until the pieces can be easily pierced with a fork.",
							"ingredients": [
								{
									"id": 10011485,
									"name": "squash",
									"localizedName": "squash",
									"image": "butternut-squash.jpg"
								}
							],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/maple-curry-acorn-squash-650871"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 23,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 11,
			"healthScore": 9,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 222.19,
			"extendedIngredients": [
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "1/2 teaspoon freshly ground black pepper",
					"originalName": "freshly ground black pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"black",
						"freshly ground"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11549,
					"aisle": "Canned and Jarred",
					"image": "tomato-sauce-or-pasta-sauce.jpg",
					"consistency": "SOLID",
					"name": "tomato sauce",
					"nameClean": "canned tomato sauce",
					"original": "1 can (8 ounce) tomato sauce",
					"originalName": "can tomato sauce",
					"amount": 8.0,
					"unit": "ounce",
					"meta": [
						"canned"
					],
					"measures": {
						"us": {
							"amount": 8.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 226.796,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne pepper",
					"nameClean": "ground cayenne pepper",
					"original": "1/2 teaspoon cayenne pepper",
					"originalName": "cayenne pepper",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1/4 cup chopped fresh cilantro",
					"originalName": "chopped fresh cilantro",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"fresh",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "1 tablespoon minced fresh ginger",
					"originalName": "minced fresh ginger",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"fresh",
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 clove garlic, minced",
					"originalName": "garlic, minced",
					"amount": 1.0,
					"unit": "clove",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						}
					}
				},
				{
					"id": 1012010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "ground cinnamon",
					"nameClean": "ground cinnamon",
					"original": "1 teaspoon ground cinnamon",
					"originalName": "ground cinnamon",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "2 teaspoons ground cumin",
					"originalName": "ground cumin",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1053,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "fluid-cream.jpg",
					"consistency": "LIQUID",
					"name": "heavy cream",
					"nameClean": "cream",
					"original": "1 cup heavy cream",
					"originalName": "heavy cream",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 238.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11979,
					"aisle": "Produce",
					"image": "jalapeno-pepper.png",
					"consistency": "SOLID",
					"name": "jalapeno pepper",
					"nameClean": "jalapeno pepper",
					"original": "1 jalapeno pepper, finely chopped",
					"originalName": "jalapeno pepper, finely chopped",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "lemon juice",
					"nameClean": "lemon juice",
					"original": "1 tablespoon lemon juice",
					"originalName": "lemon juice",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2028,
					"aisle": "Spices and Seasonings",
					"image": "paprika.jpg",
					"consistency": "SOLID",
					"name": "paprika",
					"nameClean": "paprika",
					"original": "2 teaspoons paprika",
					"originalName": "paprika",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1/4 teaspoon salt",
					"originalName": "salt",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1055062,
					"aisle": "Meat",
					"image": "chicken-breasts.png",
					"consistency": "SOLID",
					"name": "chicken breasts",
					"nameClean": "boneless skinless chicken breast",
					"original": "3 boneless skinless chicken breasts, cut into bite-size pieces",
					"originalName": "boneless skinless chicken breasts, cut into bite-size pieces",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"boneless",
						"skinless",
						"cut into bite-size pieces"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1145,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "unsalted butter",
					"original": "1/2 cup unsalted butter, melted (1 stick)",
					"originalName": "unsalted butter, melted (1 stick)",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"unsalted",
						"melted",
						"(1 stick)"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 113.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "SOLID",
					"name": "yogurt",
					"nameClean": "yogurt",
					"original": "1 cup yogurt",
					"originalName": "yogurt",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 245.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 640621,
			"title": "Creamy Chicken Tikka Masala",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/B37W5NWL/creamy-chicken-tikka-masala",
			"image": "https://spoonacular.com/recipeImages/640621-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Creamy Chicken Tikka Masala could satisfy your Indian craving in about <b>45 minutes</b>. This gluten free, primal, and ketogenic recipe serves 4 and costs <b>$2.22 per serving</b>. This main course has <b>567 calories</b>, <b>23g of protein</b>, and <b>49g of fat</b> per serving. Head to the store and pick up heavy cream, salt, ground cinnamon, and a few other things to make it today. This recipe is liked by 11 foodies and cooks. It is brought to you by Foodista. With a spoonacular <b>score of 53%</b>, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/creamy-chicken-tikka-masala-1525147\">Creamy Chicken Tikka Masala</a>, <a href=\"https://spoonacular.com/recipes/chicken-in-creamy-tomato-curry-chicken-tikka-masala-1213577\">Chicken in Creamy Tomato Curry: Chicken Tikka Masala</a>, and <a href=\"https://spoonacular.com/recipes/chicken-in-creamy-tomato-curry-chicken-tikka-masala-311933\">Chicken in Creamy Tomato Curry: Chicken Tikka Masala</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"primal",
				"ketogenic"
			],
			"occasions": [],
			"instructions": "<ol><li>In a large bowl, combine yogurt, lemon juice, 2 teaspoons cumin, cinnamon, cayenne, black pepper, ginger, and 4 teaspoons salt. Stir in chicken, cover, and refrigerate for 1 hour.</li><li>Preheat a grill for high heat.</li><li>Lightly oil the grill grate. Thread chicken onto skewers, and discard marinade. Grill until juices run clear, about 5 minutes on each side.</li><li>Melt butter in a large heavy skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with 2 teaspoons cumin, paprika, and 3 teaspoons salt. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.</li><li>Makes 4 servings</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a large bowl, combine yogurt, lemon juice, 2 teaspoons cumin, cinnamon, cayenne, black pepper, ginger, and 4 teaspoons salt. Stir in chicken, cover, and refrigerate for 1 hour.Preheat a grill for high heat.Lightly oil the grill grate. Thread chicken onto skewers, and discard marinade. Grill until juices run clear, about 5 minutes on each side.Melt butter in a large heavy skillet over medium heat.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 2010,
									"name": "cinnamon",
									"localizedName": "cinnamon",
									"image": "cinnamon.jpg"
								},
								{
									"id": 0,
									"name": "marinade",
									"localizedName": "marinade",
									"image": "seasoning.png"
								},
								{
									"id": 2031,
									"name": "ground cayenne pepper",
									"localizedName": "ground cayenne pepper",
									"image": "chili-powder.jpg"
								},
								{
									"id": 5006,
									"name": "whole chicken",
									"localizedName": "whole chicken",
									"image": "whole-chicken.jpg"
								},
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 3065,
									"name": "skewers",
									"localizedName": "skewers",
									"image": "wooden-skewers.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404706,
									"name": "grill",
									"localizedName": "grill",
									"image": "grill.jpg"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							],
							"length": {
								"number": 65,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Saute garlic and jalapeno for 1 minute. Season with 2 teaspoons cumin, paprika, and 3 teaspoons salt. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes.",
							"ingredients": [
								{
									"id": 11549,
									"name": "tomato sauce",
									"localizedName": "tomato sauce",
									"image": "tomato-sauce-or-pasta-sauce.jpg"
								},
								{
									"id": 11979,
									"name": "jalapeno pepper",
									"localizedName": "jalapeno pepper",
									"image": "jalapeno-pepper.png"
								},
								{
									"id": 2028,
									"name": "paprika",
									"localizedName": "paprika",
									"image": "paprika.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 1053,
									"name": "cream",
									"localizedName": "cream",
									"image": "fluid-cream.jpg"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 21,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add grilled chicken, and simmer for 10 minutes.",
							"ingredients": [
								{
									"id": 1015114,
									"name": "grilled chicken",
									"localizedName": "grilled chicken",
									"image": "rotisserie-chicken.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Transfer to a serving platter, and garnish with fresh cilantro.Makes 4 servings",
							"ingredients": [
								{
									"id": 11165,
									"name": "fresh cilantro",
									"localizedName": "fresh cilantro",
									"image": "cilantro.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/creamy-chicken-tikka-masala-640621"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 2,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 98,
			"healthScore": 9,
			"creditsText": "Lisa's Vegetarian Kitchen",
			"license": "CC BY 2.5 CA",
			"sourceName": "Food and Spice",
			"pricePerServing": 524.19,
			"extendedIngredients": [
				{
					"id": 99017,
					"aisle": "Spices and Seasonings",
					"image": "ajwain.jpg",
					"consistency": "SOLID",
					"name": "ajwain seeds",
					"nameClean": "ajwain",
					"original": "1/2 teaspoon ajwain seeds",
					"originalName": "ajwain seeds",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1032035,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "asafetida",
					"nameClean": "asafoetida",
					"original": "pinch of asafetida",
					"originalName": "pinch of asafetida",
					"amount": 1.0,
					"unit": "pinch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "pinch",
							"unitLong": "pinch"
						}
					}
				},
				{
					"id": 18372,
					"aisle": "Baking",
					"image": "white-powder.jpg",
					"consistency": "SOLID",
					"name": "baking soda",
					"nameClean": "baking soda",
					"original": "1/4 teaspoon baking soda",
					"originalName": "baking soda",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne",
					"nameClean": "ground cayenne pepper",
					"original": "1/2 teaspoon cayenne",
					"originalName": "cayenne",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 16157,
					"aisle": "Ethnic Foods",
					"image": "chickpea-flour-or-another-gluten-free-flour.jpg",
					"consistency": "SOLID",
					"name": "chickpea flour",
					"nameClean": "chickpea flour",
					"original": "1 cup chickpea flour (besan)",
					"originalName": "chickpea flour (besan)",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"(besan)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 120.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chili powder",
					"nameClean": "chili powder",
					"original": "1/2 teaspoon chili powder",
					"originalName": "chili powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 98963,
					"aisle": "Spices and Seasonings",
					"image": "methi.png",
					"consistency": "SOLID",
					"name": "fenugreek leaves",
					"nameClean": "dried fenugreek leaves",
					"original": "1/2 cup dried fenugreek leaves",
					"originalName": "dried fenugreek leaves",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"dried"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 118.294,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 93632,
					"aisle": "Ethnic Foods",
					"image": "ghee.jpg",
					"consistency": "SOLID",
					"name": "ghee",
					"nameClean": "clarified butter",
					"original": "ghee or oil for frying",
					"originalName": "ghee or oil for frying",
					"amount": 10.0,
					"unit": "servings",
					"meta": [
						"for frying"
					],
					"measures": {
						"us": {
							"amount": 10.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 10.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "1/2 teaspoon ground coriander",
					"originalName": "ground coriander",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "1/2 teaspoon ground cumin",
					"originalName": "ground cumin",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1001116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "plain yogurt",
					"original": "2 tablespoons plain yogurt",
					"originalName": "plain yogurt",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 1012047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "sea salt",
					"nameClean": "coarse sea salt",
					"original": "1 teaspoon sea salt",
					"originalName": "sea salt",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 20080,
					"aisle": "Baking",
					"image": "flour.png",
					"consistency": "SOLID",
					"name": "flour",
					"nameClean": "whole wheat flour",
					"original": "1/2 cup whole wheat flour",
					"originalName": "whole wheat flour",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"whole wheat"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 60.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				}
			],
			"id": 716202,
			"title": "Fenugreek Roti",
			"readyInMinutes": 45,
			"servings": 10,
			"sourceUrl": "http://foodandspice.blogspot.com/2012/07/fenugreek-roti.html",
			"image": "https://spoonacular.com/recipeImages/716202-556x370.jpg",
			"imageType": "jpg",
			"summary": "Fenugreek Roti requires roughly <b>45 minutes</b> from start to finish. This bread has <b>80 calories</b>, <b>4g of protein</b>, and <b>2g of fat</b> per serving. This recipe serves 10 and costs $5.24 per serving. If you have chili powder, chickpea flour, baking soda, and a few other ingredients on hand, you can make it. 98 people were glad they tried this recipe. This recipe is typical of Indian cuisine. It is brought to you by foodandspice.blogspot.com. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 65%</b>. This score is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/methi-missi-roti-how-to-make-punjabi-missi-roti-487428\">methi missi roti , how to make punjabi missi roti</a>, <a href=\"https://spoonacular.com/recipes/fenugreek-tea-benefits-608195\">Fenugreek Tea & Benefits</a>, and <a href=\"https://spoonacular.com/recipes/whole-roast-chicken-with-fenugreek-574725\">Whole Roast Chicken with Fenugreek</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"bread"
			],
			"diets": [
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "Soak the dried fenugreek leaves in warm water for 5 to 10 minutes.  Drain, making sure to squeeze out excess liquid.Sift the flours and baking soda in a small strainer into a medium bowl. Stir in the salt, chili powder, cayenne, cumin, coriander, ajwain seeds, asafetida, yogurt and fenugreek leaves. Mix in about 1/4 cup of water to make a semi-hard batter. Cover and let stand at room temperature for 1 hour. Dusting your hands with flour, divide the dough into 10 to 12 small balls. Roll out each ball into a roughly 3-inch circle. Brush a non-stick pan with a bit of ghee or oil and heat over medium heat. When hot, add a rolled out portion to the pan and cook for 4 minutes or until the bottom is browned. Sprinkle with a bit of oil, flip and fry for another 2 to 3 minutes or until both sides are browned. Transfer to a plate, keep heated in a 150 oven, and repeat for the rest of the pancakes.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Soak the dried fenugreek leaves in warm water for 5 to 10 minutes.",
							"ingredients": [
								{
									"id": 98963,
									"name": "dried fenugreek leaves",
									"localizedName": "dried fenugreek leaves",
									"image": "methi.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Drain, making sure to squeeze out excess liquid.Sift the flours and baking soda in a small strainer into a medium bowl. Stir in the salt, chili powder, cayenne, cumin, coriander, ajwain seeds, asafetida, yogurt and fenugreek leaves.",
							"ingredients": [
								{
									"id": 98963,
									"name": "dried fenugreek leaves",
									"localizedName": "dried fenugreek leaves",
									"image": "methi.png"
								},
								{
									"id": 99017,
									"name": "ajwain",
									"localizedName": "ajwain",
									"image": "ajwain.jpg"
								},
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 18372,
									"name": "baking soda",
									"localizedName": "baking soda",
									"image": "white-powder.jpg"
								},
								{
									"id": 1032035,
									"name": "asafoetida",
									"localizedName": "asafoetida",
									"image": "curry-powder.jpg"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								},
								{
									"id": 2031,
									"name": "ground cayenne pepper",
									"localizedName": "ground cayenne pepper",
									"image": "chili-powder.jpg"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 1002014,
									"name": "cumin",
									"localizedName": "cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 405600,
									"name": "sieve",
									"localizedName": "sieve",
									"image": "strainer.png"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 3,
							"step": "Mix in about 1/4 cup of water to make a semi-hard batter. Cover and let stand at room temperature for 1 hour. Dusting your hands with flour, divide the dough into 10 to 12 small balls.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 60,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Roll out each ball into a roughly 3-inch circle.",
							"ingredients": [
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Brush a non-stick pan with a bit of ghee or oil and heat over medium heat. When hot, add a rolled out portion to the pan and cook for 4 minutes or until the bottom is browned.",
							"ingredients": [
								{
									"id": 93632,
									"name": "ghee",
									"localizedName": "ghee",
									"image": "ghee.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 4,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Sprinkle with a bit of oil, flip and fry for another 2 to 3 minutes or until both sides are browned.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 2,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Transfer to a plate, keep heated in a 150 oven, and repeat for the rest of the pancakes.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/fenugreek-roti-716202"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 9,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 45,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 408.67,
			"extendedIngredients": [
				{
					"id": 11482,
					"aisle": "Produce",
					"image": "acorn-squash.jpg",
					"consistency": "SOLID",
					"name": "acorn squashes",
					"nameClean": "acorn squash",
					"original": "4 acorn squashes cut in half, gutted",
					"originalName": "acorn squashes cut in half, gutted",
					"amount": 4.0,
					"unit": "",
					"meta": [
						"cut in half, gutted"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10020444,
					"aisle": "Pasta and Rice",
					"image": "rice-white-long-grain-or-basmatii-cooked.jpg",
					"consistency": "SOLID",
					"name": "basmati rice soaked in water",
					"nameClean": "basmati rice",
					"original": "1/2 cup basmati rice soaked in water",
					"originalName": "basmati rice soaked in water",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 92.5,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "1 cup water",
					"originalName": "water",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 236.588,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "3 tablespoons garam masala (click for a homemade recipe or store-bought is fine)",
					"originalName": "garam masala (click for a homemade recipe or store-bought is fine)",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [
						"homemade",
						"store-bought",
						"for a  recipe or  is fine",
						"(click )"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10011282,
					"aisle": "Produce",
					"image": "red-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "red onion",
					"original": "1 medium red onion- diced",
					"originalName": "red onion- diced",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"diced",
						"red"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 10111333,
					"aisle": "Produce",
					"image": "green-pepper.jpg",
					"consistency": "SOLID",
					"name": "peppers",
					"nameClean": "peppers",
					"original": "4 small sweet peppers- diced",
					"originalName": "sweet peppers- diced",
					"amount": 4.0,
					"unit": "small",
					"meta": [
						"diced",
						"sweet"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "small",
							"unitLong": "smalls"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "small",
							"unitLong": "smalls"
						}
					}
				},
				{
					"id": 12087,
					"aisle": "Nuts",
					"image": "cashews.jpg",
					"consistency": "SOLID",
					"name": "cashew nuts- a bit",
					"nameClean": "cashews",
					"original": "handful cashew nuts- chopped a bit",
					"originalName": "cashew nuts- chopped a bit",
					"amount": 1.0,
					"unit": "handful",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						}
					}
				},
				{
					"id": 2037,
					"aisle": "Gourmet",
					"image": "saffron.jpg",
					"consistency": "SOLID",
					"name": "saffron",
					"nameClean": "saffron",
					"original": "of saffron",
					"originalName": "of saffron",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "handful cilantro- finely chopped",
					"originalName": "cilantro- finely chopped",
					"amount": 1.0,
					"unit": "handful",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						}
					}
				},
				{
					"id": 16112,
					"aisle": "Ethnic Foods",
					"image": "miso.jpg",
					"consistency": "SOLID",
					"name": "biryani paste- recipe below",
					"nameClean": "miso",
					"original": "4 tablespoons biryani paste- recipe BELOW (or store-bought)",
					"originalName": "biryani paste- recipe BELOW (or store-bought)",
					"amount": 4.0,
					"unit": "tablespoons",
					"meta": [
						"store-bought",
						"(or )"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 medium onion- cut into thick slices (garnishing)",
					"originalName": "onion- cut into thick slices (garnishing)",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"thick",
						"cut into  slices (garnishing)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "salt to taste",
					"originalName": "salt to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "coarse pepper",
					"nameClean": "black pepper",
					"original": "coarse black pepper",
					"originalName": "coarse black pepper",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4679,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "cooking-spray.png",
					"consistency": "LIQUID",
					"name": "pam original flavor",
					"nameClean": "vegetable oil cooking spray",
					"original": "PAM original flavor",
					"originalName": "PAM original flavor",
					"amount": 4.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "1 tablespoon vegetable oil",
					"originalName": "vegetable oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10611282,
					"aisle": "Produce",
					"image": "white-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "white onion",
					"original": "1 medium white onion- diced",
					"originalName": "white onion- diced",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"diced",
						"white"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 10011529,
					"aisle": "Produce",
					"image": "beefsteak-tomato.jpg",
					"consistency": "SOLID",
					"name": "beefsteak tomato",
					"nameClean": "beefsteak tomato",
					"original": "1 beefsteak tomato- diced",
					"originalName": "beefsteak tomato- diced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "4 cloves garlic- crushed and minced (click HERE for amazing garlic tips!)",
					"originalName": "garlic- crushed and minced (click HERE for amazing garlic tips!)",
					"amount": 4.0,
					"unit": "cloves",
					"meta": [
						"minced",
						"crushed",
						"for amazing garlic tips!",
						"(click HERE )"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "2 tablespoons ginger- freshly grated (need help Tackling Ginger?)",
					"originalName": "ginger- freshly grated (need help Tackling Ginger?)",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"freshly grated",
						"(need help Tackling Ginger?)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chili powder",
					"nameClean": "chili powder",
					"original": "1 tablespoon chili powder (it should be spicy!)",
					"originalName": "chili powder (it should be spicy!)",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"(it should be spicy!)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "handful chopped cilantro",
					"originalName": "chopped cilantro",
					"amount": 1.0,
					"unit": "handful",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						}
					}
				},
				{
					"id": 16112,
					"aisle": "Ethnic Foods",
					"image": "miso.jpg",
					"consistency": "SOLID",
					"name": "hefty biryani paste",
					"nameClean": "miso",
					"original": "5 tablespoons hefty Biryani paste (I use Patak's Brand)",
					"originalName": "hefty Biryani paste (I use Patak's Brand)",
					"amount": 5.0,
					"unit": "tablespoons",
					"meta": [
						"(I use Patak's Brand)"
					],
					"measures": {
						"us": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 5.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "1/2 tablespoon vegetable oil",
					"originalName": "vegetable oil",
					"amount": 0.5,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				}
			],
			"id": 658482,
			"title": "Roasted Acorn Squash Stuffed W/spicy Biryani (Veg/vegan)",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/CVYJ4256/roasted-acorn-squash-stuffed-wspicy-biryani-vegvegan",
			"image": "https://spoonacular.com/recipeImages/658482-556x370.jpg",
			"imageType": "jpg",
			"summary": "Roasted Acorn Squash Stuffed with spicy Biryani (Veg/vegan) is a side dish that serves 4. For <b>$4.09 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>15g of protein</b>, <b>13g of fat</b>, and a total of <b>514 calories</b>. 2 people have made this recipe and would make it again. Head to the store and pick up onion, garam masala, cilantro, and a few other things to make it today. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is a <b>rather expensive</b> recipe for fans of Indian food. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 92%</b>, which is outstanding. Similar recipes are <a href=\"https://spoonacular.com/recipes/spicy-stuffed-acorn-squash-513040\">Spicy Stuffed Acorn Squash</a>, <a href=\"https://spoonacular.com/recipes/spicy-cod-fillet-with-coconut-squash-sauce-over-roasted-acorn-squash-227025\">Spicy Cod Fillet with Coconut-Squash Sauce Over Roasted Acorn Squash</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-acorn-squash-vegan-1140337\">Stuffed Acorn Squash (Vegan)</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"side dish"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "Preheat the oven to 400 degrees. On a baking sheet place the squash halves, spray with PAM and sprinkle with 1-2 tbsp garam masala. Place in the oven and BROIL till tender and charred- about 10-15 minutes.\nWhile the squashes are roasting, in a large skillet, spray with PAM and add vegetable oil and set over medium heat. Add the cashews and saute until fragrant and slightly darkened. Add onions and peppers, sprinkle with black pepper and saute until soft, about 5-7 minutes. Once the onions and peppers are soft, but now brown, add the soaked basmati rice (make sure not to get any water in it!). Saute for 5-7 minutes. You want to toast the the rice.\nRemove the squash from the oven and cool for a few minutes before handling. Score the squash into small cubes, WITHOUT cutting through the skin. Scoop the cubes out into a bowl and set aside. Keep the shell aside, DONT throw out!\nOnce the rice is toasted add 1 cup of water, pinch of saffron, cover and cook on medium-low heat, about 15 minutes. You want the rice to be cooked thru, not mushy so dont mix it around too much! Once the rice is cooked, add the cubed squash, tossing gently (you dont want the squash to break and mush around the rice). Add the Biryani paste and toss to coat. Mix in 3/4 of the chopped cilantro. Taste for salt and biryani flavor- it should be strong, spicy and aromatic.\nIn a small skillet, spray with PAM and set over medium-high heat. Add onion slices, and saute without breaking up the circles. Cook until brown-ish about 4-5 minutes. Set aside.\nFill each squash bowl with rice, just coming over the top. Top each one with an onion round and sprinkle with remaining chopped cilantro. Serve with yogurt or raita.\nBiryani paste:\nIn a medium skillet, spray with pam, add oil and set over medium-high flame. Add onions and tomatoes, saute until golden-brown about 4-5 minutes. Add garlic, ginger, chili powder and cilantro. Saute until vegetables are soft and fragrant about 4-5 minutes. Add the biryani paste and mix well, making sure all the veggies are coated. Remove from the heat and let cool (10-15 minutes).\nIn a grinder/food processor, add the biryani mixture and grind until smooth (slightly chunky is ok). Store in an air tight container. Can be kept in the fridge for 1-2 weeks, or in the freezer- for a while!",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Preheat the oven to 400 degrees. On a baking sheet place the squash halves, spray with PAM and sprinkle with 1-2 tbsp garam masala.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 10011485,
									"name": "squash",
									"localizedName": "squash",
									"image": "butternut-squash.jpg"
								},
								{
									"id": 4679,
									"name": "cooking spray",
									"localizedName": "cooking spray",
									"image": "cooking-spray.png"
								}
							],
							"equipment": [
								{
									"id": 404727,
									"name": "baking sheet",
									"localizedName": "baking sheet",
									"image": "baking-sheet.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Place in the oven and BROIL till tender and charred- about 10-15 minutes.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "While the squashes are roasting, in a large skillet, spray with PAM and add vegetable oil and set over medium heat.",
							"ingredients": [
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 4679,
									"name": "cooking spray",
									"localizedName": "cooking spray",
									"image": "cooking-spray.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Add the cashews and saute until fragrant and slightly darkened.",
							"ingredients": [
								{
									"id": 12087,
									"name": "cashews",
									"localizedName": "cashews",
									"image": "cashews.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add onions and peppers, sprinkle with black pepper and saute until soft, about 5-7 minutes. Once the onions and peppers are soft, but now brown, add the soaked basmati rice (make sure not to get any water in it!).",
							"ingredients": [
								{
									"id": 10020444,
									"name": "basmati rice",
									"localizedName": "basmati rice",
									"image": "rice-white-long-grain-or-basmatii-cooked.jpg"
								},
								{
									"id": 1002030,
									"name": "black pepper",
									"localizedName": "black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 10111333,
									"name": "peppers",
									"localizedName": "peppers",
									"image": "green-pepper.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 7,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Saute for 5-7 minutes. You want to toast the the rice.",
							"ingredients": [
								{
									"id": 0,
									"name": "sandwich bread",
									"localizedName": "sandwich bread",
									"image": "white-bread.jpg"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 7,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "Remove the squash from the oven and cool for a few minutes before handling. Score the squash into small cubes, WITHOUT cutting through the skin. Scoop the cubes out into a bowl and set aside. Keep the shell aside, DONT throw out!",
							"ingredients": [
								{
									"id": 10011485,
									"name": "squash",
									"localizedName": "squash",
									"image": "butternut-squash.jpg"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								},
								{
									"id": 404784,
									"name": "oven",
									"localizedName": "oven",
									"image": "oven.jpg"
								}
							]
						},
						{
							"number": 8,
							"step": "Once the rice is toasted add 1 cup of water, pinch of saffron, cover and cook on medium-low heat, about 15 minutes. You want the rice to be cooked thru, not mushy so dont mix it around too much! Once the rice is cooked, add the cubed squash, tossing gently (you dont want the squash to break and mush around the rice).",
							"ingredients": [
								{
									"id": 2037,
									"name": "saffron",
									"localizedName": "saffron",
									"image": "saffron.jpg"
								},
								{
									"id": 10011485,
									"name": "squash",
									"localizedName": "squash",
									"image": "butternut-squash.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 9,
							"step": "Add the Biryani paste and toss to coat.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 10,
							"step": "Mix in 3/4 of the chopped cilantro. Taste for salt and biryani flavor- it should be strong, spicy and aromatic.",
							"ingredients": [
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 11,
							"step": "In a small skillet, spray with PAM and set over medium-high heat.",
							"ingredients": [
								{
									"id": 4679,
									"name": "cooking spray",
									"localizedName": "cooking spray",
									"image": "cooking-spray.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 12,
							"step": "Add onion slices, and saute without breaking up the circles. Cook until brown-ish about 4-5 minutes. Set aside.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 13,
							"step": "Fill each squash bowl with rice, just coming over the top. Top each one with an onion round and sprinkle with remaining chopped cilantro.",
							"ingredients": [
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 10011485,
									"name": "squash",
									"localizedName": "squash",
									"image": "butternut-squash.jpg"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": [
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 14,
							"step": "Serve with yogurt or raita.",
							"ingredients": [
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 1011116,
									"name": "raita",
									"localizedName": "raita",
									"image": "raita-or-tzaziki.png"
								}
							],
							"equipment": []
						}
					]
				},
				{
					"name": "Biryani paste",
					"steps": [
						{
							"number": 1,
							"step": "In a medium skillet, spray with pam, add oil and set over medium-high flame.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 4679,
									"name": "cooking spray",
									"localizedName": "cooking spray",
									"image": "cooking-spray.png"
								}
							],
							"equipment": [
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Add onions and tomatoes, saute until golden-brown about 4-5 minutes.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add garlic, ginger, chili powder and cilantro.",
							"ingredients": [
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Saute until vegetables are soft and fragrant about 4-5 minutes.",
							"ingredients": [
								{
									"id": 11583,
									"name": "vegetable",
									"localizedName": "vegetable",
									"image": "mixed-vegetables.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Add the biryani paste and mix well, making sure all the veggies are coated.",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Remove from the heat and let cool (10-15 minutes).",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 15,
								"unit": "minutes"
							}
						},
						{
							"number": 7,
							"step": "In a grinder/food processor, add the biryani mixture and grind until smooth (slightly chunky is ok). Store in an air tight container. Can be kept in the fridge for 1-2 weeks, or in the freezer- for a while!",
							"ingredients": [],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/roasted-acorn-squash-stuffed-with-spicy-biryani-veg-vegan-658482"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": true,
			"weightWatcherSmartPoints": 6,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 16,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 192.82,
			"extendedIngredients": [
				{
					"id": 99009,
					"aisle": "Canned and Jarred",
					"image": "coconut-milk.jpg",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "light coconut milk",
					"original": "1 can coconut milk (I don't recommend using light)",
					"originalName": "coconut milk (I don't recommend using light)",
					"amount": 1.0,
					"unit": "can",
					"meta": [
						"light",
						"(I don't recommend using )"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "worth of water",
					"nameClean": "water",
					"original": "2 cans 'worth of water",
					"originalName": "worth of water",
					"amount": 2.0,
					"unit": "cans",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cans",
							"unitLong": "cans"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "cans",
							"unitLong": "cans"
						}
					}
				},
				{
					"id": 93605,
					"aisle": "Ethnic Foods",
					"image": "chili-paste.png",
					"consistency": "SOLID",
					"name": "curry paste",
					"nameClean": "red curry paste",
					"original": "2 tablespoons red curry paste",
					"originalName": "red curry paste",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger paste",
					"nameClean": "fresh ginger",
					"original": "1 tablespoon fresh minced ginger, or ginger paste",
					"originalName": "fresh minced ginger, or ginger paste",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"fresh",
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11300,
					"aisle": "Produce",
					"image": "snow-peas.jpg",
					"consistency": "SOLID",
					"name": "snow peas",
					"nameClean": "snow peas",
					"original": "1 cup heaping fresh snow peas",
					"originalName": "heaping fresh snow peas",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 98.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11052,
					"aisle": "Produce",
					"image": "green-beans-or-string-beans.jpg",
					"consistency": "SOLID",
					"name": "string beans",
					"nameClean": "green beans",
					"original": "1 cup string beans, cut in half",
					"originalName": "string beans, cut in half",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"cut in half"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 110.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11124,
					"aisle": "Produce",
					"image": "sliced-carrot.png",
					"consistency": "SOLID",
					"name": "carrot",
					"nameClean": "carrot",
					"original": "1 large carrot, diced",
					"originalName": "carrot, diced",
					"amount": 1.0,
					"unit": "large",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 1012044,
					"aisle": "Spices and Seasonings",
					"image": "lemon-basil.jpg",
					"consistency": "SOLID",
					"name": "of thai basil leaves",
					"nameClean": "thai basil",
					"original": "Small handful of Thai basil leaves, left whole",
					"originalName": "Small of Thai basil leaves, left whole",
					"amount": 1.0,
					"unit": "handful",
					"meta": [
						"whole"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "handful",
							"unitLong": "handful"
						}
					}
				},
				{
					"id": 9160,
					"aisle": "Produce",
					"image": "lime-juice.png",
					"consistency": "LIQUID",
					"name": "lime juice",
					"nameClean": "lime juice",
					"original": "1/4 cup lime juice, or more to taste",
					"originalName": "lime juice, or more to taste",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 60.5,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 16424,
					"aisle": "Ethnic Foods",
					"image": "soy-sauce.jpg",
					"consistency": "LIQUID",
					"name": "soy sauce",
					"nameClean": "lower sodium soy sauce",
					"original": "1 tablespoon low-sodium soy sauce",
					"originalName": "low-sodium soy sauce",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [
						"low-sodium"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 4058,
					"aisle": "Ethnic Foods",
					"image": "sesame-oil.png",
					"consistency": "LIQUID",
					"name": "a few es of sesame oil",
					"nameClean": "sesame oil",
					"original": "A few 1 tablespoones of sesame oil",
					"originalName": "A few es of sesame oil",
					"amount": 3.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chili powder",
					"nameClean": "chili powder",
					"original": "of chili powder",
					"originalName": "of chili powder",
					"amount": 6.0,
					"unit": "servings",
					"meta": [],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 10016213,
					"aisle": "Refrigerated",
					"image": "tofu.png",
					"consistency": "SOLID",
					"name": "tofu",
					"nameClean": "firm tofu",
					"original": "1 pound firm tofu, lightly pressed and cubed",
					"originalName": "firm tofu, lightly pressed and cubed",
					"amount": 1.0,
					"unit": "pound",
					"meta": [
						"firm",
						"cubed",
						"pressed"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1/2 teaspoon salt, or more to taste",
					"originalName": "salt, or more to taste",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11821,
					"aisle": "Produce",
					"image": "red-pepper.jpg",
					"consistency": "SOLID",
					"name": "bell pepper",
					"nameClean": "red pepper",
					"original": "1 red bell pepper, cut into strips (for garnish)",
					"originalName": "red bell pepper, cut into strips (for garnish)",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"red",
						"cut into strips (for garnish)"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "pepper",
					"nameClean": "black pepper",
					"original": "Freshly ground black pepper (for garnish)",
					"originalName": "Freshly ground black pepper (for garnish)",
					"amount": 6.0,
					"unit": "servings",
					"meta": [
						"black",
						"freshly ground",
						"(for garnish)"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				}
			],
			"id": 663092,
			"title": "Thai Coconut Curry Soup",
			"readyInMinutes": 45,
			"servings": 6,
			"sourceUrl": "https://www.foodista.com/recipe/7GY62Y7C/thai-coconut-curry-soup",
			"image": "https://spoonacular.com/recipeImages/663092-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many Indian recipes, so give Thai Coconut Curry Soup a try. This gluten free, dairy free, lacto ovo vegetarian, and fodmap friendly recipe serves 6 and costs <b>$1.93 per serving</b>. One portion of this dish contains about <b>8g of protein</b>, <b>15g of fat</b>, and a total of <b>218 calories</b>. <b>Autumn</b> will be even more special with this recipe. This recipe from Foodista has 2 fans. Head to the store and pick up string beans, worth of water, curry paste, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It works well as a hor d'oeuvre. With a spoonacular <b>score of 57%</b>, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/thai-coconut-curry-soup-1521949\">Thai Coconut Curry Soup</a>, <a href=\"https://spoonacular.com/recipes/thai-coconut-curry-soup-1142749\">Thai Coconut Curry Soup</a>, and <a href=\"https://spoonacular.com/recipes/thai-coconut-curry-soup-1162511\">Thai Coconut Curry Soup</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"soup",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"fodmap friendly",
				"vegan"
			],
			"occasions": [
				"fall",
				"winter"
			],
			"instructions": "Bring coconut milk and water just to a boil, then reduce heat to a low simmer.\nAdd curry and ginger. Whisk until both are well-incorporated.\nAdd carrots and spices (except basil leaves). Cover and simmer until carrots are almost soft, but take care not to overcook them. Nobody likes a mushy carrot.\nAdd tofu. Cover and simmer a few more minutes.\nAdd all remaining ingredients (except garnishes). Cover and simmer for just a few more minutes, until beans turn bright green but are still crisp.\nGarnish with bell pepper strips and freshly ground black pepper.\nOptional addition: If you really like the coconut flavor and want to take it over the top, add a couple of tablespoons of coconut oil when you put in your tofu. It's amazing!",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Bring coconut milk and water just to a boil, then reduce heat to a low simmer.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "Add curry and ginger.",
							"ingredients": [
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Whisk until both are well-incorporated.",
							"ingredients": [],
							"equipment": [
								{
									"id": 404661,
									"name": "whisk",
									"localizedName": "whisk",
									"image": "whisk.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Add carrots and spices (except basil leaves). Cover and simmer until carrots are almost soft, but take care not to overcook them. Nobody likes a mushy carrot.",
							"ingredients": [
								{
									"id": 2044,
									"name": "fresh basil",
									"localizedName": "fresh basil",
									"image": "fresh-basil.jpg"
								},
								{
									"id": 11124,
									"name": "carrot",
									"localizedName": "carrot",
									"image": "sliced-carrot.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add tofu. Cover and simmer a few more minutes.",
							"ingredients": [
								{
									"id": 16213,
									"name": "tofu",
									"localizedName": "tofu",
									"image": "tofu.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Add all remaining ingredients (except garnishes). Cover and simmer for just a few more minutes, until beans turn bright green but are still crisp.",
							"ingredients": [
								{
									"id": 0,
									"name": "beans",
									"localizedName": "beans",
									"image": "kidney-beans.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Garnish with bell pepper strips and freshly ground black pepper.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "ground black pepper",
									"localizedName": "ground black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 10211821,
									"name": "bell pepper",
									"localizedName": "bell pepper",
									"image": "bell-pepper-orange.png"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Optional addition: If you really like the coconut flavor and want to take it over the top, add a couple of tablespoons of coconut oil when you put in your tofu. It's amazing!",
							"ingredients": [
								{
									"id": 4047,
									"name": "coconut oil",
									"localizedName": "coconut oil",
									"image": "oil-coconut.jpg"
								},
								{
									"id": 12104,
									"name": "coconut",
									"localizedName": "coconut",
									"image": "coconut.jpg"
								},
								{
									"id": 16213,
									"name": "tofu",
									"localizedName": "tofu",
									"image": "tofu.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/thai-coconut-curry-soup-663092"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 14,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 30,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 216.25,
			"extendedIngredients": [
				{
					"id": 1014582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "canola oil",
					"nameClean": "canola oil",
					"original": "3 tablespoons canola oil",
					"originalName": "canola oil",
					"amount": 3.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chilli powder",
					"nameClean": "chili powder",
					"original": "1 teaspoon red chilli powder",
					"originalName": "red chilli powder",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"red"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1/2 cup cilantro",
					"originalName": "cilantro",
					"amount": 0.5,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 8.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1002010,
					"aisle": "Spices and Seasonings",
					"image": "cinnamon.jpg",
					"consistency": "SOLID",
					"name": "cinnamon stick",
					"nameClean": "cinnamon stick",
					"original": "1 inch cinnamon stick",
					"originalName": "cinnamon stick",
					"amount": 1.0,
					"unit": "inch",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						}
					}
				},
				{
					"id": 2064,
					"aisle": "Spices and Seasonings",
					"image": "mint.jpg",
					"consistency": "SOLID",
					"name": "mint leaves",
					"nameClean": "mint",
					"original": "1/4 cup fresh mint leaves",
					"originalName": "fresh mint leaves",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 11.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11463,
					"aisle": "Frozen",
					"image": "spinach-frozen.jpg",
					"consistency": "SOLID",
					"name": "spinach",
					"nameClean": "frozen spinach",
					"original": "10 ounces frozen spinach, thawed",
					"originalName": "frozen spinach, thawed",
					"amount": 10.0,
					"unit": "ounces",
					"meta": [
						"frozen",
						"thawed"
					],
					"measures": {
						"us": {
							"amount": 10.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 283.495,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1/4 teaspoon garam masala",
					"originalName": "garam masala",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic glove",
					"nameClean": "garlic",
					"original": "1 garlic glove, minced",
					"originalName": "garlic glove, minced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 93754,
					"aisle": "Ethnic Foods",
					"image": "ginger-garlic-paste.png",
					"consistency": "SOLID",
					"name": "ginger paste",
					"nameClean": "ginger paste",
					"original": "1 teaspoon ginger paste",
					"originalName": "ginger paste",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 1022006,
					"aisle": "Spices and Seasonings",
					"image": "cardamom.jpg",
					"consistency": "SOLID",
					"name": "cardamom pods",
					"nameClean": "green cardamoms",
					"original": "3 green cardamom pods",
					"originalName": "green cardamom pods",
					"amount": 3.0,
					"unit": "",
					"meta": [
						"green"
					],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 31015,
					"aisle": "Produce",
					"image": "chili-peppers-green.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "green chili pepper",
					"original": "2 hot green chillies, finely sliced (less if you don't",
					"originalName": "hot green chillies, finely sliced (less if you don't",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"green",
						"hot",
						"finely sliced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10023572,
					"aisle": "Meat",
					"image": "fresh-ground-beef.jpg",
					"consistency": "SOLID",
					"name": "ground beef",
					"nameClean": "ground chuck",
					"original": "1 pound ground beef",
					"originalName": "ground beef",
					"amount": 1.0,
					"unit": "pound",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "lb",
							"unitLong": "pound"
						},
						"metric": {
							"amount": 453.592,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1012014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "ground cumin",
					"nameClean": "ground cumin",
					"original": "1/2 teaspoon ground cumin",
					"originalName": "ground cumin",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1002030,
					"aisle": "Spices and Seasonings",
					"image": "pepper.jpg",
					"consistency": "SOLID",
					"name": "ground pepper",
					"nameClean": "black pepper",
					"original": "1/4 teaspoon ground black pepper",
					"originalName": "ground black pepper",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [
						"black"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1/2 cup onion, chopped",
					"originalName": "onion, chopped",
					"amount": 0.5,
					"unit": "cup",
					"meta": [
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 80.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1001116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "plain yogurt",
					"original": "1 cup plain yogurt, whipped smooth",
					"originalName": "plain yogurt, whipped smooth",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 245.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "1/2 teaspoon Salt",
					"originalName": "Salt",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				}
			],
			"id": 645961,
			"title": "Indian-Spiced Ground Beef Main Dish",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/JJJPDFJX/ground-beef-with-spinach-and-mint",
			"image": "https://spoonacular.com/recipeImages/645961-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Indian-Spiced Ground Beef Main Dish can be made <b>in roughly 45 minutes</b>. One serving contains <b>466 calories</b>, <b>25g of protein</b>, and <b>36g of fat</b>. This recipe serves 4. For <b>$2.16 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. 2 people were impressed by this recipe. It is a <b>reasonably priced</b> recipe for fans of Indian food. It works well as a main course. It is a good option if you're following a <b>gluten free and ketogenic</b> diet. Head to the store and pick up spinach, mint leaves, chillies, and a few other things to make it today. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 76%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/indian-spiced-ground-beef-main-dish-1632293\">Indian-Spiced Ground Beef Main Dish</a>, <a href=\"https://spoonacular.com/recipes/beef-stir-fry-salad-main-dish-386200\">Beef Stir-Fry Salad Main Dish</a>, and <a href=\"https://spoonacular.com/recipes/picadillo-cubano-cuban-ground-beef-dish-1275283\">Picadillo Cubano (Cuban Ground Beef Dish)</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"ketogenic"
			],
			"occasions": [],
			"instructions": "<ol><li>Make a paste by pureeing the spinach, cilantro and mint in a food processor, with a tbsp or two of water. (don't go overboard on the mint otherwise the whole paste tastes bitter)</li><li>Heat the oil on medium and throw in the cardamom pods, cloves and cinnamon stick. After 1 minute add the onion and saute till golden-brown.</li><li>Then put in the green chillies, chopped garlic and ginger and cook for another minute.</li><li>Stir in the beef, red chilli powder, ground cumin, garam masala, ground black pepper, salt and cook on medium-high heat for 10 mins, stirring often.</li><li>Add half of the yogurt and mix well till incorporated and cook for another 2 mins.</li><li>Put in all of the green paste, mix well, and simmer for 10 mins.</li><li>Stir in the rest of the yogurt, cooking the whole thing for a further 5 mins. Taste for salt. Serve hot with parathas and fresh tomato salsa!</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Make a paste by pureeing the spinach, cilantro and mint in a food processor, with a tbsp or two of water. (don't go overboard on the mint otherwise the whole paste tastes bitter)",
							"ingredients": [
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								},
								{
									"id": 10011457,
									"name": "spinach",
									"localizedName": "spinach",
									"image": "spinach.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2064,
									"name": "mint",
									"localizedName": "mint",
									"image": "mint.jpg"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						},
						{
							"number": 2,
							"step": "Heat the oil on medium and throw in the cardamom pods, cloves and cinnamon stick. After 1 minute add the onion and saute till golden-brown.Then put in the green chillies, chopped garlic and ginger and cook for another minute.Stir in the beef, red chilli powder, ground cumin, garam masala, ground black pepper, salt and cook on medium-high heat for 10 mins, stirring often.",
							"ingredients": [
								{
									"id": 1002030,
									"name": "ground black pepper",
									"localizedName": "ground black pepper",
									"image": "pepper.jpg"
								},
								{
									"id": 1002010,
									"name": "cinnamon stick",
									"localizedName": "cinnamon stick",
									"image": "cinnamon.jpg"
								},
								{
									"id": 31015,
									"name": "green chili pepper",
									"localizedName": "green chili pepper",
									"image": "chili-peppers-green.jpg"
								},
								{
									"id": 1002006,
									"name": "cardamom pods",
									"localizedName": "cardamom pods",
									"image": "cardamom.jpg"
								},
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 1012014,
									"name": "ground cumin",
									"localizedName": "ground cumin",
									"image": "ground-cumin.jpg"
								},
								{
									"id": 1002011,
									"name": "clove",
									"localizedName": "clove",
									"image": "cloves.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 23572,
									"name": "beef",
									"localizedName": "beef",
									"image": "beef-cubes-raw.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 11,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add half of the yogurt and mix well till incorporated and cook for another 2 mins.Put in all of the green paste, mix well, and simmer for 10 mins.Stir in the rest of the yogurt, cooking the whole thing for a further 5 mins. Taste for salt.",
							"ingredients": [
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 17,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Serve hot with parathas and fresh tomato salsa!",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 6164,
									"name": "salsa",
									"localizedName": "salsa",
									"image": "salsa.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/indian-spiced-ground-beef-main-dish-645961"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": false,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 14,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 47,
			"healthScore": 6,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 40.73,
			"extendedIngredients": [
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "ice water",
					"nameClean": "water",
					"original": "1/2 c. ice water",
					"originalName": "ice water",
					"amount": 0.5,
					"unit": "c",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 118.294,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1011256,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "nonfat greek yogurt",
					"nameClean": "fat free greek yogurt",
					"original": "1/3 c. nonfat greek yogurt",
					"originalName": "nonfat greek yogurt",
					"amount": 0.33333334,
					"unit": "c",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.33333334,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 66.667,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1014582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "canola oil",
					"nameClean": "canola oil",
					"original": "1/4 c. canola oil, plus 1 t. for cooking the naan",
					"originalName": "canola oil, plus 1 t. for cooking the naan",
					"amount": 0.25,
					"unit": "c",
					"meta": [
						"for cooking the naan"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 56.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1125,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "egg-yolk.jpg",
					"consistency": "SOLID",
					"name": "egg yolk",
					"nameClean": "egg yolk",
					"original": "1 large egg yolk",
					"originalName": "egg yolk",
					"amount": 1.0,
					"unit": "large",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "large",
							"unitLong": "large"
						}
					}
				},
				{
					"id": 20081,
					"aisle": "Baking",
					"image": "flour.png",
					"consistency": "SOLID",
					"name": "flour",
					"nameClean": "wheat flour",
					"original": "2 1/4 c. flour",
					"originalName": "flour",
					"amount": 2.25,
					"unit": "c",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 281.25,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 19335,
					"aisle": "Baking",
					"image": "sugar-in-bowl.png",
					"consistency": "SOLID",
					"name": "sugar",
					"nameClean": "sugar",
					"original": "1 1/4 t. sugar",
					"originalName": "sugar",
					"amount": 1.25,
					"unit": "t",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.438,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.438,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 18375,
					"aisle": "Baking",
					"image": "yeast-granules.jpg",
					"consistency": "SOLID",
					"name": "rapid-rise yeast",
					"nameClean": "dry yeast",
					"original": "1/2 t. instant or rapid-rise yeast",
					"originalName": "instant or rapid-rise yeast",
					"amount": 0.5,
					"unit": "t",
					"meta": [
						"instant"
					],
					"measures": {
						"us": {
							"amount": 0.389,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.389,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "3/4 t. salt",
					"originalName": "salt",
					"amount": 0.75,
					"unit": "t",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1001,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "butter-sliced.jpg",
					"consistency": "SOLID",
					"name": "butter",
					"nameClean": "butter",
					"original": "2 T. butter",
					"originalName": "butter",
					"amount": 2.0,
					"unit": "T",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.029,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.029,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "1 clove garlic, minced",
					"originalName": "garlic, minced",
					"amount": 1.0,
					"unit": "clove",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "clove",
							"unitLong": "clove"
						}
					}
				}
			],
			"id": 644376,
			"title": "Garlic-Butter Naan",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "https://www.foodista.com/recipe/6BPCGSNT/garlic-butter-naan",
			"image": "https://spoonacular.com/recipeImages/644376-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many Indian recipes, so give Garlic-Butter Naan a try. One serving contains <b>462 calories</b>, <b>10g of protein</b>, and <b>22g of fat</b>. For <b>41 cents per serving</b>, you get a hor d'oeuvre that serves 4. 47 people were glad they tried this recipe. Head to the store and pick up garlic, salt, canolan oil, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 52%</b>. <a href=\"https://spoonacular.com/recipes/garlic-naan-how-to-make-garlic-naan-on-stove-top-and-oven-1238887\">garlic naan , how to make garlic naan on stove top and oven</a>, <a href=\"https://spoonacular.com/recipes/garlic-naan-how-to-make-garlic-naan-on-stove-top-and-oven-1230363\">garlic naan , how to make garlic naan on stove top and oven</a>, and <a href=\"https://spoonacular.com/recipes/garlic-naan-how-to-make-garlic-naan-on-stove-top-and-oven-1197485\">garlic naan , how to make garlic naan on stove top and oven</a> are very similar to this recipe.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"fingerfood",
				"antipasti",
				"bread",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "1. In a small bowl, mix together water, yogurt, 1/4 c. oil and egg yolk. In the workbowl of a food processor, pulse together flour, sugar and yeast to combine. With the motor running, slowly add the liquid ingredients to the flour. Process until combined. Let mixture rest for 10 minutes.\n2. Add salt and process another 30-60 seconds. It will form a sticky dough that should clear the sides of the food processor workbowl.\n3. Scrape dough out onto a floured worksurface and knead just until smooth, about a minute. Form into a ball and place in a lightly oiled bowl (large). Cover tightly with plastic wrap and refrigerate 16-24 hours.\n4.After the dough has rested, turn out onto a lightly floured work surface and divide dough into 4 pieces and shape each piece into a ball. Cover lightly with plastic wrap and let rest 15-20 minutes.\n5. Meanwhile melt the butter in a small saucepan, then add the garlic. Set aside.\n6. Roll the first piece of dough out into a 9 inch round. Using a fork, poke the dough all over, 20-25 times. Lightly mist the top side with water.\n6. Heat the remaining oil in a large nonstick skillet over medium heat until the oil begins to shimmer. Wipe the oil out of the skillet with paper towels, then add the rolled out dough, sprayed side down and spray the other side lightly. Cover skillet and cook until spotty brown underneath, 2-4 minutes (poke any large bubbles that form). Flip naan, cook, covered, another 2-3 minutes until browned. Flip again, brush with butter, then transfer to a plate and cover with foil. While rolling out and cooking the remaining naan.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a small bowl, mix together water, yogurt, 1/4 c. oil and egg yolk. In the workbowl of a food processor, pulse together flour, sugar and yeast to combine. With the motor running, slowly add the liquid ingredients to the flour. Process until combined.",
							"ingredients": [
								{
									"id": 1125,
									"name": "egg yolk",
									"localizedName": "egg yolk",
									"image": "egg-yolk.jpg"
								},
								{
									"id": 1116,
									"name": "yogurt",
									"localizedName": "yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 20081,
									"name": "all purpose flour",
									"localizedName": "all purpose flour",
									"image": "flour.png"
								},
								{
									"id": 19335,
									"name": "sugar",
									"localizedName": "sugar",
									"image": "sugar-in-bowl.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 18375,
									"name": "yeast",
									"localizedName": "yeast",
									"image": "yeast-granules.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Let mixture rest for 10 minutes.",
							"ingredients": [],
							"equipment": [],
							"length": {
								"number": 10,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add salt and process another 30-60 seconds. It will form a sticky dough that should clear the sides of the food processor workbowl.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404771,
									"name": "food processor",
									"localizedName": "food processor",
									"image": "food-processor.png"
								}
							]
						},
						{
							"number": 4,
							"step": "Scrape dough out onto a floured worksurface and knead just until smooth, about a minute. Form into a ball and place in a lightly oiled bowl (large). Cover tightly with plastic wrap and refrigerate 16-24 hours.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 10018364,
									"name": "wrap",
									"localizedName": "wrap",
									"image": "flour-tortilla.jpg"
								}
							],
							"equipment": [
								{
									"id": 404730,
									"name": "plastic wrap",
									"localizedName": "plastic wrap",
									"image": "plastic-wrap.jpg"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							],
							"length": {
								"number": 1440,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "After the dough has rested, turn out onto a lightly floured work surface and divide dough into 4 pieces and shape each piece into a ball. Cover lightly with plastic wrap and let rest 15-20 minutes.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 10018364,
									"name": "wrap",
									"localizedName": "wrap",
									"image": "flour-tortilla.jpg"
								}
							],
							"equipment": [
								{
									"id": 404730,
									"name": "plastic wrap",
									"localizedName": "plastic wrap",
									"image": "plastic-wrap.jpg"
								}
							],
							"length": {
								"number": 20,
								"unit": "minutes"
							}
						},
						{
							"number": 6,
							"step": "Meanwhile melt the butter in a small saucepan, then add the garlic. Set aside.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							]
						},
						{
							"number": 7,
							"step": "Roll the first piece of dough out into a 9 inch round. Using a fork, poke the dough all over, 20-25 times. Lightly mist the top side with water.",
							"ingredients": [
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 0,
									"name": "roll",
									"localizedName": "roll",
									"image": "dinner-yeast-rolls.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 8,
							"step": "Heat the remaining oil in a large nonstick skillet over medium heat until the oil begins to shimmer. Wipe the oil out of the skillet with paper towels, then add the rolled out dough, sprayed side down and spray the other side lightly. Cover skillet and cook until spotty brown underneath, 2-4 minutes (poke any large bubbles that form). Flip naan, cook, covered, another 2-3 minutes until browned. Flip again, brush with butter, then transfer to a plate and cover with foil. While rolling out and cooking the remaining naan.",
							"ingredients": [
								{
									"id": 1001,
									"name": "butter",
									"localizedName": "butter",
									"image": "butter-sliced.jpg"
								},
								{
									"id": 0,
									"name": "dough",
									"localizedName": "dough",
									"image": "pizza-dough"
								},
								{
									"id": 93723,
									"name": "naan",
									"localizedName": "naan",
									"image": "naan.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 405895,
									"name": "paper towels",
									"localizedName": "paper towels",
									"image": "paper-towels.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								},
								{
									"id": 404765,
									"name": "aluminum foil",
									"localizedName": "aluminum foil",
									"image": "aluminum-foil.png"
								}
							],
							"length": {
								"number": 7,
								"unit": "minutes"
							}
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/garlic-butter-naan-644376"
		},
		{
			"vegetarian": false,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": true,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 36,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 5,
			"healthScore": 100,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 1641.57,
			"extendedIngredients": [
				{
					"id": 15015,
					"aisle": "Seafood",
					"image": "cod-fillet.jpg",
					"consistency": "SOLID",
					"name": "basa fillets",
					"nameClean": "cod fillets",
					"original": "2 large basa fillets (or any firm fleshed white fish)",
					"originalName": "basa fillets (or any firm fleshed white fish)",
					"amount": 2.0,
					"unit": "large",
					"meta": [
						"white",
						"or any firm fleshed  fish)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric powder",
					"nameClean": "turmeric",
					"original": "1 1/4 teaspoons turmeric powder",
					"originalName": "turmeric powder",
					"amount": 1.25,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 1.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 2009,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "chilli powder",
					"nameClean": "chili powder",
					"original": "1/2 teaspoon chilli powder",
					"originalName": "chilli powder",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 9152,
					"aisle": "Produce",
					"image": "lemon-juice.jpg",
					"consistency": "LIQUID",
					"name": "lemon juice",
					"nameClean": "lemon juice",
					"original": "1 tablespoon lemon juice",
					"originalName": "lemon juice",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "salt to taste",
					"originalName": "salt to taste",
					"amount": 2.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 4053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "olive-oil.jpg",
					"consistency": "LIQUID",
					"name": "olive oil",
					"nameClean": "olive oil",
					"original": "1 tablespoon olive oil",
					"originalName": "olive oil",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 93604,
					"aisle": "Ethnic Foods",
					"image": "curry-leaves.jpg",
					"consistency": "SOLID",
					"name": "curry leaves",
					"nameClean": "curry leaves",
					"original": "1 sprig fresh curry leaves",
					"originalName": "fresh curry leaves",
					"amount": 1.0,
					"unit": "sprig",
					"meta": [
						"fresh"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "sprig",
							"unitLong": "sprig"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "sprig",
							"unitLong": "sprig"
						}
					}
				},
				{
					"id": 2024,
					"aisle": "Spices and Seasonings",
					"image": "mustard-seeds.png",
					"consistency": "SOLID",
					"name": "mustard seeds",
					"nameClean": "yellow mustard seeds",
					"original": "1 teaspoon mustard seeds",
					"originalName": "mustard seeds",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11819,
					"aisle": "Produce",
					"image": "red-chili.jpg",
					"consistency": "SOLID",
					"name": "chillies",
					"nameClean": "chili pepper",
					"original": "2 smalls red chillies, (de-seeded if you don't want much heat)",
					"originalName": "s red chillies, (de-seeded if you don't want much heat)",
					"amount": 2.0,
					"unit": "small",
					"meta": [
						"red",
						"(de-seeded if you don't want much heat)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "small",
							"unitLong": "smalls"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "small",
							"unitLong": "smalls"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 medium onion, sliced finely",
					"originalName": "onion, sliced finely",
					"amount": 1.0,
					"unit": "medium",
					"meta": [
						"sliced",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "medium",
							"unitLong": "medium"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "4 large garlic cloves, sliced finely",
					"originalName": "garlic cloves, sliced finely",
					"amount": 4.0,
					"unit": "large",
					"meta": [
						"sliced",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger piece",
					"nameClean": "ginger",
					"original": "1 inch ginger piece, sliced finely",
					"originalName": "ginger piece, sliced finely",
					"amount": 1.0,
					"unit": "inch",
					"meta": [
						"sliced",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "inch",
							"unitLong": "inch"
						}
					}
				},
				{
					"id": 12117,
					"aisle": "Canned and Jarred",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "unsweetened coconut milk",
					"original": "1 can coconut milk",
					"originalName": "coconut milk",
					"amount": 1.0,
					"unit": "can",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 2053,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vinegar-(white).jpg",
					"consistency": "LIQUID",
					"name": "vinegar",
					"nameClean": "distilled white vinegar",
					"original": "1 teaspoon white vinegar",
					"originalName": "white vinegar",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"white"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "coriander",
					"nameClean": "cilantro",
					"original": "2 tablespoons fresh coriander, sliced finely",
					"originalName": "fresh coriander, sliced finely",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [
						"fresh",
						"sliced",
						"finely"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "tomato",
					"nameClean": "tomato",
					"original": "1 tomato, diced",
					"originalName": "tomato, diced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 641970,
			"title": "Easy Fish Molee (South Indian-Style Fish Stew With Coconut)",
			"readyInMinutes": 45,
			"servings": 2,
			"sourceUrl": "https://www.foodista.com/recipe/HS3ZWPS5/easy-fish-molee-south-indian-style-fish-stew-with-coconut",
			"image": "https://spoonacular.com/recipeImages/641970-556x370.jpg",
			"imageType": "jpg",
			"summary": "You can never have too many main course recipes, so give Easy Fish Molee (South Indian-Style Fish Stew With Coconut) a try. This recipe serves 2. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has <b>1339 calories</b>, <b>168g of protein</b>, and <b>62g of fat</b> per serving. For <b>$16.42 per serving</b>, this recipe <b>covers 61%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. 5 people have tried and liked this recipe. This recipe from Foodista requires tomato, vinegar, ginger piece, and lemon juice. It is an <b>expensive</b> recipe for fans of Indian food. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 88%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-fish-molee-south-indian-style-fish-stew-with-coconut-1632337\">Easy Fish Molee (South Indian-Style Fish Stew With Coconut)</a>, <a href=\"https://spoonacular.com/recipes/lighter-south-indian-fish-curry-1091891\">Lighter South Indian fish curry</a>, and <a href=\"https://spoonacular.com/recipes/south-indian-fish-curry-with-chickpeas-1092718\">South Indian fish curry with chickpeas</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"soup",
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"paleolithic",
				"primal",
				"whole 30",
				"pescatarian"
			],
			"occasions": [
				"fall",
				"winter"
			],
			"instructions": "Cut the fish into four pieces each. Marinate with 1/4 teaspoon of turmeric, chilli powder, salt and lemon juice.\nIn the meanwhile, heat the olive oil. When hot, add the curry leaves and mustard seeds until the latter begins to pop.\nAdd the onion, garlic, ginger and chillies. Cook until the onion is soft and translucent.\nNow add the remaining one teaspoon of turmeric powder. If it sticks add a bit of the coconut milk and continue to fry for about a minute.\nAdd the remaining coconut milk and tomato. Drop the heat to low and let it come to a boil slowly.\nNow add the pieces of fish. Cover and cook until the fish is cooked through. Adjust seasoning and add the vinegar.\nTake off the heat, add the chopped coriander and serve with steamed white rice.",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Cut the fish into four pieces each. Marinate with 1/4 teaspoon of turmeric, chilli powder, salt and lemon juice.",
							"ingredients": [
								{
									"id": 2009,
									"name": "chili powder",
									"localizedName": "chili powder",
									"image": "chili-powder.jpg"
								},
								{
									"id": 9152,
									"name": "lemon juice",
									"localizedName": "lemon juice",
									"image": "lemon-juice.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 10115261,
									"name": "fish",
									"localizedName": "fish",
									"image": "fish-fillet.jpg"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 2,
							"step": "In the meanwhile, heat the olive oil. When hot, add the curry leaves and mustard seeds until the latter begins to pop.",
							"ingredients": [
								{
									"id": 2024,
									"name": "mustard seeds",
									"localizedName": "mustard seeds",
									"image": "mustard-seeds.png"
								},
								{
									"id": 93604,
									"name": "curry leaves",
									"localizedName": "curry leaves",
									"image": "curry-leaves.jpg"
								},
								{
									"id": 4053,
									"name": "olive oil",
									"localizedName": "olive oil",
									"image": "olive-oil.jpg"
								},
								{
									"id": 0,
									"name": "pop",
									"localizedName": "soft drink",
									"image": ""
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Add the onion, garlic, ginger and chillies. Cook until the onion is soft and translucent.",
							"ingredients": [
								{
									"id": 11819,
									"name": "chili pepper",
									"localizedName": "chili pepper",
									"image": "red-chili.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Now add the remaining one teaspoon of turmeric powder. If it sticks add a bit of the coconut milk and continue to fry for about a minute.",
							"ingredients": [
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Add the remaining coconut milk and tomato. Drop the heat to low and let it come to a boil slowly.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								}
							],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Now add the pieces of fish. Cover and cook until the fish is cooked through. Adjust seasoning and add the vinegar.",
							"ingredients": [
								{
									"id": 1042027,
									"name": "seasoning",
									"localizedName": "seasoning",
									"image": "seasoning.png"
								},
								{
									"id": 2053,
									"name": "vinegar",
									"localizedName": "vinegar",
									"image": "vinegar-(white).jpg"
								},
								{
									"id": 10115261,
									"name": "fish",
									"localizedName": "fish",
									"image": "fish-fillet.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Take off the heat, add the chopped coriander and serve with steamed white rice.",
							"ingredients": [
								{
									"id": 10220445,
									"name": "cooked white rice",
									"localizedName": "cooked white rice",
									"image": "cooked-white-rice.png"
								},
								{
									"id": 1012013,
									"name": "coriander",
									"localizedName": "coriander",
									"image": "ground-coriander.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/easy-fish-molee-south-indian-style-fish-stew-with-coconut-641970"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 57,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 5,
			"healthScore": 33,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 390.82,
			"extendedIngredients": [
				{
					"id": 1009016,
					"aisle": "Beverages",
					"image": "apple-cider.jpg",
					"consistency": "SOLID",
					"name": "apple cider",
					"nameClean": "apple cider",
					"original": "24 ounces Apple cider or juice",
					"originalName": "Apple cider or juice",
					"amount": 24.0,
					"unit": "ounces",
					"meta": [],
					"measures": {
						"us": {
							"amount": 24.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 680.389,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 12118,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "coconut milk",
					"original": "7 ounces Coconut milk",
					"originalName": "Coconut milk",
					"amount": 7.0,
					"unit": "ounces",
					"meta": [],
					"measures": {
						"us": {
							"amount": 7.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 198.447,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2015,
					"aisle": "Spices and Seasonings",
					"image": "curry-powder.jpg",
					"consistency": "SOLID",
					"name": "curry powder",
					"nameClean": "curry powder",
					"original": "2 teaspoons Curry powder",
					"originalName": "Curry powder",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 1159,
					"aisle": "Cheese",
					"image": "goat-cheese.jpg",
					"consistency": "SOLID",
					"name": "chavrie goat cheese",
					"nameClean": "goat cheese",
					"original": "2 packages Chavrie fresh goat cheese (reserve 1 pkg. for garnishing)",
					"originalName": "Chavrie fresh goat cheese (reserve 1 pkg. for garnishing)",
					"amount": 2.0,
					"unit": "packages",
					"meta": [
						"fresh",
						"for garnishing",
						"(reserve 1 pkg. )"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "pkg",
							"unitLong": "packages"
						}
					}
				},
				{
					"id": 1089003,
					"aisle": "Produce",
					"image": "grannysmith-apple.png",
					"consistency": "SOLID",
					"name": "granny smith apples",
					"nameClean": "granny smith apple",
					"original": "2 inches Granny Smith apples (cut wedges)",
					"originalName": "Granny Smith apples (cut wedges)",
					"amount": 2.0,
					"unit": "inches",
					"meta": [
						"(cut wedges)"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "inches",
							"unitLong": "inches"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "inches",
							"unitLong": "inches"
						}
					}
				},
				{
					"id": 11246,
					"aisle": "Produce",
					"image": "leeks.jpg",
					"consistency": "SOLID",
					"name": "leeks",
					"nameClean": "leek",
					"original": "2 Leeks (chopped and washed)",
					"originalName": "Leeks (chopped and washed)",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"washed",
						"chopped",
						"( and )"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric",
					"nameClean": "turmeric",
					"original": "1/2 teaspoon Turmeric",
					"originalName": "Turmeric",
					"amount": 0.5,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.5,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "2 ounces Vegetable oil",
					"originalName": "Vegetable oil",
					"amount": 2.0,
					"unit": "ounces",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "oz",
							"unitLong": "ounces"
						},
						"metric": {
							"amount": 56.699,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms.png",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "1 cup Sliced white mushrooms",
					"originalName": "Sliced white mushrooms",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"white",
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 96.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 11260,
					"aisle": "Produce",
					"image": "mushrooms-white.jpg",
					"consistency": "SOLID",
					"name": "mushrooms",
					"nameClean": "fresh mushrooms",
					"original": "1 cup Sliced white mushrooms",
					"originalName": "Sliced white mushrooms",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"white",
						"sliced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 96.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 632528,
			"title": "Apple Curry Soup",
			"readyInMinutes": 45,
			"servings": 1,
			"sourceUrl": "http://www.foodista.com/recipe/6JFBQ2TP/apple-curry-soup",
			"image": "https://spoonacular.com/recipeImages/632528-556x370.jpg",
			"imageType": "jpg",
			"summary": "Forget going out to eat or ordering takeout every time you crave Indian food. Try making Apple Curry Soup at home. For <b>$3.91 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>1359 calories</b>, <b>11g of protein</b>, and <b>102g of fat</b> each. 5 people were impressed by this recipe. If you have apple cider, mushrooms, granny smith apples, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. It works well as a hor d'oeuvre. It is perfect for <b>Autumn</b>. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>great spoonacular score of 86%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/chicken-and-apple-curry-450177\">Chicken and Apple Curry</a>, <a href=\"https://spoonacular.com/recipes/green-apple-curry-246119\">Green Apple Curry</a>, and <a href=\"https://spoonacular.com/recipes/fenugreek-raisin-apple-curry-642673\">Fenugreek Raisin Apple Curry</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"soup",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian"
			],
			"occasions": [
				"fall",
				"winter"
			],
			"instructions": "<ol><li>Sweat leeks and mushrooms in vegetable oil until tender (without color) in a heavy gauge sauce pot</li><li>Add apples, apple cider, coconut milk, curry powder, turmeric. Bring to boil and simmer for 20 minutes.</li><li>Add the Chavrie and season with salt and pepper</li><li>Pour entire contents in a blender and puree or puree with a hand held mixer</li><li>Strain through a fine chinois. And keep warm</li><li>Serve hot</li><li>Garnish with slices of apple or a dollop of Chavrie</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Sweat leeks and mushrooms in vegetable oil until tender (without color) in a heavy gauge sauce pot",
							"ingredients": [
								{
									"id": 4669,
									"name": "vegetable oil",
									"localizedName": "vegetable oil",
									"image": "vegetable-oil.jpg"
								},
								{
									"id": 11260,
									"name": "mushrooms",
									"localizedName": "mushrooms",
									"image": "mushrooms.png"
								},
								{
									"id": 11246,
									"name": "leek",
									"localizedName": "leek",
									"image": "leeks.jpg"
								},
								{
									"id": 0,
									"name": "sauce",
									"localizedName": "sauce",
									"image": ""
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Add apples, apple cider, coconut milk, curry powder, turmeric. Bring to boil and simmer for 20 minutes.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 2015,
									"name": "curry powder",
									"localizedName": "curry powder",
									"image": "curry-powder.jpg"
								},
								{
									"id": 1009016,
									"name": "apple cider",
									"localizedName": "apple cider",
									"image": "apple-cider.jpg"
								},
								{
									"id": 2043,
									"name": "turmeric",
									"localizedName": "turmeric",
									"image": "turmeric.jpg"
								},
								{
									"id": 9003,
									"name": "apple",
									"localizedName": "apple",
									"image": "apple.jpg"
								}
							],
							"equipment": [],
							"length": {
								"number": 20,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add the Chavrie and season with salt and pepper",
							"ingredients": [
								{
									"id": 1102047,
									"name": "salt and pepper",
									"localizedName": "salt and pepper",
									"image": "salt-and-pepper.jpg"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Pour entire contents in a blender and puree or puree with a hand held mixer",
							"ingredients": [],
							"equipment": [
								{
									"id": 404726,
									"name": "blender",
									"localizedName": "blender",
									"image": "blender.png"
								}
							]
						},
						{
							"number": 5,
							"step": "Strain through a fine chinois. And keep warm",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 6,
							"step": "Serve hot",
							"ingredients": [],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Garnish with slices of apple or a dollop of Chavrie",
							"ingredients": [
								{
									"id": 9003,
									"name": "apple",
									"localizedName": "apple",
									"image": "apple.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/apple-curry-soup-632528"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 8,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 2,
			"healthScore": 22,
			"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
			"license": "CC BY 3.0",
			"sourceName": "Foodista",
			"pricePerServing": 276.56,
			"extendedIngredients": [
				{
					"id": 2031,
					"aisle": "Spices and Seasonings",
					"image": "chili-powder.jpg",
					"consistency": "SOLID",
					"name": "cayenne pepper",
					"nameClean": "ground cayenne pepper",
					"original": "¼ teaspoon cayenne pepper",
					"originalName": "cayenne pepper",
					"amount": 0.25,
					"unit": "teaspoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 12118,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "coconut milk",
					"original": "1 cup coconut milk, separated",
					"originalName": "coconut milk, separated",
					"amount": 1.0,
					"unit": "cup",
					"meta": [
						"separated"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 226.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1002014,
					"aisle": "Spices and Seasonings",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "cumin",
					"nameClean": "cumin",
					"original": "2 tablespoons cumin",
					"originalName": "cumin",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11209,
					"aisle": "Produce",
					"image": "eggplant.png",
					"consistency": "SOLID",
					"name": "eggplants",
					"nameClean": "eggplant",
					"original": "2 eggplants, peeled and chopped into ½” peices",
					"originalName": "eggplants, peeled and chopped into ½” peices",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"peeled",
						"chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11215,
					"aisle": "Produce",
					"image": "garlic.png",
					"consistency": "SOLID",
					"name": "garlic",
					"nameClean": "garlic",
					"original": "6 cloves garlic, minced",
					"originalName": "garlic, minced",
					"amount": 6.0,
					"unit": "cloves",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 6.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						},
						"metric": {
							"amount": 6.0,
							"unitShort": "cloves",
							"unitLong": "cloves"
						}
					}
				},
				{
					"id": 11216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "ginger",
					"original": "1 ginger, peeled and finely chopped",
					"originalName": "ginger, peeled and finely chopped",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"peeled",
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 1256,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "greek yogurt",
					"nameClean": "greek yogurt",
					"original": "1 cup Greek yogurt",
					"originalName": "Greek yogurt",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 200.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 1002013,
					"aisle": "Spices and Seasonings",
					"image": "ground-coriander.jpg",
					"consistency": "SOLID",
					"name": "ground coriander",
					"nameClean": "ground coriander",
					"original": "1 tablespoon ground coriander",
					"originalName": "ground coriander",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10811529,
					"aisle": "Produce",
					"image": "tomato.png",
					"consistency": "SOLID",
					"name": "heirloom tomatoes",
					"nameClean": "heirloom tomato",
					"original": "2 large heirloom tomatoes, diced",
					"originalName": "heirloom tomatoes, diced",
					"amount": 2.0,
					"unit": "large",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "large",
							"unitLong": "larges"
						}
					}
				},
				{
					"id": 1032009,
					"aisle": "Spices and Seasonings",
					"image": "red-pepper-flakes.jpg",
					"consistency": "SOLID",
					"name": "pepper flakes",
					"nameClean": "red pepper flakes",
					"original": "1 teaspoon crushed red pepper flakes",
					"originalName": "crushed red pepper flakes",
					"amount": 1.0,
					"unit": "teaspoon",
					"meta": [
						"red",
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "tsp",
							"unitLong": "teaspoon"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "Salt to taste",
					"originalName": "Salt to taste",
					"amount": 4.0,
					"unit": "servings",
					"meta": [
						"to taste"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "servings",
							"unitLong": "servings"
						}
					}
				},
				{
					"id": 2043,
					"aisle": "Spices and Seasonings",
					"image": "turmeric.jpg",
					"consistency": "SOLID",
					"name": "turmeric",
					"nameClean": "turmeric",
					"original": "2 teaspoons turmeric",
					"originalName": "turmeric",
					"amount": 2.0,
					"unit": "teaspoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10511282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onions",
					"nameClean": "yellow onion",
					"original": "2 yellow onions, finely chopped",
					"originalName": "yellow onions, finely chopped",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"yellow",
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				}
			],
			"id": 642283,
			"title": "Eggplant Curry",
			"readyInMinutes": 360,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/45P5CRNC/eggplant-curry",
			"image": "https://spoonacular.com/recipeImages/642283-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you want to add more <b>gluten free, lacto ovo vegetarian, and primal</b> recipes to your repertoire, Eggplant Curry might be a recipe you should try. For <b>$2.77 per serving</b>, you get a hor d'oeuvre that serves 4. One portion of this dish contains about <b>11g of protein</b>, <b>14g of fat</b>, and a total of <b>266 calories</b>. 2 people have tried and liked this recipe. If you have ground coriander, garlic, eggplants, and a few other ingredients on hand, you can make it. This recipe is typical of Indian cuisine. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>6 hours</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 62%</b>. This score is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/eggplant-curry-23680\">Eggplant Curry</a>, <a href=\"https://spoonacular.com/recipes/eggplant-curry-1376101\">Eggplant Curry</a>, and <a href=\"https://spoonacular.com/recipes/curry-eggplant-23437\">Curry Eggplant</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"antipasti",
				"starter",
				"snack",
				"appetizer",
				"antipasto",
				"hor d'oeuvre"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian",
				"primal"
			],
			"occasions": [],
			"instructions": "<ol><li>Heat about  cup of the coconut milk over medium heat in a large skilled. Saut the onion and garlic using the coconut milk as oil until soft and beginning to brown, about 12 minutes.</li><li>Put all the eggplant and tomato into a 6-quart or larger crockpot.  In a bowl, combine all spices and stir them together. Pour the coconut milk, all the spices, salt and ginger into the crock; once the onion and garlic is finished sauting, pour contents of the skillet into the crock and mix everything together.  Turn crock pot on high and allow the curry to cook for 6 to 8 hours, checking it periodically to stir.</li><li>About a half an hour before you serve the curry, add the Greek yogurt and mix it into the curry before allowing it to cook an additional 30 minutes.</li><li>Follow directions on the back of your quinoa package (I typically do a 2:1 water to quinoa ratio and simmer for about half an hour). Serve the curry over quinoa and add a dollop of Greek yogurt on top.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "Heat about  cup of the coconut milk over medium heat in a large skilled. Saut the onion and garlic using the coconut milk as oil until soft and beginning to brown, about 12 minutes.Put all the eggplant and tomato into a 6-quart or larger crockpot.  In a bowl, combine all spices and stir them together.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 11209,
									"name": "eggplant",
									"localizedName": "eggplant",
									"image": "eggplant.png"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								},
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404718,
									"name": "slow cooker",
									"localizedName": "slow cooker",
									"image": "slow-cooker.jpg"
								},
								{
									"id": 404783,
									"name": "bowl",
									"localizedName": "bowl",
									"image": "bowl.jpg"
								}
							],
							"length": {
								"number": 12,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Pour the coconut milk, all the spices, salt and ginger into the crock; once the onion and garlic is finished sauting, pour contents of the skillet into the crock and mix everything together.  Turn crock pot on high and allow the curry to cook for 6 to 8 hours, checking it periodically to stir.About a half an hour before you serve the curry, add the Greek yogurt and mix it into the curry before allowing it to cook an additional 30 minutes.Follow directions on the back of your quinoa package (I typically do a 2:1 water to quinoa ratio and simmer for about half an hour).",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 1256,
									"name": "greek yogurt",
									"localizedName": "greek yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								},
								{
									"id": 20035,
									"name": "quinoa",
									"localizedName": "quinoa",
									"image": "uncooked-quinoa.png"
								},
								{
									"id": 2035,
									"name": "spices",
									"localizedName": "spices",
									"image": "spices.png"
								},
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								}
							],
							"equipment": [
								{
									"id": 404718,
									"name": "slow cooker",
									"localizedName": "slow cooker",
									"image": "slow-cooker.jpg"
								},
								{
									"id": 404645,
									"name": "frying pan",
									"localizedName": "frying pan",
									"image": "pan.png"
								}
							],
							"length": {
								"number": 510,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Serve the curry over quinoa and add a dollop of Greek yogurt on top.",
							"ingredients": [
								{
									"id": 1256,
									"name": "greek yogurt",
									"localizedName": "greek yogurt",
									"image": "plain-yogurt.jpg"
								},
								{
									"id": 20035,
									"name": "quinoa",
									"localizedName": "quinoa",
									"image": "uncooked-quinoa.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/eggplant-curry-642283"
		},
		{
			"vegetarian": true,
			"vegan": true,
			"glutenFree": true,
			"dairyFree": true,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 13,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 13,
			"healthScore": 20,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 105.89,
			"extendedIngredients": [
				{
					"id": 1014582,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "canola oil",
					"nameClean": "canola oil",
					"original": "2 T. canola oil",
					"originalName": "canola oil",
					"amount": 2.0,
					"unit": "T",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 11165,
					"aisle": "Produce",
					"image": "cilantro.png",
					"consistency": "SOLID",
					"name": "cilantro",
					"nameClean": "cilantro",
					"original": "1/3 c. coarsely chopped cilantro",
					"originalName": "coarsely chopped cilantro",
					"amount": 0.33333334,
					"unit": "c",
					"meta": [
						"coarsely chopped"
					],
					"measures": {
						"us": {
							"amount": 0.33333334,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 5.333,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 12118,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "coconut-milk.png",
					"consistency": "LIQUID",
					"name": "coconut milk",
					"nameClean": "coconut milk",
					"original": "1 c. coconut milk",
					"originalName": "coconut milk",
					"amount": 1.0,
					"unit": "c",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 226.0,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 10211216,
					"aisle": "Produce",
					"image": "ginger.png",
					"consistency": "SOLID",
					"name": "ginger",
					"nameClean": "fresh ginger",
					"original": "1 T. minced fresh ginger",
					"originalName": "minced fresh ginger",
					"amount": 1.0,
					"unit": "T",
					"meta": [
						"fresh",
						"minced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "garam masala",
					"nameClean": "garam masala",
					"original": "1 t. Garam Masala (can be easily found in the supermarket spice isle)",
					"originalName": "Garam Masala (can be easily found in the supermarket spice isle)",
					"amount": 1.0,
					"unit": "t",
					"meta": [
						"(can be easily found in the supermarket spice isle)"
					],
					"measures": {
						"us": {
							"amount": 0.417,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.417,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "4 garlic cloves, minced",
					"originalName": "garlic cloves, minced",
					"amount": 4.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 4.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 9160,
					"aisle": "Produce",
					"image": "lime-juice.png",
					"consistency": "LIQUID",
					"name": "lime juice",
					"nameClean": "lime juice",
					"original": "1 T. lime juice",
					"originalName": "lime juice",
					"amount": 1.0,
					"unit": "T",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 onion, finely chopped",
					"originalName": "onion, finely chopped",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"finely chopped"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10411529,
					"aisle": "Produce",
					"image": "plum-tomatoes.png",
					"consistency": "SOLID",
					"name": "plum tomatoes",
					"nameClean": "plum tomato",
					"original": "3 . plum tomatoes",
					"originalName": "plum tomatoes",
					"amount": 3.0,
					"unit": "",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 3.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10016069,
					"aisle": "Pasta and Rice",
					"image": "red-lentils.png",
					"consistency": "SOLID",
					"name": "lentils",
					"nameClean": "dried red lentils",
					"original": "1 1/4 c. split red lentils",
					"originalName": "split red lentils",
					"amount": 1.25,
					"unit": "c",
					"meta": [
						"split",
						"red"
					],
					"measures": {
						"us": {
							"amount": 1.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 225.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 2047,
					"aisle": "Spices and Seasonings",
					"image": "salt.jpg",
					"consistency": "SOLID",
					"name": "salt",
					"nameClean": "table salt",
					"original": "3/4 t. salt",
					"originalName": "salt",
					"amount": 0.75,
					"unit": "t",
					"meta": [],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						},
						"metric": {
							"amount": 0.25,
							"unitShort": "tsps",
							"unitLong": "teaspoons"
						}
					}
				},
				{
					"id": 14412,
					"aisle": "Beverages",
					"image": "water.png",
					"consistency": "LIQUID",
					"name": "water",
					"nameClean": "water",
					"original": "3 c. water",
					"originalName": "water",
					"amount": 3.0,
					"unit": "c",
					"meta": [],
					"measures": {
						"us": {
							"amount": 3.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 709.764,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				}
			],
			"id": 647830,
			"title": "Indian Lentil Dahl",
			"readyInMinutes": 45,
			"servings": 4,
			"sourceUrl": "http://www.foodista.com/recipe/XMH8PZ48/indian-lentil-dahl",
			"image": "https://spoonacular.com/recipeImages/647830-556x370.jpg",
			"imageType": "jpg",
			"summary": "The recipe Indian Lentil Dahl can be made <b>in about 45 minutes</b>. This recipe makes 4 servings with <b>400 calories</b>, <b>17g of protein</b>, and <b>20g of fat</b> each. For <b>$1.06 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. A mixture of lime juice, lentils, coconut milk, and a handful of other ingredients are all it takes to make this recipe so yummy. 13 people were glad they tried this recipe. It works well as a main course. It is a <b>rather inexpensive</b> recipe for fans of Indian food. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 75%</b>, which is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/indian-spice-52-diet-for-red-lentil-dahl-1368615\">Indian Spice – 5:2 Diet for Red Lentil Dahl</a>, <a href=\"https://spoonacular.com/recipes/indian-spice-52-diet-for-red-lentil-dahl-1201527\">Indian Spice – 5:2 Diet for Red Lentil Dahl</a>, and <a href=\"https://spoonacular.com/recipes/indian-spice-52-diet-for-red-lentil-dahl-666725\">Indian Spice – 5:2 Diet for Red Lentil Dahl</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"dairy free",
				"lacto ovo vegetarian",
				"vegan"
			],
			"occasions": [],
			"instructions": "<ol><li> In a large saucepan, combine oil, onion and salt at medium-high heat. Cook until onion starts to brown, around 5 minutes or so. Add garlic, ginger and Garam Masala , cook until fragrant, about 1 minute.</li><li>Add lentils, coconut milk and water. Bring to a boil, then reduce heat to low and simmer, partially covered until lentils are fully tender and broken down to an almost paste-like consistency, about 25-30 minutes.</li><li>Add lime juice and cilantro. Check for seasoning. Serve (over rice if you like), topped with the diced tomatoes.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a large saucepan, combine oil, onion and salt at medium-high heat. Cook until onion starts to brown, around 5 minutes or so.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								},
								{
									"id": 2047,
									"name": "salt",
									"localizedName": "salt",
									"image": "salt.jpg"
								},
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404669,
									"name": "sauce pan",
									"localizedName": "sauce pan",
									"image": "sauce-pan.jpg"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 2,
							"step": "Add garlic, ginger and Garam Masala , cook until fragrant, about 1 minute.",
							"ingredients": [
								{
									"id": 93663,
									"name": "garam masala",
									"localizedName": "garam masala",
									"image": "garam-masala.jpg"
								},
								{
									"id": 11215,
									"name": "garlic",
									"localizedName": "garlic",
									"image": "garlic.png"
								},
								{
									"id": 11216,
									"name": "ginger",
									"localizedName": "ginger",
									"image": "ginger.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 1,
								"unit": "minutes"
							}
						},
						{
							"number": 3,
							"step": "Add lentils, coconut milk and water. Bring to a boil, then reduce heat to low and simmer, partially covered until lentils are fully tender and broken down to an almost paste-like consistency, about 25-30 minutes.",
							"ingredients": [
								{
									"id": 12118,
									"name": "coconut milk",
									"localizedName": "coconut milk",
									"image": "coconut-milk.png"
								},
								{
									"id": 10316069,
									"name": "lentils",
									"localizedName": "lentils",
									"image": "lentils-brown.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": [],
							"length": {
								"number": 30,
								"unit": "minutes"
							}
						},
						{
							"number": 4,
							"step": "Add lime juice and cilantro. Check for seasoning.",
							"ingredients": [
								{
									"id": 9160,
									"name": "lime juice",
									"localizedName": "lime juice",
									"image": "lime-juice.png"
								},
								{
									"id": 1042027,
									"name": "seasoning",
									"localizedName": "seasoning",
									"image": "seasoning.png"
								},
								{
									"id": 11165,
									"name": "cilantro",
									"localizedName": "cilantro",
									"image": "cilantro.png"
								}
							],
							"equipment": []
						},
						{
							"number": 5,
							"step": "Serve (over rice if you like), topped with the diced tomatoes.",
							"ingredients": [
								{
									"id": 11529,
									"name": "tomato",
									"localizedName": "tomato",
									"image": "tomato.png"
								},
								{
									"id": 20444,
									"name": "rice",
									"localizedName": "rice",
									"image": "uncooked-white-rice.png"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/indian-lentil-dahl-647830"
		},
		{
			"vegetarian": true,
			"vegan": false,
			"glutenFree": true,
			"dairyFree": false,
			"veryHealthy": false,
			"cheap": false,
			"veryPopular": false,
			"sustainable": false,
			"lowFodmap": false,
			"weightWatcherSmartPoints": 4,
			"gaps": "no",
			"preparationMinutes": -1,
			"cookingMinutes": -1,
			"aggregateLikes": 3,
			"healthScore": 43,
			"creditsText": "foodista.com",
			"sourceName": "foodista.com",
			"pricePerServing": 144.86,
			"extendedIngredients": [
				{
					"id": 10293663,
					"aisle": "Ethnic Foods",
					"image": "ground-cumin.jpg",
					"consistency": "SOLID",
					"name": "amchar masala",
					"nameClean": "amchar masala",
					"original": "1 tablespoon amchar masala",
					"originalName": "amchar masala",
					"amount": 1.0,
					"unit": "tablespoon",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "Tbsp",
							"unitLong": "Tbsp"
						}
					}
				},
				{
					"id": 10116069,
					"aisle": "Pasta and Rice",
					"image": "lentils-brown.jpg",
					"consistency": "SOLID",
					"name": "brown lentils",
					"nameClean": "dried brown lentils",
					"original": "1 cup brown lentils",
					"originalName": "brown lentils",
					"amount": 1.0,
					"unit": "cup",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "cup",
							"unitLong": "cup"
						},
						"metric": {
							"amount": 192.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11693,
					"aisle": "Canned and Jarred",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "canned tomatoes",
					"nameClean": "crushed tomatoes",
					"original": "1 can crushed tomatoes",
					"originalName": "crushed tomatoes",
					"amount": 1.0,
					"unit": "can",
					"meta": [
						"crushed"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 11135,
					"aisle": "Produce",
					"image": "cauliflower.jpg",
					"consistency": "SOLID",
					"name": "cauliflower head",
					"nameClean": "cauliflower",
					"original": "1 cauliflower head, cut into bite size pieces",
					"originalName": "cauliflower head, cut into bite size pieces",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"cut into bite size pieces"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 10211215,
					"aisle": "Produce",
					"image": "garlic.jpg",
					"consistency": "SOLID",
					"name": "garlic cloves",
					"nameClean": "whole garlic cloves",
					"original": "2 garlic cloves, minced",
					"originalName": "garlic cloves, minced",
					"amount": 2.0,
					"unit": "",
					"meta": [
						"minced"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11282,
					"aisle": "Produce",
					"image": "brown-onion.png",
					"consistency": "SOLID",
					"name": "onion",
					"nameClean": "onion",
					"original": "1 onion, diced",
					"originalName": "onion, diced",
					"amount": 1.0,
					"unit": "",
					"meta": [
						"diced"
					],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "",
							"unitLong": ""
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "2 cups frozen peas",
					"originalName": "frozen peas",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 290.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "2 cups frozen peas",
					"originalName": "frozen peas",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 290.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 11304,
					"aisle": "Produce",
					"image": "peas.jpg",
					"consistency": "SOLID",
					"name": "peas",
					"nameClean": "petite peas",
					"original": "2 cups frozen peas",
					"originalName": "frozen peas",
					"amount": 2.0,
					"unit": "cups",
					"meta": [
						"frozen"
					],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 290.0,
							"unitShort": "g",
							"unitLong": "grams"
						}
					}
				},
				{
					"id": 1001116,
					"aisle": "Milk, Eggs, Other Dairy",
					"image": "plain-yogurt.jpg",
					"consistency": "LIQUID",
					"name": "yogurt",
					"nameClean": "plain yogurt",
					"original": "1/4 cup plain yogurt (optional)",
					"originalName": "plain yogurt (optional)",
					"amount": 0.25,
					"unit": "cup",
					"meta": [
						"plain"
					],
					"measures": {
						"us": {
							"amount": 0.25,
							"unitShort": "cups",
							"unitLong": "cups"
						},
						"metric": {
							"amount": 61.25,
							"unitShort": "ml",
							"unitLong": "milliliters"
						}
					}
				},
				{
					"id": 93663,
					"aisle": "Ethnic Foods",
					"image": "garam-masala.jpg",
					"consistency": "SOLID",
					"name": "masala molida",
					"nameClean": "garam masala",
					"original": "2 tablespoons masala molida, also known as berbere",
					"originalName": "masala molida, also known as berbere",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				},
				{
					"id": 10011693,
					"aisle": "Canned and Jarred",
					"image": "tomatoes-canned.png",
					"consistency": "SOLID",
					"name": "tomato paste",
					"nameClean": "canned tomatoes",
					"original": "1 can tomato paste",
					"originalName": "tomato paste",
					"amount": 1.0,
					"unit": "can",
					"meta": [],
					"measures": {
						"us": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						},
						"metric": {
							"amount": 1.0,
							"unitShort": "can",
							"unitLong": "can"
						}
					}
				},
				{
					"id": 4669,
					"aisle": "Oil, Vinegar, Salad Dressing",
					"image": "vegetable-oil.jpg",
					"consistency": "LIQUID",
					"name": "vegetable oil",
					"nameClean": "vegetable oil",
					"original": "2 tablespoons vegetable oil",
					"originalName": "vegetable oil",
					"amount": 2.0,
					"unit": "tablespoons",
					"meta": [],
					"measures": {
						"us": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						},
						"metric": {
							"amount": 2.0,
							"unitShort": "Tbsps",
							"unitLong": "Tbsps"
						}
					}
				}
			],
			"id": 642468,
			"title": "Ethiopian Lentil Curry",
			"readyInMinutes": 75,
			"servings": 6,
			"sourceUrl": "http://www.foodista.com/recipe/VND4VYMV/ethiopian-lentil-curry",
			"image": "https://spoonacular.com/recipeImages/642468-556x370.jpg",
			"imageType": "jpg",
			"summary": "If you have approximately <b>1 hour and 15 minutes</b> to spend in the kitchen, Ethiopian Lentil Curry might be an excellent <b>gluten free and lacto ovo vegetarian</b> recipe to try. One portion of this dish contains about <b>16g of protein</b>, <b>6g of fat</b>, and a total of <b>285 calories</b>. For <b>$1.45 per serving</b>, you get a main course that serves 6. If you have onion, peas, vegetable oil, and a few other ingredients on hand, you can make it. This recipe is typical of Indian cuisine. Only a few people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is excellent. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/spicy-ethiopian-red-lentil-stew-33758\">Spicy Ethiopian Red Lentil Stew</a>, <a href=\"https://spoonacular.com/recipes/misir-wot-ethiopian-red-lentil-stew-1437013\">Misir Wot- Ethiopian Red Lentil Stew</a>, and <a href=\"https://spoonacular.com/recipes/ethiopian-s-mesir-wat-red-lentil-stew-with-ayib-552200\">Ethiopian s: Mesir Wat Red Lentil Stew with Ayib</a>.",
			"cuisines": [
				"Indian",
				"Asian"
			],
			"dishTypes": [
				"lunch",
				"main course",
				"main dish",
				"dinner"
			],
			"diets": [
				"gluten free",
				"lacto ovo vegetarian"
			],
			"occasions": [],
			"instructions": "<ol><li>In a large pot heat oil over medium heat. Add onions and saut until translucent. Add minced garlic and continue to saut for another minute.</li><li>Combine cauliflower, peas and lentils in the pot, sprinkle with amchar massala and massala molida and saut for 5 minutes.</li><li>Pour crushed tomatoes and tomato paste into the pot and stir to combine. Add about two cups of water and bring curry to a boil.</li><li>Reduce heat, cover, and simmer on low until lentils are tender; about an hour.</li><li>Mix in plain yogurt and serve immediately.</li></ol>",
			"analyzedInstructions": [
				{
					"name": "",
					"steps": [
						{
							"number": 1,
							"step": "In a large pot heat oil over medium heat.",
							"ingredients": [
								{
									"id": 4582,
									"name": "cooking oil",
									"localizedName": "cooking oil",
									"image": "vegetable-oil.jpg"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 2,
							"step": "Add onions and saut until translucent.",
							"ingredients": [
								{
									"id": 11282,
									"name": "onion",
									"localizedName": "onion",
									"image": "brown-onion.png"
								}
							],
							"equipment": []
						},
						{
							"number": 3,
							"step": "Add minced garlic and continue to saut for another minute.",
							"ingredients": [
								{
									"id": 0,
									"name": "minced garlic",
									"localizedName": "minced garlic",
									"image": "garlic.png"
								}
							],
							"equipment": []
						},
						{
							"number": 4,
							"step": "Combine cauliflower, peas and lentils in the pot, sprinkle with amchar massala and massala molida and saut for 5 minutes.",
							"ingredients": [
								{
									"id": 11135,
									"name": "cauliflower",
									"localizedName": "cauliflower",
									"image": "cauliflower.jpg"
								},
								{
									"id": 10316069,
									"name": "lentils",
									"localizedName": "lentils",
									"image": "lentils-brown.jpg"
								},
								{
									"id": 11304,
									"name": "peas",
									"localizedName": "peas",
									"image": "peas.jpg"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							],
							"length": {
								"number": 5,
								"unit": "minutes"
							}
						},
						{
							"number": 5,
							"step": "Pour crushed tomatoes and tomato paste into the pot and stir to combine.",
							"ingredients": [
								{
									"id": 11693,
									"name": "crushed tomatoes",
									"localizedName": "crushed tomatoes",
									"image": "tomatoes-canned.png"
								},
								{
									"id": 11887,
									"name": "tomato paste",
									"localizedName": "tomato paste",
									"image": "tomato-paste.jpg"
								}
							],
							"equipment": [
								{
									"id": 404752,
									"name": "pot",
									"localizedName": "pot",
									"image": "stock-pot.jpg"
								}
							]
						},
						{
							"number": 6,
							"step": "Add about two cups of water and bring curry to a boil.Reduce heat, cover, and simmer on low until lentils are tender; about an hour.",
							"ingredients": [
								{
									"id": 10316069,
									"name": "lentils",
									"localizedName": "lentils",
									"image": "lentils-brown.jpg"
								},
								{
									"id": 14412,
									"name": "water",
									"localizedName": "water",
									"image": "water.png"
								}
							],
							"equipment": []
						},
						{
							"number": 7,
							"step": "Mix in plain yogurt and serve immediately.",
							"ingredients": [
								{
									"id": 1001116,
									"name": "plain yogurt",
									"localizedName": "plain yogurt",
									"image": "plain-yogurt.jpg"
								}
							],
							"equipment": []
						}
					]
				}
			],
			"originalId": null,
			"spoonacularSourceUrl": "https://spoonacular.com/ethiopian-lentil-curry-642468"
		}
	]
}
]
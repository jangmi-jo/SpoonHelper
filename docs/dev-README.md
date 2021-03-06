# SpoonHelper

[http://www.spoonhelper.us][heroku]

[heroku]: http://www.spoonhelper.us

## Minimum Viable Product

SpoonHelper is a web application inspired by Instructables built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Recipes
- [ ] Commenting on Recipes
- [ ] Adding photos and videos to Recipes
- [ ] Searching Recipes by keyword
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-heirarchy.md
[redux-structure]: ./redux-structure.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails Recipe with front-end Authentication

- [ ] New Rails Recipe
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Category and Recipe Model, API, and components (2 days)

**Objective:** Recipe can be created in Category and read, edited
and destroyed through the API.

- [ ] `Recipe` model
- [ ] `Category` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for recipes (`RecipeController`)
- [ ] JBuilder views for recipes
- Recipe components and respective Redux loops
  - [ ] `RecipesIndex`
  - [ ] `RecipeIndexItem`
  - [ ] `RecipeForm`
- [ ] Style Recipes components
- [ ] Seed Recipes

### Phase 3: Step (2 day)

**Objective:** Steps belong to Recipe that can be created, read, edited
and destroyed through the API.

- [ ] `Step` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for Steps (`StepsController`)
- [ ] Adding Steps requires a Recipe
- [ ] Viewing Steps in Recipe
- [ ] Interactively add StepForm in RecipeForm
- [ ] Add images/videos in StepForm
- [ ] Style Steps components
- [ ] Seed Steps

### Phase 4: Comments (2 days)

**Objective:** Comments belong to Recipe that can be created, read
and destroyed through the API.

- [ ] `Comments` model
- [ ] Seed database with a small amount of test data
- [ ] CRD API for Comments (`CommentsController`)
- [ ] Adding Comments requires a Recipe
- [ ] Viewing Comments in Recipe
- [ ] Add images in Comment
- [ ] Add CommentForm in RecipeDetail
- [ ] Style Comments components
- [ ] Seed Comments

### Phase 5: Likes feature (1 day)

**objective:** Add like feature on recipe

- [ ] `Like` model
- [ ] Seed database with a small amount of test data
- [ ] Add like button in RecipeDetail and RecipeIndexItem
- [ ] Add proper request and response

### Phase 6: - Search for Recipes (1 day)

**objective:** Add search feature

- [ ] Search Recipes by title and ingredients
- [ ] Add auto complete dropdown
- [ ] Add search Result page


# Layout & Pages.

## Layouts 

There only one layout in this porject the default layout `default.vue`. 
This Layout render the Content of the page on between the `Navbar.vue` and the `Footer.vue`.

## Pages 

- Home: The main page of the project, which contains the book form where the user can search for the available trips, And the blog section where the user can read about older trips in the posts.

- blog/[slug]: A dynamic route page where the user can read the details of a blog post.

## components
 
- `FormFields.vue`: This fiel is a dynamic class like component that can take `formOpts` object as a prop and render a form upon the options sent to it. This file is meant for the scalablitiy of the project.

- `BookForm.vue`: This component renders the Trip search form in the home page using `FormFields.vue`.

- `BlogCards.vue`: Contains the blog posts that appear in the home page.

- `BlogCard.vue`: Used to render a post card inside the blog.

- `Icon.vue`: A custom component meant to render any icon in the project.

- `Footer.vue`: Renders the project footer.

- `Navbar.vue`: Renders the project navabr.

- `LanguageSwitch.vue`: Renders the language button and dropdown in the `Navbar.vue`, And handle the switch language process.


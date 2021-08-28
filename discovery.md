# Reddit Clone

Create a client-side Reddit clone using Angular 9 or newer.

## Instructions

This exercise should take between 2-4 hours – Style your application so it looks as polished as possible within a reasonable amount of time.
Please deploy it publicly and give us the URL (preferred) or you can send us the project through a .zip file. Please include a README.md to help us run it locally.

1. Given a "listing" endpoint to the reddit API (https://www.reddit.com/dev/api), display a list of reddit listings with the thumbnail and title.

2. Possible endpoints can be [hot, new, random, top] or anything you like. An example URL would be http://www.reddit.com/r/lakers/new.json

3. This list should be paginated so that 10 listings appear on each page. Conditional Next, Back buttons.

4. Clicking on one of the rows should take the user to a separate view/component with the comments for that listing.

Bonus:

- utilize TypeScript's typing
- utilize RxJS
- utilize state management( RxJs, NgRx)
- error handling
- loading animations
- Using a CSS framework ( Bootstrap 4+, Material, etc. )

## Required Features

1. App

   - Navbar (low priority)
   - Listing
     - List posts:
       - https://www.reddit.com/dev/api#listings
       - after, before, limit (10), count(x = update in each request for # items already fetched), show
         - response should include after to pass to the next request, and list of items (data.children[any])
   - Link (prefix type: t3)
     - Data: {id: string, title: string, thumbnail: string, thumbnail_height: number, thumbnail_width: number, }
     - On click, open modal for Link component
     - List comments for the Link
       - Comments listing
         - Comment component (prefix type: t1)
           - Data: {_double check_}
           - GET [/r/subreddit]/comments/article
           - Q: How deep do I go to retrive a comment tree? Do I just get the first level of comments?
     - On exit, exit modal back to Post Listing
   - Sort by endpoint [hot, new, random, top]
     - On click, sort by listing option (make endpoint call to available options)
   - Pagination
     - Back Button
       - Get the previous 10 listings
     - Next Button
       - Get the next 10 listings

2. Routing
   - App { path: '', pathMatch: 'full', component: PostsComponent }
   - Modal { path: 'post:id', outlet: 'modal', component: PostComponent }
3. Services
   - listing-service
     - getListing
       -
   - comment-service
     - getCommentsByLinkId

## What it's not:

- Search functionality
- Login/Logout
- Commenting
- Create, delete, update posts
- Thumbs down/up

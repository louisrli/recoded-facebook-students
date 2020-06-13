# Re:Coded Facebook

In this project, we will be writing the Re:Coded Facebook.

It is composed of two parts:

1. A signup page (you write this)
2. [A page to view the members](https://recodedfacebook.web.app/facebook) (I wrote this)

## Learning Goals

- Practice open-endedness and debugging
- Learn to authenticate a user using Firebase Auth Google Account sign-in
- Learn to use React Bootstrap (if you haven't already)
- Generate billions of dollars (50-50 between me...and Ammar. We'll buy each of
  you a döner when we sell, to thank you for your hard work)

## Requirements

The signup page should work as follows.

### Technology

- Firebase
- React Bootstrap

### Form fields

There are exactly four items.

Please use React Bootstrap to implement this form. The package has been
installed for you already. You are expected to read the React Bootstrap
documentation (not to be confused with normal bootstrap).

1. A login with Google button.
2. A text box for city
3. A text box for profile ("I'm a really cool guy")
4. A submit button

(2) and (3) are fairly straight forward. (1) and (4) are further explained below.

#### Google Button

- There is an image in the code directory for the Google Button. This image
  should be used as the button. You may want to review learn.co or look up how
  to use an image in React.
- When clicked, it should use Firebase Auth in order to retrieve the information
  about this Google account. Some of this information will be used in a later
  step (see _Submit Button_). I'm being intentionally vague about the fields
  that you have to use; you will have to inspect the post-authentication output
  yourself.

#### Submit Button

The Firebase Database, which only I can see, accepts the following fields.

- `city`: The value in the "city" form field.
- `name`: The value in the "user" form field.
- `userId`: The unique user ID (available via Google. Please don't make a user
  ID yourself).
- `imageUrl`: The Google profile picture of the image (available via Google).

Please read these field names very carefully, as Firebase will crash if you try
to insert any fields that you didn't specify.

### Optional

If the user is logged in with Google, hide the Google button and show their email.

### Submission

Please create a REPL or a **private** Github repository. Please send Ammar and I
the link at the beginning of the first working session.

## Appendix

### The Rules

As mentioned previously in class, the purpose of this exercise is to challenge
our ability to tackle ambiguity and strengthen our individual coding skills.
While certainly there is a feeling of satisfaction from completion, no one will
judge you on whether you do or don't complete this activity over the many
sessions that we do in class.

I realize these are fairly strict rules, but you will have to give some trust to
Ammar and I as your instructors when we emphasize the importance of being able
to operate individually in coding.

- **No asking a human questions on how to fix something.** The only exception is
  in the first class if you have some setup issues on your machine; for some
  reason the app is not running.
- **No sharing of code.** No one should ever see your code (valuable
  intellectual property) unless both people have completed the activity.
- **No sharing of approaches.** There should be no discussion about how someone
  did this or that, unless both people have completed the activity.

### Finishing Early

If you finish early, you will be given Github access to the super secret,
proprietary, once-in-a-millenium implementation of the Re:Coded Facebook itself,
and you may work as you desire on styling it (though if multiple people finish
you will have to find a way to collaborate on features without stepping on each
other).

Please note that we will be reviewing all code that gets proposed below via PR,
but there will be no hand-holding for implementation. So, if you
make a plan, please make sure that is the right plan (otherwise, you'll have to
scrap your code).

More than one person may work on a feature, and you do not have to work
together, but you will need to figure out how to divide the work so merge
conflicts don't go too badly (this is good practice for working in a team).

Starred ones are the most difficult.

#### Styling
Make the Facebook look better (but please keep the general card format). You may
want to do this in very small increments and pull requests ([small pull
requests](https://essenceofcode.com/2019/10/29/the-art-of-small-pull-requests/),
by the way, are an essential practice when working with a team).

#### Comments\*

* On the profile of another user, each user is allowed to leave exactly one
  comment.
* Each user may leave exactly one private comment and one public comment.
* Private comments are only visible to the authenticated user associated with
  the Facebook entry. Private comments are viewable by everyone.
* To be clear about the cardinalities here, I am allowed to leave exactly `2N`
  comments (if I comment on my own profile) on Facebook.

You will want to think about how you enforce that exactly one comment exists in
each category.

#### Reacts
Implement reactions (similar to reactions in Facebook messages). Again, a user
may only leave at most one react on another user.

#### Editing
Let each user edit their profile and city from the Facebook page (but only theirs!).

#### Editing: Image Upload\*
Allow a user to upload a custom image for themselves from the editing UI made
above. This image should be a maximum of 1MB. As a super-added bonus, you can
try to compress it on the client-side.

#### Nav bar and about page
Make a nav bar that goes to an about page or the Facebook page.

#### Global drag-and-drop\*
Let anyone who visits the page drag-and-drop the users in any order, such that
it is saved globally in the database. You will also want to think about how to
handle race conditions here.

#### Your ideas
We're open to more suggestions for ideas.

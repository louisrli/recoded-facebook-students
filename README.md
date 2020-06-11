# Re:Coded Facebook

In this project, we will be writing the Re:Coded Facebook.

It is composed of two parts:

1. A signup page (you write this)
2. [A page to view the members](https://recodedfacebook.web.app/facebook) (I wrote this)

## Learning Goals

- Practice open-endedness and debugging
- Learn to authenticate a user using Firebase Auth Google Account sign-in
- Learn to use React Bootstrap (if you haven't already)
- Generate billions of dollars (50-50 between me...and Ammar. We'll buy each of you a döner when we sell, to thank you for your hard work)

## Requirements

The signup page should work as follows.

### Technology

- Firebase
- React Bootstrap

### Form fields

There are exactly four items.

Please use React Bootstrap to implement this form. The package has been installed for you already. You are expected to read the React Bootstrap documentation (not to be confused with normal bootstrap).

1. A login with Google button.
2. A text box for city
3. A text box for profile ("I'm a really cool guy")
4. A submit button

(2) and (3) are fairly straight forward. (1) and (4) are further explained below.

#### Google Button

- There is an image in the code directory for the Google Button. This image should be used as the button. You may want to review learn.co or look up how to use an image in React.
- When clicked, it should use Firebase Auth in order to retrieve the information about this Google account. Some of this information will be used in a later step (see _Submit Button_). I'm being intentionally vague about the fields that you have to use; you will have to inspect the post-authentication output yourself.

#### Submit Button

The Firebase Database, which only I can see, accepts the following fields. The document ID should be the ID of the user. THe collection name is `profiles`.

- `city`: The value in the "city" form field.
- `name`: The name in Google for the account
- `userId`: The unique user ID (available via Google. Please don't make a user ID yourself).
- `imageUrl`: The Google profile picture of the image (available via Google).
- `profile`: The value of the profile form field

Please read these field names very carefully, as Firebase will crash if you try to insert any fields that you didn't specify.

### Optional

If the user is logged in with Google, hide the Google button and show their email.

### Submission

Please create a REPL or a **private** Github repository. Please send Ammar and I the link at the beginning of the first working session.

### Finishing Early

If you finish early, you will be given Github access to the super secret, proprietary, once-in-a-millenium implementation of the Re:Coded Facebook itself, and you may work as you desire on styling it (though if multiple people finish you will have to find a way to collaborate on features without stepping on each other).

## Appendix

### The Rules

As mentioned previously in class, the purpose of this exercise is to challenge our ability to tackle ambiguity and strengthen our individual coding skills. While certainly there is a feeling of satisfaction from completion, no one will judge you on whether you do or don't complete this activity over the many sessions that we do in class.

I realize these are fairly strict rules, but you will have to give some trust to Ammar and I as your instructors when we emphasize the importance of being able to operate individually in coding.

- **No asking a human questions on how to fix something.** The only exception is in the first class if you have some setup issues on your machine; for some reason the app is not running.
- **No sharing of code.** No one should ever see your code (valuable intellectual property) unless both people have completed the activity.
- **No sharing of approaches.** There should be no discussion about how someone did this or that, unless both people have completed the activity.

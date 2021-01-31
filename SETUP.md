# Setting up a local dev environment

To begin with, clone this repository on your local machine.
```bash
$ git clone https://github.com/AliabbasMerchant/SecureNotes.git
$ cd SecureNotes
```

The folder has 2 subfolders, server and client. Install the dependencies in both these folders.
```bash
$ cd server
$ npm i
$ cd ../client
$ npm i
```

> Note: We have used npm throughout, but feel free to use yarn as well.

Once the dependencies have been setup, the front-end and backend can be started by :
```bash
$ npm run dev
```

## Filing a Pull Request

To file a pull request, create a fork of this repository and add it as an upstream remote in your local copy.

To fork this repository, click on the **Fork** button on the top right of your screen.

Then,
```bash
$ cd SecureNotes
$ git remote add upstream https://github.com/{your_username}/SecureNotes.git
```

To work on a feature/ bug, create a branch and start working.
```bash
$ git checkout -b feature_branch
```

Contribute your changes, and push this code to upstream.
```bash
$ git add .
$ git commit -m "Awesome new feature"
$ git push upstream feature_branch
```

Create a pull request next!

## Testing

The folders contain tests that will be run by a Continuous Integration pipeline, so we can trace any regression failures almost immediately. However, it is upto the developers to keep the test suite up to date with whatever they've worked on.

Whenever you create a new route with a controller, make sure that you test that route properly. Continuous Improvement will only make the test suite more robust and quickly amenable to future changes.
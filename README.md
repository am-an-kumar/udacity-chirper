# React Boilerplate

## Table of Contents

- [Introduction](#introduction)

- [Overview](#overview)

- [Dependencies](#dependencies)
- [Getting Started](#getting_started)

- [Contributing](#contributing)

## Introduction

This is a basic react boilerplate setup. It is good for use when you are getting started, or are creating something for yourself and want more control on config and want to see how it all works. But for production, use something more standard like [create-react-app](https://www.npmjs.com/package/create-react-app)

## Overview

Following npm scripts are configured:

- dev - starts a local development server
- dev:hot - starts a local development server and enables hot reload. Useful when you don't want to loose state due to full page refresh on making changes
- build - creates a dist folder for deployment. By default, following files are present: - index.html - has base markup - app_bundle.js - generated bundle. Won't contain react or react-dom code, cause the config will put the cdn links for these in index.html - report.html - html report on contribution of different packages on overall bundle size
  If your codebase has code-splitting, multiple bundles will be generated
- format - formats the codebase. Uses prettier for it. To adjust formatting styles according to you, edit .prettierrc
- lint - checks codebase for linting errors. Uses eslint for it. To adjust, edit .eslintrc.json
- deploy - useful if you want to deploy to github static pages. Can be used to host web apps without any backend. To deploy: - Make sure that package.json has homepage set to your remote repo url - Execute npm run build - Execute npm run deploy
- test - echoes "Error: no test specified" and exits. Modify it to run test script

## Dependencies

Check package.json for details. Only basic dependencies are added. For dev dependencies, most of the things are covered. Add the ones you need

## Getting_Started

- Edit src/components to develop an application
- Edit src/css/ to style an application
- While making commits, by default formatting and linting checks will be run and on any error, a commit won't succeed. There are few ways around it: - Edit .prettierrc and .eslintrc.json according to your development style - Bypass it by executing 'git commit --message "your message" --no-verify' - Remove pre-commit hook for husky from package.json

## Contributing

I built this project just to get familiar with the way in which React tooling works. The project is complete with all desired functionalities and there are no known bugs. There can always be new features like using loaders to convert images to .webp and so on. Add those if you need it. Feel free to use it.

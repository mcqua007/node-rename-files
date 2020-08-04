#!/usr/bin/env/ node
// index.js

console.log('Hello World ')

const { readdirSync, rename } = require('fs')
const { resolve, path } = require('path')
const args = require('yargs').argv

// Get path to directory
const dirPath = resolve(__dirname, 'images')

// Get an array of the files inside the folder
const files = readdirSync(dirPath)

// Loop through each file that was retrieved
files.forEach((file) => {
    const oldPath = dirPath + `/${file}`

    // lowercasing the filename
    const newPath = dirPath + `/${file.replace(/_\d+/g, 'images')}`
    console.log('new-path', newPath)

    // Rename file
    rename(oldPath, newPath, (err) => console.log(err))
})


# stealthcap.js

This script captures name and email on your page in the background after user entry.

The idea is to obtain this info even if the user doesn't explicitly submit the form.

Ethics are up to you :japanese_ogre:

## Usage

1. Edit the `stealthcap.js` script to listen on and validate the fields applicable to you.
2. Obfuscate, minify, and change the filename of `stealthcap.js`. (Optional but recommended!)
3. Set up an endpoint to accept and log the POST request data that comes out of this script.
4. Load jQuery on your webpage before this script.
5. Load this script.

## Proof of concept

You can serve the contents of this repo locally and proxy that traffic to get a feel for the script.

The POC page has two fields - first name then email.


# stealthcap.js

This script captures name and email on your page after user entry.

The idea is to obtain this info even if the user doesn't explicitly submit the form.

## Usage

Edit the variables at the top of `stealthcap-gen.py` then run the script to generate your custom, obfuscated, minified Javascript.

You will need to load jQuery before this script, in your web app. 

## Proof of concept

You can serve the contents of `\poc` locally and proxy that traffic to get a feel for the script.

The proof of concept page has two fields - first name then email.

1. Script fires after user types one of these sequences in the email field - `.com`, `.net`, `.org`
2. Regex runs a more thorough check that verifies a valid email was entered in that field
3. There's also an assertion that at least two alphabetic characters are in the first name field
4. If those conditions are met, an HTTP request fires in the background to endpoint `localhost/leadcap1`


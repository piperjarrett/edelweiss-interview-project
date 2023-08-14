# Edelweiss Interview Project

## Prompt

Edelweiss developer interview project

Please create a simple “catalog viewer” page based on the data found here. You can copy/paste
this address in your browser’s URL address bar to view the JSON:
https://api.edelweiss.plus/api/v2/catalogs/3843/products?productProperties=images

Project requirements

For each “product” in the “catalog” retrieved, please display the name, author, “jacket cover” image and anything else you’d like to add. This is an example of one of the jacket cover images found in the data noted above: https://edel-images.azureedge.net/ea/OO/images/jacket_covers/original/1000000007_5bbee.jpg

Technical requirements

- Please use the data from the address above. You can simply copy/paste the data into a file if you’d like. If you try to “fetch” the data from the browser, you will encounter a CORS error.
- Please use React.

The final product does not need to be extremely polished. Please spend no more than 2 hours on this! Thank you.

This is the only part of the interview process where you will be asked to produce code.

## Setup

Once you have cloned the repo, change into the directory and install the project dependencies. `Run npm install` to install project dependencies.

Run `npm start` in the terminal to see the page running in your browser on `http://localhost:3000/`.

## Thought Process / Assumptions

I began the process by sketching an architecture diagram on paper, aiming to determine the optimal way to present the data. After finalizing the flow, I assessed the dataset and identified several adjustments that were necessary:

- Implemented error handling for 404 image URIs.
- Introduced placeholder images for any missing URIs.
- Eliminated duplicate entries of 'products' from the dataset.
- Modified the author's name format to adhere to first name followed by last name (e.g., John Doe).

# portfolio
Welcome to my personal website, which showcases my technical projects!
While the product is still under construction, this README will contain my
notes about site content

Link to Figma: https://www.figma.com/file/9mzJRGXIDeZFfta7FfY6sd/Patrin-Portfolio-Website?node-id=0%3A1

#### Things to add:
- Visual theme for the site (follow Wave's scheme for now)
- List of projects (maybe they'll be card format or something)
- Navbar?
- Home page with project list
- Short "About" section with an introduction
- Short "Skills" section where I go over the languages I know, probably in a stylized bullet list. I can also go over notable projects I've done with the language?
- Should I have a work experience section?
- Github Link to this site
- LinkedIn and email

#### List of projects
Each project should have a short blurb describing the project, my contribution to it, and the technologies used.
- Capstone project (Wave). Link the portfolio website and the github. Consider linking the demo youtube video, and the Figma designs
- Info 340 project (the asynchronous debate game). Link the website and the github from the info340 repository
- Ask the magic conch. Link the website link and Kiran's github repo
- TelEpi
- Grocery app from Info 448? LOL idk but its worth a try


#### CURRENTLY WORKING ON:
I'm currently working to change  all information in ProjectCard to be provided as arguments. You can see my progress in ProjectCard.js and ProjectList.js

Right now I am stuck trying to figure out how to pass the project description to Project Card--the issue is that my project descriptions have line breaks in them. Because I pass in the argument as a string, those line breaks are lost.

Possible solutions:
- The `description` argument gets passed in as a `<p>` html tag, as opposed to being a string
- The `description` argument is given an array of strings, where each index is a single paragraph. That way the paragraphs can be rendered in separate `<p>` tags. This is probably the path I will take. 

#### Known issues:
- I seem to have forgotten how to use `img` tags properly when using `require`. I've been sourcing them by importing the img as a variable. 
- I need an actual favicon to replace the current placeholder
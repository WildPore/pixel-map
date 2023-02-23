# Project Status
This project is educational, I'm learning how to actually complete stuff, as well as making it all on my own (well mostly). Right now you can't really generate meaningful pixel maps.

Right now I would like to get the project back to the point where the user can generate a bunch of pretty rectangles and get a nice little PNG of them.

## Features (and their status)
- Generate beautiful, customizable pixel maps at any specific dimension you desire!
 - Generating a bunch of rectangles is possible, but further discoveries will have to be made in order to allow users to also perform things like customizing their color, their actual dimensions on the exported image, etc.
- Save and resume working on several walls
 - Not at all implemented, I need to probably implement all of the dummy stuff first for that. (Like how would it actually look.)
 - Need to look at React-typical ways of saving, I'm assuming it's the LocalStorage stuff really.
- Share links that take people to your built wall
 - Planning on figuring out how to generate base64 representations of the data, then that will be the share URL
 - It would be a really great strech goal to figure out how to manage that on the backend, but that should come after the first version of the project is released.

# Pixel Mapping tool

A pixel map is a reference for VJs to use to correctly map output from their VJing software to and LED video wall (or whatever other kind of video display, a projector, etc.).

This project intends to be a simple tool that can produce pixel maps and let users download them for reference at a build.

## Technical Details

- Applying React skills from the course, "The Joy of React"
  - TODO Add the link to the course
  - Learning how to use Styled Components to make beautiful (not really) websites!
- Learning how to use the Canvas API, since that is how the images are generated
- Practicing design skills

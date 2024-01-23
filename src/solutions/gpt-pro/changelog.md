## What's new on GPTPro ?
 

### Note : 
Output returned by the function gives the expected markdown format. The output of your function may or may not match the expected output, but as long as it can produce markdown output in the proper format, it is considered correct.

- For detailed explanation please refer the comments above.

### Approach : 
Here we can follow a step-by-step approach:
- Start building the basic format of the release notes document with a placeholder for Version Number which can be filled once we know it.
- Then write the Introduction section by first providing a warm and engaging welcome to the new version. This will set positive expectations for the users.
- The goal of the Introduction is to provide a brief and clear explanation of the notable changes in the update in non-technical language.
- In the Introduction:
  - Assume that the product is a software.
  - The first sentence should be engaging and establish that the update adds significant value to the product.
  - Try and focus on enhancements, changes related to user experience or new features which the users can take advantage of.
  - Try and provide a brief summary of the changes added which will be elaborated on in more detail in the next section.
- Next, write the Bugs and Features list. As the provided list is in HTML formatted list, we can make use of BeautifulSoup library here to extract the text from each element.
- We should start building the list by first mentioning the number and title of the sub-heading.
- Then add the various items in the list as bullet-points.
- The order in items is irrelevant. Bugs and Features can be clubbed into one section too, but it is always better to keep them separate.
- Finally, we should concatenate all the sections together with appropriate formatting for a final markdown text.

### To do :
- Complete the function **generate_release_notes(html_list:str, version:str) -> str** to generate the release notes in markdown format as per the given HTML formatted string list of bugs and features.
- Input will be html colon formatted string of list of bugs and features, a string representing the version number.
- Output will be a markdown format string.

**Examples**


### Constraints:
- The input HTML list provided will always be in the correct format.

### Note :
- Here we can either use the various string manipulations in-built in python or can make use of regex to extract the necessary info from the given string. I prefer using regex here. We need to install the beautifulsoup4, and markdown libraries for proper function working.

- Here we can see that for output we are getting the expected markdown format. The output of your function may or may not match the expected output, but as long as it can produce markdown output in the proper format, it is considered correct.<|im_end|>

# Getting Started with CSS

website: https://gettingstartedwith.css.education/index.html
finished portfolio: https://gettingstartedwith.css.education/portfolio/index.html
codepen snippets: https://codepen.io/collection/adObmY?cursor=eyJwYWdlIjo1fQ==

In this course, we'll build a single-page portfolio website.

codepen, vs code , github pages,
light dark theme,

color palette selection from adobe express: https://color.adobe.com/explore

## concepts:

- css mobile first approach
- css grid
- centering elements
- responsive images: object-fit, object-position

## Resources

- portfolio content tips: https://docs.google.com/document/d/1D8jbwHegkmxopPcPBbvtAPEzJ_O0KEl4dmAL00BL81o/edit?tab=t.0
- https://frontendmasters.com/courses/getting-a-job-v3/

## notes:

- the vertical margins of adjacent elements collapse. This means that if you have two elements with vertical margins, the larger of the two margins will be used instead of adding them together. For example, if one element has a margin-bottom of 20px and the next element has a margin-top of 30px, the total vertical space between them will be 30px, not 50px.
- the horizontal margins of adjacent elements do not collapse. This means that if you have two elements with horizontal margins, the total horizontal space between them will be the sum of their margins. For example, if one element has a margin-left of 20px and the next element has a margin-right of 30px, the total horizontal space between them will be 50px.
- eg: h1, h2 inbuilt margins when used 1 after another, the larger margin will be used instead of adding them together. So if h1 has a margin-bottom of 20px and h2 has a margin-top of 30px, the total vertical space between them will be 30px, not 50px. This is because the vertical margins of adjacent elements collapse, and only the larger margin is applied.

- use of calc() for font size for responsive design, eg: font-size: calc(16px + 1vw); This means that the font size will be 16 pixels plus 1% of the viewport width. As the viewport width changes, the font size will adjust accordingly, making it responsive to different screen sizes.

- rem: The rem unit stands for "root em" and is relative to the font size of the root element (usually the <html> element). For example, if the root element has a font size of 16px, then 1rem will be equal to 16px. If you set an element's font size to 2rem, it will be 32px (2 times the root font size). Using rem units allows for consistent scaling of elements based on the root font size, making it easier to maintain a responsive design.
- em: The em unit is relative to the font size of the parent element. For example, if a parent element has a font size of 16px, then 1em will be equal to 16px. If you set an element's font size to 2em, it will be 32px (2 times the parent font size). Using em units allows for scaling of elements based on their parent, which can be useful for creating nested designs where child elements scale relative to their parents.

q. What does the :root selector represent in CSS?
a. The :root selector in CSS represents the root element of the document, which is typically the <html> element. It is used to define global CSS variables that can be accessed throughout the entire stylesheet. For example, you can define a color variable in the :root selector and then use it in other parts of your CSS to maintain consistency and make it easier to update styles across the site.

q. What does the CSS property max-width: 100% do for images?
a. The CSS property max-width: 100% ensures that an image will not exceed the width of its containing element. If the image is larger than the container, it will scale down to fit within the container while maintaining its aspect ratio. This is particularly useful for making images responsive, as it allows them to adjust their size based on the available space without overflowing or distorting.

q. Why use calc() for font sizing instead of fixed pixel values?
a. Using calc() for font sizing allows for more flexible and responsive designs compared to fixed pixel values. With calc(), you can combine different units (such as pixels, percentages, or viewport units) to create a font size that adjusts based on the screen size or other factors. This means that your text can scale appropriately on different devices, improving readability and user experience. For example, using font-size: calc(16px + 1vw) allows the font size to increase as the viewport width increases, making it more adaptable to various screen sizes.

q. What is the key difference between em and rem units?
a. The key difference between em and rem units is that em is relative to the font size of the parent element, while rem is relative to the font size of the root element (usually the <html> element). This means that using em can lead to compounding effects if nested elements have different font sizes, while rem provides a consistent reference point regardless of nesting. For example, if a parent element has a font size of 16px, then 1em will be equal to 16px for that element, but if you use 1rem, it will always be equal to the root font size, which could be different from the parent element's font size.

q. How can SVG colors be changed in CSS?
a. SVG colors can be changed in CSS by targeting the specific elements within the SVG and applying CSS properties to them. For example, you can use the fill property to change the color of shapes within the SVG, or the stroke property to change the color of lines. You can target these elements using their class or ID attributes, or by using element selectors. For instance, if you have an SVG with a shape that has a class of "my-shape", you can change its color with CSS like this: .my-shape { fill: red; }. This will change the fill color of that shape to red.

- object-fit, object-position: cropping images to fit within a container while maintaining their aspect ratio. For example, if you have an image that is larger than its container, you can use object-fit: cover; to ensure that the image fills the container without distortion, cropping it as necessary. You can also use object-position to specify which part of the image should be visible when it is cropped. For example, object-position: center; will center the image within the container, while object-position: top; will align the top of the image with the top of the container.

q. What CSS properties can be used to crop an image while maintaining its original file size?
a. The CSS properties that can be used to crop an image while maintaining its original file size are object-fit and object-position. The object-fit property allows you to specify how the image should be resized to fit within its container, while the object-position property allows you to specify which part of the image should be visible when it is cropped. For example, using object-fit: cover; will ensure that the image fills the container without distortion, cropping it as necessary, while object-position: center; will center the image within the container. This way, you can achieve a cropped effect without altering the original file size of the image.

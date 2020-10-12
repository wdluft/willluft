---
slug: '/what-i-learned-about-box-shadows'
title: 'What I Learned About Box Shadows'
date: '2020-04-05'
blurb: 'How learning about box shadows elevated my design thinking.'
---

Making box shadows look good has baffled me since I started learning about web development. Whenever I would style a project, I defaulted to having it all flat, because I didn't understand how the box-shadow CSS property worked. Even once I learned the basics of it, I couldn't figure out how to make them look good. Since I was redesigning my personal portfolio site (<a href='https://willluft.com' rel="noopener noreferrer" target='_blank'>WillLuft.com</a>), I really wanted to figure out how to add them in to make it look like it had different levels. To do that, I started by diving deep into learning all the effects.
</br>
</br>
The `box-shadow` property can take up to six different values:
</br>
</br>

- `box-shadow: x-offset y-offset blur-radius spread-radius color;`
- Inset (optional) - changes the shadow to be drawn inside the border
- X-Offset - negative values shift the shadow to the left, positive values shift the shadow to the right. Keeping the x-offset at 0 keeps it centered
- Y-Offset - negative values shift the shadow up, positive values shift the shadow down. Keeping the y-offset at 0 keeps it centered
- Blur-Radius (optional) - the lower the blur-radius, the sharper the shadow. A blur-radius of 0 will make the shadow look like a border. Can only be positive values.
- Spread-radius (optional) - sets how large the shadow is. Keeping a spread-radius of 0 sets it to the same size as the blur-radius. Can be positive or negative.
- Color - the color of the shadow

</br>
What was really confusion for me was the difference between the blur-radius and spread-radius. For whatever reason, I struggled to understand how they were different and how they changed what the shadow looked like. It was only after watching a YouTube video that explained how you should replace "spread-radius" in your mind with "size" that I started to get a better understanding of it.
</br>
</br>
The next set of lessons was from reading the book <a href='https://refactoringui.com/' rel="noopener noreferrer" target='_blank'>Refactoring UI</a>, written by Adam Wathan and Steve Schoger. There's an entire chapter on learning about shadows that really helped me level up my designs. It showed how multiple shadows and be added to an element to make it look either raised off the page or inset. To make something appear raised off the page, you add a lighter shadow on top and a darker shadow underneath as if the light source is coming from above. And to make something appear inset, you have a darker, inset shadow on top and a lighter inset shadow on the bottom.
</br>
</br>
Another small thing to create better shadows in to include multiple. A smaller, darker one, and then a larger, lighter one. This more accurately mimics real life because the closer to an object the shadow is, the darker it gets.
</br>
</br>
All these little tricks really helped elevate the design on my website. I'm really happy with how it came out and I'm looking forward to implementing more shadows in my design going forward.

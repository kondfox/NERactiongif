---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# miért ne?

 {% for reaction in site.data.reactions %}
 {{ reaction. title }}  
 <img src="/images/{{ reaction.image }}" title="{{ reaction. title }}" alt="{{ reaction. title }}" width=300>
 {% endfor %}
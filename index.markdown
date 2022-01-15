---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

 {% for reaction in site.data.reactions %}
 
### {{ reaction. title }}  
 
 <img src="{{ site.baseurl }}/images/{{ reaction.image }}" title="{{ reaction. title }}" alt="{{ reaction. title }}" width=300>
  {% capture  img_url %}{{ site.url }}{{ site.baseurl }}/images/{{ reaction.image }}{% endcapture %}
  <input class="urlshow" type="text" readonly="true" data-clipboard-text="{{img_url}}" value="{{img_url}}">
  <button title="Copy link" onclick="navigator.clipboard.writeText('{{img_url}}')"><i class="fas fa-link"></i></button>
  <button title="Copy image" onclick="navigator.clipboard.writeText('{{img_url}}')"><i class="fas fa-copy"></i></button>
 {% endfor %}
---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="quote--container">
    <div class="quote-flex-grid">
    <div class="quote-col">
        <img src="{{ '/images/quote_image_singularity.png' | relative_url }}" width=360>
    </div>
    <div class="quote-col">
    <p class="quote">
            De ennél izgalmasabb az az elképzelés, hogy egy technológiai szintlépés, a Fideszes Kommentelő 2.0 létrejöttének tanúi vagyunk, akinek már abszolút nem lesz szüksége külső megerősítésekre és ingerekre, a kormány által kitalált narratívát képes lesz egymaga felvetni, erről párbeszédet folytatni és a végén konklúzióra is jutni.
        </p>
        <p class="quote--author">&ndash; <a href="https://444.hu/2022/01/12/itt-a-fideszes-influenszer-szingularitas-kovacs-zoltan-profilja-mar-kovacs-zoltan-posztja-ala-kommentel-egyetertoleg" title="Itt a fideszes influenszer-szingularitás: Kovács Zoltán profilja már Kovács Zoltán posztja alá kommentel egyetértőleg" target="_blank">444.hu</a></p></div>
    </div>
</div>
{% for reaction in site.data.reactions %}
 
### {{ reaction. title }}  
 
 <img class="reaction-img" src="{{ site.baseurl }}/images/{{ reaction.image }}" title="{{ reaction. title }}" alt="{{ reaction. title }}" width=360>
  {% capture  img_url %}{{ site.url }}{{ site.baseurl }}/images/{{ reaction.image }}{% endcapture %}
  <input class="urltext" type="text" readonly="true" data-clipboard-text="{{img_url}}" value="{{img_url}}">
  <button title="Copy link" onclick="navigator.clipboard.writeText('{{img_url}}')"><i class="fas fa-link"></i></button>
  <button title="Copy image" onclick="navigator.clipboard.writeText('{{img_url}}')"><i class="fas fa-copy"></i></button>
{% endfor %}
---
layout: page
namespace: about
title: titles.about
permalink: /about/
---
<!-- Adds links to other languages on the post
<div align="right">
    {% for lang in site.languages %}
    {% unless site.lang == lang %}
        <a href="{% tl {{ page.namespace }} {{ lang }} %}" >{% t langs.{{ lang }} %}</a>

        {% assign next = forloop.index | plus: 1 %}

        {% if forloop.last != true and site.languages[forloop.index] != site.lang or site.languages[forloop.index] == site.lang and next < forloop.length %}
        <span class="separator"> &bull; </span>
        {% endif %}

    {% endunless %}
    {% endfor %}
</div>
-->

{% tf pages/about.md %}

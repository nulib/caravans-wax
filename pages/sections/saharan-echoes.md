---
layout: page
title: Saharan Echoes
permalink: /sections/saharan-echoes/
---

<div class="card">

  <img class="img-fluid" src="/img/man_on_camel.png" alt="Man on a Camel">

</div>


{% assign items = site.caravans | where:"section","Saharan Echoes" %}

<ul class="list-unstyled">

{% for item in items %}


  <li class="media mb-5">

    <img class="mr-3 mt-5" src="/img/derivatives/simple/{{ item.pid }}/thumbnail.jpg" alt="{{ item.object_name }}">

    <div class="media-body">

      <h3>{{ item.object_name }}</h3>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>

    </div>

  </li>

{% endfor %}

</ul>

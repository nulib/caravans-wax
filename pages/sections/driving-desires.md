---
layout: page
title: Driving Desires
permalink: /sections/driving-desires/
---

{% assign items = site.caravans | where:"section","Driving Desires" %}

{% for item in items %}

  <div class="card mb-3">

    <img src="/img/derivatives/simple/{{ item.pid }}/thumbnail.jpg" style="height: auto; width: 250px; margin:auto;">

    <div class="card-body">

      <h3 class="card-title">{{ item.object_name }}</h3>
      <p class="card-text">{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-primary">View Object</a>
    </div>

  </div>

{% endfor %}

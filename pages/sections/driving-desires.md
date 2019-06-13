---
layout: page
title: Driving Desires
permalink: /sections/driving-desires/
---

<div class="card">

  <div class="card-body">

    <h3 class="card-title">Salt Slabs from the Sahara Desert</h3>

  </div>

  <img class="card-img-bottom" src="/img/derivatives/simple/obj_23/full.jpg" alt="Salt Slabs from the Sahara Desert">

</div>


{% assign items = site.caravans | where:"section","Driving Desires" %}

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

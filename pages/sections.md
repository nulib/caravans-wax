---
layout: page
title: Browse by Sections
permalink: /browse-by-sections/
---

### Saharan Echoes

{% assign items = site.objects | where:"section","Saharan Echoes" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Saharan Frontiers: Sijilmasa

{% assign items = site.objects | where:"section","Saharan Frontiers/Sijilmasa" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Saharan Frontiers: Connecting Trade to the Niger River

{% assign items = site.objects | where:"section","Saharan Frontiers/Inland Niger Delta" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Saharan Frontiers: Tadmekka

{% assign items = site.objects | where:"section","Saharan Frontiers/Tadmekka" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Saharan Frontiers: Gao

{% assign items = site.objects | where:"section","Saharan Frontiers/Gao" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Saharan Frontiers: Connecting Trade to the Niger River

{% assign items = site.objects | where:"section","Saharan Frontiers/Inland Niger Delta" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Saharan Frontiers: The Movement of Language, People, and Ideas

{% assign items = site.objects | where:"section","Saharan Frontiers/Spread of Ideas" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Driving Desires

{% assign items = site.objects | where:"section","Driving Desires" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

### Shifting Away from the Sahara

{% assign items = site.objects | where:"section","Shifting Away from the Sahara" %}

<ul class="list-unstyled">
{% for item in items %}
  <li class="media mb-5">
    <img class="mr-3 mt-5" src="/img/objects/{{ item.pid }}_small.webp" alt="{{ item.object_name }}">
    <div class="media-body">
      <h4 class="text-muted">{{ item.object_name }}</h4>
      <p>{{ item.label }}</p>
      <a href="{{ item.url }}" class="btn btn-dark">View Object</a>
    </div>
  </li>
{% endfor %}
</ul>

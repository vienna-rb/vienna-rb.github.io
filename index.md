---
layout: default
---

## Join the Vienna Ruby Community

<p>Are you passionate about <strong>Ruby</strong> and <strong>Ruby on Rails</strong>? Join the <strong>Vienna Ruby User Group</strong>, a thriving community of <strong>developers, engineers, and entrepreneurs</strong> who love Ruby!</p>

<p>We meet <strong>quarterly</strong> to:</p>

<ul class="checklist">
  <li>Learn about the latest <strong>Ruby trends and frameworks</strong></li>
  <li>Hear engaging talks from <strong>developers of all experience levels</strong></li>
  <li>Connect and collaborate with friendly <strong>Ruby developers in Vienna</strong></li>
</ul>

<div class="gallery">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/images/gallery/' %}
      <img src="{{ file.path | relative_url }}" alt="">
    {% endif %}
  {% endfor %}
</div>

<p>Whether you're a beginner, hobbyist, or seasoned pro, this is the perfect place to <strong>connect, learn, and grow</strong>.</p>

<div class="qr">
  <a href="https://www.meetup.com/vienna-rb">
    <picture>
      <source srcset="/assets/images/qr-code-w256.webp" media="(min-width: 768px)">
      <img src="/assets/images/qr-code-w192.webp" width="192" height="192" alt="QR Code for Vienna.rb Meetup">
    </picture>
  </a>
</div>

<p>Join the fun on <a href="https://www.meetup.com/vienna-rb/">Meetup.com</a> to RSVP for our latest event, or follow us on <a href="https://x.com/viennarb">X</a> and <a href="https://bsky.app/profile/ruby.wien">Bluesky</a> to stay updated.</p>
<p>Have a topic in mind? <strong>We’d love to hear your talk!</strong> Everybody is welcome to join and share!</p>

## Sponsors

<p> A huge thank you to our <strong>amazing sponsors</strong> for supporting Vienna’s Ruby community! Your generosity makes these meetups possible ❤️.</p>

<div class="sponsors">
  <a href="https://rubycentral.org/" >
    <img src="/assets/images/sponsors/ruby-central.webp" alt="Ruby Central logo" />
  </a>
  <a href="https://www.fastly.com/" >
    <img src="/assets/images/sponsors/fastly.webp" alt="fastly logo" />
  </a>
  <a href="https://platogo.com/" >
    <img src="/assets/images/sponsors/platogo.webp" alt="platogo logo" />
  </a>
  <a href="https://meisterlabs.com/" >
    <img src="/assets/images/sponsors/meister.webp" alt="meister logo" />
  </a>
</div>

<p>Interested in sponsoring? Join us in shaping the future of <strong>Ruby in Vienna</strong>!</p>

## The Team

Vienna.rb is organized by a team of volunteers. It is made possible by countless contributors who give talks and engage in the meetup 🤗

<div class="team">
  <div class="member">
    <img src="/assets/images/team/hans.webp" alt="" />
    <h3>Hans</h3>
  </div>

  <div class="member">
    <img src="/assets/images/team/carmen.webp" alt="" />
    <h3>Carmen</h3>
  </div>

  <div class="member">
    <img src="/assets/images/team/grzegorz.webp" alt="" />
    <h3>Grzegorz</h3>
  </div>
</div>

---
layout: page
title: PDQ
description: Proof-Driven Querying
img: assets/img/4.jpg
importance: 1
category: logic and databases
github: https://github.com/ProofDrivenQuerying/pdq
---

Java engine to support querying remote distributed data sources under different access patterns (e.g., web services) and database constraints (e.g., inclusion dependencies). The engine has been demoed on multiple scenarios, including querying biological data available via web services.

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:journals/sigmod/BenediktCGGTMO22]* %}
  {% bibliography -f papers -q @*[key=DBLP:series/synthesis/2016Benedikt]* %}
  {% bibliography -f papers -q @*[key=DBLP:journals/tods/BenediktCT16]* %}
  {% bibliography -f papers -q @*[key=DBLP:conf/ijcai/BenediktLT16]* %}
  {% bibliography -f papers -q @*[key=DBLP:journals/pvldb/BenediktLT15]* %}
  {% bibliography -f papers -q @*[key=DBLP:journals/pvldb/BenediktLT14]* %}
</div>

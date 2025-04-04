---
layout: page
title: ChaseGoal
description: Query Answering Over Knowledge Graphs Using First-Order Theories
img: assets/img/4.jpg
importance: 1
category: query answering over knowledge bases
github: https://krr-nas.cs.ox.ac.uk/2024/goal-driven-QA/
---

Technique to support sound and complete query answering over knowledge graphs under Datalog rules with existential quantification and equalities. 
ChaseGoal <strong>outperforms by several orders of magnitude in terms of runtime and memory</strong> query answering under the commercial engine <a href="https://www.oxfordsemantic.tech/rdfox/">RDFox</a>, making the difference between answering a query in a few seconds or not being able to process the query at all.

## Repository
<a href="https://krr-nas.cs.ox.ac.uk/2024/goal-driven-QA/">Goal Driven QA</a>

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:conf/aaai/BenediktMT18]* %}
  {% bibliography -f papers -q @*[key=DBLP:conf/pods/BenediktKMMPST17]* %}
</div>

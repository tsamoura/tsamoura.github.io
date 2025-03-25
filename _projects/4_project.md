---
layout: page
title: vProbLog
description: Probabilistic Reasoning Under the Possible World Semantics
img: assets/img/4.jpg
importance: 1
category: reasoning
github: https://bitbucket.org/tsamoura/vproblog/src/master/
---

First efficient C++ engine to support sound and complete query answering over probabilistic knowledge graphs using Datalog rules under the 
<a href="https://link.springer.com/book/10.1007/978-3-031-01879-4/">distribution semantics</a>.
vProbLog was the first engine to outperform the state-of-the-art engine 
using Datalog rules under the 
<a href="https://www.sciencedirect.com/science/article/pii/S0888613X16300949/">ProbLog2</a>
by several orders of magnitude in terms of runtime, making the difference between answering a query in a few seconds or not being able to process the query at all. vProbLog relies on the notion of 
<a href="https://dl.acm.org/doi/10.1145/1265530.1265535">provenance semirings</a> to enable probabilistic reasoning and database optimization techniques to speed up reasoning. 

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:conf/aaai/TsamouraGK20]* %}
</div>

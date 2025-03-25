---
layout: page
title: Lineage Trigger Graphs
description: Probabilistic Reasoning Under the Possible World Semantics
img: assets/img/4.jpg
importance: 2
category: reasoning
github: https://github.com/karmaresearch/glog
---


C++ engine to support sound and complete query answering over probabilistic knowledge graphs using Datalog rules under the <a href="https://link.springer.com/book/10.1007/978-3-031-01879-4">distribution semantics</a>. 
Lineage Trigger Graphs (LTGs) is an extension of Trigger Graphs. 
LTGs substantially outperforms engines, such as 
<a href="https://www.sciencedirect.com/science/article/pii/S0888613X16300949">ProbLog2</a>,
<a href="https://ojs.aaai.org/index.php/AAAI/article/view/6591">vProbLog</a>, and
<a href="https://www.cis.upenn.edu/~mhnaik/papers/neurips21.pdf">Scallop</a>,
both in terms of runtime and memory overhead, even without approximations. 
The technology behind LTGs extends the notion of 
<a href="https://openproceedings.org/ICDT/2014/paper_36.pdf">provenance circuits</a>.
LTGs can be deployed on mobile phones 
under the Android NDK for reasoning that runs exclusively on-device.
LTGs offers a 
<a href="https://github.com/karmaresearch/glog-python">Python API</a>.
<a href="https://github.com/karmaresearch/ltgs">Here</a>
are further instructions and scripts to reproduce the experiments in 
<a href="https://dl.acm.org/doi/abs/10.1145/3588719">SIGMOD 2023</a>. 
LTGs can be applied to on-device visual question answering and outperforms 
<a href="https://aclanthology.org/D19-1514/">LXMERT</a> and
<a href="https://cricvqa.github.io/">RVC</a> on the
<a href="https://proceedings.neurips.cc/paper/2021/hash/d367eef13f90793bd8121e2f675f0dc2-Abstract.html">VQAR benchmark</a>.
In addition, its <a href="https://github.com/karmaresearch/glog-python">Python API</a> offers easy integration with foundational models.

## Repository
<a href="https://github.com/karmaresearch/glog">GLog</a>

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:conf/aaai/TsamouraGK20]* %}
  {% bibliography -f papers -q @*[key=DBLP:journals/pacmmod/TsamouraLU23]* %}
</div>

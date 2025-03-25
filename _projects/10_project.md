---
layout: page
title: PRISM
description: Rule Mining Using Structural Motifs
img: assets/img/4.jpg
importance: 1
category: rule mining
github: https://github.com/jonathanfeldstein/PRISM
---

Mining rules from relational data is a key problem in AI. The basis of rule mining is mining repeating data patterns, known as structural motifs. Despite the importance of mining ``good" structural motifs, the problem was not well understood. PRISM is the first principled technique for mining structural motifs for learning languages that blend first-order logic with probabilistic models. PRISM is implemented in C++ and can improve over state-of-the-art rule mining techniques, namely
<a href="https://dl.acm.org/doi/10.5555/3104322.3104393">LSM</a> and
<a href="https://link.springer.com/article/10.1007/s10994-011-5244-9">BOOSTR</a>, by up to 6% in terms of accuracy and up to 80\% in terms of runtime.
PRISM has been the basis for developing <a href="https://arxiv.org/abs/2409.16238">STECTRUM</a>, an even more efficient C++ rule mining technique that scales to databases of million facts. Furthermore, SPECTRUM outperforms on the most well-known benchmarks, such as <a href="https://ojs.aaai.org/index.php/AAAI/article/view/11573">WN18RR</a> and <a href="https://aclanthology.org/W15-4007">FB15K-237</a> state-of-the-art rule mining techniques for entity linking, such as <a href="https://link.springer.com/chapter/10.1007/978-3-030-49461-2_3">AMIE3</a>, <a href="https://openreview.net/forum?id=tGZu6DlbreV">RNNLogic</a>, and <a href=" https://openreview.net/forum?id=F8VKQyDgRVj">NCRL</a>, by up to x100 in terms of runtime, while running exclusively on CPU.

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:conf/aaai/FeldsteinPT23]* %}
  {% bibliography -f papers -q @*[key=feldstein2025efficientlylearningprobabilisticlogical]* %}
</div>

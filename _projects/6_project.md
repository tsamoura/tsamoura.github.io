---
layout: page
title: Trigger Graphs
description: Reasoning Over Billions of Triples Under Datalog
img: assets/img/4.jpg
importance: 1
category: reasoning
github: https://github.com/karmaresearch/glog
---


C++ engine to support sound and reason over knowledge graphs using Datalog rules with existentials. GLog, the Trigger Graphs engine, outperforms commercial and open-source engines, such as 
<a href="https://ojs.aaai.org/index.php/AAAI/article/view/9993">VLog</a>,
<a href="https://www.oxfordsemantic.tech/rdfox">RDFox</a>,
<a href="https://www.vldb.org/pvldb/vol11/p975-bellomarini.pdf">Vadalog</a>,
<a href="https://link.springer.com/chapter/10.1007/978-3-642-13486-9_15">WebPIE</a>, and 
<a href="https://dl.acm.org/doi/abs/10.14778/2904121.2904123">Inferray</a>, by several orders of magnitude in terms of runtime, while incurring the same or less main memory overhead. 
Regarding RDFox, GLog substantially outperform it in terms of time and memory efficiency despite the fact that GLog reason using a single thread only: <strong>in on-device reasoning, GLog is more than 18x faster (1s vs 18.7s) than RDFox when RDFox uses 1 thread, and up to 6x faster (1s vs 6s) when RDFox uses 16 thread</strong>. Furthermore, the memory requirements of GLog are usually lower than those of RDFox. In terms of scalability, <strong>GLog allows materializing
knowledge graphs with 17B facts in less than 40 min using a single
machine with commodity hardware</strong>. 
Other knowledge graphs in which GLog outperforms the state-of-the-art are 
<a href="https://dl.acm.org/doi/10.1145/3034786.3034796">ChaseBench</a>,
<a href="https://dl.acm.org/doi/10.1016/j.websem.2005.06.005">LUBM</a>,
<a href="https://link.springer.com/chapter/10.1007/11762256_12">UODBM</a>,
<a href="https://www.sciencedirect.com/science/article/abs/pii/S1570826809000225">DBpedia</a>,
<a href="https://dh-abstracts.library.virginia.edu/works/1312">Claros</a>,
<a href="https://pubmed.ncbi.nlm.nih.gov/31691815/">Reactome</a>, and
<a href="https://www.sciencedirect.com/science/article/pii/S0004370212000719">Yago</a>.

GLog can be deployed on mobile phones 
under the Android NDK for reasoning running exclusively on-device. 

## Repository
<a href="https://github.com/karmaresearch/glog">GLog</a>

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=DBLP:journals/pvldb/TsamouraCMU21]* %}
  {% bibliography -f papers -q @*[key=DBLP:conf/pods/BenediktKMMPST17]* %}
</div>

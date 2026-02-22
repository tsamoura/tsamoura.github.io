---
layout: page
title: Embeddings as Probabilistic Equivalence
description: Neurosymbolic Learning Under New Semantics for Probabilistic Logic Programming
img: assets/img/4.jpg
importance: 1
category: neurosymbolic learning
github: https://github.com/ML-KULeuven/equality_reasoning
---

The integration of logic programs with embedding models resulted in a class of
neurosymbolic frameworks that jointly learn symbolic rules and representations
for the symbols in the logic. The key idea that enabled
this integration was the differentiable relaxation of unification, the algorithm for
variable instantiation during inference in logic programs. However, as we show, soft unification has
undesirable side effects in learning and inference. 

To alleviate those side effects,
we are the first to revamp the well-known possible world semantics of probabilistic
logic programs into new semantics called equivalence semantics. In our semantics,
a probabilistic logic program induces a probability distribution over all possible
equivalence relations between symbols, instead of a probability distribution over
all possible subsets of probabilistic facts. 
We propose both exact and approximate techniques for reasoning
in our semantics. Experiments on well-known benchmarks show that the equiva-
lence semantics leads to neurosymbolic models with up to <strong>42%</strong> higher results than
the <a href="https://papers.nips.cc/paper_files/paper/2017/file/b2ab001909a8a6f04b51920306046ce5-Paper.pdf">Neural Theorem Prover (NTP)</a>, 
the <a href="https://proceedings.mlr.press/v119/minervini20a/minervini20a.pdf">Greedy Neural Theorem Prover (GNTP)</a>, the <a href="https://proceedings.mlr.press/v119/minervini20a/minervini20a.pdf">Conditional Theorem Prover (CTP)</a>, and <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/bf215fa7fe70a38c5e967e59c44a99d0-Paper-Conference.pdf">DeepSoftLog</a>.



## Repository
<a href="https://github.com/ML-KULeuven/equality_reasoning">Python Library for Neurosymbolic Learning Under the Equivalence Semantics</a> 

## Relevant publications
<div class="publications">
  {% bibliography -f papers -q @*[key=NeurIPS2025b]* %}
</div>

+++
title = "Yet Another Zero Knowledge Benchmark Report"
description = "version 2024.05.09"
date = 2024-05-07T08:00:00+00:00
updated = 2024-05-07T08:00:00+00:00
sort_by = "weight"
weight = 4
draft = false

[extra]
class = "page single"
+++

<div style="text-align: center;">
  <img src="/imgs/yazkb/yazkb.webp" alt="yazkb" title="yazkb" />
</div>

## Changelog

- 2024.05.09: more thoughts in conclusion.
- 2024.05.08: The sha2 task has been added and benched.
- 2024.05.07: first version released.

## Introduction

The YAZKB (Yet Another Zero Knowledge Benchmark) project aims to offer an end-to-end, cutting-edge, production-focused and interdisciplinary perspective for ZK (Zero Knowledge) performance and engineering.

## Highlight

1. Timestamp versioning

   We maintain a timely and rhythmic update. You just got how far the benchmark is from the bleeding edge by above timestamp based version number.

2. Comprehensive

   We don't cherry-pick benches and control group that are good for a particular product. The full range of zk systems, including kinds of ZK libraries, frameworks, and virtual machines, will be evaluated in the benchmark, in the sense of end-to-end.

3. Frontier

   The author has a long experience in the forefront of technologies, such as DB, AI and languages. It is hoped that the ZK systems could be chosen to represent different tech forefronts. And, the chosen ZK systems could be reviewed at the tech frontier as well.

4. Insight

   We have in-depth analysis and beautiful tables. You are not looking at an eye-catching title party, the author hopes to provide continuous efforts for the development of the ZK community.

   The suggestion has been proposed in this report based on the benchmark results.

## ZKs

<div id="objects_table" style="width: 100%;height: 300px;"></div>
<script src="objects.js" defer></script>
<br/>
<p align="center">Tab.1 Benchmark objects</p>

This benchmark is the first project to compare halo2, risc0 and sp1. These ZK systems are very different from the technical perspective, but from the point of end usage, they are comparable.

The usage of halo2 and its background tech SNARK was very popular yesterday in ZK and blockchain. However, obviously, the official github project is no longer actively developed, so we will call it "maintenance" status for now. There are a lot of issues with no working or feedback, which is terrible. From the engineering perspective, this project is not recommended.

\*\* for halo2, I actually use tweaked library like [halo2-ce](https://github.com/halo2-ce/halo2) or [halo2-lib](https://github.com/axiom-crypto/halo2-lib), although they are in "maintenance" as well.

In contrast, the two zkvm projects are evolving rapidly and can already handle a large number of scenarios, but whether they have reached production level requires careful evaluation and auditing. On the other hand, rapid iteration brings instability in usage, and experienced engineers are needed to maintain the application well.

## Tasks

<div id="task_table" style="width: 100%;height: 200px;"></div>
<script src="tasks.js" defer></script>
<br/>
<p align="center">Tab.2 Benchmark task list</p>

A series of end-to-end tasks from simple to complex have been proposed to comprehensively evaluate the main aspects of the subjects. This tasks set allows for a detailed evaluation of different layers in a ZK system, ensuring that the benchmark captures real-world production performance, rather than unpractical micro-benchmarks.

Currently, the task fibonacci and sha2 have been benched. More bench tasks are in consideration and coming soon.

## Hardware

<div id="hardware_table" style="width: 100%;height: 200px;"></div>
<script src="hardware.js" defer></script>
<br/>
<p align="center">Tab.3 Hardware environment</p>

In the first release, the above modern medium x86 box is used to align with most client environments. But it is expected to expand to high-end, low-end, or even heterogeneous hardwares soon.

## Measurement

All benchmark tasks have 2 passes:

1. first pass: warmup running
2. second pass: bench running

In the second pass, we only run one shot of bench running rather than a hot loop. But we run at least 5 times for all tasks to use the best results as the final results.

It is hoped that the measurement can be closer to real-world production. Because:

1. in the production, one specified proving and verifying are not re-run in a hot loop. This makes no sense.
2. local SSD IO is measured and included in the results. In the production, IO is one part of end-to-end case in that the proof is expected to be sent to many 3rd verifiers. Generally speaking, IO is not the bottleneck. And our local IO is much faster than common network IO.

## Results

<div id="benchmark_results" style="width: 100%;height: 600px;"></div>
<script src="results.js" defer></script>
<br/>
<p align="center">Tab.4 Benchmark results - run time</p>

#### Task - fibonacci

Here, the parameter of fibonacci task here is the upper bound of loop counter. In other words, the larger the parameter, the larger the circuit scale.

From the run time table of the fibonacci task, it is great to get:

1. The halo2/halo2-lib has obvious performance advantages in all parameters or circuit scales and in both proving and verifying. The disadvantage of halo2 is that the threshold for developing circuits is relatively high.

2. The proving speedup of halo2 to that of two zkvm is very high, like 10x to 200x, in small circuit scales (parameter <= 1000), but only several times , like 6x, in big circuit scales (parameter >= 10000).

   When the circuit scale becomes large enough, the performance gap between zkvm and halo2 is narrowing. 

   It can be reasonably assumed that if STARK continues to make algorithmic and hardware optimizations, such as the recent Circle STARK algorithm and the upcoming GPU benchmark, STARK may soon be able to compete with Halo2 on large-scale circuits.

3. The verifying speedup of halo2 to that of two zkvms are high but limited. Halo 2's constant verifying time is impressive, although the verifying times of two zkvms are also fast in absolute time, especially, for risc0.

   When the circuit scale is not too large, a stable saturation phenomenon has been shown. This should be attributed to the computational background overhead of the VM. These overheads are likely to decrease as the two projects continue to develop. Let's wait and see.

4. As ZKVM, there is a certain degree of competition between RISC0 and SP1. And the current benched version of risc0 is not latest enough like that of sp1. I am happy to continue updating and following the evolution of both.

#### Task - sha2

Here, the parameter of sha2 task here is the byte length of input strings/bytes. The larger the parameter may still mean the larger the circuit scale. 

1. For proving time, sp1 wins in this task. halo2 is 2x slower, and risc0 is 20x slower in the worst case. For verifying time, risc0 still wins, but not too much in large parameter case.

2. In halo2 side, I can not find a suitable implementation in halo2-lib, so I tweak the source from halo2-ce to allow dynamic input length.

   On the surface, halo2 is only 2 times slower than sp1, but in fact, halo2's `ParamsIPA::new` is 2 orders of magnitude slower than its proving and verifying, but this call is not included in the performance results, which is a bit ridiculous. In short, if both pk and vk are generated dynamically, halo2 (or say halo2-ce) is the slowest and basically doesn't work on strings which length is around 100kB or more. (I will continue to pay attention to this issue.)

3. sp1 has best proving run time, smooth transition curve and great balance between proving and verifying. When the length of input strings becomes long, the proving time of risc0 is orders of magnitude slower.

## Conclusion

As a user of ZK technology, 
1. if you pursue the best performance in some simple task, you can still consider halo2. 

2. however, if you accept the balance between development and performance, ZKVM way can already enter your trial zone. I suggest you pay attention to and try the new zkvm paradigm, which is very likely to replace the existing SNARK-based ecosystem in the future. 

3. Currently, sp1 is the most balanced ZKVM. However, this does not mean risc0 has no chance. In fact, the toolchain of sp1 is simply modified from that of risc0. The main work of sp1 is its different ZK backend. risc0 is the originator of RISC VM based ZK proving system(at least for production-level implementation). It has stronger control over the whole stack. sp1 outsources major components to different open source dependencies. This is smart, but also limits its ceiling, in that if the main works are outside, its competitors can easily get them, too.

4. Current ZKVMs has big improvement space in performance. The API needs to be further stabilized, the VM execution efficiency is still low, and the GPU support is still relatively rudimentary. But I believe that this year of ZKVM will be very different.


## One more thing

More complex end-to-end benchmark tasks and GPU benchmark results are coming soon. Stay tuned!

Thank you for following [YAZKB](https://github.com/mjzk/yazkb) and my blog, it is hoped to bring you more and latest ZK and blockchain practices.
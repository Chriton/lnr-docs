---
sidebar_position: 1
---

# Introduction

![Linagee_logo](/img/linagee-banner.jpg)

## Let's put dapps (websites) on the ethereum blockchain

# How does this work?

This works by embedding website data into calldata on the Ethereum blockchain. To create a functional dapp, all the CSS, JS and HTML for the dapp is embedded into a single HTML file. This file is then gzipped and uploaded to the blockchain. Any item uploaded is called an asset.

Assets are stored on the blockchain as gzipped data and accessed by their transaction hash and the keccak256 hash of the uncompressed asset data. To access the data directly, we use a long web address that looks like this

````code
derp://0xa725844db15f47cfb979c3d71071b9bc58c8534289c391a89a7eb8787a5bec02/0xaed9ac8797981170d20879074b6b58c63d12092ad41f47eabd39896814de5197
````

## Why derp://

DERP is an acronym: <code>Decentralized Ethereum Routing Protocol</code>

## How are domains attached to assets?

Owners of .og domains can update routing information to map their domain name to an asset on the ethereum network.

## How expensive it is?

It would be if we didnt reuse code! Since websites often use the same libraries, 
we can save a lot of data by uploading reusable assets and accessing them. 
Essentially we are turning calldata on ethereum into a CDN.